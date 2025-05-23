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

interface CommunicationSystemsViewProps {
  isLoading: boolean;
}

const CommunicationSystemsView: FC<CommunicationSystemsViewProps> = ({ isLoading }) => {
  // Mock data for communication metrics
  const communicationMetrics = [
    {
      name: "Network Uptime",
      value: "99.8%",
      change: "+0.2%",
      changeType: "positive",
      description: "System availability",
    },
    {
      name: "Signal Integrity",
      value: "95.2%",
      change: "+1.8%",
      changeType: "positive",
      description: "Transmission quality",
    },
    {
      name: "Encryption Level",
      value: "Level 4",
      change: "+1 level",
      changeType: "positive",
      description: "Security protocol tier",
    },
    {
      name: "Network Reach",
      value: "97.5%",
      change: "+2.3%",
      changeType: "positive",
      description: "Coverage of operational areas",
    },
  ];

  // Mock data for communication types
  const communicationTypesData = [
    { name: "Satellite", value: 32 },
    { name: "Radio", value: 28 },
    { name: "Data Networks", value: 25 },
    { name: "Voice Networks", value: 10 },
    { name: "Field Comms", value: 5 },
  ];

  // Color palette for charts
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  // Mock data for network performance
  const networkPerformanceData = [
    { 
      network: "Satellite Communications", 
      bandwidth: 85, 
      reliability: 95, 
      security: 98,
      latency: 30
    },
    { 
      network: "Tactical Radio Network", 
      bandwidth: 65, 
      reliability: 88, 
      security: 92,
      latency: 15
    },
    { 
      network: "Command Data Network", 
      bandwidth: 92, 
      reliability: 98, 
      security: 99,
      latency: 5
    },
    { 
      network: "Field Communications", 
      bandwidth: 58, 
      reliability: 80, 
      security: 85,
      latency: 10
    },
    { 
      network: "Emergency Channels", 
      bandwidth: 45, 
      reliability: 99, 
      security: 90,
      latency: 8
    },
  ];

  // Mock data for geographical coverage
  const geographicalCoverageData = [
    { region: "Northern Theater", coverage: 98, redundancy: 3, reliability: 95 },
    { region: "Eastern Zone", coverage: 96, redundancy: 2, reliability: 92 },
    { region: "Southern Command", coverage: 92, redundancy: 2, reliability: 90 },
    { region: "Western Area", coverage: 94, redundancy: 3, reliability: 93 },
    { region: "Central Region", coverage: 99, redundancy: 4, reliability: 97 },
  ];

  // Mock data for encryption effectiveness
  const encryptionEffectivenessData = [
    { 
      protocol: "Advanced Quantum", 
      effectiveAgainstBasic: 100, 
      effectiveAgainstIntermediate: 99, 
      effectiveAgainstAdvanced: 95 
    },
    { 
      protocol: "Military-Grade AES", 
      effectiveAgainstBasic: 100, 
      effectiveAgainstIntermediate: 98, 
      effectiveAgainstAdvanced: 85 
    },
    { 
      protocol: "Field Encryption", 
      effectiveAgainstBasic: 98, 
      effectiveAgainstIntermediate: 85, 
      effectiveAgainstAdvanced: 65 
    },
    { 
      protocol: "Emergency Protocol", 
      effectiveAgainstBasic: 95, 
      effectiveAgainstIntermediate: 80, 
      effectiveAgainstAdvanced: 60 
    },
    { 
      protocol: "Legacy Systems", 
      effectiveAgainstBasic: 90, 
      effectiveAgainstIntermediate: 70, 
      effectiveAgainstAdvanced: 40 
    },
  ];

  // Mock data for communication systems uptime
  const systemUptimeData = [
    { day: "Mon", primary: 99.9, backup: 100, emergency: 100 },
    { day: "Tue", primary: 99.8, backup: 100, emergency: 100 },
    { day: "Wed", primary: 99.7, backup: 99.9, emergency: 100 },
    { day: "Thu", primary: 99.9, backup: 100, emergency: 100 },
    { day: "Fri", primary: 100, backup: 100, emergency: 100 },
    { day: "Sat", primary: 99.8, backup: 99.9, emergency: 100 },
    { day: "Sun", primary: 99.9, backup: 100, emergency: 100 },
  ];

  // Mock data for active systems
  const activeSystems = [
    {
      id: "COMM-2025-0482",
      name: "Strategic Satellite Network",
      type: "Satellite Communications",
      coverage: "Global",
      bandwidth: "10 Gbps",
      security: "Level 5 - Quantum Encryption",
      reliability: "99.99%",
      status: "Operational",
      lastMaintenance: "2025-04-28",
      nextMaintenance: "2025-07-28",
      deploymentDate: "2023-11-15",
    },
    {
      id: "COMM-2025-0493",
      name: "Tactical Field Network",
      type: "Radio + Data",
      coverage: "Theater-wide",
      bandwidth: "2 Gbps",
      security: "Level 4 - Advanced Encryption",
      reliability: "98.5%",
      status: "Operational",
      lastMaintenance: "2025-05-05",
      nextMaintenance: "2025-08-05",
      deploymentDate: "2024-01-10",
    },
    {
      id: "COMM-2025-0507",
      name: "Command Data Infrastructure",
      type: "Fiber Optic Network",
      coverage: "Strategic Locations",
      bandwidth: "25 Gbps",
      security: "Level 5 - Quantum Encryption",
      reliability: "99.999%",
      status: "Operational",
      lastMaintenance: "2025-05-12",
      nextMaintenance: "2025-08-12",
      deploymentDate: "2023-08-22",
    },
    {
      id: "COMM-2025-0518",
      name: "Emergency Response System",
      type: "Multi-band Radio",
      coverage: "Global",
      bandwidth: "1 Gbps",
      security: "Level 4 - Advanced Encryption",
      reliability: "99.97%",
      status: "Standby",
      lastMaintenance: "2025-05-10",
      nextMaintenance: "2025-08-10",
      deploymentDate: "2024-02-15",
    },
    {
      id: "COMM-2025-0525",
      name: "Field Tactical Mesh",
      type: "Mobile Mesh Network",
      coverage: "Deployment Zone",
      bandwidth: "500 Mbps",
      security: "Level 3 - Standard Military",
      reliability: "95.8%",
      status: "Operational",
      lastMaintenance: "2025-04-30",
      nextMaintenance: "2025-06-30",
      deploymentDate: "2024-03-20",
    },
  ];

  // Mock data for systems in development
  const systemsInDevelopment = [
    {
      id: "DEV-2025-142",
      name: "Quantum Communication Network",
      type: "Quantum Entanglement",
      purpose: "Absolutely Secure Communications",
      stage: "Advanced Research",
      completionEstimate: "2027-Q4",
      securityLevel: "Level 6 - Quantum",
      bandwidth: "5 Tbps (projected)",
      coverage: "Strategic Command",
      leadResearcher: "Dr. A. Quantum",
      status: "On Schedule",
      priority: "Critical",
    },
    {
      id: "DEV-2025-156",
      name: "Neural Interface Communications",
      type: "Direct Neural Link",
      purpose: "High-Speed Battlefield Awareness",
      stage: "Prototype Testing",
      completionEstimate: "2026-Q3",
      securityLevel: "Level 5 - Advanced",
      bandwidth: "1 Tbps (projected)",
      coverage: "Special Forces",
      leadResearcher: "Dr. N. Cortex",
      status: "On Schedule",
      priority: "High",
    },
    {
      id: "DEV-2025-168",
      name: "Atmospheric Relay Network",
      type: "High-altitude Platform",
      purpose: "Resilient Theater Communications",
      stage: "Field Testing",
      completionEstimate: "2026-Q1",
      securityLevel: "Level 4 - Military Grade",
      bandwidth: "20 Gbps (projected)",
      coverage: "Regional",
      leadResearcher: "Dr. I. Skyhigh",
      status: "Delayed",
      priority: "Medium",
    },
    {
      id: "DEV-2025-174",
      name: "Autonomous Mesh Deployment",
      type: "Self-Forming Network",
      purpose: "Rapid Battlefield Network Deployment",
      stage: "Prototype Development",
      completionEstimate: "2026-Q2",
      securityLevel: "Level 4 - Military Grade",
      bandwidth: "2 Gbps (projected)",
      coverage: "Tactical",
      leadResearcher: "Dr. M. Autonomous",
      status: "On Schedule",
      priority: "High",
    },
    {
      id: "DEV-2025-182",
      name: "Subspace Frequency System",
      type: "Experimental Frequency",
      purpose: "Anti-jamming Communications",
      stage: "Theoretical Research",
      completionEstimate: "2028-Q1",
      securityLevel: "Level 5 - Advanced",
      bandwidth: "Unknown",
      coverage: "Global (projected)",
      leadResearcher: "Dr. F. Subspace",
      status: "Early Stage",
      priority: "Medium",
    },
  ];

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Operational': return 'bg-green-100 text-green-800';
      case 'Standby': return 'bg-blue-100 text-blue-800';
      case 'Maintenance': return 'bg-amber-100 text-amber-800';
      case 'Offline': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStageClass = (stage: string) => {
    switch (stage) {
      case 'Advanced Research': return 'bg-purple-100 text-purple-800';
      case 'Prototype Testing': return 'bg-blue-100 text-blue-800';
      case 'Field Testing': return 'bg-green-100 text-green-800';
      case 'Prototype Development': return 'bg-amber-100 text-amber-800';
      case 'Theoretical Research': return 'bg-indigo-100 text-indigo-800';
      case 'Early Stage': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getDevStatusClass = (status: string) => {
    switch (status) {
      case 'On Schedule': return 'bg-green-100 text-green-800';
      case 'Delayed': return 'bg-amber-100 text-amber-800';
      case 'Early Stage': return 'bg-blue-100 text-blue-800';
      case 'Behind Schedule': return 'bg-red-100 text-red-800';
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

  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        {/* Communication Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {communicationMetrics.map((metric, index) => (
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
          {/* Communication Types Pie Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Communication Types Distribution</h2>
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
                        data={communicationTypesData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {communicationTypesData.map((entry, index) => (
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

          {/* Geographical Coverage Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Geographical Coverage Analysis</h2>
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
                      data={geographicalCoverageData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="region" />
                      <YAxis domain={[0, 100]} />
                      <Tooltip formatter={(value) => `${value}%`} />
                      <Legend />
                      <Bar dataKey="coverage" name="Coverage %" fill="#8884d8" />
                      <Bar dataKey="reliability" name="Reliability %" fill="#82ca9d" />
                      <Bar dataKey="redundancy" name="Redundancy Factor" fill="#ffc658" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* Network Performance Radar Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Network Performance Assessment</h2>
          </div>
          
          {isLoading ? (
            <div className="chart-placeholder">
              <Skeleton className="h-80 w-full" />
            </div>
          ) : (
            <div className="p-4">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius={80} data={networkPerformanceData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="network" />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} />
                    <Radar
                      name="Bandwidth"
                      dataKey="bandwidth"
                      stroke="#8884d8"
                      fill="#8884d8"
                      fillOpacity={0.4}
                    />
                    <Radar
                      name="Reliability"
                      dataKey="reliability"
                      stroke="#82ca9d"
                      fill="#82ca9d"
                      fillOpacity={0.4}
                    />
                    <Radar
                      name="Security"
                      dataKey="security"
                      stroke="#ffc658"
                      fill="#ffc658"
                      fillOpacity={0.4}
                    />
                    <Legend />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Encryption Effectiveness Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Encryption Effectiveness vs Threat Levels</h2>
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
                    data={encryptionEffectivenessData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="protocol" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Legend />
                    <Bar 
                      dataKey="effectiveAgainstBasic" 
                      name="vs Basic Threats" 
                      fill="#82ca9d" 
                    />
                    <Bar 
                      dataKey="effectiveAgainstIntermediate" 
                      name="vs Intermediate Threats" 
                      fill="#8884d8" 
                    />
                    <Bar 
                      dataKey="effectiveAgainstAdvanced" 
                      name="vs Advanced Threats" 
                      fill="#ff8042" 
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* System Uptime Line Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Communication Systems Uptime (%)</h2>
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
                    data={systemUptimeData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis domain={[99, 100]} />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="primary" 
                      name="Primary Systems" 
                      stroke="#8884d8" 
                      activeDot={{ r: 8 }} 
                      strokeWidth={2}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="backup" 
                      name="Backup Systems" 
                      stroke="#82ca9d" 
                      activeDot={{ r: 8 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="emergency" 
                      name="Emergency Systems" 
                      stroke="#ff8042" 
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Active Systems Table */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Active Communication Systems</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">System Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Coverage</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Bandwidth</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Security</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Reliability</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Last Maintenance</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Next Maintenance</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Deployment Date</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-40" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                    </tr>
                  ))
                ) : (
                  activeSystems.map((system, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{system.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{system.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{system.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{system.coverage}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{system.bandwidth}</td>
                      <td className="px-6 py-4 text-sm">{system.security}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{system.reliability}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(system.status)}`}>
                          {system.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{system.lastMaintenance}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{system.nextMaintenance}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{system.deploymentDate}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Systems in Development Table */}
        <Card className="border border-neutral-light overflow-hidden">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Communication Systems in Development</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">System</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Purpose</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Stage</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Est. Completion</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Security Level</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Bandwidth</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Coverage</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Lead Researcher</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Priority</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-40" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-40" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-28" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-28" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-28" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                    </tr>
                  ))
                ) : (
                  systemsInDevelopment.map((system, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{system.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{system.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{system.type}</td>
                      <td className="px-6 py-4 text-sm">{system.purpose}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStageClass(system.stage)}`}>
                          {system.stage}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{system.completionEstimate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{system.securityLevel}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{system.bandwidth}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{system.coverage}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{system.leadResearcher}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getDevStatusClass(system.status)}`}>
                          {system.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getPriorityClass(system.priority)}`}>
                          {system.priority}
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

export default CommunicationSystemsView;