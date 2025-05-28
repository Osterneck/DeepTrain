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

interface CyberDefenseViewProps {
  isLoading: boolean;
}

const CyberDefenseView: FC<CyberDefenseViewProps> = ({ isLoading }) => {
  // Mock data for cyber metrics
  const cyberMetrics = [
    {
      name: "Network Security",
      value: "83.5%",
      change: "+2.8%",
      changeType: "positive",
      description: "Overall security posture",
    },
    {
      name: "Threat Detection",
      value: "91.2%",
      change: "+4.5%",
      changeType: "positive",
      description: "Detection efficiency",
    },
    {
      name: "Response Time",
      value: "4.2 min",
      change: "-1.5 min",
      changeType: "positive",
      description: "Avg. incident response",
    },
    {
      name: "System Hardening",
      value: "76.8%",
      change: "+3.2%",
      changeType: "positive",
      description: "Infrastructure resilience",
    },
  ];

  // Mock data for threat distribution
  const threatDistributionData = [
    { name: "APT", value: 35 },
    { name: "Malware", value: 25 },
    { name: "DDoS", value: 15 },
    { name: "Insider", value: 12 },
    { name: "Zero-Day", value: 8 },
    { name: "Other", value: 5 },
  ];

  // Color palette for charts
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  // Mock data for asset vulnerability
  const assetVulnerabilityData = [
    { 
      asset: "Command Systems", 
      critical: 82, 
      high: 45, 
      medium: 28, 
      low: 15 
    },
    { 
      asset: "Communication Networks", 
      critical: 75, 
      high: 52, 
      medium: 35, 
      low: 18 
    },
    { 
      asset: "Intelligence Databases", 
      critical: 92, 
      high: 38, 
      medium: 22, 
      low: 12 
    },
    { 
      asset: "Weapon Systems", 
      critical: 88, 
      high: 42, 
      medium: 25, 
      low: 8 
    },
    { 
      asset: "Logistics Systems", 
      critical: 68, 
      high: 55, 
      medium: 32, 
      low: 20 
    },
  ];

  // Mock data for defense capability assessment
  const defenseCapabilityData = [
    { capability: "Perimeter Defense", current: 78, target: 90 },
    { capability: "Endpoint Security", current: 82, target: 95 },
    { capability: "Network Monitoring", current: 86, target: 92 },
    { capability: "Threat Intelligence", current: 75, target: 85 },
    { capability: "Incident Response", current: 80, target: 90 },
    { capability: "Recovery Systems", current: 72, target: 88 },
  ];

  // Mock data for incident trends
  const incidentTrendsData = [
    { month: "Jan", incidents: 68, resolved: 65 },
    { month: "Feb", incidents: 72, resolved: 70 },
    { month: "Mar", incidents: 85, resolved: 82 },
    { month: "Apr", incidents: 78, resolved: 75 },
    { month: "May", incidents: 65, resolved: 64 },
    { month: "Jun", incidents: 58, resolved: 58 },
    { month: "Jul", incidents: 62, resolved: 61 },
    { month: "Aug", incidents: 75, resolved: 73 },
    { month: "Sep", incidents: 82, resolved: 80 },
    { month: "Oct", incidents: 68, resolved: 66 },
    { month: "Nov", incidents: 72, resolved: 71 },
    { month: "Dec", incidents: 65, resolved: 64 },
  ];

  // Mock data for threat intelligence effectiveness
  const intelligenceEffectivenessData = [
    { source: "Internal Analysis", accuracy: 86, coverage: 72, timeliness: 82 },
    { source: "Allied Intel", accuracy: 82, coverage: 68, timeliness: 75 },
    { source: "Cybersecurity Vendors", accuracy: 78, coverage: 85, timeliness: 88 },
    { source: "Open Source", accuracy: 72, coverage: 92, timeliness: 65 },
    { source: "Dark Web Monitoring", accuracy: 75, coverage: 65, timeliness: 70 },
  ];

  // Mock data for active threats
  const activeThreats = [
    {
      id: "THREAT-2025-1284",
      name: "Operation Shadow Network",
      type: "APT",
      attribution: "State Actor - Tier 1",
      targetSystems: "Command & Control Networks",
      detectionDate: "2025-05-08",
      threatLevel: "Critical",
      status: "Active Investigation",
      mitigationStatus: "Containment Applied",
      potentialImpact: "High",
    },
    {
      id: "THREAT-2025-1295",
      name: "BlueStrike Malware",
      type: "Advanced Malware",
      attribution: "Non-State Actor",
      targetSystems: "Communication Infrastructure",
      detectionDate: "2025-05-12",
      threatLevel: "High",
      status: "Active Investigation",
      mitigationStatus: "Partial Mitigation",
      potentialImpact: "Medium-High",
    },
    {
      id: "THREAT-2025-1308",
      name: "Silent Eagle",
      type: "Backdoor",
      attribution: "State Sponsored - Tier 2",
      targetSystems: "Intelligence Databases",
      detectionDate: "2025-05-10",
      threatLevel: "High",
      status: "Monitoring",
      mitigationStatus: "Fully Mitigated",
      potentialImpact: "High",
    },
    {
      id: "THREAT-2025-1315",
      name: "Thunderstorm Campaign",
      type: "DDoS",
      attribution: "Hacktivists",
      targetSystems: "Public-Facing Web Infrastructure",
      detectionDate: "2025-05-14",
      threatLevel: "Medium",
      status: "Resolved",
      mitigationStatus: "Fully Mitigated",
      potentialImpact: "Low",
    },
    {
      id: "THREAT-2025-1324",
      name: "Quantum Breach",
      type: "Zero-Day Exploit",
      attribution: "Unknown",
      targetSystems: "Multiple Critical Systems",
      detectionDate: "2025-05-15",
      threatLevel: "Critical",
      status: "Active Investigation",
      mitigationStatus: "Partial Mitigation",
      potentialImpact: "High",
    },
  ];

  // Mock data for defensive plans
  const defensivePlans = [
    {
      id: "DEF-2025-142",
      name: "Operation Digital Shield",
      focus: "Network Hardening",
      systems: "Command & Control Infrastructure",
      capabilities: "Enhanced firewall, traffic analysis, anomaly detection",
      requiredResources: "Specialized hardware, 12-person cyber team",
      implementationTime: "45 days",
      expectedEffectiveness: "85%",
      priority: "High",
      status: "In Progress",
      completionEstimate: "68%",
    },
    {
      id: "DEF-2025-156",
      name: "Zero Trust Initiative",
      focus: "Access Control",
      systems: "All Classified Networks",
      capabilities: "Multi-factor authentication, continuous verification",
      requiredResources: "Authentication systems, policy updates, training",
      implementationTime: "90 days",
      expectedEffectiveness: "92%",
      priority: "Critical",
      status: "In Progress",
      completionEstimate: "35%",
    },
    {
      id: "DEF-2025-168",
      name: "Rapid Response Protocol",
      focus: "Incident Response",
      systems: "Entire Defense Network",
      capabilities: "Automated containment, rapid response teams",
      requiredResources: "Response team training, automated tools",
      implementationTime: "60 days",
      expectedEffectiveness: "78%",
      priority: "High",
      status: "Planning",
      completionEstimate: "15%",
    },
    {
      id: "DEF-2025-175",
      name: "Resilient Infrastructure",
      focus: "System Redundancy",
      systems: "Critical Command Systems",
      capabilities: "Redundant systems, data backups, failover",
      requiredResources: "Redundant hardware, specialized software",
      implementationTime: "120 days",
      expectedEffectiveness: "90%",
      priority: "Medium",
      status: "In Progress",
      completionEstimate: "52%",
    },
    {
      id: "DEF-2025-182",
      name: "Threat Intelligence Integration",
      focus: "Proactive Defense",
      systems: "Security Operations Center",
      capabilities: "Real-time intelligence feeds, automated indicator sharing",
      requiredResources: "Intelligence platforms, analytical software",
      implementationTime: "75 days",
      expectedEffectiveness: "82%",
      priority: "Medium",
      status: "In Progress",
      completionEstimate: "40%",
    },
  ];

  const getThreatLevelClass = (level: string) => {
    switch (level) {
      case 'Critical': return 'bg-red-100 text-red-800';
      case 'High': return 'bg-orange-100 text-orange-800';
      case 'Medium': return 'bg-amber-100 text-amber-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Active Investigation': return 'bg-blue-100 text-blue-800';
      case 'Monitoring': return 'bg-purple-100 text-purple-800';
      case 'Resolved': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getMitigationClass = (status: string) => {
    switch (status) {
      case 'Fully Mitigated': return 'bg-green-100 text-green-800';
      case 'Partial Mitigation': return 'bg-amber-100 text-amber-800';
      case 'Containment Applied': return 'bg-blue-100 text-blue-800';
      case 'No Mitigation': return 'bg-red-100 text-red-800';
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

  const getPlanStatusClass = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Planning': return 'bg-purple-100 text-purple-800';
      case 'Delayed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        {/* Cyber Defense Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {cyberMetrics.map((metric, index) => (
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
          {/* Threat Distribution Pie Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Threat Distribution</h2>
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
                        data={threatDistributionData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {threatDistributionData.map((entry, index) => (
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

          {/* Asset Vulnerability Stacked Bar Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Asset Vulnerability Assessment</h2>
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
                      data={assetVulnerabilityData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      layout="vertical"
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis type="category" dataKey="asset" width={150} />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="critical" name="Critical" stackId="a" fill="#e57373" />
                      <Bar dataKey="high" name="High" stackId="a" fill="#ffb74d" />
                      <Bar dataKey="medium" name="Medium" stackId="a" fill="#fff176" />
                      <Bar dataKey="low" name="Low" stackId="a" fill="#81c784" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* Defense Capability Assessment Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Defense Capability Assessment</h2>
          </div>
          
          {isLoading ? (
            <div className="chart-placeholder">
              <Skeleton className="h-80 w-full" />
            </div>
          ) : (
            <div className="p-4">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius={80} data={defenseCapabilityData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="capability" />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} />
                    <Radar
                      name="Current Capability"
                      dataKey="current"
                      stroke="#8884d8"
                      fill="#8884d8"
                      fillOpacity={0.6}
                    />
                    <Radar
                      name="Target Capability"
                      dataKey="target"
                      stroke="#82ca9d"
                      fill="#82ca9d"
                      fillOpacity={0.3}
                      strokeDasharray="5 5"
                    />
                    <Legend />
                    <Tooltip formatter={(value) => `${value}%`} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Incident Trends Line Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Cyber Incident Trends</h2>
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
                    data={incidentTrendsData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="incidents" 
                      name="Detected Incidents" 
                      stroke="#8884d8" 
                      activeDot={{ r: 8 }} 
                      strokeWidth={2}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="resolved" 
                      name="Resolved Incidents" 
                      stroke="#82ca9d" 
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Threat Intel Effectiveness Bar Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Threat Intelligence Effectiveness</h2>
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
                    data={intelligenceEffectivenessData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="source" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="accuracy" name="Accuracy %" fill="#8884d8" />
                    <Bar dataKey="coverage" name="Coverage %" fill="#82ca9d" />
                    <Bar dataKey="timeliness" name="Timeliness %" fill="#ffc658" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Active Threats Table */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Active Cyber Threats</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Threat Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Attribution</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Target Systems</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Detection Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Threat Level</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Mitigation</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Potential Impact</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-36" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-40" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-28" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                    </tr>
                  ))
                ) : (
                  activeThreats.map((threat, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{threat.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{threat.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{threat.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{threat.attribution}</td>
                      <td className="px-6 py-4 text-sm">{threat.targetSystems}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{threat.detectionDate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getThreatLevelClass(threat.threatLevel)}`}>
                          {threat.threatLevel}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(threat.status)}`}>
                          {threat.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getMitigationClass(threat.mitigationStatus)}`}>
                          {threat.mitigationStatus}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getThreatLevelClass(threat.potentialImpact)}`}>
                          {threat.potentialImpact}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Defensive Plans Table */}
        <Card className="border border-neutral-light overflow-hidden">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Cyber Defense Plans</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Plan Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Focus</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Systems</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Capabilities</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Resources</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Implementation</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Effectiveness</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Priority</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Completion</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-36" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-28" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-48" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-40" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                    </tr>
                  ))
                ) : (
                  defensivePlans.map((plan, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{plan.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{plan.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{plan.focus}</td>
                      <td className="px-6 py-4 text-sm">{plan.systems}</td>
                      <td className="px-6 py-4 text-sm">{plan.capabilities}</td>
                      <td className="px-6 py-4 text-sm">{plan.requiredResources}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{plan.implementationTime}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{plan.expectedEffectiveness}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getPriorityClass(plan.priority)}`}>
                          {plan.priority}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getPlanStatusClass(plan.status)}`}>
                          {plan.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <div className="w-24 bg-gray-200 rounded-full h-2.5">
                          <div 
                            className="bg-blue-600 h-2.5 rounded-full" 
                            style={{ width: plan.completionEstimate }}
                          ></div>
                        </div>
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

export default CyberDefenseView;