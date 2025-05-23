import { FC, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar
} from "recharts";

interface AnalyticsSectionProps {
  isLoading: boolean;
}

const StateGovAnalyticsSection: FC<AnalyticsSectionProps> = ({ isLoading }) => {
  const [selectedTimePeriod, setSelectedTimePeriod] = useState('1M');
  
  const timePeriodOptions = [
    { label: '1M', value: '1M' },
    { label: '3M', value: '3M' },
    { label: '6M', value: '6M' },
    { label: '1Y', value: '1Y' },
    { label: 'ALL', value: 'ALL' },
  ];

  // Mock data for healthcare facilities
  const facilityData = [
    { name: "County Hospital A", status: "Available", beds: 45, occupancy: 78 },
    { name: "Memorial Hospital", status: "Limited", beds: 120, occupancy: 92 },
    { name: "Regional Medical Center", status: "Critical", beds: 85, occupancy: 97 },
    { name: "Community Hospital", status: "Available", beds: 65, occupancy: 72 },
    { name: "University Hospital", status: "Limited", beds: 250, occupancy: 89 },
  ];

  return (
    <section className="pb-8">
      <div className="container mx-auto px-4">
        <Card className="border border-neutral-light overflow-hidden">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Healthcare Facility Status</h2>
          </div>
          <CardContent className="p-4">
            {isLoading ? (
              <div className="chart-placeholder">
                <Skeleton className="h-40 w-full" />
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-neutral-light">
                  <thead className="bg-neutral-lightest">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">
                        Facility Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">
                        Location
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">
                        Capacity Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">
                        Staff Availability
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-neutral-light">
                    {facilityData.map((facility, index) => (
                      <tr key={index} className="hover:bg-neutral-lightest">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">
                          {facility.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-dark">
                          {index % 2 === 0 ? "Hospital" : "Medical Center"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-dark">
                          {["North Region", "Central District", "South County", "East Region", "West County"][index % 5]}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          {renderCapacityStatus(facility.status)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-dark">
                          {["Normal", "Limited", "Critical"][index % 3]}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary font-medium">
                          <button className="hover:text-secondary-dark">
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

// Helper function to render capacity status badge
const renderCapacityStatus = (status: string) => {
  let colorClass = "";
  switch(status) {
    case "Available":
      colorClass = "bg-success bg-opacity-20 text-success-dark";
      break;
    case "Limited":
      colorClass = "bg-warning bg-opacity-20 text-warning-dark";
      break;
    case "Critical":
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

export default StateGovAnalyticsSection;