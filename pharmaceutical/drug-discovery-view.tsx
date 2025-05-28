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

interface DrugDiscoveryViewProps {
  isLoading: boolean;
}

const DrugDiscoveryView: FC<DrugDiscoveryViewProps> = ({ isLoading }) => {
  // Mock data for R&D metrics
  const researchMetrics = [
    {
      name: "Active Compounds",
      value: "24,580",
      change: "+1,245",
      changeType: "positive",
      description: "Total compounds in research pipeline",
    },
    {
      name: "Lead Compounds",
      value: "142",
      change: "+18",
      changeType: "positive",
      description: "Promising compounds for development",
    },
    {
      name: "Success Rate",
      value: "0.018%",
      change: "+0.002%",
      changeType: "positive",
      description: "Compounds to approved drugs",
    },
    {
      name: "Avg Dev Time",
      value: "6.5 yrs",
      change: "-0.3 yrs",
      changeType: "positive",
      description: "Average development timeline",
    },
  ];

  // Mock data for therapeutic areas
  const therapeuticAreasData = [
    { name: "Oncology", value: 32 },
    { name: "Neurology", value: 18 },
    { name: "Cardiology", value: 15 },
    { name: "Immunology", value: 12 },
    { name: "Infectious Disease", value: 10 },
    { name: "Other", value: 13 },
  ];

  // Color palette for pie chart
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  // Mock data for development phases
  const developmentPhasesData = [
    { name: "Discovery", compounds: 24580 },
    { name: "Preclinical", compounds: 352 },
    { name: "Phase I", compounds: 86 },
    { name: "Phase II", compounds: 42 },
    { name: "Phase III", compounds: 18 },
    { name: "Regulatory Review", compounds: 5 },
  ];

  // Mock data for success rates
  const successRatesData = [
    { phase: "Discovery to Preclinical", rate: 1.5 },
    { phase: "Preclinical to Phase I", rate: 24.4 },
    { phase: "Phase I to Phase II", rate: 49.6 },
    { phase: "Phase II to Phase III", rate: 21.3 },
    { phase: "Phase III to Submission", rate: 27.8 },
    { phase: "Submission to Approval", rate: 80.2 },
  ];

  // Mock data for timeline trends
  const timelineTrendsData = [
    { year: 2018, discovery: 4.8, preclinical: 1.5, phaseI: 1.8, phaseII: 2.4, phaseIII: 3.1 },
    { year: 2019, discovery: 4.6, preclinical: 1.4, phaseI: 1.7, phaseII: 2.3, phaseIII: 3.0 },
    { year: 2020, discovery: 4.5, preclinical: 1.4, phaseI: 1.6, phaseII: 2.2, phaseIII: 2.9 },
    { year: 2021, discovery: 4.3, preclinical: 1.3, phaseI: 1.6, phaseII: 2.1, phaseIII: 2.8 },
    { year: 2022, discovery: 4.2, preclinical: 1.3, phaseI: 1.5, phaseII: 2.0, phaseIII: 2.8 },
    { year: 2023, discovery: 4.1, preclinical: 1.2, phaseI: 1.5, phaseII: 2.0, phaseIII: 2.7 },
    { year: 2024, discovery: 4.0, preclinical: 1.2, phaseI: 1.4, phaseII: 1.9, phaseIII: 2.6 },
    { year: 2025, discovery: 3.9, preclinical: 1.1, phaseI: 1.4, phaseII: 1.8, phaseIII: 2.5 },
  ];

  // Mock data for lead compounds
  const leadCompounds = [
    {
      id: "XDR-24589",
      name: "Avastoronib",
      targetDisease: "Non-Small Cell Lung Cancer",
      mechanism: "EGFR Inhibitor",
      phase: "Phase III",
      success: "72%",
      timeToMarket: "18 months",
      investmentToDate: "$248M",
      projectedRevenue: "$1.8B",
    },
    {
      id: "ZNT-42187",
      name: "Nexotinol",
      targetDisease: "Rheumatoid Arthritis",
      mechanism: "IL-6 Inhibitor",
      phase: "Phase II",
      success: "45%",
      timeToMarket: "32 months",
      investmentToDate: "$125M",
      projectedRevenue: "$950M",
    },
    {
      id: "CRV-35219",
      name: "Luminavir",
      targetDisease: "Alzheimer's Disease",
      mechanism: "Tau Protein Aggregation Inhibitor",
      phase: "Phase I",
      success: "23%",
      timeToMarket: "48 months",
      investmentToDate: "$87M",
      projectedRevenue: "$3.2B",
    },
    {
      id: "PTL-12587",
      name: "Cardiostat",
      targetDisease: "Heart Failure",
      mechanism: "SGLT2 Inhibitor",
      phase: "Phase II",
      success: "56%",
      timeToMarket: "28 months",
      investmentToDate: "$142M",
      projectedRevenue: "$1.3B",
    },
    {
      id: "MND-63025",
      name: "Immunorilide",
      targetDisease: "Multiple Sclerosis",
      mechanism: "B-Cell Depleting Agent",
      phase: "Phase I",
      success: "31%",
      timeToMarket: "52 months",
      investmentToDate: "$62M",
      projectedRevenue: "$785M",
    },
  ];

  // Mock data for research collaborations
  const collaborations = [
    {
      id: "COLLAB-2025-001",
      partner: "University of Cambridge",
      type: "Academic",
      focus: "Neurodegenerative Disease Biomarkers",
      startDate: "2024-05-15",
      duration: "36 months",
      budget: "$8.5M",
      status: "Active",
      keyMilestones: "Biomarker identification (Q3 2025), Validation study (Q1 2026)",
    },
    {
      id: "COLLAB-2025-002",
      partner: "BioInnovate Inc.",
      type: "Biotech",
      focus: "mRNA Delivery Technologies",
      startDate: "2023-11-20",
      duration: "48 months",
      budget: "$24.2M",
      status: "Active",
      keyMilestones: "Technology proof-of-concept (Q4 2024), First-in-human study (Q2 2026)",
    },
    {
      id: "COLLAB-2025-003",
      partner: "AI Molecular Systems",
      type: "Technology",
      focus: "AI-Driven Drug Design",
      startDate: "2024-02-10",
      duration: "24 months",
      budget: "$12.8M",
      status: "Active",
      keyMilestones: "Model training completion (Q3 2024), First candidate selection (Q1 2025)",
    },
    {
      id: "COLLAB-2025-004",
      partner: "National Cancer Institute",
      type: "Government",
      focus: "Targeted Oncology Therapies",
      startDate: "2023-09-01",
      duration: "60 months",
      budget: "$32.5M",
      status: "Active",
      keyMilestones: "Target validation (Q2 2024), Lead optimization (Q4 2025)",
    },
    {
      id: "COLLAB-2025-005",
      partner: "GeneticCore Therapeutics",
      type: "Pharma",
      focus: "Gene Therapy Manufacturing",
      startDate: "2024-07-01",
      duration: "36 months",
      budget: "$18.5M",
      status: "Pending",
      keyMilestones: "Process development (Q1 2025), Scale-up validation (Q3 2026)",
    },
  ];

  const getPhaseClass = (phase: string) => {
    switch (phase) {
      case 'Phase I': return 'bg-blue-100 text-blue-800';
      case 'Phase II': return 'bg-purple-100 text-purple-800';
      case 'Phase III': return 'bg-green-100 text-green-800';
      case 'Regulatory Review': return 'bg-amber-100 text-amber-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCollaborationStatusClass = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-amber-100 text-amber-800';
      case 'Completed': return 'bg-blue-100 text-blue-800';
      case 'Suspended': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        {/* R&D Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {researchMetrics.map((metric, index) => (
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
          {/* Therapeutic Areas Pie Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">R&D Focus by Therapeutic Area</h2>
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
                        data={therapeuticAreasData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {therapeuticAreasData.map((entry, index) => (
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

          {/* Development Phases Bar Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Compounds by Development Phase</h2>
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
                      data={developmentPhasesData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      layout="vertical"
                      barSize={20}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis type="category" dataKey="name" width={100} />
                      <Tooltip formatter={(value) => `${Number(value).toLocaleString()} compounds`} />
                      <Legend />
                      <Bar 
                        dataKey="compounds" 
                        name="Number of Compounds" 
                        fill="#8884d8" 
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* Success Rates Bar Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Success Rates by Development Phase (%)</h2>
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
                    data={successRatesData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="phase" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Legend />
                    <Bar 
                      dataKey="rate" 
                      name="Success Rate (%)" 
                      fill="#82ca9d" 
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Development Timeline Trends */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Development Timeline Trends (Years per Phase)</h2>
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
                    data={timelineTrendsData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip formatter={(value) => `${value} years`} />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="discovery" 
                      name="Discovery" 
                      stroke="#8884d8" 
                      activeDot={{ r: 8 }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="preclinical" 
                      name="Preclinical" 
                      stroke="#82ca9d" 
                      activeDot={{ r: 8 }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="phaseI" 
                      name="Phase I" 
                      stroke="#ffc658" 
                      activeDot={{ r: 8 }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="phaseII" 
                      name="Phase II" 
                      stroke="#ff8042" 
                      activeDot={{ r: 8 }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="phaseIII" 
                      name="Phase III" 
                      stroke="#0088fe" 
                      activeDot={{ r: 8 }} 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Lead Compounds Table */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Lead Compounds in Development</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Target Disease</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Mechanism</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Phase</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Success Prob.</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Time to Market</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Investment</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Projected Revenue</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-28" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-40" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                    </tr>
                  ))
                ) : (
                  leadCompounds.map((compound, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{compound.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{compound.name}</td>
                      <td className="px-6 py-4 text-sm">{compound.targetDisease}</td>
                      <td className="px-6 py-4 text-sm">{compound.mechanism}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getPhaseClass(compound.phase)}`}>
                          {compound.phase}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{compound.success}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{compound.timeToMarket}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold">{compound.investmentToDate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{compound.projectedRevenue}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Research Collaborations Table */}
        <Card className="border border-neutral-light overflow-hidden">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Research Collaborations</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Partner</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Focus Area</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Start Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Duration</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Budget</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Key Milestones</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-40" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-48" /></td>
                    </tr>
                  ))
                ) : (
                  collaborations.map((collab, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{collab.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{collab.partner}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{collab.type}</td>
                      <td className="px-6 py-4 text-sm">{collab.focus}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{collab.startDate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{collab.duration}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold">{collab.budget}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getCollaborationStatusClass(collab.status)}`}>
                          {collab.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm">{collab.keyMilestones}</td>
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

export default DrugDiscoveryView;