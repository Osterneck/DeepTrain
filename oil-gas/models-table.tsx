import { FC, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Search } from "lucide-react";
import { usePagination } from "@/hooks/use-pagination";
import { cn } from "@/lib/utils";

interface ReservoirModel {
  id: string;
  name: string;
  region: string;
  lastUpdated: string;
  status: 'Active' | 'Pending' | 'Inactive';
  accuracy: number;
}

interface ModelsTableProps {
  isLoading: boolean;
}

// Default models data
const defaultModels: ReservoirModel[] = [
  {
    id: '1',
    name: 'North Sea Basin Model A',
    region: 'North Sea, Norway',
    lastUpdated: '2025-05-19',
    status: 'Active',
    accuracy: 94.2
  },
  {
    id: '2',
    name: 'Gulf of Mexico Deep',
    region: 'Gulf of Mexico, US',
    lastUpdated: '2025-05-19',
    status: 'Active',
    accuracy: 87.5
  },
  {
    id: '3',
    name: 'Permian Basin Model C',
    region: 'Texas, US',
    lastUpdated: '2025-05-19',
    status: 'Pending',
    accuracy: 89.1
  },
  {
    id: '4',
    name: 'Caspian Basin',
    region: 'Kazakhstan',
    lastUpdated: '2025-05-19',
    status: 'Active',
    accuracy: 91.3
  },
  {
    id: '5',
    name: 'Eagle Ford Shale',
    region: 'Texas, US',
    lastUpdated: '2025-05-19',
    status: 'Inactive',
    accuracy: 82.7
  }
];

const OilGasModelsTable: FC<ModelsTableProps> = ({ isLoading }) => {
  // State for search, sorting, and filtered models
  const [searchQuery, setSearchQuery] = useState("");
  const [sortField, setSortField] = useState<keyof ReservoirModel>("name");
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  
  // Filter and sort models
  const filteredModels = defaultModels
    .filter(model => 
      model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      model.region.toLowerCase().includes(searchQuery.toLowerCase())
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
  } = usePagination(filteredModels, 5);
  
  // Sort toggle handler
  const handleSort = (field: keyof ReservoirModel) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };
  
  // Handle model edit
  const handleEditModel = (modelId: string) => {
    console.log(`Editing model with ID: ${modelId}`);
  };

  // Function to render status badge with appropriate color
  const renderStatusBadge = (status: string) => {
    let colorClass = "";
    
    switch(status) {
      case "Active":
        colorClass = "bg-success bg-opacity-20 text-success-dark";
        break;
      case "Pending":
        colorClass = "bg-warning bg-opacity-20 text-warning-dark";
        break;
      case "Inactive":
        colorClass = "bg-danger bg-opacity-20 text-danger-dark";
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
            <h2 className="text-lg font-semibold">Reservoir Models</h2>
            <div className="relative">
              <Input
                type="text"
                placeholder="Search models..."
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
                      Model Name
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
                    onClick={() => handleSort("region")}
                  >
                    <div className="flex items-center">
                      Region
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
                    onClick={() => handleSort("lastUpdated")}
                  >
                    <div className="flex items-center">
                      Last Updated
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
                    className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider cursor-pointer hover:bg-neutral-light"
                    onClick={() => handleSort("accuracy")}
                  >
                    <div className="flex items-center">
                      Accuracy
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
                        <Skeleton className="h-5 w-16" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Skeleton className="h-5 w-12" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Skeleton className="h-5 w-12" />
                      </td>
                    </tr>
                  ))
                ) : (
                  // Actual data
                  currentItems.map((model) => (
                    <tr key={model.id} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">
                        {model.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-dark">
                        {model.region}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-dark">
                        {model.lastUpdated}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {renderStatusBadge(model.status)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        {model.accuracy}%
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary font-medium">
                        <button 
                          className="hover:text-secondary-dark"
                          onClick={() => handleEditModel(model.id)}
                        >
                          Edit
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
              Showing {filteredModels.length > 0 ? 1 + (currentPage - 1) * 5 : 0} to {Math.min(filteredModels.length, currentPage * 5)} of {filteredModels.length} results
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

export default OilGasModelsTable;