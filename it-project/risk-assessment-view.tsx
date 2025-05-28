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
  ScatterChart,
  Scatter,
  ZAxis,
} from "recharts";

interface RiskAssessmentViewProps {
  isLoading: boolean;
}

const RiskAssessmentView: FC<RiskAssessmentViewProps> = ({ isLoading }) => {
  // Mock data for risk metrics
  const riskMetrics = [
    {
      name: "Risk Score",
      value: "68/100",
      change: "-5",
      changeType: "positive",
      description: "Overall portfolio risk assessment score",
    },
    {
      name: "Active Risks",
      value: "24",
      change: "-3",
      changeType: "positive",
      description: "Current identified risks being monitored",
    },
    {
      name: "High-Impact Risks",
      value: "7",
      change: "-1",
      changeType: "positive",
      description: "Risks with potential high business impact",
    },
    {
      name: "Mitigation Rate",
      value: "78%",
      change: "+5%",
      changeType: "positive",
      description: "Percentage of risks with active mitigation plans",
    },
  ];

  // Mock data for risk distribution
  const riskDistributionData = [
    { name: "Technical", value: 32 },
    { name: "Schedule", value: 28 },
    { name: "Resource", value: 18 },
    { name: "Financial", value: 12 },
    { name: "External", value: 10 },
  ];

  // Color palette for pie chart
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  // Mock data for risk matrix
  const riskMatrixData = [
    // { x: impact (1-5), y: likelihood (1-5), z: size, name: risk name }
    { x: 4.2, y: 3.8, z: 150, name: "Data Center Migration" },
    { x: 3.8, y: 4.5, z: 120, name: "Integration Testing Delay" },
    { x: 4.8, y: 2.2, z: 130, name: "Vendor Bankruptcy" },
    { x: 3.2, y: 3.5, z: 100, name: "Key Developer Departure" },
    { x: 2.5, y: 4.2, z: 90, name: "Scope Creep" },
    { x: 3.0, y: 2.8, z: 80, name: "Security Vulnerability" },
    { x: 2.2, y: 2.0, z: 70, name: "Technology Obsolescence" },
    { x: 1.8, y: 4.0, z: 75, name: "User Adoption Issues" },
    { x: 1.5, y: 1.5, z: 60, name: "Minor Defects" },
    { x: 4.5, y: 1.2, z: 100, name: "System Crash" },
  ];

  // Mock data for project risk assessment
  const projectRiskAssessmentData = [
    { name: "Cloud Migration", score: 72, maxRisk: "Data Loss" },
    { name: "ERP Implementation", score: 84, maxRisk: "Integration Failure" },
    { name: "Mobile App Development", score: 58, maxRisk: "Schedule Delay" },
    { name: "Security Upgrades", score: 45, maxRisk: "Compatibility Issues" },
    { name: "Data Analytics Platform", score: 65, maxRisk: "Skill Gap" },
    { name: "Legacy System Maintenance", score: 79, maxRisk: "Knowledge Transfer" },
  ];

  // Mock data for top risks
  const topRisks = [
    {
      id: "RISK-2025-012",
      name: "Data Center Migration Failure",
      category: "Technical",
      likelihood: "Medium",
      impact: "Critical",
      status: "Mitigating",
      owner: "Sarah Johnson",
      mitigation: "Comprehensive testing, phased migration, dual-run period, rollback strategy",
    },
    {
      id: "RISK-2025-008",
      name: "Key Developer Departure",
      category: "Resource",
      likelihood: "High",
      impact: "High",
      status: "Mitigating",
      owner: "Michael Chen",
      mitigation: "Knowledge documentation, paired programming, cross-training, retention bonuses",
    },
    {
      id: "RISK-2025-016",
      name: "Vendor API Integration Failure",
      category: "Technical",
      likelihood: "Medium",
      impact: "High",
      status: "Monitoring",
      owner: "David Wilson",
      mitigation: "Early technical POC, alternate vendor research, sandbox testing",
    },
    {
      id: "RISK-2025-023",
      name: "Scope Creep",
      category: "Schedule",
      likelihood: "High",
      impact: "Medium",
      status: "Mitigating",
      owner: "Emily Davis",
      mitigation: "Strict change control process, clear requirements documentation, executive sponsorship",
    },
    {
      id: "RISK-2025-019",
      name: "Regulatory Compliance Issue",
      category: "External",
      likelihood: "Low",
      impact: "Critical",
      status: "Accepting",
      owner: "Kevin Yang",
      mitigation: "Compliance audit, legal review, regulatory framework monitoring",
    },
  ];

  const getLikelihoodClass = (likelihood: string) => {
    switch (likelihood) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-amber-100 text-amber-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getImpactClass = (impact: string) => {
    switch (impact) {
      case 'Critical': return 'bg-purple-100 text-purple-800';
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-amber-100 text-amber-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Mitigating': return 'bg-blue-100 text-blue-800';
      case 'Monitoring': return 'bg-yellow-100 text-yellow-800';
      case 'Accepting': return 'bg-green-100 text-green-800';
      case 'Closed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        {/* Risk Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {riskMetrics.map((metric, index) => (
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
          {/* Risk Distribution Pie Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Risk Distribution by Category</h2>
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
                        data={riskDistributionData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {riskDistributionData.map((entry, index) => (
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

          {/* Risk Matrix Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Risk Matrix (Impact vs. Likelihood)</h2>
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
                      <XAxis 
                        type="number" 
                        dataKey="x" 
                        name="Impact" 
                        domain={[0, 5]} 
                        label={{ value: 'Impact', position: 'bottom' }}
                      />
                      <YAxis 
                        type="number" 
                        dataKey="y" 
                        name="Likelihood" 
                        domain={[0, 5]} 
                        label={{ value: 'Likelihood', angle: -90, position: 'left' }}
                      />
                      <ZAxis 
                        type="number" 
                        dataKey="z" 
                        range={[60, 400]} 
                        name="Risk Weight" 
                      />
                      <Tooltip 
                        cursor={{ strokeDasharray: '3 3' }}
                        formatter={(value, name) => [`${value}`, name]}
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="bg-white p-2 border border-gray-300 shadow-sm rounded-md">
                                <p className="font-semibold">{payload[0].payload.name}</p>
                                <p>Impact: {payload[0].value}</p>
                                <p>Likelihood: {payload[1].value}</p>
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                      <Scatter 
                        name="Risks" 
                        data={riskMatrixData} 
                        fill="#8884d8" 
                      />
                    </ScatterChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* Project Risk Assessment */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Project Risk Assessment</h2>
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
                    data={projectRiskAssessmentData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    barSize={40}
                    layout="vertical"
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" domain={[0, 100]} />
                    <YAxis type="category" dataKey="name" width={150} />
                    <Tooltip 
                      formatter={(value, name, props) => [
                        `${value}/100`, 
                        'Risk Score'
                      ]}
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="bg-white p-2 border border-gray-300 shadow-sm rounded-md">
                              <p className="font-semibold">{payload[0].payload.name}</p>
                              <p>Risk Score: {payload[0].value}/100</p>
                              <p>Highest Risk: {payload[0].payload.maxRisk}</p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Legend />
                    <Bar 
                      dataKey="score" 
                      name="Risk Score (0-100)" 
                      fill="#8884d8" 
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Top Risks Table */}
        <Card className="border border-neutral-light overflow-hidden">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Top Project Risks</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Risk Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Likelihood</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Impact</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Owner</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Mitigation</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-40" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-48" /></td>
                    </tr>
                  ))
                ) : (
                  topRisks.map((risk, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{risk.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{risk.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{risk.category}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getLikelihoodClass(risk.likelihood)}`}>
                          {risk.likelihood}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getImpactClass(risk.impact)}`}>
                          {risk.impact}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(risk.status)}`}>
                          {risk.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{risk.owner}</td>
                      <td className="px-6 py-4 text-sm">{risk.mitigation}</td>
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

export default RiskAssessmentView;