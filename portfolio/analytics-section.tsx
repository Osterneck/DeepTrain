import { FC, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { BarChart, LineChart } from "lucide-react";
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer,
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

interface AnalyticsSectionProps {
  isLoading: boolean;
  allocationData?: {
    name: string;
    value: number;
    color: string;
  }[];
  performanceHistory?: {
    date: string;
    value: number;
  }[];
}

// Default data when not provided
const defaultAllocationData = [
  { name: "Equity", value: 58, color: "hsl(var(--chart-1))" },
  { name: "Fixed Income", value: 42, color: "hsl(var(--chart-2))" },
];

const defaultPerformanceHistory = [
  { date: "Jan", value: 5.2 },
  { date: "Feb", value: 7.4 },
  { date: "Mar", value: 8.1 },
  { date: "Apr", value: 10.3 },
  { date: "May", value: 11.8 },
  { date: "Jun", value: 12.4 },
];

const AnalyticsSection: FC<AnalyticsSectionProps> = ({ 
  isLoading, 
  allocationData = defaultAllocationData,
  performanceHistory = defaultPerformanceHistory
}) => {
  const [selectedTimePeriod, setSelectedTimePeriod] = useState('1M');
  
  const timePeriodOptions = [
    { label: '1M', value: '1M' },
    { label: '3M', value: '3M' },
    { label: '6M', value: '6M' },
    { label: '1Y', value: '1Y' },
    { label: 'ALL', value: 'ALL' },
  ];

  return (
    <section className="pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Asset Allocation Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Asset Allocation</h2>
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
                        data={allocationData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {allocationData.map((entry, index) => (
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
          
          {/* Performance History Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light flex justify-between items-center">
              <h2 className="text-lg font-semibold">Performance History</h2>
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
                    <RechartsLineChart
                      data={performanceHistory}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis tickFormatter={(value) => `${value}%`} />
                      <Tooltip formatter={(value: number) => [`${value}%`, 'Performance']} />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        name="Portfolio Performance"
                        stroke="hsl(var(--chart-1))" 
                        activeDot={{ r: 8 }} 
                        strokeWidth={2}
                      />
                    </RechartsLineChart>
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

export default AnalyticsSection;
