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
  Area
} from "recharts";

interface CaseAnalysisViewProps {
  isLoading: boolean;
}

const CaseAnalysisView: FC<CaseAnalysisViewProps> = ({ isLoading }) => {
  // Mock data for case metrics
  const caseMetrics = [
    {
      name: "Prediction Accuracy",
      value: "86.4%",
      change: "+2.7%",
      changeType: "positive",
      description: "Case outcome predictions",
    },
    {
      name: "Avg. Case Duration",
      value: "8.2 mo",
      change: "-1.4 mo",
      changeType: "positive",
      description: "Time to resolution",
    },
    {
      name: "Settlements",
      value: "72.3%",
      change: "+5.1%",
      changeType: "positive",
      description: "Cases settled vs. trial",
    },
    {
      name: "Legal Costs",
      value: "$84,215",
      change: "-8.3%",
      changeType: "positive",
      description: "Average per case",
    },
  ];

  // Mock data for case types distribution
  const caseTypesData = [
    { name: "Corporate", value: 35 },
    { name: "Employment", value: 25 },
    { name: "IP", value: 18 },
    { name: "Contract", value: 12 },
    { name: "Regulatory", value: 10 },
  ];

  // Color palette for charts
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  // Mock data for outcome prediction accuracy
  const outcomeAccuracyData = [
    { category: "Settlement", accuracy: 88 },
    { category: "Dismissal", accuracy: 82 },
    { category: "Plaintiff Win", accuracy: 75 },
    { category: "Defendant Win", accuracy: 78 },
    { category: "Partial Victory", accuracy: 70 },
  ];

  // Mock data for case duration trends
  const durationTrendsData = [
    { month: "Jan", actual: 8.6, predicted: 8.7 },
    { month: "Feb", actual: 8.5, predicted: 8.6 },
    { month: "Mar", actual: 8.4, predicted: 8.5 },
    { month: "Apr", actual: 8.3, predicted: 8.4 },
    { month: "May", actual: 8.2, predicted: 8.3 },
    { month: "Jun", actual: 8.2, predicted: 8.2 },
    { month: "Jul", actual: 8.1, predicted: 8.2 },
    { month: "Aug", actual: 8.0, predicted: 8.1 },
    { month: "Sep", actual: 7.9, predicted: 8.0 },
    { month: "Oct", actual: 7.8, predicted: 7.9 },
    { month: "Nov", actual: 7.7, predicted: 7.8 },
    { month: "Dec", actual: 7.6, predicted: 7.7 },
  ];

  // Mock data for jurisdiction analysis
  const jurisdictionData = [
    { jurisdiction: "Federal - 2nd Circuit", winRate: 65, settlementRate: 72, duration: 9.2 },
    { jurisdiction: "Federal - 9th Circuit", winRate: 58, settlementRate: 68, duration: 10.1 },
    { jurisdiction: "State - New York", winRate: 62, settlementRate: 75, duration: 7.8 },
    { jurisdiction: "State - California", winRate: 55, settlementRate: 70, duration: 8.5 },
    { jurisdiction: "State - Texas", winRate: 68, settlementRate: 65, duration: 7.2 },
    { jurisdiction: "Arbitration", winRate: 60, settlementRate: 85, duration: 5.5 },
  ];

  // Mock data for cost prediction accuracy
  const costPredictionData = [
    { month: "Jan", actual: 92500, predicted: 95000 },
    { month: "Feb", actual: 91200, predicted: 93500 },
    { month: "Mar", actual: 89800, predicted: 92000 },
    { month: "Apr", actual: 88500, predicted: 90000 },
    { month: "May", actual: 87200, predicted: 89500 },
    { month: "Jun", actual: 86800, predicted: 88000 },
    { month: "Jul", actual: 85500, predicted: 87000 },
    { month: "Aug", actual: 84800, predicted: 86500 },
    { month: "Sep", actual: 84200, predicted: 85500 },
    { month: "Oct", actual: 83800, predicted: 85000 },
    { month: "Nov", actual: 83500, predicted: 84500 },
    { month: "Dec", actual: 82800, predicted: 84000 },
  ];

  // Mock data for current cases
  const currentCases = [
    {
      id: "CASE-2025-4281",
      name: "Smith v. Global Tech Inc.",
      type: "Employment",
      jurisdiction: "Federal - 9th Circuit",
      filed: "2024-11-10",
      stage: "Discovery",
      predictedOutcome: "Settlement",
      confidenceScore: "82%",
      estimatedResolution: "2025-08-15",
      predictedCosts: "$95,000",
      assignedAttorney: "J. Anderson",
    },
    {
      id: "CASE-2025-4295",
      name: "TechCore IP Dispute",
      type: "Intellectual Property",
      jurisdiction: "Federal - 2nd Circuit",
      filed: "2024-12-18",
      stage: "Motion Practice",
      predictedOutcome: "Partial Victory",
      confidenceScore: "68%",
      estimatedResolution: "2025-10-22",
      predictedCosts: "$128,500",
      assignedAttorney: "M. Johnson",
    },
    {
      id: "CASE-2025-4308",
      name: "FastComp v. Reliable Services",
      type: "Contract",
      jurisdiction: "State - New York",
      filed: "2025-01-15",
      stage: "Initial Pleadings",
      predictedOutcome: "Settlement",
      confidenceScore: "75%",
      estimatedResolution: "2025-07-10",
      predictedCosts: "$78,500",
      assignedAttorney: "S. Williams",
    },
    {
      id: "CASE-2025-4317",
      name: "Regulatory Compliance Review",
      type: "Regulatory",
      jurisdiction: "Federal Agency",
      filed: "2025-02-08",
      stage: "Investigation",
      predictedOutcome: "Favorable Finding",
      confidenceScore: "65%",
      estimatedResolution: "2025-09-30",
      predictedCosts: "$105,200",
      assignedAttorney: "D. Martinez",
    },
    {
      id: "CASE-2025-4325",
      name: "Merger Antitrust Analysis",
      type: "Corporate",
      jurisdiction: "Federal - DOJ Review",
      filed: "2025-03-01",
      stage: "Document Production",
      predictedOutcome: "Approval with Conditions",
      confidenceScore: "72%",
      estimatedResolution: "2025-11-15",
      predictedCosts: "$215,000",
      assignedAttorney: "L. Thompson",
    },
  ];

  // Mock data for case prediction analysis
  const casePredictions = [
    {
      id: "PRED-2025-142",
      case: "Garcia Manufacturing Dispute",
      type: "Contract",
      keyFactors: "Breach of warranty, documented quality issues, prior settlement history",
      predictedOutcome: "Settlement",
      winProbability: "N/A",
      settlementProbability: "85%",
      estimatedSettlement: "$1.2-1.5M",
      durationEstimate: "7-9 months",
      costsEstimate: "$85,000-110,000",
      recommendedStrategy: "Initiate early settlement discussions, prepare strong evidence of damages",
      confidenceScore: "High",
    },
    {
      id: "PRED-2025-156",
      case: "Zhang Patent Infringement",
      type: "Intellectual Property",
      keyFactors: "Technical similarity: 82%, prior art identified, venue favorable to plaintiffs",
      predictedOutcome: "Plaintiff Win",
      winProbability: "65%",
      settlementProbability: "72%",
      estimatedSettlement: "$2.5-3.2M",
      durationEstimate: "18-24 months",
      costsEstimate: "$350,000-450,000",
      recommendedStrategy: "Pursue settlement, prepare parallel invalidation strategy",
      confidenceScore: "Medium",
    },
    {
      id: "PRED-2025-168",
      case: "Peterson Employment Claim",
      type: "Employment",
      keyFactors: "Limited documentation, similar precedent favors employer, jurisdiction statistics",
      predictedOutcome: "Defendant Win",
      winProbability: "78%",
      settlementProbability: "45%",
      estimatedSettlement: "$50,000-75,000",
      durationEstimate: "10-14 months",
      costsEstimate: "$120,000-150,000",
      recommendedStrategy: "Prepare for litigation, offer minimal settlement",
      confidenceScore: "High",
    },
    {
      id: "PRED-2025-175",
      case: "Regulatory Compliance Investigation",
      type: "Regulatory",
      keyFactors: "Documentation complete, similar cases, agency enforcement patterns",
      predictedOutcome: "Minor Penalty",
      winProbability: "35%",
      settlementProbability: "80%",
      estimatedSettlement: "$250,000-350,000 fine",
      durationEstimate: "8-12 months",
      costsEstimate: "$180,000-230,000",
      recommendedStrategy: "Cooperate fully, implement remediation, negotiate settlement",
      confidenceScore: "Medium-High",
    },
    {
      id: "PRED-2025-189",
      case: "Westside Acquisition",
      type: "Corporate",
      keyFactors: "Market concentration, historical agency decisions, competitor positions",
      predictedOutcome: "Approval with Divestitures",
      winProbability: "N/A",
      settlementProbability: "N/A",
      estimatedSettlement: "N/A",
      durationEstimate: "10-14 months",
      costsEstimate: "$500,000-750,000",
      recommendedStrategy: "Proactively propose divestiture plan, prepare economic analysis",
      confidenceScore: "Medium",
    },
  ];

  const getStageClass = (stage: string) => {
    switch (stage) {
      case 'Initial Pleadings': return 'bg-blue-100 text-blue-800';
      case 'Discovery': return 'bg-purple-100 text-purple-800';
      case 'Motion Practice': return 'bg-amber-100 text-amber-800';
      case 'Pre-Trial': return 'bg-indigo-100 text-indigo-800';
      case 'Trial': return 'bg-red-100 text-red-800';
      case 'Settlement': return 'bg-green-100 text-green-800';
      case 'Appeal': return 'bg-orange-100 text-orange-800';
      case 'Investigation': return 'bg-teal-100 text-teal-800';
      case 'Document Production': return 'bg-cyan-100 text-cyan-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getConfidenceClass = (confidence: string) => {
    switch (confidence) {
      case 'High': return 'bg-green-100 text-green-800';
      case 'Medium-High': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-amber-100 text-amber-800';
      case 'Medium-Low': return 'bg-orange-100 text-orange-800';
      case 'Low': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        {/* Case Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {caseMetrics.map((metric, index) => (
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
          {/* Case Types Pie Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Case Type Distribution</h2>
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
                        data={caseTypesData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {caseTypesData.map((entry, index) => (
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

          {/* Outcome Prediction Accuracy Bar Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Outcome Prediction Accuracy (%)</h2>
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
                      data={outcomeAccuracyData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      layout="vertical"
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" domain={[0, 100]} />
                      <YAxis type="category" dataKey="category" width={100} />
                      <Tooltip formatter={(value) => `${value}%`} />
                      <Legend />
                      <Bar 
                        dataKey="accuracy" 
                        name="Prediction Accuracy" 
                        fill="#8884d8" 
                        barSize={20}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* Case Duration Trends Line Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Case Duration Trends (Months)</h2>
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
                    data={durationTrendsData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis domain={[7, 9]} />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="actual" 
                      name="Actual Duration" 
                      stroke="#8884d8" 
                      activeDot={{ r: 8 }} 
                      strokeWidth={2}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="predicted" 
                      name="Predicted Duration" 
                      stroke="#82ca9d" 
                      activeDot={{ r: 8 }}
                      strokeDasharray="5 5"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Jurisdiction Analysis Bar Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Jurisdiction Analysis</h2>
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
                    data={jurisdictionData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="jurisdiction" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="winRate" name="Win Rate %" fill="#8884d8" />
                    <Bar dataKey="settlementRate" name="Settlement Rate %" fill="#82ca9d" />
                    <Bar dataKey="duration" name="Average Duration (Months)" fill="#ffc658" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Cost Prediction Accuracy Line Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Cost Prediction Accuracy ($)</h2>
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
                    data={costPredictionData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis domain={[80000, 100000]} />
                    <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="actual" 
                      name="Actual Costs" 
                      stroke="#8884d8" 
                      activeDot={{ r: 8 }} 
                      strokeWidth={2}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="predicted" 
                      name="Predicted Costs" 
                      stroke="#82ca9d" 
                      activeDot={{ r: 8 }}
                      strokeDasharray="5 5"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Current Cases Table */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Current Cases</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Case Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Jurisdiction</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Filed</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Stage</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Predicted Outcome</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Confidence</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Est. Resolution</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Predicted Costs</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Attorney</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-40" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                    </tr>
                  ))
                ) : (
                  currentCases.map((ccase, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{ccase.id}</td>
                      <td className="px-6 py-4 text-sm font-medium">{ccase.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{ccase.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{ccase.jurisdiction}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{ccase.filed}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStageClass(ccase.stage)}`}>
                          {ccase.stage}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{ccase.predictedOutcome}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{ccase.confidenceScore}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{ccase.estimatedResolution}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{ccase.predictedCosts}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{ccase.assignedAttorney}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Case Predictions Table */}
        <Card className="border border-neutral-light overflow-hidden">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Case Prediction Analysis</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Case</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Key Factors</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Predicted Outcome</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Win Probability</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Settlement Prob.</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Est. Settlement</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Duration Est.</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Costs Est.</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Recommended Strategy</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Confidence</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-40" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-48" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-48" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                    </tr>
                  ))
                ) : (
                  casePredictions.map((prediction, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{prediction.id}</td>
                      <td className="px-6 py-4 text-sm font-medium">{prediction.case}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{prediction.type}</td>
                      <td className="px-6 py-4 text-sm">{prediction.keyFactors}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{prediction.predictedOutcome}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{prediction.winProbability}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{prediction.settlementProbability}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{prediction.estimatedSettlement}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{prediction.durationEstimate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{prediction.costsEstimate}</td>
                      <td className="px-6 py-4 text-sm">{prediction.recommendedStrategy}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getConfidenceClass(prediction.confidenceScore)}`}>
                          {prediction.confidenceScore}
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

export default CaseAnalysisView;