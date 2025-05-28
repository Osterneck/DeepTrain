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

interface SupplyChainViewProps {
  isLoading: boolean;
}

const SupplyChainView: FC<SupplyChainViewProps> = ({ isLoading }) => {
  // Mock data for supply chain metrics
  const supplyChainMetrics = [
    {
      name: "On-Time Delivery",
      value: "94.6%",
      change: "+2.1%",
      changeType: "positive",
      description: "Materials received on time",
    },
    {
      name: "Inventory Turnover",
      value: "8.4",
      change: "+0.6",
      changeType: "positive",
      description: "Annual turns",
    },
    {
      name: "Supplier Reliability",
      value: "92.3%",
      change: "+1.7%",
      changeType: "positive",
      description: "Quality acceptance rate",
    },
    {
      name: "Lead Time",
      value: "12.2 days",
      change: "-1.5 days",
      changeType: "positive",
      description: "Average order to delivery",
    },
  ];

  // Color palette for charts
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  // Mock data for vendor performance
  const vendorPerformanceData = [
    { name: "Acme Materials", onTime: 96.2, quality: 97.4, cost: 88.5 },
    { name: "Globe Supplies", onTime: 91.7, quality: 94.3, cost: 92.1 },
    { name: "Eastern Components", onTime: 88.5, quality: 86.9, cost: 95.3 },
    { name: "Northern Parts", onTime: 92.4, quality: 90.2, cost: 87.6 },
    { name: "Western Distributors", onTime: 97.1, quality: 92.8, cost: 82.9 },
  ];

  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        {/* Supply Chain Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {supplyChainMetrics.map((metric, index) => (
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

        {/* Vendor Performance */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Vendor Performance Metrics</h2>
          </div>
          
          {isLoading ? (
            <div className="chart-placeholder">
              <Skeleton className="h-80 w-full" />
            </div>
          ) : (
            <div className="p-4">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={vendorPerformanceData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="onTime" name="On-Time Delivery %" fill="#8884d8" />
                    <Bar dataKey="quality" name="Quality Score %" fill="#82ca9d" />
                    <Bar dataKey="cost" name="Cost Performance %" fill="#ffc658" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default SupplyChainView;