import { FC, useState } from "react";
import { formatPercentage, getRiskLevelClass } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Search } from "lucide-react";
import { usePagination } from "@/hooks/use-pagination";

interface Asset {
  id: string;
  name: string;
  type: string;
  allocation: number;
  performance: number;
  performanceDirection: 'up' | 'down';
  riskLevel: 'Low' | 'Medium' | 'High';
}

interface AssetsTableProps {
  isLoading: boolean;
  data?: Asset[];
}

// Default assets data when no data is provided
const defaultAssets: Asset[] = [
  {
    id: '1',
    name: 'Large Cap Growth Fund',
    type: 'Equity',
    allocation: 25,
    performance: 14.2,
    performanceDirection: 'up',
    riskLevel: 'Medium'
  },
  {
    id: '2',
    name: 'Corporate Bond ETF',
    type: 'Fixed Income',
    allocation: 20,
    performance: 6.7,
    performanceDirection: 'up',
    riskLevel: 'Low'
  },
  {
    id: '3',
    name: 'Emerging Markets Index',
    type: 'Equity',
    allocation: 15,
    performance: 2.9,
    performanceDirection: 'down',
    riskLevel: 'High'
  },
  {
    id: '4',
    name: 'Technology Sector Fund',
    type: 'Equity',
    allocation: 18,
    performance: 21.5,
    performanceDirection: 'up',
    riskLevel: 'High'
  },
  {
    id: '5',
    name: 'Treasury Bond Fund',
    type: 'Fixed Income',
    allocation: 22,
    performance: 4.2,
    performanceDirection: 'up',
    riskLevel: 'Low'
  }
];

const AssetsTable: FC<AssetsTableProps> = ({ isLoading, data = defaultAssets }) => {
  // State for search, sorting, and filtered assets
  const [searchQuery, setSearchQuery] = useState("");
  const [sortField, setSortField] = useState<string>("name");
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  
  // Filter and sort assets
  const filteredAssets = data
    .filter(asset => 
      asset.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      asset.type.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      const fieldA = a[sortField as keyof Asset];
      const fieldB = b[sortField as keyof Asset];
      
      if (typeof fieldA === 'string' && typeof fieldB === 'string') {
        return sortDirection === 'asc' 
          ? fieldA.localeCompare(fieldB) 
          : fieldB.localeCompare(fieldA);
      } else {
        return sortDirection === 'asc' 
          ? (fieldA as number) - (fieldB as number) 
          : (fieldB as number) - (fieldA as number);
      }
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
  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };
  
  // Handle asset adjustment
  const handleAdjustAsset = (assetId: string) => {
    console.log(`Adjusting asset with ID: ${assetId}`);
  };

  return (
    <section className="pb-8">
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
                    onClick={() => handleSort('name')}
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
                    onClick={() => handleSort('type')}
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
                    onClick={() => handleSort('allocation')}
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
                    onClick={() => handleSort('performance')}
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
                    onClick={() => handleSort('riskLevel')}
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
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">
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
                        <Skeleton className="h-5 w-20" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Skeleton className="h-5 w-12" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Skeleton className="h-5 w-16" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Skeleton className="h-5 w-16" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Skeleton className="h-5 w-16" />
                      </td>
                    </tr>
                  ))
                ) : (
                  // Actual data
                  currentItems.map((asset) => {
                    const riskClasses = getRiskLevelClass(asset.riskLevel);
                    
                    return (
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
                        <td className={`px-6 py-4 whitespace-nowrap text-sm flex items-center ${asset.performanceDirection === 'up' ? 'text-success' : 'text-danger'}`}>
                          {asset.performanceDirection === 'up' ? '+' : '-'}{Math.abs(asset.performance)}%
                          {asset.performanceDirection === 'up' ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-4 w-4 ml-1"
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
                              className="h-4 w-4 ml-1"
                            >
                              <path d="m6 9 6 6 6-6" />
                            </svg>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${riskClasses.bgClass} ${riskClasses.textClass}`}>
                            {asset.riskLevel}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary font-medium">
                          <button 
                            className="hover:text-secondary-dark"
                            onClick={() => handleAdjustAsset(asset.id)}
                          >
                            Adjust
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
          
          {/* Table Footer with Pagination */}
          <div className="px-6 py-3 border-t border-neutral-light flex items-center justify-between">
            <div className="text-sm text-neutral-medium">
              Showing {Math.min(filteredAssets.length, 1 + (currentPage - 1) * 5)} to {Math.min(filteredAssets.length, currentPage * 5)} of {filteredAssets.length} assets
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
                <Button
                  key={pageNum}
                  size="icon"
                  variant={currentPage === pageNum ? "default" : "outline"}
                  className="pagination-button"
                  onClick={() => goToPage(pageNum)}
                >
                  {pageNum}
                </Button>
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

export default AssetsTable;
