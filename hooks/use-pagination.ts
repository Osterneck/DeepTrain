import { useState, useMemo } from 'react';

interface PaginationResult<T> {
  currentPage: number;
  totalPages: number;
  currentItems: T[];
  goToPage: (page: number) => void;
  nextPage: () => void;
  prevPage: () => void;
  pageNumbers: number[];
}

export function usePagination<T>(
  items: T[],
  itemsPerPage: number,
  initialPage = 1
): PaginationResult<T> {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const totalPages = Math.max(1, Math.ceil(items.length / itemsPerPage));

  // Ensure current page is within valid range
  const safeCurrentPage = Math.min(Math.max(1, currentPage), totalPages);
  if (safeCurrentPage !== currentPage) {
    setCurrentPage(safeCurrentPage);
  }

  // Get current items for the page
  const currentItems = useMemo(() => {
    const startIndex = (safeCurrentPage - 1) * itemsPerPage;
    return items.slice(startIndex, startIndex + itemsPerPage);
  }, [items, safeCurrentPage, itemsPerPage]);

  // Navigation functions
  const goToPage = (page: number) => {
    setCurrentPage(Math.min(Math.max(1, page), totalPages));
  };

  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  // Generate page numbers to display (showing at most 5 pages with ellipsis if needed)
  const pageNumbers = useMemo(() => {
    const pages: number[] = [];
    
    if (totalPages <= 5) {
      // Show all pages if 5 or fewer
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always include first page
      pages.push(1);
      
      // Calculate middle pages
      let start = Math.max(2, safeCurrentPage - 1);
      let end = Math.min(totalPages - 1, safeCurrentPage + 1);
      
      // Adjust if we're near the beginning or end
      if (safeCurrentPage <= 3) {
        end = 4;
      } else if (safeCurrentPage >= totalPages - 2) {
        start = totalPages - 3;
      }
      
      // Add ellipsis if needed
      if (start > 2) {
        pages.push(-1); // Use -1 to represent ellipsis
      }
      
      // Add middle pages
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      
      // Add ellipsis if needed
      if (end < totalPages - 1) {
        pages.push(-2); // Use -2 to represent ellipsis
      }
      
      // Always include last page
      pages.push(totalPages);
    }
    
    return pages;
  }, [safeCurrentPage, totalPages]);

  return {
    currentPage: safeCurrentPage,
    totalPages,
    currentItems,
    goToPage,
    nextPage,
    prevPage,
    pageNumbers,
  };
}
