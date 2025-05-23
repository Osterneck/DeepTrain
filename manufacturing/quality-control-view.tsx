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

interface QualityControlViewProps {
  isLoading: boolean;
}

const QualityControlView: FC<QualityControlViewProps> = ({ isLoading }) => {
  // Mock data for quality metrics
  const qualityMetrics = [
    {
      name: "First Pass Yield",
      value: "94.2%",
      change: "+1.8%",
      changeType: "positive",
      description: "Products passing QC first time",
    },
    {
      name: "Defect Rate",
      value: "0.92%",
      change: "-0.3%",
      changeType: "positive",
      description: "Defects per million",
    },
    {
      name: "Quality Audit Score",
      value: "92/100",
      change: "+4",
      changeType: "positive",
      description: "Monthly external audit",
    },
    {
      name: "Customer Returns",
      value: "0.42%",
      change: "-0.15%",
      changeType: "positive",
      description: "Return rate",
    },
  ];

  // Mock data for defect types
  const defectTypesData = [
    { name: "Dimensional", value: 32 },
    { name: "Surface Finish", value: 27 },
    { name: "Assembly", value: 18 },
    { name: "Functional", value: 12 },
    { name: "Packaging", value: 11 },
  ];

  // Color palette for charts
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        {/* Quality Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {qualityMetrics.map((metric, index) => (
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

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Defect Types Pie Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Defect Types Distribution</h2>
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
                        data={defectTypesData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {defectTypesData.map((entry, index) => (
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

export default QualityControlView;