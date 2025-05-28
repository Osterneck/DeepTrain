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

interface EquipmentMaintenanceViewProps {
  isLoading: boolean;
}

const EquipmentMaintenanceView: FC<EquipmentMaintenanceViewProps> = ({ isLoading }) => {
  // Mock data for maintenance metrics
  const maintenanceMetrics = [
    {
      name: "Overall Equipment Effectiveness",
      value: "84.2%",
      change: "+2.3%",
      changeType: "positive",
      description: "OEE score",
    },
    {
      name: "Mean Time Between Failures",
      value: "312 hrs",
      change: "+24 hrs",
      changeType: "positive",
      description: "MTBF",
    },
    {
      name: "Mean Time To Repair",
      value: "3.2 hrs",
      change: "-0.5 hrs",
      changeType: "positive",
      description: "MTTR",
    },
    {
      name: "Planned Maintenance",
      value: "87.5%",
      change: "+5.2%",
      changeType: "positive",
      description: "vs. reactive",
    },
  ];

  // Color palette for charts
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  // Mock data for maintenance types
  const maintenanceTypesData = [
    { name: "Preventive", value: 42 },
    { name: "Predictive", value: 28 },
    { name: "Corrective", value: 18 },
    { name: "Condition-Based", value: 12 },
  ];

  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        {/* Maintenance Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {maintenanceMetrics.map((metric, index) => (
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

        {/* Maintenance Types Pie Chart */}
        <Card className="border border-neutral-light overflow-hidden">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Maintenance Types Distribution</h2>
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
                      data={maintenanceTypesData}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {maintenanceTypesData.map((entry, index) => (
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
  );
};

export default EquipmentMaintenanceView;