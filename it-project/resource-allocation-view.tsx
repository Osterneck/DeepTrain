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
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";

interface ResourceAllocationViewProps {
  isLoading: boolean;
}

const ResourceAllocationView: FC<ResourceAllocationViewProps> = ({ isLoading }) => {
  // Mock data for resource metrics
  const resourceMetrics = [
    {
      name: "Utilization Rate",
      value: "87%",
      change: "+3%",
      changeType: "positive",
      description: "Average resource utilization across all projects",
    },
    {
      name: "Available Resources",
      value: "28",
      change: "-5",
      changeType: "negative",
      description: "Team members available for new assignments",
    },
    {
      name: "Skill Gap Index",
      value: "12%",
      change: "-4%",
      changeType: "positive",
      description: "Gap between required and available skills",
    },
    {
      name: "Resource Cost",
      value: "$145K",
      change: "+$12K",
      changeType: "neutral",
      description: "Average monthly spend on human resources",
    },
  ];

  // Mock data for department allocation
  const departmentData = [
    { name: "Engineering", value: 42 },
    { name: "QA", value: 18 },
    { name: "DevOps", value: 12 },
    { name: "UX/UI", value: 16 },
    { name: "Product", value: 8 },
    { name: "Management", value: 4 },
  ];

  // Color palette for pie chart
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  // Mock data for resource forecast
  const forecastData = [
    { month: "Jun", required: 45, available: 42 },
    { month: "Jul", required: 48, available: 45 },
    { month: "Aug", required: 52, available: 48 },
    { month: "Sep", required: 55, available: 50 },
    { month: "Oct", required: 58, available: 52 },
    { month: "Nov", required: 60, available: 55 },
    { month: "Dec", required: 55, available: 56 },
  ];

  // Mock data for project allocations
  const projectAllocationData = [
    { name: "Project A", fullTime: 12, partTime: 5, contractors: 3 },
    { name: "Project B", fullTime: 8, partTime: 4, contractors: 6 },
    { name: "Project C", fullTime: 6, partTime: 2, contractors: 1 },
    { name: "Project D", fullTime: 5, partTime: 3, contractors: 2 },
    { name: "Project E", fullTime: 4, partTime: 1, contractors: 4 },
    { name: "Project F", fullTime: 3, partTime: 2, contractors: 0 },
  ];

  // Mock data for resource details
  const resourceDetails = [
    {
      id: "EMP-0145",
      name: "John Smith",
      role: "Senior Developer",
      department: "Engineering",
      allocation: 100,
      projects: "Project A, Project C",
      skills: "JavaScript, React, Node.js",
      availability: "Fully Allocated",
    },
    {
      id: "EMP-0156",
      name: "Sarah Johnson",
      role: "UX Designer",
      department: "UX/UI",
      allocation: 85,
      projects: "Project B",
      skills: "Figma, User Research, UI Design",
      availability: "Available (15%)",
    },
    {
      id: "EMP-0178",
      name: "Michael Chen",
      role: "DevOps Engineer",
      department: "DevOps",
      allocation: 120,
      projects: "Project A, Project D, Project F",
      skills: "AWS, Docker, Kubernetes",
      availability: "Overallocated",
    },
    {
      id: "EMP-0189",
      name: "Emily Davis",
      role: "QA Engineer",
      department: "QA",
      allocation: 75,
      projects: "Project B",
      skills: "Automated Testing, Selenium",
      availability: "Available (25%)",
    },
    {
      id: "EMP-0201",
      name: "David Wilson",
      role: "Project Manager",
      department: "Management",
      allocation: 100,
      projects: "Project C, Project E",
      skills: "Agile, Jira, Resource Planning",
      availability: "Fully Allocated",
    },
  ];

  // Helper function to get a style class based on allocation
  const getAllocationClass = (allocation: number) => {
    if (allocation > 100) return "text-danger font-bold";
    if (allocation < 85) return "text-success";
    return "text-neutral-dark";
  };

  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        {/* Resource Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {resourceMetrics.map((metric, index) => (
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
          {/* Department Allocation Pie Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Team Allocation by Department</h2>
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
                        data={departmentData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {departmentData.map((entry, index) => (
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

          {/* Resource Forecast Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">6-Month Resource Forecast</h2>
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
                      data={forecastData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="required" 
                        name="Required Resources" 
                        stroke="#8884d8" 
                        strokeWidth={2}
                        activeDot={{ r: 8 }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="available" 
                        name="Available Resources" 
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

        {/* Project Allocation Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Resource Allocation by Project</h2>
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
                    data={projectAllocationData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    stackOffset="expand"
                    barSize={40}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar 
                      dataKey="fullTime" 
                      name="Full-time Staff" 
                      stackId="a"
                      fill="#8884d8" 
                    />
                    <Bar 
                      dataKey="partTime" 
                      name="Part-time Staff" 
                      stackId="a"
                      fill="#82ca9d" 
                    />
                    <Bar 
                      dataKey="contractors" 
                      name="Contractors" 
                      stackId="a"
                      fill="#ffc658" 
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Resource Details Table */}
        <Card className="border border-neutral-light overflow-hidden">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Key Team Members & Allocation</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Role</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Department</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Allocation %</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Projects</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Key Skills</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Availability</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-36" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-28" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-40" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-40" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                    </tr>
                  ))
                ) : (
                  resourceDetails.map((resource, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{resource.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{resource.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{resource.role}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{resource.department}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold">
                        <span className={getAllocationClass(resource.allocation)}>
                          {resource.allocation}%
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm">{resource.projects}</td>
                      <td className="px-6 py-4 text-sm">{resource.skills}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          resource.availability === 'Overallocated' 
                            ? 'bg-red-100 text-red-800' 
                            : resource.availability === 'Fully Allocated'
                              ? 'bg-amber-100 text-amber-800'
                              : 'bg-green-100 text-green-800'
                        }`}>
                          {resource.availability}
                        </span>
                      </td>
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

export default ResourceAllocationView;