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

const ITProjectAnalyticsSection: FC<AnalyticsSectionProps> = ({ isLoading }) => {
  const [selectedTimePeriod, setSelectedTimePeriod] = useState('1M');
  
  const timePeriodOptions = [
    { label: '1M', value: '1M' },
    { label: '3M', value: '3M' },
    { label: '6M', value: '6M' },
    { label: '1Y', value: '1Y' },
    { label: 'ALL', value: 'ALL' },
  ];

  // Mock data for resource allocation
  const resourceAllocationData = [
    { name: "Development", value: 42, color: "hsl(var(--chart-1))" },
    { name: "Quality Assurance", value: 18, color: "hsl(var(--chart-2))" },
    { name: "Design", value: 15, color: "hsl(var(--chart-3))" },
    { name: "Management", value: 25, color: "hsl(var(--chart-4))" }
  ];

  // Mock data for project timeline
  const projectTimelineData = [
    { week: "Week 1", planned: 10, actual: 8 },
    { week: "Week 2", planned: 20, actual: 18 },
    { week: "Week 3", planned: 30, actual: 28 },
    { week: "Week 4", planned: 40, actual: 36 },
    { week: "Week 5", planned: 50, actual: 48 },
    { week: "Week 6", planned: 60, actual: 56 }
  ];

  return (
    <section className="pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Resource Allocation Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Resource Allocation by Department</h2>
            </div>
            <CardContent className="p-4">
              {isLoading ? (
                <div className="chart-placeholder">
                  <Skeleton className="h-40 w-40 rounded-full" />
                </div>
              ) : (
                <div style={{ width: '100%', height: 250 }}>
                  <ResponsiveContainer>
                    <PieChart>
                      <Pie
                        data={resourceAllocationData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {resourceAllocationData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        formatter={(value: number) => [`${value}%`, 'Allocation']}
                      />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              )}
            </CardContent>
          </Card>
          
          {/* Project Timeline Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light flex justify-between items-center">
              <h2 className="text-lg font-semibold">Project Timeline</h2>
              <div className="flex space-x-2">
                {timePeriodOptions.map((option) => (
                  <Button
                    key={option.value}
                    variant={selectedTimePeriod === option.value ? 'default' : 'outline'}
                    size="sm"
                    className="px-2 py-1 text-xs h-auto"
                    onClick={() => setSelectedTimePeriod(option.value)}
                  >
                    {option.label}
                  </Button>
                ))}
              </div>
            </div>
            <CardContent className="p-4">
              {isLoading ? (
                <div className="chart-placeholder">
                  <Skeleton className="h-40 w-full" />
                </div>
              ) : (
                <div style={{ width: '100%', height: 250 }}>
                  <ResponsiveContainer>
                    <BarChart
                      data={projectTimelineData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="week" />
                      <YAxis label={{ value: 'Tasks Completed', angle: -90, position: 'insideLeft' }} />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="planned" name="Planned Progress" fill="hsl(var(--chart-2))" />
                      <Bar dataKey="actual" name="Actual Progress" fill="hsl(var(--chart-1))" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ITProjectAnalyticsSection;