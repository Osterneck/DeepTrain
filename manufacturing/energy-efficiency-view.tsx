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

interface EnergyEfficiencyViewProps {
  isLoading: boolean;
}

const EnergyEfficiencyView: FC<EnergyEfficiencyViewProps> = ({ isLoading }) => {
  // Mock data for energy metrics
  const energyMetrics = [
    {
      name: "Energy Consumption",
      value: "4.8M",
      unit: "kWh/month",
      change: "-3.2%",
      changeType: "positive",
      description: "Factory-wide usage",
    },
    {
      name: "Energy Cost",
      value: "$412K",
      unit: "/month",
      change: "-4.5%",
      changeType: "positive",
      description: "Total energy expense",
    },
    {
      name: "Energy Intensity",
      value: "1.24",
      unit: "kWh/$",
      change: "-1.8%",
      changeType: "positive",
      description: "Energy per production value",
    },
    {
      name: "Carbon Emissions",
      value: "325",
      unit: "tons CO2",
      change: "-5.2%",
      changeType: "positive",
      description: "Monthly emissions",
    },
  ];

  // Color palette for charts
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  // Mock data for energy by source
  const energyBySource = [
    { name: "Electricity (Grid)", value: 62 },
    { name: "Natural Gas", value: 20 },
    { name: "Solar", value: 12 },
    { name: "Wind", value: 6 },
  ];

  // Mock data for energy consumption by department
  const energyByDepartment = [
    { department: "Production Line A", consumption: 1.2 },
    { department: "Production Line B", consumption: 0.9 },
    { department: "Assembly", consumption: 0.7 },
    { department: "Packaging", consumption: 0.6 },
    { department: "Warehousing", consumption: 0.5 },
    { department: "Office & Admin", consumption: 0.4 },
    { department: "R&D", consumption: 0.3 },
    { department: "Other", consumption: 0.2 },
  ];

  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        {/* Energy Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {energyMetrics.map((metric, index) => (
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Energy by Source Pie Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Energy by Source (%)</h2>
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
                        data={energyBySource}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {energyBySource.map((entry, index) => (
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

          {/* Energy by Department Bar Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Energy Consumption by Department (M kWh/month)</h2>
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
                      data={energyByDepartment}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      layout="vertical"
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis dataKey="department" type="category" width={150} />
                      <Tooltip formatter={(value) => `${value} M kWh`} />
                      <Legend />
                      <Bar dataKey="consumption" name="Energy Consumption" fill="#8884d8" />
                    </BarChart>
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

export default EnergyEfficiencyView;