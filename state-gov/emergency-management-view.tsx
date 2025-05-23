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
  ComposedChart,
  Area,
} from "recharts";

interface EmergencyManagementViewProps {
  isLoading: boolean;
}

const EmergencyManagementView: FC<EmergencyManagementViewProps> = ({ isLoading }) => {
  // Mock data for emergency metrics
  const emergencyMetrics = [
    {
      name: "Active Incidents",
      value: "14",
      change: "-3",
      changeType: "positive",
      description: "Current emergency events being managed",
    },
    {
      name: "Response Time",
      value: "8.4 min",
      change: "-1.2 min",
      changeType: "positive",
      description: "Average emergency response time",
    },
    {
      name: "Resources Deployed",
      value: "287",
      change: "+42",
      changeType: "neutral",
      description: "Total personnel and equipment deployed",
    },
    {
      name: "Alert Level",
      value: "Moderate",
      change: "No change",
      changeType: "neutral",
      description: "Current statewide emergency status",
    },
  ];

  // Mock data for incident types
  const incidentTypeData = [
    { name: "Wildfire", value: 5 },
    { name: "Flood", value: 3 },
    { name: "Severe Weather", value: 4 },
    { name: "Hazmat", value: 1 },
    { name: "Infrastructure", value: 1 },
  ];

  // Color palette for pie chart
  const COLORS = ['#FF5733', '#33A8FF', '#FFBB28', '#8C33FF', '#33FF57'];

  // Mock data for resource allocation
  const resourceAllocationData = [
    { region: "North", fire: 45, police: 38, medical: 32, other: 12 },
    { region: "South", fire: 35, police: 42, medical: 28, other: 15 },
    { region: "East", fire: 28, police: 30, medical: 25, other: 10 },
    { region: "West", fire: 52, police: 35, medical: 30, other: 18 },
    { region: "Central", fire: 40, police: 45, medical: 35, other: 20 },
  ];

  // Mock data for incident timeline
  const incidentTimelineData = [
    { month: "Jan", incidents: 12, resolved: 11 },
    { month: "Feb", incidents: 15, resolved: 13 },
    { month: "Mar", incidents: 18, resolved: 16 },
    { month: "Apr", incidents: 22, resolved: 20 },
    { month: "May", incidents: 14, resolved: 11 },
    { month: "Jun", incidents: null, forecast: 16 },
    { month: "Jul", incidents: null, forecast: 20 },
    { month: "Aug", incidents: null, forecast: 24 },
    { month: "Sep", incidents: null, forecast: 18 },
    { month: "Oct", incidents: null, forecast: 14 },
    { month: "Nov", incidents: null, forecast: 12 },
    { month: "Dec", incidents: null, forecast: 10 },
  ];

  // Mock data for active incidents
  const activeIncidents = [
    {
      id: "INC-2025-042",
      type: "Wildfire",
      location: "Pinewood County, Northern Forest",
      started: "2025-05-18 10:23",
      status: "Containment",
      severity: "High",
      lead: "Fire Chief M. Johnson",
      resources: "42 personnel, 8 trucks, 2 helicopters",
      evacuation: "Yes - 250 residents",
    },
    {
      id: "INC-2025-038",
      type: "Flood",
      location: "Riverside Community, Eastern District",
      started: "2025-05-15 02:45",
      status: "Response",
      severity: "Moderate",
      lead: "Emergency Dir. S. Williams",
      resources: "35 personnel, 12 boats, 4 pumps",
      evacuation: "Partial - 120 residents",
    },
    {
      id: "INC-2025-035",
      type: "Severe Weather",
      location: "Central County, Multiple Districts",
      started: "2025-05-19 18:10",
      status: "Monitoring",
      severity: "Moderate",
      lead: "Weather Response T. Garcia",
      resources: "28 personnel, 15 vehicles",
      evacuation: "No",
    },
    {
      id: "INC-2025-031",
      type: "Infrastructure",
      location: "Westbridge, Power Grid Sector 4",
      started: "2025-05-17 14:32",
      status: "Recovery",
      severity: "Low",
      lead: "Infrastructure L. Martinez",
      resources: "18 personnel, 8 utility trucks",
      evacuation: "No",
    },
    {
      id: "INC-2025-028",
      type: "Hazmat",
      location: "Industrial Park, Southern District",
      started: "2025-05-16 08:15",
      status: "Contained",
      severity: "High",
      lead: "Hazmat Chief K. Thompson",
      resources: "24 personnel, 6 specialized units",
      evacuation: "Yes - 85 workers",
    },
  ];

  // Mock data for emergency shelters
  const emergencyShelters = [
    {
      id: "SHE-2025-001",
      name: "North County High School",
      capacity: 450,
      current: 185,
      status: "Active",
      supplies: "Adequate",
      medicalStaff: "Yes",
      lastUpdated: "2025-05-20 08:15",
    },
    {
      id: "SHE-2025-002",
      name: "Eastern Community Center",
      capacity: 250,
      current: 120,
      status: "Active",
      supplies: "Low - Food",
      medicalStaff: "Yes",
      lastUpdated: "2025-05-20 07:45",
    },
    {
      id: "SHE-2025-003",
      name: "Southern Recreation Complex",
      capacity: 350,
      current: 0,
      status: "Standby",
      supplies: "Adequate",
      medicalStaff: "No",
      lastUpdated: "2025-05-19 16:30",
    },
    {
      id: "SHE-2025-004",
      name: "Western Elementary School",
      capacity: 200,
      current: 45,
      status: "Active",
      supplies: "Adequate",
      medicalStaff: "Limited",
      lastUpdated: "2025-05-20 08:30",
    },
  ];

  const getSeverityClass = (severity: string) => {
    switch (severity) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Moderate': return 'bg-amber-100 text-amber-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Response': return 'bg-red-100 text-red-800';
      case 'Containment': return 'bg-amber-100 text-amber-800';
      case 'Contained': return 'bg-blue-100 text-blue-800';
      case 'Recovery': return 'bg-green-100 text-green-800';
      case 'Monitoring': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getShelterStatusClass = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Standby': return 'bg-blue-100 text-blue-800';
      case 'Full': return 'bg-red-100 text-red-800';
      case 'Closing': return 'bg-amber-100 text-amber-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSupplyClass = (supplies: string) => {
    if (supplies.includes('Low')) return 'text-danger font-semibold';
    if (supplies.includes('Limited')) return 'text-amber-600';
    return 'text-success';
  };

  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        {/* Emergency Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {emergencyMetrics.map((metric, index) => (
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
          {/* Incident Types Pie Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Active Incidents by Type</h2>
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
                        data={incidentTypeData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {incidentTypeData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${value} incidents`} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </Card>

          {/* Incident Timeline Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Incident Timeline</h2>
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
                      data={incidentTimelineData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar 
                        dataKey="incidents" 
                        name="Incidents Reported" 
                        barSize={20} 
                        fill="#8884d8" 
                      />
                      <Bar 
                        dataKey="resolved" 
                        name="Incidents Resolved" 
                        barSize={20} 
                        fill="#82ca9d" 
                      />
                      <Line 
                        type="monotone" 
                        dataKey="forecast" 
                        name="Incident Forecast" 
                        stroke="#ff7300"
                        strokeDasharray="5 5" 
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* Resource Allocation Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Emergency Resource Allocation by Region</h2>
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
                    data={resourceAllocationData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    barSize={20}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="region" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar 
                      dataKey="fire" 
                      name="Fire Personnel" 
                      stackId="a" 
                      fill="#FF5733" 
                    />
                    <Bar 
                      dataKey="police" 
                      name="Police/Security" 
                      stackId="a" 
                      fill="#33A8FF" 
                    />
                    <Bar 
                      dataKey="medical" 
                      name="Medical Teams" 
                      stackId="a" 
                      fill="#33FF57" 
                    />
                    <Bar 
                      dataKey="other" 
                      name="Other Resources" 
                      stackId="a" 
                      fill="#8C33FF" 
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Active Incidents Table */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Active Emergency Incidents</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Started</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Severity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Lead</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Resources</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Evacuation</th>
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
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-48" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                    </tr>
                  ))
                ) : (
                  activeIncidents.map((incident, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{incident.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{incident.type}</td>
                      <td className="px-6 py-4 text-sm">{incident.location}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{incident.started}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(incident.status)}`}>
                          {incident.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getSeverityClass(incident.severity)}`}>
                          {incident.severity}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{incident.lead}</td>
                      <td className="px-6 py-4 text-sm">{incident.resources}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{incident.evacuation}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Emergency Shelters Table */}
        <Card className="border border-neutral-light overflow-hidden">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Emergency Shelter Status</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Shelter Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Capacity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Current Occupancy</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Supplies</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Medical Staff</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Last Updated</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(4)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-40" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                    </tr>
                  ))
                ) : (
                  emergencyShelters.map((shelter, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{shelter.id}</td>
                      <td className="px-6 py-4 text-sm font-medium">{shelter.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{shelter.capacity}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {shelter.current} 
                        <span className="text-neutral-medium text-xs ml-1">
                          ({Math.round((shelter.current / shelter.capacity) * 100)}%)
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getShelterStatusClass(shelter.status)}`}>
                          {shelter.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={getSupplyClass(shelter.supplies)}>
                          {shelter.supplies}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{shelter.medicalStaff}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{shelter.lastUpdated}</td>
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

export default EmergencyManagementView;