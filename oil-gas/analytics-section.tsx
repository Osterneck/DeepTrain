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

const OilGasAnalyticsSection: FC<AnalyticsSectionProps> = ({ isLoading }) => {
  const [selectedTimePeriod, setSelectedTimePeriod] = useState('1M');
  
  const timePeriodOptions = [
    { label: '1M', value: '1M' },
    { label: '3M', value: '3M' },
    { label: '6M', value: '6M' },
    { label: '1Y', value: '1Y' },
    { label: 'ALL', value: 'ALL' },
  ];

  // Mock data for reservoir distribution
  const distributionData = [
    { name: "Sandstone", value: 45, color: "hsl(var(--chart-1))" },
    { name: "Carbonate", value: 30, color: "hsl(var(--chart-2))" },
    { name: "Shale", value: 25, color: "hsl(var(--chart-3))" },
  ];

  // Mock data for performance trends
  const performanceTrendData = [
    { month: "Jan", production: 65, expected: 58 },
    { month: "Feb", production: 68, expected: 59 },
    { month: "Mar", production: 72, expected: 62 },
    { month: "Apr", production: 75, expected: 65 },
    { month: "May", production: 82, expected: 70 },
    { month: "Jun", production: 87, expected: 75 }
  ];

  return (
    <section className="pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Reservoir Distribution Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Reservoir Distribution</h2>
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
                        data={distributionData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {distributionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        formatter={(value: number) => [`${value}%`, 'Distribution']}
                      />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              )}
            </CardContent>
          </Card>
          
          {/* Performance Trends Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light flex justify-between items-center">
              <h2 className="text-lg font-semibold">Performance Trends</h2>
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
                    <LineChart
                      data={performanceTrendData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis tickFormatter={(value) => `${value}%`} />
                      <Tooltip formatter={(value: number) => [`${value}%`, 'Efficiency']} />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="production" 
                        name="Actual Production"
                        stroke="hsl(var(--chart-1))" 
                        activeDot={{ r: 8 }} 
                        strokeWidth={2}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="expected" 
                        name="Expected Performance"
                        stroke="hsl(var(--chart-2))" 
                        strokeDasharray="5 5"
                      />
                    </LineChart>
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

export default OilGasAnalyticsSection;