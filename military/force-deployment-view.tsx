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
  Area,
  ComposedChart,
  Scatter
} from "recharts";

interface ForceDeploymentViewProps {
  isLoading: boolean;
}

const ForceDeploymentView: FC<ForceDeploymentViewProps> = ({ isLoading }) => {
  // Mock data for deployment metrics
  const deploymentMetrics = [
    {
      name: "Force Readiness",
      value: "88.2%",
      change: "+1.5%",
      changeType: "positive",
      description: "Overall deployment readiness",
    },
    {
      name: "Time to Deploy",
      value: "18 hrs",
      change: "-2 hrs",
      changeType: "positive",
      description: "Average deployment time",
    },
    {
      name: "Personnel Utilization",
      value: "82.7%",
      change: "+3.2%",
      changeType: "positive",
      description: "Optimal force allocation",
    },
    {
      name: "Logistics Efficiency",
      value: "78.5%",
      change: "+2.1%",
      changeType: "positive",
      description: "Supply chain optimization",
    },
  ];

  // Mock data for force composition
  const forceCompositionData = [
    { name: "Infantry", value: 42 },
    { name: "Armor", value: 15 },
    { name: "Artillery", value: 12 },
    { name: "Air Support", value: 18 },
    { name: "Engineering", value: 8 },
    { name: "Logistics", value: 5 },
  ];

  // Color palette for charts
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  // Mock data for unit response time
  const responseTimeData = [
    { unit: "Alpha Company", time: 22, readiness: 92 },
    { unit: "Bravo Platoon", time: 18, readiness: 85 },
    { unit: "Charlie Squad", time: 12, readiness: 88 },
    { unit: "Delta Team", time: 8, readiness: 95 },
    { unit: "Echo Battalion", time: 28, readiness: 82 },
  ];

  // Mock data for deployment scenarios effectiveness
  const scenarioEffectivenessData = [
    { scenario: "Urban Environment", effectiveness: 82, personnel: 250, time: 24 },
    { scenario: "Mountainous Terrain", effectiveness: 78, personnel: 180, time: 36 },
    { scenario: "Maritime Operations", effectiveness: 88, personnel: 120, time: 18 },
    { scenario: "Desert Conditions", effectiveness: 85, personnel: 200, time: 28 },
    { scenario: "Arctic Deployment", effectiveness: 72, personnel: 150, time: 48 },
  ];

  // Mock data for resource optimization
  const resourceOptimizationData = [
    { resource: "Personnel", current: 85, optimized: 95 },
    { resource: "Vehicles", current: 78, optimized: 92 },
    { resource: "Equipment", current: 82, optimized: 94 },
    { resource: "Supplies", current: 76, optimized: 90 },
    { resource: "Fuel", current: 80, optimized: 89 },
  ];

  // Mock data for deployment success trends
  const deploymentTrendsData = [
    { month: "Jan", success: 82, optimal: 90 },
    { month: "Feb", success: 84, optimal: 90 },
    { month: "Mar", success: 85, optimal: 90 },
    { month: "Apr", success: 88, optimal: 90 },
    { month: "May", success: 86, optimal: 90 },
    { month: "Jun", success: 90, optimal: 90 },
    { month: "Jul", success: 91, optimal: 90 },
    { month: "Aug", success: 89, optimal: 90 },
    { month: "Sep", success: 92, optimal: 90 },
    { month: "Oct", success: 94, optimal: 90 },
    { month: "Nov", success: 93, optimal: 90 },
    { month: "Dec", success: 95, optimal: 90 },
  ];

  // Mock data for active deployments
  const activeDeployments = [
    {
      id: "DEP-2025-0482",
      name: "Eastern Shield",
      type: "Defensive",
      location: "Eastern Theater",
      forces: "2nd Battalion, 3rd Mechanized",
      personnel: "560",
      vehicles: "42",
      startDate: "2025-05-10",
      duration: "45 days",
      status: "Active",
      readiness: "High",
    },
    {
      id: "DEP-2025-0495",
      name: "Southern Sentinel",
      type: "Border Security",
      location: "Southern Command",
      forces: "1st Regiment, Special Forces",
      personnel: "320",
      vehicles: "28",
      startDate: "2025-05-15",
      duration: "60 days",
      status: "Active",
      readiness: "High",
    },
    {
      id: "DEP-2025-0508",
      name: "Western Horizon",
      type: "Maritime Security",
      location: "Western Fleet",
      forces: "Naval Task Group 3",
      personnel: "480",
      vehicles: "12 vessels",
      startDate: "2025-04-28",
      duration: "90 days",
      status: "Active",
      readiness: "Medium",
    },
    {
      id: "DEP-2025-0521",
      name: "Northern Frontier",
      type: "Reconnaissance",
      location: "Northern Territory",
      forces: "5th Recon Division",
      personnel: "280",
      vehicles: "32",
      startDate: "2025-05-05",
      duration: "30 days",
      status: "Active",
      readiness: "High",
    },
    {
      id: "DEP-2025-0534",
      name: "Central Guardian",
      type: "Strategic Reserve",
      location: "Central Command",
      forces: "8th Armored Division",
      personnel: "850",
      vehicles: "75",
      startDate: "2025-05-18",
      duration: "120 days",
      status: "Preparation",
      readiness: "Medium",
    },
  ];

  // Mock data for deployment plans
  const deploymentPlans = [
    {
      id: "PLAN-2025-142",
      name: "Operation Swift Response",
      objective: "Rapid Force Projection",
      scenario: "Urban Environment",
      forces: "Combined Task Force Alpha",
      timeToDeployment: "12 hours",
      optimalSize: "240 personnel",
      equipmentNeeds: "Standard + Urban Ops Kits",
      successProbability: "92%",
      constraints: "Limited aerial insertion points",
      status: "Approved",
    },
    {
      id: "PLAN-2025-158",
      name: "Operation Mountain Shield",
      objective: "Terrain Control",
      scenario: "Mountainous Terrain",
      forces: "2nd Mountain Division",
      timeToDeployment: "24 hours",
      optimalSize: "320 personnel",
      equipmentNeeds: "Cold weather + Altitude gear",
      successProbability: "85%",
      constraints: "Limited vehicle mobility, communication challenges",
      status: "In Review",
    },
    {
      id: "PLAN-2025-163",
      name: "Operation Desert Wind",
      objective: "Area Reconnaissance",
      scenario: "Desert Conditions",
      forces: "3rd Recon Battalion",
      timeToDeployment: "18 hours",
      optimalSize: "180 personnel",
      equipmentNeeds: "Desert ops + Extended water supplies",
      successProbability: "88%",
      constraints: "Extreme temperatures, limited cover",
      status: "Approved",
    },
    {
      id: "PLAN-2025-179",
      name: "Operation Coastal Guardian",
      objective: "Maritime Security",
      scenario: "Maritime Operations",
      forces: "Naval Special Warfare Group",
      timeToDeployment: "8 hours",
      optimalSize: "120 personnel",
      equipmentNeeds: "Amphibious + Maritime interception",
      successProbability: "94%",
      constraints: "Weather dependence, limited land support",
      status: "Approved",
    },
    {
      id: "PLAN-2025-185",
      name: "Operation Northern Light",
      objective: "Forward Deployment",
      scenario: "Arctic Deployment",
      forces: "Arctic Response Group",
      timeToDeployment: "36 hours",
      optimalSize: "200 personnel",
      equipmentNeeds: "Extreme cold weather gear, specialized vehicles",
      successProbability: "78%",
      constraints: "Extreme conditions, limited infrastructure",
      status: "In Development",
    },
  ];

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Preparation': return 'bg-blue-100 text-blue-800';
      case 'Completed': return 'bg-purple-100 text-purple-800';
      case 'Suspended': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getReadinessClass = (readiness: string) => {
    switch (readiness) {
      case 'High': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-amber-100 text-amber-800';
      case 'Low': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPlanStatusClass = (status: string) => {
    switch (status) {
      case 'Approved': return 'bg-green-100 text-green-800';
      case 'In Review': return 'bg-blue-100 text-blue-800';
      case 'In Development': return 'bg-purple-100 text-purple-800';
      case 'Rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        {/* Deployment Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {deploymentMetrics.map((metric, index) => (
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
          {/* Force Composition Pie Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Force Composition</h2>
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
                        data={forceCompositionData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {forceCompositionData.map((entry, index) => (
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

          {/* Unit Response Time Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Unit Response Time vs Readiness</h2>
            </div>
            
            {isLoading ? (
              <div className="chart-placeholder">
                <Skeleton className="h-80 w-full" />
              </div>
            ) : (
              <div className="p-4">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                      data={responseTimeData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="unit" />
                      <YAxis yAxisId="left" domain={[0, 40]} label={{ value: 'Response Time (hrs)', angle: -90, position: 'insideLeft' }} />
                      <YAxis yAxisId="right" orientation="right" domain={[70, 100]} label={{ value: 'Readiness (%)', angle: 90, position: 'insideRight' }} />
                      <Tooltip />
                      <Legend />
                      <Bar 
                        yAxisId="left"
                        dataKey="time" 
                        name="Response Time (hrs)" 
                        fill="#8884d8" 
                        barSize={30}
                      />
                      <Line 
                        yAxisId="right"
                        type="monotone" 
                        dataKey="readiness" 
                        name="Readiness (%)" 
                        stroke="#ff7300"
                        strokeWidth={2}
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* Scenario Effectiveness Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Deployment Effectiveness by Scenario</h2>
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
                    data={scenarioEffectivenessData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="scenario" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip />
                    <Legend />
                    <Bar 
                      dataKey="effectiveness" 
                      name="Effectiveness (%)" 
                      fill="#8884d8" 
                      barSize={40}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Resource Optimization Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Resource Optimization</h2>
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
                    data={resourceOptimizationData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    layout="vertical"
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" domain={[70, 100]} />
                    <YAxis type="category" dataKey="resource" width={100} />
                    <Tooltip formatter={(value) => `${value}% Efficiency`} />
                    <Legend />
                    <Bar 
                      dataKey="current" 
                      name="Current Usage" 
                      fill="#8884d8" 
                      barSize={20}
                    />
                    <Bar 
                      dataKey="optimized" 
                      name="Optimized Usage" 
                      fill="#82ca9d" 
                      barSize={20}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Deployment Success Trends Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Deployment Success Trends (%)</h2>
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
                    data={deploymentTrendsData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis domain={[70, 100]} />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="success" 
                      name="Success Rate" 
                      stroke="#8884d8" 
                      activeDot={{ r: 8 }} 
                      strokeWidth={2}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="optimal" 
                      name="Target" 
                      stroke="#82ca9d" 
                      strokeDasharray="5 5"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Active Deployments Table */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Active Deployments</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Operation</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Forces</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Personnel</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Vehicles</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Start Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Duration</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Readiness</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-28" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-36" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                    </tr>
                  ))
                ) : (
                  activeDeployments.map((deployment, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{deployment.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{deployment.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{deployment.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{deployment.location}</td>
                      <td className="px-6 py-4 text-sm">{deployment.forces}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center">{deployment.personnel}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{deployment.vehicles}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{deployment.startDate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{deployment.duration}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(deployment.status)}`}>
                          {deployment.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getReadinessClass(deployment.readiness)}`}>
                          {deployment.readiness}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Deployment Plans Table */}
        <Card className="border border-neutral-light overflow-hidden">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Deployment Plans</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Plan Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Objective</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Scenario</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Forces</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Time to Deploy</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Optimal Size</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Equipment</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Success Prob.</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Constraints</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-40" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-28" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-36" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-40" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-48" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                    </tr>
                  ))
                ) : (
                  deploymentPlans.map((plan, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{plan.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{plan.name}</td>
                      <td className="px-6 py-4 text-sm">{plan.objective}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{plan.scenario}</td>
                      <td className="px-6 py-4 text-sm">{plan.forces}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{plan.timeToDeployment}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{plan.optimalSize}</td>
                      <td className="px-6 py-4 text-sm">{plan.equipmentNeeds}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{plan.successProbability}</td>
                      <td className="px-6 py-4 text-sm">{plan.constraints}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getPlanStatusClass(plan.status)}`}>
                          {plan.status}
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

export default ForceDeploymentView;