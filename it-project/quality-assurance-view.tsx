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
} from "recharts";

interface QualityAssuranceViewProps {
  isLoading: boolean;
}

const QualityAssuranceView: FC<QualityAssuranceViewProps> = ({ isLoading }) => {
  // Mock data for QA metrics
  const qaMetrics = [
    {
      name: "Test Coverage",
      value: "86%",
      change: "+4%",
      changeType: "positive",
      description: "Percentage of code covered by automated tests",
    },
    {
      name: "Active Defects",
      value: "42",
      change: "-8",
      changeType: "positive",
      description: "Current open defects across all projects",
    },
    {
      name: "Sprint Defect Density",
      value: "0.8",
      change: "-0.2",
      changeType: "positive",
      description: "Average defects per story point",
    },
    {
      name: "Pass Rate",
      value: "94%",
      change: "+2%",
      changeType: "positive",
      description: "Automated test pass rate in latest CI build",
    },
  ];

  // Mock data for defect severity distribution
  const defectSeverityData = [
    { name: "Critical", value: 5 },
    { name: "High", value: 12 },
    { name: "Medium", value: 18 },
    { name: "Low", value: 7 },
  ];

  // Color palette for pie chart
  const COLORS = ['#FF0000', '#FFA500', '#FFFF00', '#008000'];

  // Mock data for defect trends
  const defectTrendsData = [
    { sprint: "Sprint 1", created: 28, resolved: 18 },
    { sprint: "Sprint 2", created: 32, resolved: 25 },
    { sprint: "Sprint 3", created: 24, resolved: 30 },
    { sprint: "Sprint 4", created: 22, resolved: 26 },
    { sprint: "Sprint 5", created: 18, resolved: 20 },
    { sprint: "Sprint 6", created: 16, resolved: 18 },
    { sprint: "Sprint 7", created: 15, resolved: 14 },
    { sprint: "Sprint 8", created: 12, resolved: 14 },
  ];

  // Mock data for test automation
  const testAutomationData = [
    { name: "Unit Tests", count: 1250, runtime: 45 },
    { name: "Integration Tests", count: 480, runtime: 180 },
    { name: "API Tests", count: 320, runtime: 120 },
    { name: "UI Tests", count: 175, runtime: 240 },
    { name: "Performance Tests", count: 35, runtime: 360 },
  ];

  // Mock data for active defects
  const activeDefects = [
    {
      id: "DEF-2025-042",
      summary: "Authentication fails with special characters in username",
      component: "User Management",
      severity: "High",
      priority: "P1",
      reporter: "Sarah Johnson",
      assignee: "Michael Chen",
      status: "In Progress",
      sprint: "Sprint 8"
    },
    {
      id: "DEF-2025-038",
      summary: "Data inconsistency when concurrent users update the same record",
      component: "Data Layer",
      severity: "Critical",
      priority: "P0",
      reporter: "David Wilson",
      assignee: "Jennifer Kim",
      status: "In Progress",
      sprint: "Sprint 8"
    },
    {
      id: "DEF-2025-036",
      summary: "Mobile view incorrectly renders tables on small screens",
      component: "UI Components",
      severity: "Medium",
      priority: "P2",
      reporter: "Emily Davis",
      assignee: "Jason Rodriguez",
      status: "Ready for Test",
      sprint: "Sprint 8"
    },
    {
      id: "DEF-2025-032",
      summary: "Export to PDF fails with non-ASCII characters",
      component: "Reporting",
      severity: "Medium",
      priority: "P2",
      reporter: "Kevin Yang",
      assignee: "Michael Chen",
      status: "Ready for Dev",
      sprint: "Sprint 9"
    },
    {
      id: "DEF-2025-028",
      summary: "Slow performance on large dataset queries",
      component: "Database",
      severity: "High",
      priority: "P1",
      reporter: "Lisa Martinez",
      assignee: "Unassigned",
      status: "Backlog",
      sprint: "Sprint 9"
    },
  ];

  const getSeverityClass = (severity: string) => {
    switch (severity) {
      case 'Critical': return 'bg-red-100 text-red-800';
      case 'High': return 'bg-orange-100 text-orange-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityClass = (priority: string) => {
    switch (priority) {
      case 'P0': return 'font-bold text-red-600';
      case 'P1': return 'font-bold text-orange-600';
      case 'P2': return 'font-semibold text-yellow-700';
      case 'P3': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Ready for Dev': return 'bg-blue-100 text-blue-800';
      case 'In Progress': return 'bg-purple-100 text-purple-800';
      case 'Ready for Test': return 'bg-indigo-100 text-indigo-800';
      case 'Backlog': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        {/* QA Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {qaMetrics.map((metric, index) => (
            <Card key={index} className="border border-neutral-light">
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-1">{metric.name}</h3>
                <div className="flex items-end space-x-2">
                  <div className="text-2xl font-bold">{metric.value}</div>
                  <div className={`text-sm ${metric.changeType === 'positive' ? 'text-success' : 'text-danger'}`}>
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
          {/* Defect Severity Pie Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Defect Severity Distribution</h2>
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
                        data={defectSeverityData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {defectSeverityData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${value} defects`} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </Card>

          {/* Defect Trends Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Defect Trends by Sprint</h2>
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
                      data={defectTrendsData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="sprint" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="created" 
                        name="Defects Created" 
                        stroke="#FF8042" 
                        strokeWidth={2}
                        activeDot={{ r: 8 }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="resolved" 
                        name="Defects Resolved" 
                        stroke="#82ca9d" 
                        strokeWidth={2}
                        activeDot={{ r: 8 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* Test Automation Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Test Automation Metrics</h2>
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
                    data={testAutomationData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    barSize={40}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="left" orientation="left" />
                    <YAxis yAxisId="right" orientation="right" domain={[0, 400]} />
                    <Tooltip />
                    <Legend />
                    <Bar 
                      yAxisId="left"
                      dataKey="count" 
                      name="Test Count" 
                      fill="#8884d8" 
                    />
                    <Bar 
                      yAxisId="right"
                      dataKey="runtime" 
                      name="Runtime (sec)" 
                      fill="#82ca9d" 
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Active Defects Table */}
        <Card className="border border-neutral-light overflow-hidden">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Top Active Defects</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Summary</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Component</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Severity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Priority</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Assignee</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Sprint</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-48" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                    </tr>
                  ))
                ) : (
                  activeDefects.map((defect, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{defect.id}</td>
                      <td className="px-6 py-4 text-sm font-medium">{defect.summary}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{defect.component}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getSeverityClass(defect.severity)}`}>
                          {defect.severity}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={getPriorityClass(defect.priority)}>
                          {defect.priority}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{defect.assignee}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(defect.status)}`}>
                          {defect.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{defect.sprint}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default QualityAssuranceView;