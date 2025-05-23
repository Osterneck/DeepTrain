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
  ScatterChart,
  Scatter,
  ZAxis
} from "recharts";

interface IntelligenceAnalysisViewProps {
  isLoading: boolean;
}

const IntelligenceAnalysisView: FC<IntelligenceAnalysisViewProps> = ({ isLoading }) => {
  // Mock data for intelligence metrics
  const intelligenceMetrics = [
    {
      name: "Intel Score",
      value: "86.2%",
      change: "+2.8%",
      changeType: "positive",
      description: "Overall intelligence quality",
    },
    {
      name: "Source Reliability",
      value: "82.5%",
      change: "+1.5%",
      changeType: "positive",
      description: "Verified source accuracy",
    },
    {
      name: "Threat Assessment",
      value: "Medium",
      change: "Stable",
      changeType: "neutral",
      description: "Current situational threat",
    },
    {
      name: "Intel Coverage",
      value: "78.6%",
      change: "+3.2%",
      changeType: "positive",
      description: "Regional intelligence coverage",
    },
  ];

  // Mock data for intelligence source types
  const intelSourceData = [
    { name: "SIGINT", value: 35 },
    { name: "HUMINT", value: 22 },
    { name: "OSINT", value: 18 },
    { name: "IMINT", value: 15 },
    { name: "MASINT", value: 10 },
  ];

  // Color palette for charts
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  // Mock data for threat level by region
  const threatLevelData = [
    { region: "Northern Theater", level: 65 },
    { region: "Eastern Zone", level: 82 },
    { region: "Southern Coalition", level: 45 },
    { region: "Western Sector", level: 58 },
    { region: "Central Region", level: 52 },
  ];

  // Mock data for intelligence accuracy trends
  const accuracyTrendData = [
    { month: "Jan", accuracy: 78.5, verification: 68.2 },
    { month: "Feb", accuracy: 79.2, verification: 70.5 },
    { month: "Mar", accuracy: 80.8, verification: 72.3 },
    { month: "Apr", accuracy: 81.5, verification: 73.1 },
    { month: "May", accuracy: 82.1, verification: 74.6 },
    { month: "Jun", accuracy: 82.5, verification: 75.2 },
    { month: "Jul", accuracy: 83.2, verification: 76.8 },
    { month: "Aug", accuracy: 84.5, verification: 78.1 },
    { month: "Sep", accuracy: 85.1, verification: 79.5 },
    { month: "Oct", accuracy: 86.2, verification: 80.2 },
    { month: "Nov", accuracy: 86.7, verification: 81.6 },
    { month: "Dec", accuracy: 87.3, verification: 82.5 },
  ];

  // Mock data for threat categories
  const threatCategoriesData = [
    {
      name: "Cyber",
      size: 28,
      color: "#8884d8"
    },
    {
      name: "Kinetic",
      size: 22,
      color: "#83a6ed"
    },
    {
      name: "Unconventional",
      size: 18,
      color: "#8dd1e1"
    },
    {
      name: "Economic",
      size: 12,
      color: "#82ca9d"
    },
    {
      name: "Political",
      size: 15,
      color: "#a4de6c"
    },
    {
      name: "Ecological",
      size: 5,
      color: "#d0ed57"
    },
  ];

  // Mock data for entity connections (network graph)
  const entityConnectionsData = [
    { x: 80, y: 100, z: 200, name: 'Alpha Group', type: 'Organization' },
    { x: 120, y: 100, z: 260, name: 'Beta Network', type: 'Network' },
    { x: 170, y: 300, z: 400, name: 'Delta Force', type: 'Group' },
    { x: 140, y: 250, z: 280, name: 'Echo Cell', type: 'Cell' },
    { x: 150, y: 400, z: 500, name: 'Foxtrot Division', type: 'Organization' },
    { x: 110, y: 280, z: 200, name: 'Gulf Syndicate', type: 'Network' },
  ];

  // Mock data for intelligence reports
  const intelligenceReports = [
    {
      id: "INTL-2025-0284",
      title: "Regional Force Movements in Eastern Zone",
      source: "HUMINT + SIGINT",
      dateCollected: "2025-05-08",
      dateAnalyzed: "2025-05-10",
      classification: "Secret",
      reliability: "High",
      category: "Force Disposition",
      status: "Verified",
      analyst: "J. Harrington",
      summary: "Multiple sources confirm significant troop and equipment movement along eastern border. Increases observed at three key crossing points."
    },
    {
      id: "INTL-2025-0291",
      title: "Communications Analysis of Northern Activities",
      source: "SIGINT",
      dateCollected: "2025-05-10",
      dateAnalyzed: "2025-05-12",
      classification: "Top Secret",
      reliability: "Medium",
      category: "Command Communications",
      status: "In Analysis",
      analyst: "M. Chen",
      summary: "Pattern of encrypted communications shows possible coordination between previously unrelated groups. Decryption efforts ongoing."
    },
    {
      id: "INTL-2025-0306",
      title: "Supply Chain Vulnerabilities Assessment",
      source: "OSINT + HUMINT",
      dateCollected: "2025-05-11",
      dateAnalyzed: "2025-05-14",
      classification: "Secret",
      reliability: "Medium",
      category: "Infrastructure",
      status: "Verified",
      analyst: "S. Rodriguez",
      summary: "Analysis of critical supply routes shows three key vulnerabilities in fuel distribution. Satellite imagery confirms limited stockpiles at forward depots."
    },
    {
      id: "INTL-2025-0312",
      title: "Advanced Weapons System Deployment",
      source: "IMINT + MASINT",
      dateCollected: "2025-05-13",
      dateAnalyzed: "2025-05-15",
      classification: "Top Secret",
      reliability: "High",
      category: "Weapons Systems",
      status: "Verified",
      analyst: "A. Williams",
      summary: "Satellite and sensor data confirm deployment of advanced air defense systems at three locations. Technical signatures match latest generation capabilities."
    },
    {
      id: "INTL-2025-0325",
      title: "Leadership Analysis and Decision Patterns",
      source: "HUMINT + OSINT",
      dateCollected: "2025-05-12",
      dateAnalyzed: "2025-05-16",
      classification: "Secret",
      reliability: "Medium",
      category: "Leadership Intent",
      status: "In Analysis",
      analyst: "K. Johnson",
      summary: "Pattern analysis of key leadership decisions shows shift in strategic priorities. Behavioral indicators suggest increased risk tolerance and expedited timeline."
    },
  ];

  // Mock data for entity analysis
  const entityAnalysis = [
    {
      id: "ENT-2025-142",
      name: "Alpha Group",
      type: "Organization",
      threatLevel: "High",
      region: "Eastern Zone",
      resources: "Estimated 1500 personnel, Advanced weapons",
      activities: "Infrastructure attacks, Supply route disruption",
      associations: "Beta Network, Echo Cell",
      lastActivity: "2025-05-10",
      analyst: "M. Chen",
      confidenceLevel: "Medium-High",
    },
    {
      id: "ENT-2025-158",
      name: "Beta Network",
      type: "Network",
      threatLevel: "Medium",
      region: "Multiple Regions",
      resources: "Financial backing, Cyber capabilities",
      activities: "Information operations, Resource acquisition",
      associations: "Alpha Group, Gulf Syndicate",
      lastActivity: "2025-05-12",
      analyst: "J. Harrington",
      confidenceLevel: "Medium",
    },
    {
      id: "ENT-2025-163",
      name: "Delta Force",
      type: "Group",
      threatLevel: "High",
      region: "Northern Theater",
      resources: "Elite personnel, Advanced equipment",
      activities: "Special operations, Direct action",
      associations: "Echo Cell, Foxtrot Division",
      lastActivity: "2025-05-11",
      analyst: "A. Williams",
      confidenceLevel: "High",
    },
    {
      id: "ENT-2025-185",
      name: "Echo Cell",
      type: "Cell",
      threatLevel: "Medium-High",
      region: "Southern Coalition",
      resources: "Technical expertise, Local support",
      activities: "Electronic warfare, Intelligence collection",
      associations: "Alpha Group, Delta Force",
      lastActivity: "2025-05-09",
      analyst: "S. Rodriguez",
      confidenceLevel: "Medium",
    },
    {
      id: "ENT-2025-192",
      name: "Gulf Syndicate",
      type: "Network",
      threatLevel: "Medium",
      region: "Western Sector",
      resources: "Logistics network, Financial resources",
      activities: "Resource smuggling, Intelligence trading",
      associations: "Beta Network",
      lastActivity: "2025-05-14",
      analyst: "K. Johnson",
      confidenceLevel: "Medium-Low",
    },
  ];

  const getClassificationClass = (classification: string) => {
    switch (classification) {
      case 'Top Secret': return 'bg-red-100 text-red-800';
      case 'Secret': return 'bg-amber-100 text-amber-800';
      case 'Confidential': return 'bg-blue-100 text-blue-800';
      case 'Unclassified': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getReliabilityClass = (reliability: string) => {
    switch (reliability) {
      case 'High': return 'bg-green-100 text-green-800';
      case 'Medium-High': return 'bg-emerald-100 text-emerald-800';
      case 'Medium': return 'bg-blue-100 text-blue-800';
      case 'Medium-Low': return 'bg-amber-100 text-amber-800';
      case 'Low': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Verified': return 'bg-green-100 text-green-800';
      case 'In Analysis': return 'bg-blue-100 text-blue-800';
      case 'Preliminary': return 'bg-amber-100 text-amber-800';
      case 'Disputed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getThreatLevelClass = (level: string) => {
    switch (level) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium-High': return 'bg-orange-100 text-orange-800';
      case 'Medium': return 'bg-amber-100 text-amber-800';
      case 'Medium-Low': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        {/* Intelligence Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {intelligenceMetrics.map((metric, index) => (
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
          {/* Intelligence Source Pie Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Intelligence by Source Type</h2>
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
                        data={intelSourceData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {intelSourceData.map((entry, index) => (
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

          {/* Threat Level by Region Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Threat Level by Region</h2>
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
                      data={threatLevelData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      layout="vertical"
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" domain={[0, 100]} />
                      <YAxis type="category" dataKey="region" width={120} />
                      <Tooltip formatter={(value) => `${value}/100`} />
                      <Legend />
                      <Bar 
                        dataKey="level" 
                        name="Threat Level" 
                        fill="#FF8042" 
                        barSize={20}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* Intelligence Accuracy Trends Line Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Intelligence Accuracy Trends (%)</h2>
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
                    data={accuracyTrendData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis domain={[60, 100]} />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="accuracy" 
                      name="Intelligence Accuracy" 
                      stroke="#8884d8" 
                      activeDot={{ r: 8 }} 
                      strokeWidth={2}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="verification" 
                      name="Verification Rate" 
                      stroke="#82ca9d" 
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Threat Categories Tree Map */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Threat Categories Distribution</h2>
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
                    data={threatCategoriesData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Legend />
                    <Bar 
                      dataKey="size" 
                      name="Relative Threat Size" 
                      fill="#8884d8"
                      barSize={50}
                    >
                      {threatCategoriesData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Entity Connections Scatter Plot */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Entity Relationship Mapping</h2>
          </div>
          
          {isLoading ? (
            <div className="chart-placeholder">
              <Skeleton className="h-80 w-full" />
            </div>
          ) : (
            <div className="p-4">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <ScatterChart
                    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" dataKey="x" name="Influence" />
                    <YAxis type="number" dataKey="y" name="Activity Level" />
                    <ZAxis type="number" dataKey="z" range={[50, 400]} name="Resources" />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="bg-white p-2 border border-neutral-light shadow-sm">
                            <p className="font-semibold">{data.name}</p>
                            <p className="text-xs">{data.type}</p>
                            <p className="text-xs">Influence: {data.x}</p>
                            <p className="text-xs">Activity: {data.y}</p>
                            <p className="text-xs">Resources: {data.z}</p>
                          </div>
                        );
                      }
                      return null;
                    }} />
                    <Legend />
                    <Scatter 
                      name="Entities" 
                      data={entityConnectionsData} 
                      fill="#8884d8" 
                      shape="circle"
                    />
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Intelligence Reports Table */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Recent Intelligence Reports</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Source</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Date Collected</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Date Analyzed</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Classification</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Reliability</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Analyst</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Summary</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-48" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-28" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-80" /></td>
                    </tr>
                  ))
                ) : (
                  intelligenceReports.map((report, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{report.id}</td>
                      <td className="px-6 py-4 text-sm font-medium">{report.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{report.source}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{report.dateCollected}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{report.dateAnalyzed}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getClassificationClass(report.classification)}`}>
                          {report.classification}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getReliabilityClass(report.reliability)}`}>
                          {report.reliability}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{report.category}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(report.status)}`}>
                          {report.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{report.analyst}</td>
                      <td className="px-6 py-4 text-sm">{report.summary}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Entity Analysis Table */}
        <Card className="border border-neutral-light overflow-hidden">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Entity Analysis</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Threat Level</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Region</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Resources</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Activities</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Associations</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Last Activity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Analyst</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Confidence</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-28" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-48" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-48" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                    </tr>
                  ))
                ) : (
                  entityAnalysis.map((entity, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{entity.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{entity.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{entity.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getThreatLevelClass(entity.threatLevel)}`}>
                          {entity.threatLevel}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{entity.region}</td>
                      <td className="px-6 py-4 text-sm">{entity.resources}</td>
                      <td className="px-6 py-4 text-sm">{entity.activities}</td>
                      <td className="px-6 py-4 text-sm">{entity.associations}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{entity.lastActivity}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{entity.analyst}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getReliabilityClass(entity.confidenceLevel)}`}>
                          {entity.confidenceLevel}
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

export default IntelligenceAnalysisView;