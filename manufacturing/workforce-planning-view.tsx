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

interface WorkforcePlanningViewProps {
  isLoading: boolean;
}

const WorkforcePlanningView: FC<WorkforcePlanningViewProps> = ({ isLoading }) => {
  // Mock data for workforce metrics
  const workforceMetrics = [
    {
      name: "Workforce Utilization",
      value: "87.3%",
      change: "+2.1%",
      changeType: "positive",
      description: "Average utilization rate",
    },
    {
      name: "Overtime Rate",
      value: "8.5%",
      change: "-1.2%",
      changeType: "positive",
      description: "Of total labor hours",
    },
    {
      name: "Skill Coverage",
      value: "92.4%",
      change: "+3.7%",
      changeType: "positive",
      description: "Critical skills available",
    },
    {
      name: "Absenteeism",
      value: "3.2%",
      change: "-0.4%",
      changeType: "positive",
      description: "Daily workforce average",
    },
  ];

  // Color palette for charts
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  // Mock data for workforce by department
  const workforceByDepartment = [
    { name: "Production", value: 145 },
    { name: "Assembly", value: 85 },
    { name: "Quality Control", value: 38 },
    { name: "Maintenance", value: 25 },
    { name: "Warehouse", value: 32 },
    { name: "Administration", value: 18 },
  ];

  // Mock data for productivity by team
  const productivityByTeam = [
    { team: "Production Team A", current: 94, target: 95, previous: 91 },
    { team: "Production Team B", current: 91, target: 95, previous: 89 },
    { team: "Assembly Line 1", current: 97, target: 96, previous: 95 },
    { team: "Assembly Line 2", current: 93, target: 96, previous: 92 },
    { team: "Packaging Team", current: 95, target: 94, previous: 92 },
  ];

  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        {/* Workforce Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {workforceMetrics.map((metric, index) => (
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

        {/* Workforce Distribution Pie Chart */}
        <Card className="border border-neutral-light overflow-hidden">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Workforce Distribution by Department</h2>
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
                      data={workforceByDepartment}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {workforceByDepartment.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value} employees`} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Productivity by Team */}
        <Card className="border border-neutral-light overflow-hidden mt-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Team Productivity (% of Target)</h2>
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
                    data={productivityByTeam}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="team" />
                    <YAxis domain={[80, 100]} />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Legend />
                    <Bar dataKey="current" name="Current Productivity" fill="#0088FE" />
                    <Bar dataKey="target" name="Target Productivity" fill="#00C49F" />
                    <Bar dataKey="previous" name="Previous Quarter" fill="#FFBB28" />
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

export default WorkforcePlanningView;