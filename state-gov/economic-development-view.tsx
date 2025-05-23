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
  AreaChart
} from "recharts";

interface EconomicDevelopmentViewProps {
  isLoading: boolean;
}

const EconomicDevelopmentView: FC<EconomicDevelopmentViewProps> = ({ isLoading }) => {
  // Mock data for economic metrics
  const economicMetrics = [
    {
      name: "Job Creation",
      value: "28,450",
      change: "+2.4%",
      changeType: "positive",
      description: "New jobs created YTD",
    },
    {
      name: "Business Licenses",
      value: "4,820",
      change: "+8.2%",
      changeType: "positive",
      description: "New business registrations",
    },
    {
      name: "Tax Revenue",
      value: "$1.82B",
      change: "+3.8%",
      changeType: "positive",
      description: "State tax revenue growth",
    },
    {
      name: "Unemployment",
      value: "3.7%",
      change: "-0.5%",
      changeType: "positive",
      description: "Current unemployment rate",
    },
  ];

  // Mock data for industry sectors
  const industrySectorsData = [
    { name: "Technology", value: 28 },
    { name: "Healthcare", value: 24 },
    { name: "Manufacturing", value: 18 },
    { name: "Retail", value: 12 },
    { name: "Finance", value: 10 },
    { name: "Other", value: 8 },
  ];

  // Color palette for pie chart
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  // Mock data for business growth
  const businessGrowthData = [
    { name: "Small Business", value: 68 },
    { name: "Medium Business", value: 22 },
    { name: "Large Corporation", value: 10 },
  ];

  // Mock data for economic indicators
  const economicIndicatorsData = [
    { year: 2021, gdp: 2.4, employment: 4.6, investment: 1.8 },
    { year: 2022, gdp: 3.1, employment: 3.8, investment: 2.4 },
    { year: 2023, gdp: 3.5, employment: 3.5, investment: 3.2 },
    { year: 2024, gdp: 3.7, employment: 3.9, investment: 3.8 },
    { year: 2025, gdp: 4.2, employment: 4.2, investment: 4.1 },
    { year: 2026, gdp: 4.5, employment: 4.5, investment: 4.4, forecast: true },
    { year: 2027, gdp: 4.7, employment: 4.7, investment: 4.6, forecast: true },
    { year: 2028, gdp: 4.9, employment: 4.8, investment: 4.8, forecast: true },
  ];

  // Mock data for regional development
  const regionalDevelopmentData = [
    { region: "Urban Core", jobs: 12450, investment: 580.5, businesses: 2450 },
    { region: "Suburban Areas", jobs: 8560, investment: 420.8, businesses: 1820 },
    { region: "Rural North", jobs: 3240, investment: 185.2, businesses: 620 },
    { region: "Rural South", jobs: 2850, investment: 160.4, businesses: 580 },
    { region: "Industrial Zone", jobs: 5680, investment: 340.6, businesses: 320 },
  ];

  // Mock data for key projects
  const developmentProjects = [
    {
      id: "DEV-2025-042",
      name: "Tech Innovation Park",
      location: "North District",
      type: "Technology Hub",
      investment: "$420M",
      jobs: "3,800+",
      timeline: "2024-2027",
      status: "In Progress",
      phase: "Construction",
      partners: "TechCorp, State University",
    },
    {
      id: "DEV-2025-038",
      name: "Downtown Revitalization",
      location: "Central Business District",
      type: "Urban Renewal",
      investment: "$285M",
      jobs: "2,200+",
      timeline: "2023-2026",
      status: "In Progress",
      phase: "Phase 2",
      partners: "Urban Developers, City Gov",
    },
    {
      id: "DEV-2025-035",
      name: "Advanced Manufacturing Center",
      location: "Industrial Zone",
      type: "Manufacturing",
      investment: "$380M",
      jobs: "2,800+",
      timeline: "2024-2028",
      status: "In Progress",
      phase: "Phase 1",
      partners: "ManufactCorp, State Fund",
    },
    {
      id: "DEV-2025-032",
      name: "Healthcare Innovation District",
      location: "East Region",
      type: "Healthcare",
      investment: "$560M",
      jobs: "4,200+",
      timeline: "2025-2029",
      status: "Planning",
      phase: "Approval",
      partners: "MedInnovate, University Hospital",
    },
    {
      id: "DEV-2025-028",
      name: "Renewable Energy Park",
      location: "Southern Region",
      type: "Energy",
      investment: "$650M",
      jobs: "2,400+",
      timeline: "2025-2030",
      status: "Planning",
      phase: "Design",
      partners: "GreenEnergy Co, Federal Grant",
    },
  ];

  // Mock data for grant programs
  const grantPrograms = [
    {
      id: "GRANT-2025-001",
      name: "Small Business Innovation Fund",
      sector: "Various",
      budget: "$48M",
      awarded: "$32.5M",
      recipients: "124",
      deadline: "2025-08-30",
      status: "Open",
      eligibility: "Small businesses, <100 employees",
    },
    {
      id: "GRANT-2025-002",
      name: "Tech Startup Accelerator",
      sector: "Technology",
      budget: "$35M",
      awarded: "$18.2M",
      recipients: "42",
      deadline: "2025-07-15",
      status: "Open",
      eligibility: "Tech startups, <3 years old",
    },
    {
      id: "GRANT-2025-003",
      name: "Rural Development Initiative",
      sector: "Agriculture, Manufacturing",
      budget: "$65M",
      awarded: "$42.8M",
      recipients: "78",
      deadline: "2025-09-30",
      status: "Open",
      eligibility: "Rural businesses, job creation focus",
    },
    {
      id: "GRANT-2025-004",
      name: "Green Business Transition",
      sector: "Energy, Manufacturing",
      budget: "$40M",
      awarded: "$22.4M",
      recipients: "56",
      deadline: "2025-10-15",
      status: "Open",
      eligibility: "Sustainability initiatives, emissions reduction",
    },
    {
      id: "GRANT-2025-005",
      name: "Workforce Training Fund",
      sector: "Various",
      budget: "$28M",
      awarded: "$12.6M",
      recipients: "35",
      deadline: "2025-06-30",
      status: "Open",
      eligibility: "Training programs, skills development",
    },
  ];

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Planning': return 'bg-amber-100 text-amber-800';
      case 'Complete': return 'bg-green-100 text-green-800';
      case 'Open': return 'bg-green-100 text-green-800';
      case 'Closed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPhaseClass = (phase: string) => {
    switch (phase) {
      case 'Construction': return 'text-blue-600 font-semibold';
      case 'Design': return 'text-amber-600';
      case 'Phase 1': return 'text-blue-600';
      case 'Phase 2': return 'text-green-600 font-semibold';
      case 'Approval': return 'text-amber-600';
      default: return 'text-neutral-dark';
    }
  };

  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        {/* Economic Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {economicMetrics.map((metric, index) => (
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
          {/* Industry Sectors Pie Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Economic Growth by Industry</h2>
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
                        data={industrySectorsData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {industrySectorsData.map((entry, index) => (
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

          {/* Business Growth Pie Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Business Growth by Size</h2>
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
                        data={businessGrowthData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {businessGrowthData.map((entry, index) => (
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
        </div>

        {/* Economic Indicators Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Economic Indicators (Growth %)</h2>
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
                    data={economicIndicatorsData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="gdp" 
                      name="GDP Growth" 
                      stroke="#8884d8" 
                      activeDot={{ r: 8 }} 
                      strokeWidth={forecast => forecast.forecast ? 1 : 2}
                      strokeDasharray={forecast => forecast.forecast ? "5 5" : "0"}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="employment" 
                      name="Employment Growth" 
                      stroke="#82ca9d" 
                      activeDot={{ r: 8 }} 
                      strokeWidth={forecast => forecast.forecast ? 1 : 2}
                      strokeDasharray={forecast => forecast.forecast ? "5 5" : "0"}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="investment" 
                      name="Investment Growth" 
                      stroke="#ffc658" 
                      activeDot={{ r: 8 }} 
                      strokeWidth={forecast => forecast.forecast ? 1 : 2}
                      strokeDasharray={forecast => forecast.forecast ? "5 5" : "0"}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Regional Development Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Regional Economic Development</h2>
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
                    data={regionalDevelopmentData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    barSize={20}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="region" />
                    <YAxis yAxisId="left" orientation="left" label={{ value: 'Jobs Created', angle: -90, position: 'insideLeft' }} />
                    <YAxis yAxisId="right" orientation="right" label={{ value: 'Investment (Millions $)', angle: 90, position: 'insideRight' }} />
                    <Tooltip />
                    <Legend />
                    <Bar 
                      yAxisId="left"
                      dataKey="jobs" 
                      name="Jobs Created" 
                      fill="#8884d8" 
                    />
                    <Bar 
                      yAxisId="right"
                      dataKey="investment" 
                      name="Investment (Millions $)" 
                      fill="#82ca9d" 
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Development Projects Table */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Key Development Projects</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Project ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Investment</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Jobs</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Timeline</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Phase</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Partners</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-40" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-40" /></td>
                    </tr>
                  ))
                ) : (
                  developmentProjects.map((project, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{project.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{project.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{project.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{project.location}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold">{project.investment}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{project.jobs}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{project.timeline}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(project.status)}`}>
                          {project.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={getPhaseClass(project.phase)}>
                          {project.phase}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm">{project.partners}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Grant Programs Table */}
        <Card className="border border-neutral-light overflow-hidden">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Economic Development Grant Programs</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Grant ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Program Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Sector</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Budget</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Awarded</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Recipients</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Deadline</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Eligibility</th>
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
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-48" /></td>
                    </tr>
                  ))
                ) : (
                  grantPrograms.map((grant, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{grant.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{grant.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{grant.sector}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold">{grant.budget}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{grant.awarded}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{grant.recipients}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{grant.deadline}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(grant.status)}`}>
                          {grant.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm">{grant.eligibility}</td>
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

export default EconomicDevelopmentView;