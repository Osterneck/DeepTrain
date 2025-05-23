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
  Cell
} from "recharts";

interface FactoryLayoutViewProps {
  isLoading: boolean;
}

const FactoryLayoutView: FC<FactoryLayoutViewProps> = ({ isLoading }) => {
  // Mock data for layout metrics
  const layoutMetrics = [
    {
      name: "Floor Space Utilization",
      value: "85.4%",
      change: "+3.2%",
      changeType: "positive",
      description: "Of available space",
    },
    {
      name: "Material Flow Distance",
      value: "420m",
      change: "-45m",
      changeType: "positive",
      description: "Avg. product journey",
    },
    {
      name: "Bottleneck Reduction",
      value: "24.8%",
      change: "+6.5%",
      changeType: "positive",
      description: "YoY improvement",
    },
    {
      name: "Layout Efficiency Score",
      value: "78/100",
      change: "+5",
      changeType: "positive",
      description: "Internal assessment",
    },
  ];

  // Color palette for charts
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  // Mock data for space allocation
  const spaceAllocationData = [
    { name: "Production", value: 45 },
    { name: "Assembly", value: 20 },
    { name: "Warehousing", value: 15 },
    { name: "Shipping/Receiving", value: 8 },
    { name: "QA/Testing", value: 7 },
    { name: "Office/Admin", value: 5 },
  ];

  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        {/* Layout Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {layoutMetrics.map((metric, index) => (
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

        {/* Space Allocation Pie Chart */}
        <Card className="border border-neutral-light overflow-hidden">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Space Allocation by Function (%)</h2>
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
                      data={spaceAllocationData}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {spaceAllocationData.map((entry, index) => (
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

        {/* Factory Layout Visual Map */}
        <Card className="border border-neutral-light overflow-hidden mb-6 mt-6">
          <div className="p-4 border-b border-neutral-light flex justify-between items-center">
            <h2 className="text-lg font-semibold">Factory Layout Visualization</h2>
          </div>
          
          {isLoading ? (
            <div className="p-4">
              <Skeleton className="h-96 w-full" />
            </div>
          ) : (
            <div className="p-4">
              <div className="h-96 bg-blue-50 border border-blue-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <p className="text-blue-500">Interactive factory layout visualization</p>
                  <div className="mt-4 grid grid-cols-4 gap-4 max-w-2xl mx-auto">
                    <div className="p-3 bg-blue-200 rounded-md text-center">Production</div>
                    <div className="p-3 bg-green-200 rounded-md text-center">Assembly</div>
                    <div className="p-3 bg-yellow-200 rounded-md text-center">Warehouse</div>
                    <div className="p-3 bg-purple-200 rounded-md text-center">QA/Testing</div>
                    <div className="p-3 bg-orange-200 rounded-md text-center">Shipping</div>
                    <div className="p-3 bg-red-200 rounded-md text-center">Receiving</div>
                    <div className="p-3 bg-gray-200 rounded-md text-center">Office</div>
                    <div className="p-3 bg-pink-200 rounded-md text-center">Utilities</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default FactoryLayoutView;