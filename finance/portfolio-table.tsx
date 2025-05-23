import { FC, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Search } from "lucide-react";
import { usePagination } from "@/hooks/use-pagination";
import { cn } from "@/lib/utils";

interface PortfolioAsset {
  id: string;
  name: string;
  type: string;
  allocation: number;
  performance: number;
  performanceDirection: 'up' | 'down';
  riskLevel: 'Low' | 'Medium' | 'High';
}

interface PortfolioTableProps {
  isLoading: boolean;
}

// Default portfolio assets data
const defaultAssets: PortfolioAsset[] = [
  {
    id: '1',
    name: 'S&P 500 ETF',
    type: 'Equity ETF',
    allocation: 35,
    performance: 12.4,
    performanceDirection: 'up',
    riskLevel: 'Medium'
  },
  {
    id: '2',
    name: 'US Treasury Bond Fund',
    type: 'Bond Fund',
    allocation: 25,
    performance: 3.2,
    performanceDirection: 'up',
    riskLevel: 'Low'
  },
  {
    id: '3',
    name: 'Global Technology Fund',
    type: 'Sector Fund',
    allocation: 15,
    performance: 18.7,
    performanceDirection: 'up',
    riskLevel: 'High'
  },
  {
    id: '4',
    name: 'Real Estate Investment Trust',
    type: 'REIT',
    allocation: 10,
    performance: 5.8,
    performanceDirection: 'down',
    riskLevel: 'Medium'
  },
  {
    id: '5',
    name: 'Emerging Markets Fund',
    type: 'International',
    allocation: 15,
    performance: 9.3,
    performanceDirection: 'up',
    riskLevel: 'High'
  }
];

const PortfolioTable: FC<PortfolioTableProps> = ({ isLoading }) => {
  // State for search, sorting, and filtered assets
  const [searchQuery, setSearchQuery] = useState("");
  const [sortField, setSortField] = useState<keyof PortfolioAsset>("allocation");
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  
  // Filter and sort assets
  const filteredAssets = defaultAssets
    .filter(asset => 
      asset.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      asset.type.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      const fieldA = a[sortField];
      const fieldB = b[sortField];
      
      if (typeof fieldA === 'string' && typeof fieldB === 'string') {
        return sortDirection === 'asc' 
          ? fieldA.localeCompare(fieldB) 
          : fieldB.localeCompare(fieldA);
      } else if (typeof fieldA === 'number' && typeof fieldB === 'number') {
        return sortDirection === 'asc' 
          ? fieldA - fieldB 
          : fieldB - fieldA;
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
  } = usePagination(filteredAssets, 5);
  
  // Sort toggle handler
  const handleSort = (field: keyof PortfolioAsset) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };
  
  // Handle view details
  const handleViewDetails = (assetId: string) => {
    console.log(`Viewing details for asset with ID: ${assetId}`);
  };

  // Function to render risk level with appropriate color
  const renderRiskLevel = (riskLevel: string) => {
    let colorClass = '';
    
    switch(riskLevel) {
      case 'Low':
        colorClass = 'bg-success bg-opacity-20 text-success-dark';
        break;
      case 'Medium':
        colorClass = 'bg-warning bg-opacity-20 text-warning-dark';
        break;
      case 'High':
        colorClass = 'bg-danger bg-opacity-20 text-danger-dark';
        break;
      default:
        colorClass = 'bg-neutral-light text-neutral-dark';
    }
    
    return (
      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${colorClass}`}>
        {riskLevel}
      </span>
    );
  };

  return (
    <section className="pb-6">
      <div className="container mx-auto px-4">
        <Card className="border border-neutral-light overflow-hidden">
          <div className="p-4 border-b border-neutral-light flex justify-between items-center">
            <h2 className="text-lg font-semibold">Portfolio Assets</h2>
            <div className="relative">
              <Input
                type="text"
                placeholder="Search assets..."
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
                      Asset Name
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
                    onClick={() => handleSort("type")}
                  >
                    <div className="flex items-center">
                      Type
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
                    onClick={() => handleSort("allocation")}
                  >
                    <div className="flex items-center">
                      Allocation
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
                    onClick={() => handleSort("performance")}
                  >
                    <div className="flex items-center">
                      Performance
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
                    onClick={() => handleSort("riskLevel")}
                  >
                    <div className="flex items-center">
                      Risk Level
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
                        <Skeleton className="h-5 w-24" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Skeleton className="h-5 w-12" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Skeleton className="h-5 w-24" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Skeleton className="h-5 w-20" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Skeleton className="h-5 w-24" />
                      </td>
                    </tr>
                  ))
                ) : (
                  // Actual data
                  currentItems.map((asset) => (
                    <tr key={asset.id} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">
                        {asset.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-dark">
                        {asset.type}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-dark">
                        {asset.allocation}%
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <div className={`flex items-center ${asset.performanceDirection === 'up' ? 'text-success' : 'text-danger'}`}>
                          {asset.performanceDirection === 'up' ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-4 w-4 mr-1"
                            >
                              <path d="m18 15-6-6-6 6" />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-4 w-4 mr-1"
                            >
                              <path d="m6 9 6 6 6-6" />
                            </svg>
                          )}
                          {asset.performance}%
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {renderRiskLevel(asset.riskLevel)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary font-medium">
                        <button 
                          className="hover:text-secondary-dark"
                          onClick={() => handleViewDetails(asset.id)}
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
              Showing {filteredAssets.length > 0 ? 1 + (currentPage - 1) * 5 : 0} to {Math.min(filteredAssets.length, currentPage * 5)} of {filteredAssets.length} assets
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

export default PortfolioTable;