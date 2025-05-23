import { FC, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Search } from "lucide-react";
import { usePagination } from "@/hooks/use-pagination";
import { cn } from "@/lib/utils";

interface Disease {
  id: string;
  name: string;
  cases: number;
  region: string;
  trend: 'Static' | 'Rising' | 'Declining' | 'Seasonal';
  alertLevel: 'Low' | 'Moderate' | 'High';
}

interface DiseaseTableProps {
  isLoading: boolean;
}

// Default diseases data
const defaultDiseases: Disease[] = [
  {
    id: '1',
    name: 'Seasonal Influenza',
    cases: 336,
    region: 'Statewide',
    trend: 'Static',
    alertLevel: 'Moderate'
  },
  {
    id: '2',
    name: 'COVID-19 Variant XBB',
    cases: 247,
    region: 'Northern Counties',
    trend: 'Rising',
    alertLevel: 'High'
  },
  {
    id: '3',
    name: 'E. coli Outbreak',
    cases: 58,
    region: 'Central Region',
    trend: 'Declining',
    alertLevel: 'Moderate'
  },
  {
    id: '4',
    name: 'West Nile Virus',
    cases: 23,
    region: 'Southern Counties',
    trend: 'Seasonal',
    alertLevel: 'Low'
  },
  {
    id: '5',
    name: 'Measles',
    cases: 12,
    region: 'Eastern Counties',
    trend: 'Rising',
    alertLevel: 'High'
  }
];

const DiseaseTable: FC<DiseaseTableProps> = ({ isLoading }) => {
  // State for search, sorting, and filtered diseases
  const [searchQuery, setSearchQuery] = useState("");
  const [sortField, setSortField] = useState<keyof Disease>("cases");
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  
  // Filter and sort diseases
  const filteredDiseases = defaultDiseases
    .filter(disease => 
      disease.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      disease.region.toLowerCase().includes(searchQuery.toLowerCase())
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
  } = usePagination(filteredDiseases, 5);
  
  // Sort toggle handler
  const handleSort = (field: keyof Disease) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection(field === 'cases' ? 'desc' : 'asc');
    }
  };
  
  // Handle view details
  const handleViewDetails = (diseaseId: string) => {
    console.log(`Viewing details for disease with ID: ${diseaseId}`);
  };

  // Function to render trend icon
  const renderTrendIcon = (trend: string) => {
    switch(trend) {
      case "Rising":
        return (
          <div className="flex items-center text-danger">
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
            {trend}
          </div>
        );
      case "Declining":
        return (
          <div className="flex items-center text-success">
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
            {trend}
          </div>
        );
      case "Static":
        return (
          <div className="flex items-center text-neutral-dark">
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
              <path d="M8 12h8" />
            </svg>
            {trend}
          </div>
        );
      case "Seasonal":
        return (
          <div className="flex items-center text-warning">
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
              <path d="M8 18L12 14L16 18" />
              <path d="M8 6L12 10L16 6" />
            </svg>
            {trend}
          </div>
        );
      default:
        return trend;
    }
  };

  // Function to render alert level badge with appropriate color
  const renderAlertBadge = (alertLevel: string) => {
    let colorClass = "";
    
    switch(alertLevel) {
      case "Low":
        colorClass = "bg-success bg-opacity-20 text-success-dark";
        break;
      case "Moderate":
        colorClass = "bg-warning bg-opacity-20 text-warning-dark";
        break;
      case "High":
        colorClass = "bg-danger bg-opacity-20 text-danger-dark";
        break;
      default:
        colorClass = "bg-neutral-light text-neutral-dark";
    }
    
    return (
      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${colorClass}`}>
        {alertLevel}
      </span>
    );
  };

  return (
    <section className="pb-6">
      <div className="container mx-auto px-4">
        <Card className="border border-neutral-light overflow-hidden">
          <div className="p-4 border-b border-neutral-light flex justify-between items-center">
            <h2 className="text-lg font-semibold">Disease Surveillance Dashboard</h2>
            <div className="relative">
              <Input
                type="text"
                placeholder="Search diseases..."
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
                      Disease Name
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
                    onClick={() => handleSort("cases")}
                  >
                    <div className="flex items-center">
                      Cases
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
                    onClick={() => handleSort("trend")}
                  >
                    <div className="flex items-center">
                      Trend
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
                    onClick={() => handleSort("alertLevel")}
                  >
                    <div className="flex items-center">
                      Alert Level
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
                        <Skeleton className="h-5 w-12" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Skeleton className="h-5 w-32" />
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
                  currentItems.map((disease) => (
                    <tr key={disease.id} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">
                        {disease.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-dark">
                        {disease.cases}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-dark">
                        {disease.region}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {renderTrendIcon(disease.trend)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {renderAlertBadge(disease.alertLevel)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary font-medium">
                        <button 
                          className="hover:text-secondary-dark"
                          onClick={() => handleViewDetails(disease.id)}
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
              Showing {filteredDiseases.length > 0 ? 1 + (currentPage - 1) * 5 : 0} to {Math.min(filteredDiseases.length, currentPage * 5)} of {filteredDiseases.length} diseases
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

export default DiseaseTable;