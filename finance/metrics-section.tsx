import { FC } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { BarChart, LineChart, Percent } from "lucide-react";

interface MetricsSectionProps {
  isLoading: boolean;
}

const FinanceMetricsSection: FC<MetricsSectionProps> = ({ isLoading }) => {
  // Mock data for Finance domain
  const data = {
    portfolioValue: {
      value: "$5.78M",
      change: {
        value: 2.1,
        isPositive: true
      }
    },
    annualReturn: {
      value: "16.4%",
      change: {
        value: 3.5,
        isPositive: true
      }
    },
    riskScore: {
      value: "42.3",
      change: {
        value: 0.8,
        isPositive: false
      }
    }
  };

  return (
    <section className="pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Portfolio Value Card */}
          <Card className="border border-neutral-light">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-sm text-neutral-medium font-medium">Portfolio Value</h3>
                <div className="text-primary bg-primary-light bg-opacity-10 p-1 rounded">
                  <BarChart className="h-4 w-4" />
                </div>
              </div>
              <div className="flex items-baseline">
                {isLoading ? (
                  <Skeleton className="h-8 w-24" />
                ) : (
                  <span className="text-2xl font-bold">
                    {data.portfolioValue.value}
                  </span>
                )}
              </div>
              <div className="mt-2 text-xs flex items-center">
                {isLoading ? (
                  <Skeleton className="h-4 w-36" />
                ) : (
                  <span className={`flex items-center ${data.portfolioValue.change.isPositive ? 'text-success' : 'text-danger'}`}>
                    {data.portfolioValue.change.isPositive ? (
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
                    {data.portfolioValue.change.value}% {data.portfolioValue.change.isPositive ? 'increase' : 'decrease'} from last month
                  </span>
                )}
              </div>
            </CardContent>
          </Card>
          
          {/* Annual Return Card */}
          <Card className="border border-neutral-light">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-sm text-neutral-medium font-medium">Annual Return</h3>
                <div className="text-success bg-success-light bg-opacity-10 p-1 rounded">
                  <Percent className="h-4 w-4" />
                </div>
              </div>
              <div className="flex items-baseline">
                {isLoading ? (
                  <Skeleton className="h-8 w-20" />
                ) : (
                  <span className="text-2xl font-bold">
                    {data.annualReturn.value}
                  </span>
                )}
              </div>
              <div className="mt-2 text-xs flex items-center">
                {isLoading ? (
                  <Skeleton className="h-4 w-36" />
                ) : (
                  <span className={`flex items-center ${data.annualReturn.change.isPositive ? 'text-success' : 'text-danger'}`}>
                    {data.annualReturn.change.isPositive ? (
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
                    {data.annualReturn.change.value}% {data.annualReturn.change.isPositive ? 'increase' : 'decrease'} from last year
                  </span>
                )}
              </div>
            </CardContent>
          </Card>
          
          {/* Risk Score Card */}
          <Card className="border border-neutral-light">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-sm text-neutral-medium font-medium">Risk Score</h3>
                <div className="text-warning bg-warning-light bg-opacity-10 p-1 rounded">
                  <LineChart className="h-4 w-4" />
                </div>
              </div>
              <div className="flex items-baseline">
                {isLoading ? (
                  <Skeleton className="h-8 w-16" />
                ) : (
                  <span className="text-2xl font-bold">
                    {data.riskScore.value}
                  </span>
                )}
              </div>
              <div className="mt-2 text-xs flex items-center">
                {isLoading ? (
                  <Skeleton className="h-4 w-36" />
                ) : (
                  <span className={`flex items-center ${data.riskScore.change.isPositive ? 'text-success' : 'text-danger'}`}>
                    {data.riskScore.change.isPositive ? (
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
                    {data.riskScore.change.value}% {data.riskScore.change.isPositive ? 'increase' : 'decrease'} in volatility 
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

export default FinanceMetricsSection;