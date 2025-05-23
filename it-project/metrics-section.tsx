import { FC } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { BarChart, LineChart, Calendar } from "lucide-react";

interface MetricsSectionProps {
  isLoading: boolean;
}

const ITProjectMetricsSection: FC<MetricsSectionProps> = ({ isLoading }) => {
  // Mock data based on the screenshot
  const data = {
    activeProjects: {
      value: 18,
      change: {
        value: 3.7,
        isPositive: true
      }
    },
    resourceUtilization: {
      value: 84.5,
      change: {
        value: 2.1,
        isPositive: true
      }
    },
    onTimeDelivery: {
      value: 92.7,
      change: {
        value: 1.3,
        isPositive: true
      }
    }
  };

  return (
    <section className="pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Active Projects Metric Card */}
          <Card className="border border-neutral-light">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-sm text-neutral-medium font-medium">Active Projects</h3>
                <div className="text-secondary bg-secondary-light bg-opacity-10 p-1 rounded">
                  <Calendar className="h-4 w-4" />
                </div>
              </div>
              <div className="flex items-baseline">
                {isLoading ? (
                  <Skeleton className="h-8 w-24" />
                ) : (
                  <span className="text-2xl font-bold">
                    {data.activeProjects.value}
                  </span>
                )}
              </div>
              <div className="mt-2 text-xs flex items-center">
                {isLoading ? (
                  <Skeleton className="h-4 w-36" />
                ) : (
                  <span className={`flex items-center ${data.activeProjects.change.isPositive ? 'text-success' : 'text-danger'}`}>
                    {data.activeProjects.change.isPositive ? (
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
                    {data.activeProjects.change.value}% from last month
                  </span>
                )}
              </div>
            </CardContent>
          </Card>
          
          {/* Resource Utilization Card */}
          <Card className="border border-neutral-light">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-sm text-neutral-medium font-medium">Resource Utilization</h3>
                <div className="text-secondary bg-secondary-light bg-opacity-10 p-1 rounded">
                  <LineChart className="h-4 w-4" />
                </div>
              </div>
              <div className="flex items-baseline">
                {isLoading ? (
                  <Skeleton className="h-8 w-20" />
                ) : (
                  <span className="text-2xl font-bold">
                    {data.resourceUtilization.value}%
                  </span>
                )}
              </div>
              <div className="mt-2 text-xs flex items-center">
                {isLoading ? (
                  <Skeleton className="h-4 w-36" />
                ) : (
                  <span className={`flex items-center ${data.resourceUtilization.change.isPositive ? 'text-success' : 'text-danger'}`}>
                    {data.resourceUtilization.change.isPositive ? (
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
                    {data.resourceUtilization.change.value}% from last month
                  </span>
                )}
              </div>
            </CardContent>
          </Card>
          
          {/* On-Time Delivery Card */}
          <Card className="border border-neutral-light">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-sm text-neutral-medium font-medium">On-Time Delivery Rate</h3>
                <div className="text-secondary bg-secondary-light bg-opacity-10 p-1 rounded">
                  <BarChart className="h-4 w-4" />
                </div>
              </div>
              <div className="flex items-baseline">
                {isLoading ? (
                  <Skeleton className="h-8 w-16" />
                ) : (
                  <span className="text-2xl font-bold">
                    {data.onTimeDelivery.value}%
                  </span>
                )}
              </div>
              <div className="mt-2 text-xs flex items-center">
                {isLoading ? (
                  <Skeleton className="h-4 w-36" />
                ) : (
                  <span className={`flex items-center ${data.onTimeDelivery.change.isPositive ? 'text-success' : 'text-danger'}`}>
                    {data.onTimeDelivery.change.isPositive ? (
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
                    {data.onTimeDelivery.change.value}% from last month
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

export default ITProjectMetricsSection;