import { FC } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface MetricsSectionProps {
  isLoading: boolean;
}

const MetricsSection: FC<MetricsSectionProps> = ({ isLoading }) => {
  // Mock data for pharmaceutical metrics
  const pharmacyMetrics = [
    {
      name: "R&D Pipeline",
      value: "248",
      change: "+18",
      changeType: "positive",
      description: "Active drug candidates",
    },
    {
      name: "Trial Success",
      value: "22.4%",
      change: "+1.8%",
      changeType: "positive",
      description: "Phase transition success rate",
    },
    {
      name: "Time to Market",
      value: "6.5 yrs",
      change: "-0.3 yrs",
      changeType: "positive",
      description: "Average development timeline",
    },
    {
      name: "Regulatory",
      value: "97.5%",
      change: "+0.5%",
      changeType: "positive",
      description: "Submission approvals",
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
          : pharmacyMetrics.map((metric, index) => (
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