import { FC } from "react";
import { formatLargeNumber, formatPercentage } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { DollarSign, BarChart, LineChart } from "lucide-react";

interface MetricProps {
  value: string | number;
  change: {
    value: string | number;
    isPositive: boolean;
  };
}

interface MetricsSectionProps {
  isLoading: boolean;
  data?: {
    totalAssets: MetricProps;
    performance: MetricProps;
    riskAdjustedReturn: MetricProps;
  };
}

// Default values for when data is not available
const defaultData = {
  totalAssets: {
    value: 24600000,
    change: {
      value: 5.2,
      isPositive: true
    }
  },
  performance: {
    value: 12.4,
    change: {
      value: 2.1,
      isPositive: true
    }
  },
  riskAdjustedReturn: {
    value: 1.8,
    change: {
      value: 0.3,
      isPositive: true
    }
  }
};

const MetricsSection: FC<MetricsSectionProps> = ({ isLoading, data = defaultData }) => {
  return (
    <section className="pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Total Assets Metric Card */}
          <Card className="border border-neutral-light">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-sm text-neutral-medium font-medium">Total Assets</h3>
                <div className="text-secondary bg-secondary-light bg-opacity-10 p-1 rounded">
                  <DollarSign className="h-4 w-4" />
                </div>
              </div>
              <div className="flex items-baseline">
                {isLoading ? (
                  <Skeleton className="h-8 w-24" />
                ) : (
                  <span className="text-2xl font-bold">
                    {formatLargeNumber(data.totalAssets.value as number)}
                  </span>
                )}
              </div>
              <div className="mt-2 text-xs flex items-center">
                {isLoading ? (
                  <Skeleton className="h-4 w-36" />
                ) : (
                  <span className={`flex items-center ${data.totalAssets.change.isPositive ? 'text-success' : 'text-danger'}`}>
                    {data.totalAssets.change.isPositive ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3 w-3 mr-1"
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
                        className="h-3 w-3 mr-1"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    )}
                    {data.totalAssets.change.value}% from last month
                  </span>
                )}
              </div>
            </CardContent>
          </Card>
          
          {/* Portfolio Performance Card */}
          <Card className="border border-neutral-light">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-sm text-neutral-medium font-medium">Portfolio Performance</h3>
                <div className="text-secondary bg-secondary-light bg-opacity-10 p-1 rounded">
                  <LineChart className="h-4 w-4" />
                </div>
              </div>
              <div className="flex items-baseline">
                {isLoading ? (
                  <Skeleton className="h-8 w-20" />
                ) : (
                  <span className="text-2xl font-bold">
                    {formatPercentage(data.performance.value as number)}
                  </span>
                )}
              </div>
              <div className="mt-2 text-xs flex items-center">
                {isLoading ? (
                  <Skeleton className="h-4 w-36" />
                ) : (
                  <span className={`flex items-center ${data.performance.change.isPositive ? 'text-success' : 'text-danger'}`}>
                    {data.performance.change.isPositive ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3 w-3 mr-1"
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
                        className="h-3 w-3 mr-1"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    )}
                    {data.performance.change.value}% from last month
                  </span>
                )}
              </div>
            </CardContent>
          </Card>
          
          {/* Risk-Adjusted Return Card */}
          <Card className="border border-neutral-light">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-sm text-neutral-medium font-medium">Risk-Adjusted Return</h3>
                <div className="text-secondary bg-secondary-light bg-opacity-10 p-1 rounded">
                  <BarChart className="h-4 w-4" />
                </div>
              </div>
              <div className="flex items-baseline">
                {isLoading ? (
                  <Skeleton className="h-8 w-16" />
                ) : (
                  <span className="text-2xl font-bold">
                    {data.riskAdjustedReturn.value}
                  </span>
                )}
              </div>
              <div className="mt-2 text-xs flex items-center">
                {isLoading ? (
                  <Skeleton className="h-4 w-36" />
                ) : (
                  <span className={`flex items-center ${data.riskAdjustedReturn.change.isPositive ? 'text-success' : 'text-danger'}`}>
                    {data.riskAdjustedReturn.change.isPositive ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3 w-3 mr-1"
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
                        className="h-3 w-3 mr-1"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    )}
                    {data.riskAdjustedReturn.change.value} from last month
                  </span>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
