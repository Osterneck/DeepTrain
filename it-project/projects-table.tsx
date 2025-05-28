import { FC, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Search } from "lucide-react";
import { usePagination } from "@/hooks/use-pagination";
import { cn } from "@/lib/utils";

interface Project {
  id: string;
  name: string;
  manager: string;
  startDate: string;
  endDate: string;
  status: 'On Schedule' | 'At Risk' | 'Completed';
}

interface ProjectsTableProps {
  isLoading: boolean;
}

// Default projects data
const defaultProjects: Project[] = [
  {
    id: '1',
    name: 'ERP System Upgrade',
    manager: 'Emily Chen',
    startDate: '2025-01-15',
    endDate: '2025-08-30',
    status: 'On Schedule'
  },
  {
    id: '2',
    name: 'Cloud Migration',
    manager: 'Michael Johnson',
    startDate: '2025-01-10',
    endDate: '2025-07-15',
    status: 'At Risk'
  },
  {
    id: '3',
    name: 'Mobile App Development',
    manager: 'Sarah Williams',
    startDate: '2025-02-22',
    endDate: '2025-11-30',
    status: 'On Schedule'
  },
  {
    id: '4',
    name: 'Data Warehouse Implementation',
    manager: 'David Rodriguez',
    startDate: '2025-02-18',
    endDate: '2025-08-05',
    status: 'On Schedule'
  },
  {
    id: '5',
    name: 'Network Infrastructure Upgrade',
    manager: 'Jessica Thompson',
    startDate: '2025-02-10',
    endDate: '2025-10-15',
    status: 'At Risk'
  }
];

