import { FC } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { BarChart, LineChart, Database } from "lucide-react";

interface MetricsSectionProps {
  isLoading: boolean;
}

const OilGasMetricsSection: FC<MetricsSectionProps> = ({ isLoading }) => {
  // Mock data based on the screenshot
  const data = {
    activeReservoirs: {
      value: 24,
      change: {
        value: 3.2,
        isPositive: true
      }
    },
    productionEfficiency: {
      value: 87.4,
      change: {
        value: 1.7,
        isPositive: true
      }
    },
    recoveryFactor: {
      value: 42.3,
      change: {
        value: 0.8,
        isPositive: true
      }
    }
  };

  return (
    <section className="pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Active Reservoirs Metric Card */}
          <Card className="border border-neutral-light">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-sm text-neutral-medium font-medium">Active Reservoirs</h3>
                <div className="text-secondary bg-secondary-light bg-opacity-10 p-1 rounded">
                  <Database className="h-4 w-4" />
                </div>
              </div>
              <div className="flex items-baseline">
                {isLoading ? (
                  <Skeleton className="h-8 w-24" />
                ) : (
                  <span className="text-2xl font-bold">
                    {data.activeReservoirs.value}
                  </span>
                )}
              </div>
              <div className="mt-2 text-xs flex items-center">
                {isLoading ? (
                  <Skeleton className="h-4 w-36" />
                ) : (
                  <span className={`flex items-center ${data.activeReservoirs.change.isPositive ? 'text-success' : 'text-danger'}`}>
                    {data.activeReservoirs.change.isPositive ? (
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
                    {data.activeReservoirs.change.value}% from last month
                  </span>
                )}
              </div>
            </CardContent>
          </Card>
          
          {/* Production Efficiency Card */}
          <Card className="border border-neutral-light">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-sm text-neutral-medium font-medium">Production Efficiency</h3>
                <div className="text-secondary bg-secondary-light bg-opacity-10 p-1 rounded">
                  <LineChart className="h-4 w-4" />
                </div>
              </div>
              <div className="flex items-baseline">
                {isLoading ? (
                  <Skeleton className="h-8 w-20" />
                ) : (
                  <span className="text-2xl font-bold">
                    {data.productionEfficiency.value}%
                  </span>
                )}
              </div>
              <div className="mt-2 text-xs flex items-center">
                {isLoading ? (
                  <Skeleton className="h-4 w-36" />
                ) : (
                  <span className={`flex items-center ${data.productionEfficiency.change.isPositive ? 'text-success' : 'text-danger'}`}>
                    {data.productionEfficiency.change.isPositive ? (
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
                    {data.productionEfficiency.change.value}% from last month
                  </span>
                )}
              </div>
            </CardContent>
          </Card>
          
          {/* Recovery Factor Card */}
          <Card className="border border-neutral-light">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-sm text-neutral-medium font-medium">Recovery Factor</h3>
                <div className="text-secondary bg-secondary-light bg-opacity-10 p-1 rounded">
                  <BarChart className="h-4 w-4" />
                </div>
              </div>
              <div className="flex items-baseline">
                {isLoading ? (
                  <Skeleton className="h-8 w-16" />
                ) : (
                  <span className="text-2xl font-bold">
                    {data.recoveryFactor.value}%
                  </span>
                )}
              </div>
              <div className="mt-2 text-xs flex items-center">
                {isLoading ? (
                  <Skeleton className="h-4 w-36" />
                ) : (
                  <span className={`flex items-center ${data.recoveryFactor.change.isPositive ? 'text-success' : 'text-danger'}`}>
                    {data.recoveryFactor.change.isPositive ? (
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
                    {data.recoveryFactor.change.value}% from last month
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

export default OilGasMetricsSection;