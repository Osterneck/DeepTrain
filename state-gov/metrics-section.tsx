import { FC } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { BarChart, LineChart, Activity } from "lucide-react";

interface MetricsSectionProps {
  isLoading: boolean;
}

const StateGovMetricsSection: FC<MetricsSectionProps> = ({ isLoading }) => {
  // Mock data based on the screenshot
  const data = {
    activeCases: {
      value: 1248,
      change: {
        value: 3.2,
        isPositive: false,
        label: "decrease"
      }
    },
    vaccinationRate: {
      value: 86.7,
      change: {
        value: 2.3,
        isPositive: true,
        label: "increase"
      }
    },
    hospitalCapacity: {
      value: 68.5,
      change: {
        value: 7.1,
        isPositive: false,
        label: "below capacity threshold"
      }
    }
  };

  return (
    <section className="pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Active Cases Metric Card */}
          <Card className="border border-neutral-light">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-sm text-neutral-medium font-medium">Active Surveillance Cases</h3>
                <div className="text-secondary bg-secondary-light bg-opacity-10 p-1 rounded">
                  <Activity className="h-4 w-4" />
                </div>
              </div>
              <div className="flex items-baseline">
                {isLoading ? (
                  <Skeleton className="h-8 w-24" />
                ) : (
                  <span className="text-2xl font-bold">
                    {data.activeCases.value.toLocaleString()}
                  </span>
                )}
              </div>
              <div className="mt-2 text-xs flex items-center">
                {isLoading ? (
                  <Skeleton className="h-4 w-36" />
                ) : (
                  <span className={`flex items-center ${data.activeCases.change.isPositive ? 'text-success' : 'text-danger'}`}>
                    {data.activeCases.change.isPositive ? (
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
                    {data.activeCases.change.value}% {data.activeCases.change.label} from last month
                  </span>
                )}
              </div>
            </CardContent>
          </Card>
          
          {/* Vaccination Rate Card */}
          <Card className="border border-neutral-light">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-sm text-neutral-medium font-medium">Vaccination Rate</h3>
                <div className="text-secondary bg-secondary-light bg-opacity-10 p-1 rounded">
                  <LineChart className="h-4 w-4" />
                </div>
              </div>
              <div className="flex items-baseline">
                {isLoading ? (
                  <Skeleton className="h-8 w-20" />
                ) : (
                  <span className="text-2xl font-bold">
                    {data.vaccinationRate.value}%
                  </span>
                )}
              </div>
              <div className="mt-2 text-xs flex items-center">
                {isLoading ? (
                  <Skeleton className="h-4 w-36" />
                ) : (
                  <span className={`flex items-center ${data.vaccinationRate.change.isPositive ? 'text-success' : 'text-danger'}`}>
                    {data.vaccinationRate.change.isPositive ? (
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
                    {data.vaccinationRate.change.value}% {data.vaccinationRate.change.label} from last quarter
                  </span>
                )}
              </div>
            </CardContent>
          </Card>
          
          {/* Hospital Capacity Card */}
          <Card className="border border-neutral-light">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-sm text-neutral-medium font-medium">Hospital Capacity</h3>
                <div className="text-secondary bg-secondary-light bg-opacity-10 p-1 rounded">
                  <BarChart className="h-4 w-4" />
                </div>
              </div>
              <div className="flex items-baseline">
                {isLoading ? (
                  <Skeleton className="h-8 w-16" />
                ) : (
                  <span className="text-2xl font-bold">
                    {data.hospitalCapacity.value}%
                  </span>
                )}
              </div>
              <div className="mt-2 text-xs flex items-center">
                {isLoading ? (
                  <Skeleton className="h-4 w-36" />
                ) : (
                  <span className={`flex items-center ${data.hospitalCapacity.change.isPositive ? 'text-success' : 'text-danger'}`}>
                    {data.hospitalCapacity.change.isPositive ? (
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
                    {data.hospitalCapacity.change.value}% {data.hospitalCapacity.change.label}
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

export default StateGovMetricsSection;