const ITProjectsTable: FC<ProjectsTableProps> = ({ isLoading }) => {
  // State for search, sorting, and filtered projects
  const [searchQuery, setSearchQuery] = useState("");
  const [sortField, setSortField] = useState<keyof Project>("name");
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  
  // Filter and sort projects
  const filteredProjects = defaultProjects
    .filter(project => 
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.manager.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      const fieldA = a[sortField];
      const fieldB = b[sortField];
      
      if (typeof fieldA === 'string' && typeof fieldB === 'string') {
        return sortDirection === 'asc' 
          ? fieldA.localeCompare(fieldB) 
          : fieldB.localeCompare(fieldA);
      }
      return 0;
    });
  
  // Pagination logic
  const { 
    currentPage, 
    totalPages, 
    currentItems, 
    goToPage, 
    nextPage, 
    prevPage, 
    pageNumbers
  } = usePagination(filteredProjects, 5);
  
  // Sort toggle handler
  const handleSort = (field: keyof Project) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };
  
  // Handle view details
  const handleViewDetails = (projectId: string) => {
    console.log(`Viewing details for project with ID: ${projectId}`);
  };

  // Function to render status badge with appropriate color
  const renderStatusBadge = (status: string) => {
    let colorClass = "";
    
    switch(status) {
      case "On Schedule":
        colorClass = "bg-success bg-opacity-20 text-success-dark";
        break;
      case "At Risk":
        colorClass = "bg-warning bg-opacity-20 text-warning-dark";
        break;
      case "Completed":
        colorClass = "bg-primary bg-opacity-20 text-primary-dark";
        break;
      default:
        colorClass = "bg-neutral-light text-neutral-dark";
    }
    
    return (
      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${colorClass}`}>
        {status}
      </span>
    );
  };

  return (
    <section className="pb-6">
      <div className="container mx-auto px-4">
        <Card className="border border-neutral-light overflow-hidden">
          <div className="p-4 border-b border-neutral-light flex justify-between items-center">
            <h2 className="text-lg font-semibold">Project Schedule</h2>
            <div className="relative">
              <Input
                type="text"
                placeholder="Search projects..."
                className="pl-9 pr-4 py-2"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute left-3 top-2.5 text-neutral-medium">
                <Search className="h-4 w-4" />
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th 
                    scope="col" 
                    className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider cursor-pointer hover:bg-neutral-light"
                    onClick={() => handleSort("name")}
                  >
                    <div className="flex items-center">
                      Project Name
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3 w-3 ml-1 opacity-50"
                      >
                        <path d="m7 15 5 5 5-5" />
                        <path d="m7 9 5-5 5 5" />
                      </svg>
                    </div>
                  </th>
                  <th 
                    scope="col" 
                    className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider cursor-pointer hover:bg-neutral-light"
                    onClick={() => handleSort("manager")}
                  >
                    <div className="flex items-center">
                      Project Manager
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3 w-3 ml-1 opacity-50"
                      >
                        <path d="m7 15 5 5 5-5" />
                        <path d="m7 9 5-5 5 5" />
                      </svg>
                    </div>
                  </th>
                  <th 
                    scope="col" 
                    className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider cursor-pointer hover:bg-neutral-light"
                    onClick={() => handleSort("startDate")}
                  >
                    <div className="flex items-center">
                      Start Date
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3 w-3 ml-1 opacity-50"
                      >
                        <path d="m7 15 5 5 5-5" />
                        <path d="m7 9 5-5 5 5" />
                      </svg>
                    </div>
                  </th>
                  <th 
                    scope="col" 
                    className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider cursor-pointer hover:bg-neutral-light"
                    onClick={() => handleSort("endDate")}
                  >
                    <div className="flex items-center">
                      End Date
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3 w-3 ml-1 opacity-50"
                      >
                        <path d="m7 15 5 5 5-5" />
                        <path d="m7 9 5-5 5 5" />
                      </svg>
                    </div>
                  </th>
                  <th 
                    scope="col" 
                    className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider cursor-pointer hover:bg-neutral-light"
                    onClick={() => handleSort("status")}
                  >
                    <div className="flex items-center">
                      Status
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3 w-3 ml-1 opacity-50"
                      >
                        <path d="m7 15 5 5 5-5" />
                        <path d="m7 9 5-5 5 5" />
                      </svg>
                    </div>
                  </th>
                  <th 
                    scope="col" 
                    className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  // Loading skeleton
                  [...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Skeleton className="h-5 w-40" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Skeleton className="h-5 w-32" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Skeleton className="h-5 w-24" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Skeleton className="h-5 w-24" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Skeleton className="h-5 w-24" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Skeleton className="h-5 w-24" />
                      </td>
                    </tr>
                  ))
                ) : (
                  // Actual data
                  currentItems.map((project) => (
                    <tr key={project.id} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">
                        {project.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-dark">
                        {project.manager}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-dark">
                        {project.startDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-dark">
                        {project.endDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {renderStatusBadge(project.status)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary font-medium">
                        <button 
                          className="hover:text-secondary-dark"
                          onClick={() => handleViewDetails(project.id)}
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          
          {/* Table Footer with Pagination */}
          <div className="px-6 py-3 border-t border-neutral-light flex items-center justify-between">
            <div className="text-sm text-neutral-medium">
              Showing {filteredProjects.length > 0 ? 1 + (currentPage - 1) * 5 : 0} to {Math.min(filteredProjects.length, currentPage * 5)} of {filteredProjects.length} projects
            </div>
            
            <div className="flex items-center space-x-2">
              <Button
                size="icon"
                variant="outline"
                className="pagination-button"
                disabled={currentPage === 1}
                onClick={prevPage}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </Button>
              
              {pageNumbers.map(pageNum => (
                pageNum === -1 || pageNum === -2 ? (
                  <span key={`ellipsis-${pageNum}`} className="pagination-button flex items-center justify-center text-neutral-medium">...</span>
                ) : (
                  <Button
                    key={pageNum}
                    size="icon"
                    variant={currentPage === pageNum ? "default" : "outline"}
                    className="pagination-button"
                    onClick={() => goToPage(pageNum)}
                  >
                    {pageNum}
                  </Button>
                )
              ))}
              
              <Button
                size="icon"
                variant="outline"
                className="pagination-button"
                disabled={currentPage === totalPages}
                onClick={nextPage}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ITProjectsTable;