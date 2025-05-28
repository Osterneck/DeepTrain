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
} from "recharts";

interface LawEnforcementViewProps {
  isLoading: boolean;
}

const LawEnforcementView: FC<LawEnforcementViewProps> = ({ isLoading }) => {
  // Mock data for enforcement metrics
  const enforcementMetrics = [
    {
      name: "Crime Rate",
      value: "-5.8%",
      change: "-1.2%",
      changeType: "positive",
      description: "YoY change in overall crime rate",
    },
    {
      name: "Response Time",
      value: "7.2 min",
      change: "-0.5 min",
      changeType: "positive",
      description: "Average emergency response time",
    },
    {
      name: "Case Clearance",
      value: "68%",
      change: "+3%",
      changeType: "positive",
      description: "Rate of cases successfully cleared",
    },
    {
      name: "Officer Deployment",
      value: "85%",
      change: "+2%",
      changeType: "positive",
      description: "Current deployment vs. optimal staffing",
    },
  ];

  // Mock data for crime categories
  const crimeCategoryData = [
    { name: "Property Crime", value: 42 },
    { name: "Violent Crime", value: 18 },
    { name: "Fraud", value: 15 },
    { name: "Drug Offenses", value: 12 },
    { name: "Traffic Violations", value: 8 },
    { name: "Other", value: 5 },
  ];

  // Color palette for pie chart
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  // Mock data for crime trends
  const crimeTrendsData = [
    { month: "Jan", violent: 285, property: 580, drug: 210 },
    { month: "Feb", violent: 275, property: 550, drug: 225 },
    { month: "Mar", violent: 290, property: 540, drug: 215 },
    { month: "Apr", violent: 310, property: 560, drug: 230 },
    { month: "May", violent: 320, property: 590, drug: 240 },
    { month: "Jun", violent: null, property: null, drug: null, forecast: true },
    { month: "Jul", violent: null, property: null, drug: null, forecast: true },
    { month: "Aug", violent: null, property: null, drug: null, forecast: true },
    { month: "Sep", violent: null, property: null, drug: null, forecast: true },
    { month: "Oct", violent: null, property: null, drug: null, forecast: true },
    { month: "Nov", violent: null, property: null, drug: null, forecast: true },
    { month: "Dec", violent: null, property: null, drug: null, forecast: true },
  ];

  // Mock data for regional crime distribution
  const regionalCrimeData = [
    { region: "Downtown", violent: 145, property: 285, other: 112 },
    { region: "North County", violent: 85, property: 192, other: 75 },
    { region: "South District", violent: 120, property: 245, other: 96 },
    { region: "East Region", violent: 95, property: 180, other: 82 },
    { region: "West Region", violent: 105, property: 210, other: 90 },
  ];

  // Mock data for major cases
  const majorCases = [
    {
      id: "CASE-2025-128",
      type: "Fraud Investigation",
      status: "Active",
      priority: "High",
      location: "Financial District",
      assignedTo: "Det. M. Rodriguez",
      opened: "2025-04-28",
      lastUpdated: "2025-05-19",
      progress: 65,
    },
    {
      id: "CASE-2025-124",
      type: "Organized Crime",
      status: "Active",
      priority: "High",
      location: "Multiple Districts",
      assignedTo: "Det. S. Johnson",
      opened: "2025-04-22",
      lastUpdated: "2025-05-20",
      progress: 45,
    },
    {
      id: "CASE-2025-115",
      type: "Drug Trafficking",
      status: "Active",
      priority: "Medium",
      location: "Port Area",
      assignedTo: "Det. K. Williams",
      opened: "2025-04-10",
      lastUpdated: "2025-05-18",
      progress: 78,
    },
    {
      id: "CASE-2025-092",
      type: "Armed Robbery",
      status: "Pending Court",
      priority: "Medium",
      location: "North County Mall",
      assignedTo: "Det. T. Garcia",
      opened: "2025-03-15",
      lastUpdated: "2025-05-16",
      progress: 95,
    },
    {
      id: "CASE-2025-087",
      type: "Cybercrime",
      status: "Active",
      priority: "High",
      location: "Online/Various",
      assignedTo: "Det. J. Chen",
      opened: "2025-03-08",
      lastUpdated: "2025-05-17",
      progress: 52,
    },
  ];

  // Mock data for field units
  const fieldUnits = [
    {
      id: "UNIT-285",
      type: "Patrol",
      officers: "Off. Martinez, Off. Johnson",
      location: "Downtown - Sector 3",
      status: "On Duty",
      shift: "08:00 - 16:00",
      vehicle: "Patrol Car #42",
      activity: "Routine Patrol",
    },
    {
      id: "UNIT-287",
      type: "Traffic",
      officers: "Off. Wilson, Off. Davis",
      location: "Highway 101 - Mile 28",
      status: "On Duty",
      shift: "08:00 - 16:00",
      vehicle: "Motorcycle #15",
      activity: "Speed Enforcement",
    },
    {
      id: "UNIT-290",
      type: "K-9",
      officers: "Off. Thompson, K-9 Rex",
      location: "North County - Sector 2",
      status: "Responding",
      shift: "08:00 - 16:00",
      vehicle: "K-9 Unit #7",
      activity: "Suspect Search",
    },
    {
      id: "UNIT-295",
      type: "SWAT",
      officers: "Team Bravo - 6 Officers",
      location: "HQ",
      status: "Standby",
      shift: "12:00 - 20:00",
      vehicle: "Tactical Vehicle #3",
      activity: "Training/Ready Status",
    },
    {
      id: "UNIT-298",
      type: "Detective",
      officers: "Det. Lee, Det. Brown",
      location: "East Region - Sector 1",
      status: "On Duty",
      shift: "10:00 - 18:00",
      vehicle: "Unmarked #22",
      activity: "Witness Interviews",
    },
  ];

  const getPriorityClass = (priority: string) => {
    switch (priority) {
      case 'High': return 'text-danger font-semibold';
      case 'Medium': return 'text-amber-600';
      case 'Low': return 'text-success';
      default: return 'text-neutral-dark';
    }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-blue-100 text-blue-800';
      case 'Pending Court': return 'bg-purple-100 text-purple-800';
      case 'Closed': return 'bg-green-100 text-green-800';
      case 'Cold': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getUnitStatusClass = (status: string) => {
    switch (status) {
      case 'On Duty': return 'bg-green-100 text-green-800';
      case 'Responding': return 'bg-blue-100 text-blue-800';
      case 'Standby': return 'bg-amber-100 text-amber-800';
      case 'Off Duty': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        {/* Enforcement Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {enforcementMetrics.map((metric, index) => (
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
          {/* Crime Categories Pie Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Crime by Category</h2>
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
                        data={crimeCategoryData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {crimeCategoryData.map((entry, index) => (
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

          {/* Crime Trends Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Crime Trends (YTD)</h2>
            </div>
            
            {isLoading ? (
              <div className="chart-placeholder">
                <Skeleton className="h-80 w-full" />
              </div>
            ) : (
              <div className="p-4">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={crimeTrendsData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Area 
                        type="monotone" 
                        dataKey="violent" 
                        name="Violent Crime" 
                        stroke="#FF5733" 
                        fill="#FF5733" 
                        fillOpacity={0.5}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="property" 
                        name="Property Crime" 
                        stroke="#33A8FF" 
                        fill="#33A8FF" 
                        fillOpacity={0.5}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="drug" 
                        name="Drug Offenses" 
                        stroke="#33FF57" 
                        fill="#33FF57" 
                        fillOpacity={0.5}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* Regional Crime Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Crime Distribution by Region</h2>
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
                    data={regionalCrimeData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    barSize={20}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="region" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar 
                      dataKey="violent" 
                      name="Violent Crime" 
                      stackId="a" 
                      fill="#FF5733" 
                    />
                    <Bar 
                      dataKey="property" 
                      name="Property Crime" 
                      stackId="a" 
                      fill="#33A8FF" 
                    />
                    <Bar 
                      dataKey="other" 
                      name="Other Offenses" 
                      stackId="a" 
                      fill="#33FF57" 
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Major Cases Table */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Major Cases</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Case ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Priority</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Assigned To</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Opened</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Last Updated</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Progress</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                    </tr>
                  ))
                ) : (
                  majorCases.map((caseData, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{caseData.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{caseData.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={getPriorityClass(caseData.priority)}>
                          {caseData.priority}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{caseData.location}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{caseData.assignedTo}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{caseData.opened}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{caseData.lastUpdated}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(caseData.status)}`}>
                          {caseData.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div 
                            className="bg-primary h-2.5 rounded-full" 
                            style={{ width: `${caseData.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-right block mt-1">{caseData.progress}%</span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Field Units Table */}
        <Card className="border border-neutral-light overflow-hidden">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Field Units Deployment</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Unit ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Officers</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Shift</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Vehicle</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Activity</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-40" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                    </tr>
                  ))
                ) : (
                  fieldUnits.map((unit, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{unit.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{unit.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{unit.officers}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{unit.location}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getUnitStatusClass(unit.status)}`}>
                          {unit.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{unit.shift}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{unit.vehicle}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{unit.activity}</td>
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

export default LawEnforcementView;