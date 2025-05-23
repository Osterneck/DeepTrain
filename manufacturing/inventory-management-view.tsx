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

interface InventoryManagementViewProps {
  isLoading: boolean;
}

const InventoryManagementView: FC<InventoryManagementViewProps> = ({ isLoading }) => {
  // Mock data for inventory metrics
  const inventoryMetrics = [
    {
      name: "Total Inventory Value",
      value: "$1.24M",
      change: "+3.2%",
      changeType: "neutral",
      description: "All stocked items",
    },
    {
      name: "Inventory Turns",
      value: "8.2",
      change: "+0.4",
      changeType: "positive",
      description: "Annual turns",
    },
    {
      name: "Stock-out Rate",
      value: "0.8%",
      change: "-0.3%",
      changeType: "positive",
      description: "Production delays",
    },
    {
      name: "Days of Supply",
      value: "24.5",
      change: "-2.1",
      changeType: "positive",
      description: "Average inventory days",
    },
  ];

  // Color palette for charts
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  // Mock data for inventory value by category
  const inventoryByCategory = [
    { name: "Raw Materials", value: 420 },
    { name: "Work in Progress", value: 310 },
    { name: "Finished Goods", value: 380 },
    { name: "Maintenance & Repair", value: 90 },
    { name: "Packaging", value: 40 },
  ];

  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        {/* Inventory Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {inventoryMetrics.map((metric, index) => (
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

        {/* Inventory Value by Category */}
        <Card className="border border-neutral-light overflow-hidden">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Inventory Value by Category ($K)</h2>
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
                      data={inventoryByCategory}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {inventoryByCategory.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `$${value}K`} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default InventoryManagementView;