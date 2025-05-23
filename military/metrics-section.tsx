import { FC } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface MetricsSectionProps {
  isLoading: boolean;
}

const MetricsSection: FC<MetricsSectionProps> = ({ isLoading }) => {
  // Mock data for military metrics
  const militaryMetrics = [
    {
      name: "Operational Readiness",
      value: "87.3%",
      change: "+1.8%",
      changeType: "positive",
      description: "Current force readiness score",
    },
    {
      name: "Personnel Status",
      value: "92.4%",
      change: "+0.5%",
      changeType: "positive",
      description: "Personnel availability",
    },
    {
      name: "Equipment Availability",
      value: "85.2%",
      change: "+2.1%",
      changeType: "positive",
      description: "Mission-critical equipment",
    },
    {
      name: "Intelligence Quality",
      value: "78.6%",
      change: "+3.2%",
      changeType: "positive",
      description: "Intelligence accuracy score",
    },
  ];

  return (
    <div className="mb-6">
      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {isLoading
          ? [...Array(4)].map((_, i) => (
              <Card key={i} className="border border-neutral-light">
                <CardContent className="p-4">
                  <Skeleton className="h-4 w-24 mb-2" />
                  <Skeleton className="h-8 w-16 mb-1" />
                  <Skeleton className="h-3 w-32" />
                </CardContent>
              </Card>
            ))
          : militaryMetrics.map((metric, index) => (
              <Card key={index} className="border border-neutral-light">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{metric.name}</h3>
                  <div className="flex items-end space-x-2">
                    <div className="text-2xl font-bold">{metric.value}</div>
                    <div className={`text-sm ${
                      metric.changeType === 'positive' 
                        ? 'text-success' 
                        : metric.changeType === 'negative' 
                          ? 'text-danger' 
                          : 'text-neutral-dark'
                    }`}>
                      {metric.change}
                    </div>
                  </div>
                  <p className="text-xs text-neutral-medium mt-2">{metric.description}</p>
                </CardContent>
              </Card>
            ))}
      </div>
    </div>
  );
};

export default MetricsSection;