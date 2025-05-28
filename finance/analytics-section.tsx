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

const FinanceAnalyticsSection: FC<AnalyticsSectionProps> = ({ isLoading }) => {
  const [selectedTimePeriod, setSelectedTimePeriod] = useState('1Y');
  
  const timePeriodOptions = [
    { label: '1M', value: '1M' },
    { label: '3M', value: '3M' },
    { label: '6M', value: '6M' },
    { label: '1Y', value: '1Y' },
    { label: 'ALL', value: 'ALL' },
  ];

  // Mock data for asset allocation
  const assetAllocationData = [
    { name: "Equities", value: 45, color: "hsl(var(--chart-1))" },
    { name: "Fixed Income", value: 30, color: "hsl(var(--chart-2))" },
    { name: "Real Estate", value: 10, color: "hsl(var(--chart-3))" },
    { name: "Alternatives", value: 10, color: "hsl(var(--chart-4))" },
    { name: "Cash", value: 5, color: "hsl(var(--chart-5))" },
  ];

  // Mock data for performance history
  const performanceHistoryData = [
    { month: "Jan", portfolio: 100, benchmark: 100 },
    { month: "Feb", portfolio: 104, benchmark: 102 },
    { month: "Mar", portfolio: 102, benchmark: 101 },
    { month: "Apr", portfolio: 106, benchmark: 103 },
    { month: "May", portfolio: 110, benchmark: 105 },
    { month: "Jun", portfolio: 115, benchmark: 108 },
    { month: "Jul", portfolio: 112, benchmark: 106 },
    { month: "Aug", portfolio: 118, benchmark: 110 },
    { month: "Sep", portfolio: 122, benchmark: 112 },
    { month: "Oct", portfolio: 125, benchmark: 115 },
    { month: "Nov", portfolio: 130, benchmark: 118 },
    { month: "Dec", portfolio: 135, benchmark: 122 }
  ];

  return (
    <section className="pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={assetAllocationData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {assetAllocationData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        formatter={(value: number) => [`${value}%`, 'Allocation']}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              )}
              <div className="mt-4">
                <div className="grid grid-cols-2 gap-2">
                  {assetAllocationData.map((item, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <div 
                        className="w-3 h-3 rounded-full mr-2" 
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="text-neutral-dark">{item.name}:</span>
                      <span className="ml-1 font-medium">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Performance Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light flex justify-between items-center">
              <h2 className="text-lg font-semibold">Performance History</h2>
              <div className="flex space-x-1">
                {timePeriodOptions.map((option) => (
                  <Button
                    key={option.value}
                    variant={selectedTimePeriod === option.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedTimePeriod(option.value)}
                    className="text-xs px-2 py-1 h-8"
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
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={performanceHistoryData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip formatter={(value: number) => [`${value}`, 'Value']} />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="portfolio" 
                        stroke="hsl(var(--primary))" 
                        strokeWidth={2}
                        activeDot={{ r: 8 }}
                        name="Portfolio"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="benchmark" 
                        stroke="hsl(var(--secondary))" 
                        strokeWidth={2}
                        strokeDasharray="5 5" 
                        name="Benchmark"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              )}
              <div className="mt-4 text-sm text-neutral-dark">
                <div className="flex justify-between">
                  <div>
                    <span className="font-medium">Portfolio YTD Return:</span> 
                    <span className="text-success ml-1">+35.0%</span>
                  </div>
                  <div>
                    <span className="font-medium">Benchmark YTD Return:</span> 
                    <span className="text-success ml-1">+22.0%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Risk Analysis Section */}
        <Card className="border border-neutral-light overflow-hidden mt-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Risk Analysis</h2>
          </div>
          <CardContent className="p-4">
            {isLoading ? (
              <div className="chart-placeholder">
                <Skeleton className="h-40 w-full" />
              </div>
            ) : (
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={[
                      { category: 'Volatility', current: 12.4, benchmark: 10.2 },
                      { category: 'Sharpe Ratio', current: 1.8, benchmark: 1.4 },
                      { category: 'Beta', current: 1.2, benchmark: 1.0 },
                      { category: 'Alpha', current: 2.8, benchmark: 0 },
                      { category: 'Max Drawdown', current: 15.3, benchmark: 12.7 }
                    ]}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar 
                      dataKey="current" 
                      fill="hsl(var(--primary))" 
                      name="Current Portfolio" 
                    />
                    <Bar 
                      dataKey="benchmark" 
                      fill="hsl(var(--secondary))" 
                      name="Benchmark" 
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            )}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="border border-neutral-light rounded p-3">
                <div className="text-neutral-medium mb-1">Overall Risk Score</div>
                <div className="text-xl font-bold">42 <span className="text-xs font-normal text-neutral-medium">(Moderate)</span></div>
              </div>
              <div className="border border-neutral-light rounded p-3">
                <div className="text-neutral-medium mb-1">Risk-Adjusted Return</div>
                <div className="text-xl font-bold text-success">+3.2%</div>
              </div>
              <div className="border border-neutral-light rounded p-3">
                <div className="text-neutral-medium mb-1">Diversification Score</div>
                <div className="text-xl font-bold">78<span className="text-xs font-normal text-neutral-medium">/100</span></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FinanceAnalyticsSection;