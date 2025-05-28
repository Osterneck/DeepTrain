import { FC } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";

interface RegulatoryComplianceViewProps {
  isLoading: boolean;
}

const RegulatoryComplianceView: FC<RegulatoryComplianceViewProps> = ({ isLoading }) => {
  // Mock data for compliance metrics
  const complianceMetrics = [
    {
      name: "Compliance Score",
      value: "92.4%",
      change: "+1.8%",
      changeType: "positive",
      description: "Overall compliance health score across all regulations",
    },
    {
      name: "Open Issues",
      value: "12",
      change: "-3",
      changeType: "positive", // positive because reduction in issues is good
      description: "Number of open compliance findings requiring resolution",
    },
    {
      name: "Audit Readiness",
      value: "95.0%",
      change: "+2.5%",
      changeType: "positive",
      description: "Level of preparedness for regulatory audits",
    },
    {
      name: "Regulatory Changes",
      value: "18",
      change: "+4",
      changeType: "neutral",
      description: "Upcoming regulatory changes requiring attention",
    },
  ];

  // Mock data for compliance categories
  const complianceCategoryData = [
    { name: "KYC/AML", value: 94 },
    { name: "Data Privacy", value: 88 },
    { name: "Capital & Liquidity", value: 96 },
    { name: "Risk Management", value: 91 },
    { name: "Consumer Protection", value: 93 },
    { name: "Financial Reporting", value: 95 },
  ];

  // Mock data for regulatory incidents over time
  const incidentData = [
    { month: "Jun", incidents: 6, resolved: 5, severity: 12 },
    { month: "Jul", incidents: 8, resolved: 7, severity: 15 },
    { month: "Aug", incidents: 5, resolved: 6, severity: 9 },
    { month: "Sep", incidents: 4, resolved: 5, severity: 7 },
    { month: "Oct", incidents: 7, resolved: 6, severity: 14 },
    { month: "Nov", incidents: 5, resolved: 5, severity: 10 },
    { month: "Dec", incidents: 3, resolved: 4, severity: 6 },
    { month: "Jan", incidents: 4, resolved: 3, severity: 8 },
    { month: "Feb", incidents: 6, resolved: 5, severity: 11 },
    { month: "Mar", incidents: 5, resolved: 6, severity: 9 },
    { month: "Apr", incidents: 4, resolved: 4, severity: 8 },
    { month: "May", incidents: 3, resolved: 4, severity: 6 },
  ];

  // Color palette for pie chart
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  // Mock data for upcoming regulatory changes
  const regulatoryChanges = [
    {
      id: "REG-2025-033",
      regulation: "ESG Disclosure Requirements",
      authority: "SEC",
      effectiveDate: "2025-09-01",
      impact: "High",
      readiness: 65,
      description: "New requirements for disclosure of environmental, social, and governance metrics for publicly traded companies",
    },
    {
      id: "REG-2025-029",
      regulation: "Crypto Asset Reporting",
      authority: "Treasury",
      effectiveDate: "2025-08-15",
      impact: "Medium",
      readiness: 78,
      description: "New reporting requirements for cryptocurrency transactions and holdings",
    },
    {
      id: "REG-2025-027",
      regulation: "Consumer Data Privacy Act",
      authority: "FTC",
      effectiveDate: "2025-11-30",
      impact: "High",
      readiness: 52,
      description: "Enhanced consumer data protection and privacy regulations affecting financial services",
    },
    {
      id: "REG-2025-025",
      regulation: "Cross-Border Payment Rules",
      authority: "FinCEN",
      effectiveDate: "2025-07-01",
      impact: "Medium",
      readiness: 85,
      description: "Updated regulations for international money transfers and cross-border transactions",
    },
    {
      id: "REG-2025-021",
      regulation: "Capital Reserve Adjustments",
      authority: "Federal Reserve",
      effectiveDate: "2026-01-01",
      impact: "High",
      readiness: 40,
      description: "New capital adequacy requirements for systemically important financial institutions",
    },
  ];

  const impactColors = {
    "High": "bg-red-100 text-red-800",
    "Medium": "bg-amber-100 text-amber-800",
    "Low": "bg-green-100 text-green-800",
  };

  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        {/* Compliance Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {complianceMetrics.map((metric, index) => (
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
                        : 'text-neutral-medium'
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
          {/* Compliance Score by Category */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Compliance Score by Category</h2>
            </div>
            
            {isLoading ? (
              <div className="chart-placeholder">
                <Skeleton className="h-80 w-full" />
              </div>
            ) : (
              <div className="p-4">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart outerRadius={90} data={complianceCategoryData}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="name" />
                      <PolarRadiusAxis domain={[0, 100]} />
                      <Radar
                        name="Compliance Score"
                        dataKey="value"
                        stroke="#8884d8"
                        fill="#8884d8"
                        fillOpacity={0.6}
                      />
                      <Tooltip formatter={(value) => `${value}%`} />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </Card>

          {/* Regulatory Incidents Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Regulatory Incidents Trend</h2>
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
                      data={incidentData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip />
                      <Legend />
                      <Line 
                        yAxisId="left"
                        type="monotone" 
                        dataKey="incidents" 
                        name="New Incidents" 
                        stroke="#ff7300" 
                        strokeWidth={2}
                        activeDot={{ r: 8 }}
                      />
                      <Line 
                        yAxisId="left"
                        type="monotone" 
                        dataKey="resolved" 
                        name="Resolved" 
                        stroke="#82ca9d" 
                        strokeWidth={2}
                        activeDot={{ r: 8 }}
                      />
                      <Line 
                        yAxisId="right"
                        type="monotone" 
                        dataKey="severity" 
                        name="Severity Score" 
                        stroke="#8884d8" 
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

        {/* Upcoming Regulatory Changes */}
        <Card className="border border-neutral-light overflow-hidden">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Upcoming Regulatory Changes</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Regulation</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Authority</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Effective Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Impact</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Readiness</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Description</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-40" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-64" /></td>
                    </tr>
                  ))
                ) : (
                  regulatoryChanges.map((regulation, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{regulation.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{regulation.regulation}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{regulation.authority}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{regulation.effectiveDate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${impactColors[regulation.impact]}`}>
                          {regulation.impact}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div 
                            className={`h-2.5 rounded-full ${
                              regulation.readiness > 70 
                                ? 'bg-success' 
                                : regulation.readiness > 40 
                                  ? 'bg-amber-500' 
                                  : 'bg-danger'
                            }`}
                            style={{ width: `${regulation.readiness}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-right block mt-1">{regulation.readiness}%</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-neutral-dark">{regulation.description}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Compliance Action Items */}
        <Card className="border border-neutral-light overflow-hidden mt-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Priority Compliance Action Items</h2>
          </div>
          <div className="p-4">
            {isLoading ? (
              <>
                <Skeleton className="h-6 w-3/4 mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4 mb-6" />
                
                <Skeleton className="h-6 w-3/4 mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4 mb-6" />
              </>
            ) : (
              <div className="space-y-6">
                <div>
                  <h3 className="text-md font-semibold text-primary mb-2">Consumer Data Privacy Act Preparation</h3>
                  <p className="text-sm text-neutral-dark">
                    The Consumer Data Privacy Act requires significant changes to our data handling procedures. 
                    Priority actions: complete data inventory by June 30, update privacy policies by July 31, 
                    and implement enhanced consent mechanisms by August 31. Compliance team is working with IT 
                    to update systems before the November effective date.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-md font-semibold text-primary mb-2">ESG Disclosure Framework</h3>
                  <p className="text-sm text-neutral-dark">
                    Develop standardized ESG disclosure framework to comply with new SEC requirements. 
                    Establish data collection procedures for environmental metrics by June 30, 
                    social metrics by July 31, and governance metrics by August 15. Complete 
                    implementation of automated ESG reporting dashboard by September 15.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-md font-semibold text-primary mb-2">Capital Reserve Assessment</h3>
                  <p className="text-sm text-neutral-dark">
                    Complete stress testing under new Federal Reserve guidelines to determine capital 
                    reserve requirements. Implement enhanced risk-weighted asset calculation methodology 
                    by July 31. Present findings to Risk Committee by August 15 and prepare capital 
                    planning strategy for Board approval by September 30.
                  </p>
                </div>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default RegulatoryComplianceView;