import { FC } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area
} from "recharts";

interface ProcessOptimizationViewProps {
  isLoading: boolean;
}

const ProcessOptimizationView: FC<ProcessOptimizationViewProps> = ({ isLoading }) => {
  // Mock data for process metrics
  const processMetrics = [
    {
      name: "Cycle Time",
      value: "24.5",
      unit: "min",
      change: "-3.2",
      changeType: "positive",
      description: "Average process time",
    },
    {
      name: "Process Yield",
      value: "94.8",
      unit: "%",
      change: "+2.3",
      changeType: "positive",
      description: "Output / Input ratio",
    },
    {
      name: "Changeover Time",
      value: "45",
      unit: "min",
      change: "-12",
      changeType: "positive",
      description: "Avg. setup time",
    },
    {
      name: "Production Rate",
      value: "845",
      unit: "units/day",
      change: "+55",
      changeType: "positive",
      description: "Daily output",
    },
  ];

  // Color palette for charts
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  // Mock data for process optimization trend
  const optimizationTrendData = [
    { month: 'Jan', cycleTime: 32, yield: 89, targetCycle: 30, targetYield: 92 },
    { month: 'Feb', cycleTime: 31, yield: 90, targetCycle: 30, targetYield: 92 },
    { month: 'Mar', cycleTime: 29, yield: 91, targetCycle: 29, targetYield: 93 },
    { month: 'Apr', cycleTime: 28, yield: 92, targetCycle: 28, targetYield: 93 },
    { month: 'May', cycleTime: 27, yield: 93, targetCycle: 27, targetYield: 94 },
    { month: 'Jun', cycleTime: 26, yield: 93.5, targetCycle: 26, targetYield: 94 },
    { month: 'Jul', cycleTime: 25, yield: 94, targetCycle: 25, targetYield: 95 },
    { month: 'Aug', cycleTime: 24.5, yield: 94.8, targetCycle: 24, targetYield: 95 },
  ];

  // Mock data for production bottlenecks
  const bottleneckData = [
    { process: "Material Preparation", value: 15 },
    { process: "Assembly", value: 45 },
    { process: "Testing", value: 25 },
    { process: "Packaging", value: 10 },
    { process: "Quality Inspection", value: 5 },
  ];

  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        {/* Process Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {processMetrics.map((metric, index) => (
            <Card key={index} className="border border-neutral-light">
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-1">{metric.name}</h3>
                <div className="flex items-end space-x-2">
                  <div className="text-2xl font-bold">
                    {metric.value}
                    {metric.unit && <span className="text-sm font-normal ml-1">{metric.unit}</span>}
                  </div>
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

        {/* Charts Section */}
        <div className="grid grid-cols-1 gap-6 mb-6">
          {/* Process Optimization Trend */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Process Optimization Trends</h2>
            </div>
            
            {isLoading ? (
              <div className="chart-placeholder">
                <Skeleton className="h-80 w-full" />
              </div>
            ) : (
              <div className="p-4">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={optimizationTrendData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis yAxisId="left" orientation="left" label={{ value: 'Cycle Time (min)', angle: -90, position: 'insideLeft' }} />
                      <YAxis yAxisId="right" orientation="right" domain={[85, 100]} label={{ value: 'Yield (%)', angle: 90, position: 'insideRight' }} />
                      <Tooltip />
                      <Legend />
                      <Line yAxisId="left" type="monotone" dataKey="cycleTime" name="Cycle Time" stroke="#8884d8" activeDot={{ r: 8 }} />
                      <Line yAxisId="left" type="monotone" dataKey="targetCycle" name="Target Cycle Time" stroke="#8884d8" strokeDasharray="5 5" />
                      <Line yAxisId="right" type="monotone" dataKey="yield" name="Process Yield" stroke="#82ca9d" />
                      <Line yAxisId="right" type="monotone" dataKey="targetYield" name="Target Yield" stroke="#82ca9d" strokeDasharray="5 5" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </Card>

          {/* Production Bottlenecks */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Production Bottlenecks (%)</h2>
            </div>
            
            {isLoading ? (
              <div className="chart-placeholder">
                <Skeleton className="h-80 w-full" />
              </div>
            ) : (
              <div className="p-4">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={bottleneckData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {bottleneckData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${value}%`} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProcessOptimizationView;