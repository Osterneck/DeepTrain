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
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from "recharts";

interface LogisticsPlanningViewProps {
  isLoading: boolean;
}

const LogisticsPlanningView: FC<LogisticsPlanningViewProps> = ({ isLoading }) => {
  // Mock data for logistics metrics
  const logisticsMetrics = [
    {
      name: "Supply Readiness",
      value: "92.5%",
      change: "+1.3%",
      changeType: "positive",
      description: "Overall readiness score",
    },
    {
      name: "Fuel Reserves",
      value: "85 days",
      change: "+5 days",
      changeType: "positive",
      description: "Field operation capacity",
    },
    {
      name: "Delivery Time",
      value: "36 hrs",
      change: "-4 hrs",
      changeType: "positive",
      description: "Avg. request to delivery",
    },
    {
      name: "Critical Items",
      value: "98.4%",
      change: "+0.6%",
      changeType: "positive",
      description: "Critical supply availability",
    },
  ];

  // Mock data for supply category distribution
  const supplyDistributionData = [
    { name: "Ammunition", value: 22 },
    { name: "Fuel", value: 18 },
    { name: "Food & Water", value: 15 },
    { name: "Medical", value: 12 },
    { name: "Equipment", value: 21 },
    { name: "Spare Parts", value: 12 },
  ];

  // Color palette for charts
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  // Mock data for supply chain performance
  const supplyChainData = [
    { category: "Requisition", current: 92, target: 95, optimal: 98 },
    { category: "Procurement", current: 88, target: 92, optimal: 95 },
    { category: "Transportation", current: 85, target: 90, optimal: 94 },
    { category: "Warehousing", current: 90, target: 92, optimal: 96 },
    { category: "Inventory Mgmt", current: 94, target: 96, optimal: 98 },
    { category: "Distribution", current: 87, target: 91, optimal: 95 },
  ];

  // Mock data for critical supply levels
  const criticalSupplyData = [
    { month: "Jan", actual: 96.2, minimum: 95.0 },
    { month: "Feb", actual: 97.1, minimum: 95.0 },
    { month: "Mar", actual: 98.3, minimum: 95.0 },
    { month: "Apr", actual: 97.5, minimum: 95.0 },
    { month: "May", actual: 98.4, minimum: 95.0 },
    { month: "Jun", actual: 97.8, minimum: 95.0 },
    { month: "Jul", actual: 96.5, minimum: 95.0 },
    { month: "Aug", actual: 97.3, minimum: 95.0 },
    { month: "Sep", actual: 98.6, minimum: 95.0 },
    { month: "Oct", actual: 97.9, minimum: 95.0 },
    { month: "Nov", actual: 98.2, minimum: 95.0 },
    { month: "Dec", actual: 98.5, minimum: 95.0 },
  ];

  // Mock data for demand forecast accuracy
  const demandForecastData = [
    { branch: "Army", accuracy: 91.2 },
    { branch: "Navy", accuracy: 93.5 },
    { branch: "Air Force", accuracy: 94.8 },
    { branch: "Marines", accuracy: 92.3 },
    { branch: "Space Force", accuracy: 95.1 },
  ];

  // Mock data for supply chain risk assessment
  const supplyChainRiskData = [
    { name: "Sourcing", risk: 35 },
    { name: "Production", risk: 28 },
    { name: "Transportation", risk: 42 },
    { name: "Weather", risk: 50 },
    { name: "Geopolitical", risk: 65 },
    { name: "Cyber", risk: 45 },
  ];

  // Mock data for active logistics operations
  const activeOperations = [
    {
      id: "OP-2025-1284",
      name: "Rapid Eagle Supply",
      type: "Resupply",
      location: "Eastern Theater",
      status: "In Progress",
      startDate: "2025-05-12",
      estCompletion: "2025-05-18",
      resourcesAllocated: "12 aircraft, 45 vehicles",
      completion: "68%",
      priority: "High",
    },
    {
      id: "OP-2025-1291",
      name: "Blue Shield Movement",
      type: "Equipment Transfer",
      location: "Northern Command",
      status: "Planning",
      startDate: "2025-05-20",
      estCompletion: "2025-06-05",
      resourcesAllocated: "8 vessels, 22 aircraft",
      completion: "N/A",
      priority: "Medium",
    },
    {
      id: "OP-2025-1302",
      name: "Desert Replenishment",
      type: "Base Resupply",
      location: "Southern Theater",
      status: "In Progress",
      startDate: "2025-05-08",
      estCompletion: "2025-05-22",
      resourcesAllocated: "60 vehicles, 4 aircraft",
      completion: "42%",
      priority: "Medium",
    },
    {
      id: "OP-2025-1315",
      name: "Swift Horizon",
      type: "Forward Deployment",
      location: "Western Command",
      status: "In Progress",
      startDate: "2025-05-10",
      estCompletion: "2025-05-25",
      resourcesAllocated: "15 aircraft, 80 vehicles",
      completion: "75%",
      priority: "Critical",
    },
    {
      id: "OP-2025-1328",
      name: "Naval Supply Line",
      type: "Maritime Logistics",
      location: "Pacific Fleet",
      status: "Completed",
      startDate: "2025-05-01",
      estCompletion: "2025-05-15",
      resourcesAllocated: "12 vessels, 8 helicopters",
      completion: "100%",
      priority: "High",
    },
  ];

  // Mock data for critical supply items
  const criticalItems = [
    {
      id: "SUP-2025-4218",
      name: "Advanced Targeting System",
      category: "Electronics",
      inventory: "142 units",
      demandRate: "18 units/month",
      leadTime: "45 days",
      reorderPoint: "32 units",
      status: "Sufficient",
      location: "Central Depot",
      lastDelivery: "2025-05-01",
    },
    {
      id: "SUP-2025-3175",
      name: "Tactical Field Medical Kits",
      category: "Medical",
      inventory: "285 units",
      demandRate: "35 units/month",
      leadTime: "30 days",
      reorderPoint: "45 units",
      status: "Sufficient",
      location: "Multiple Depots",
      lastDelivery: "2025-04-28",
    },
    {
      id: "SUP-2025-2846",
      name: "Secure Communication Modules",
      category: "Communications",
      inventory: "82 units",
      demandRate: "12 units/month",
      leadTime: "60 days",
      reorderPoint: "30 units",
      status: "Monitor",
      location: "Eastern Depot",
      lastDelivery: "2025-03-15",
    },
    {
      id: "SUP-2025-5427",
      name: "Advanced Ballistic Armor",
      category: "Personnel Protection",
      inventory: "620 units",
      demandRate: "50 units/month",
      leadTime: "20 days",
      reorderPoint: "150 units",
      status: "Sufficient",
      location: "Multiple Depots",
      lastDelivery: "2025-04-22",
    },
    {
      id: "SUP-2025-1937",
      name: "High-Capacity Fuel Containers",
      category: "Fuel",
      inventory: "68 units",
      demandRate: "15 units/month",
      leadTime: "35 days",
      reorderPoint: "25 units",
      status: "Low",
      location: "Southern Depot",
      lastDelivery: "2025-03-28",
    },
  ];

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Planning': return 'bg-purple-100 text-purple-800';
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Delayed': return 'bg-amber-100 text-amber-800';
      case 'Critical': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityClass = (priority: string) => {
    switch (priority) {
      case 'Critical': return 'bg-red-100 text-red-800';
      case 'High': return 'bg-amber-100 text-amber-800';
      case 'Medium': return 'bg-blue-100 text-blue-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getInventoryStatusClass = (status: string) => {
    switch (status) {
      case 'Sufficient': return 'bg-green-100 text-green-800';
      case 'Monitor': return 'bg-blue-100 text-blue-800';
      case 'Low': return 'bg-amber-100 text-amber-800';
      case 'Critical': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        {/* Logistics Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {logisticsMetrics.map((metric, index) => (
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
          {/* Supply Distribution Pie Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Supply Category Distribution</h2>
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
                        data={supplyDistributionData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {supplyDistributionData.map((entry, index) => (
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

          {/* Supply Chain Risk Radar Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Supply Chain Risk Assessment</h2>
            </div>
            
            {isLoading ? (
              <div className="chart-placeholder">
                <Skeleton className="h-80 w-full" />
              </div>
            ) : (
              <div className="p-4">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart outerRadius={90} width={500} height={300} data={supplyChainRiskData}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="name" />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} />
                      <Radar
                        name="Risk Level"
                        dataKey="risk"
                        stroke="#FF8042"
                        fill="#FF8042"
                        fillOpacity={0.6}
                      />
                      <Tooltip formatter={(value) => `${value}%`} />
                      <Legend />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* Supply Chain Performance Bar Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Supply Chain Performance (%)</h2>
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
                    data={supplyChainData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    layout="vertical"
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" domain={[70, 100]} />
                    <YAxis type="category" dataKey="category" width={100} />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Legend />
                    <Bar 
                      dataKey="current" 
                      name="Current" 
                      fill="#8884d8" 
                      barSize={20}
                    />
                    <Bar 
                      dataKey="target" 
                      name="Target" 
                      fill="#82ca9d" 
                      barSize={20}
                    />
                    <Bar 
                      dataKey="optimal" 
                      name="Optimal" 
                      fill="#ffc658" 
                      barSize={20}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Critical Supply Levels Line Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Critical Supply Availability (%)</h2>
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
                    data={criticalSupplyData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis domain={[90, 100]} />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="actual" 
                      name="Actual Availability" 
                      stroke="#8884d8" 
                      activeDot={{ r: 8 }} 
                      strokeWidth={2}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="minimum" 
                      name="Minimum Required" 
                      stroke="#ff8042" 
                      strokeDasharray="5 5"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Demand Forecast Accuracy Bar Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Demand Forecast Accuracy by Branch (%)</h2>
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
                    data={demandForecastData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="branch" />
                    <YAxis domain={[85, 100]} />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Legend />
                    <Bar 
                      dataKey="accuracy" 
                      name="Forecast Accuracy" 
                      fill="#82ca9d" 
                      barSize={40}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Active Operations Table */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Active Logistics Operations</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Operation</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Start Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Est. Completion</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Resources</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Completion</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Priority</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-28" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-28" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                    </tr>
                  ))
                ) : (
                  activeOperations.map((operation, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{operation.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{operation.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{operation.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{operation.location}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(operation.status)}`}>
                          {operation.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{operation.startDate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{operation.estCompletion}</td>
                      <td className="px-6 py-4 text-sm">{operation.resourcesAllocated}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {operation.completion !== "N/A" ? (
                          <div className="w-24 bg-gray-200 rounded-full h-2.5">
                            <div 
                              className="bg-blue-600 h-2.5 rounded-full" 
                              style={{ width: operation.completion }}
                            ></div>
                          </div>
                        ) : (
                          "N/A"
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getPriorityClass(operation.priority)}`}>
                          {operation.priority}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Critical Supply Items Table */}
        <Card className="border border-neutral-light overflow-hidden">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Critical Supply Items</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Item</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Inventory</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Demand Rate</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Lead Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Reorder Point</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Last Delivery</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-40" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-28" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-28" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-28" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                    </tr>
                  ))
                ) : (
                  criticalItems.map((item, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{item.id}</td>
                      <td className="px-6 py-4 text-sm font-medium">{item.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{item.category}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{item.inventory}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{item.demandRate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{item.leadTime}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{item.reorderPoint}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getInventoryStatusClass(item.status)}`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{item.location}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{item.lastDelivery}</td>
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

export default LogisticsPlanningView;