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
  ComposedChart
} from "recharts";

interface ClinicalTrialsViewProps {
  isLoading: boolean;
}

const ClinicalTrialsView: FC<ClinicalTrialsViewProps> = ({ isLoading }) => {
  // Mock data for trials metrics
  const trialsMetrics = [
    {
      name: "Active Trials",
      value: "248",
      change: "+32",
      changeType: "positive",
      description: "Currently ongoing clinical trials",
    },
    {
      name: "Enrolled Patients",
      value: "42,850",
      change: "+3,560",
      changeType: "positive",
      description: "Total patients in active trials",
    },
    {
      name: "Avg Duration",
      value: "18.5 mo",
      change: "-1.2 mo",
      changeType: "positive",
      description: "Average trial duration",
    },
    {
      name: "Completion Rate",
      value: "81.6%",
      change: "+2.4%",
      changeType: "positive",
      description: "Trials reaching completion",
    },
  ];

  // Mock data for trial phases
  const trialPhasesData = [
    { name: "Phase I", trials: 42 },
    { name: "Phase II", trials: 86 },
    { name: "Phase III", trials: 65 },
    { name: "Phase IV", trials: 55 },
  ];

  // Color palette for pie chart
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  // Mock data for therapeutic areas
  const therapeuticAreasData = [
    { name: "Oncology", trials: 72 },
    { name: "Cardiology", trials: 48 },
    { name: "Neurology", trials: 42 },
    { name: "Infectious Disease", trials: 38 },
    { name: "Immunology", trials: 28 },
    { name: "Other", trials: 20 },
  ];

  // Mock data for enrollment trends
  const enrollmentTrendsData = [
    { month: "Jan", actual: 3280, target: 3500 },
    { month: "Feb", actual: 3420, target: 3600 },
    { month: "Mar", actual: 3760, target: 3700 },
    { month: "Apr", actual: 3850, target: 3800 },
    { month: "May", actual: 3920, target: 3900 },
    { month: "Jun", actual: null, target: 4000, forecast: true },
    { month: "Jul", actual: null, target: 4100, forecast: true },
    { month: "Aug", actual: null, target: 4200, forecast: true },
    { month: "Sep", actual: null, target: 4300, forecast: true },
    { month: "Oct", actual: null, target: 4400, forecast: true },
    { month: "Nov", actual: null, target: 4500, forecast: true },
    { month: "Dec", actual: null, target: 4600, forecast: true },
  ];

  // Mock data for trial duration by phase
  const trialDurationData = [
    { phase: "Phase I", duration: 13.2 },
    { phase: "Phase II", duration: 22.1 },
    { phase: "Phase III", duration: 31.5 },
    { phase: "Phase IV", duration: 24.8 },
  ];

  // Mock data for active trials
  const activeTrials = [
    {
      id: "CT-2025-1042",
      compound: "Avastoronib",
      phase: "Phase III",
      disease: "Non-Small Cell Lung Cancer",
      centers: 42,
      enrolled: "1,582/1,800",
      startDate: "2023-05-18",
      estCompletion: "2025-11-20",
      status: "On Schedule",
      manager: "Dr. E. Roberts",
    },
    {
      id: "CT-2025-0985",
      compound: "Nexotinol",
      phase: "Phase II",
      disease: "Rheumatoid Arthritis",
      centers: 28,
      enrolled: "842/1,200",
      startDate: "2024-01-10",
      estCompletion: "2026-01-15",
      status: "Behind Schedule",
      manager: "Dr. M. Chen",
    },
    {
      id: "CT-2025-0876",
      compound: "Cardiostat",
      phase: "Phase II",
      disease: "Heart Failure",
      centers: 35,
      enrolled: "950/920",
      startDate: "2023-11-05",
      estCompletion: "2025-08-30",
      status: "Ahead of Schedule",
      manager: "Dr. S. Patel",
    },
    {
      id: "CT-2025-0742",
      compound: "Luminavir",
      phase: "Phase I",
      disease: "Alzheimer's Disease",
      centers: 15,
      enrolled: "125/240",
      startDate: "2024-03-22",
      estCompletion: "2025-07-15",
      status: "On Schedule",
      manager: "Dr. A. Garcia",
    },
    {
      id: "CT-2025-0658",
      compound: "Immunorilide",
      phase: "Phase I",
      disease: "Multiple Sclerosis",
      centers: 12,
      enrolled: "96/180",
      startDate: "2024-04-15",
      estCompletion: "2025-10-10",
      status: "On Schedule",
      manager: "Dr. K. Williams",
    },
  ];

  // Mock data for trial sites
  const trialSites = [
    {
      id: "SITE-2025-0142",
      name: "University Medical Center",
      location: "Boston, MA",
      specialization: "Oncology, Neurology",
      activeTrials: 18,
      totalPatients: 385,
      enrollment: "92%",
      rating: "A+",
      leadInvestigator: "Dr. J. Thompson",
    },
    {
      id: "SITE-2025-0126",
      name: "Central Research Hospital",
      location: "Chicago, IL",
      specialization: "Cardiology, Immunology",
      activeTrials: 12,
      totalPatients: 280,
      enrollment: "85%",
      rating: "A",
      leadInvestigator: "Dr. R. Martinez",
    },
    {
      id: "SITE-2025-0118",
      name: "Pacific Healthcare Research",
      location: "San Francisco, CA",
      specialization: "Oncology, Infectious Disease",
      activeTrials: 15,
      totalPatients: 310,
      enrollment: "88%",
      rating: "A",
      leadInvestigator: "Dr. L. Chen",
    },
    {
      id: "SITE-2025-0097",
      name: "Southeast Clinical Center",
      location: "Atlanta, GA",
      specialization: "Neurology, Cardiology",
      activeTrials: 10,
      totalPatients: 240,
      enrollment: "78%",
      rating: "B+",
      leadInvestigator: "Dr. E. Johnson",
    },
    {
      id: "SITE-2025-0085",
      name: "Midwest Medical Institute",
      location: "Minneapolis, MN",
      specialization: "Immunology, Respiratory",
      activeTrials: 8,
      totalPatients: 185,
      enrollment: "82%",
      rating: "A-",
      leadInvestigator: "Dr. S. Williams",
    },
  ];

  const getPhaseClass = (phase: string) => {
    switch (phase) {
      case 'Phase I': return 'bg-blue-100 text-blue-800';
      case 'Phase II': return 'bg-purple-100 text-purple-800';
      case 'Phase III': return 'bg-green-100 text-green-800';
      case 'Phase IV': return 'bg-teal-100 text-teal-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'On Schedule': return 'bg-green-100 text-green-800';
      case 'Behind Schedule': return 'bg-red-100 text-red-800';
      case 'Ahead of Schedule': return 'bg-blue-100 text-blue-800';
      case 'Completed': return 'bg-purple-100 text-purple-800';
      case 'Suspended': return 'bg-amber-100 text-amber-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRatingClass = (rating: string) => {
    if (rating.startsWith('A+')) return 'text-green-600 font-semibold';
    if (rating.startsWith('A')) return 'text-green-500';
    if (rating.startsWith('B+')) return 'text-blue-600';
    if (rating.startsWith('B')) return 'text-blue-500';
    return 'text-neutral-dark';
  };

  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        {/* Trials Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {trialsMetrics.map((metric, index) => (
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
          {/* Trial Phases Pie Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Trials by Phase</h2>
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
                        data={trialPhasesData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="trials"
                      >
                        {trialPhasesData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${value} trials`} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </Card>

          {/* Therapeutic Areas Bar Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Trials by Therapeutic Area</h2>
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
                      data={therapeuticAreasData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      layout="vertical"
                      barSize={20}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis type="category" dataKey="name" width={100} />
                      <Tooltip formatter={(value) => `${value} trials`} />
                      <Legend />
                      <Bar 
                        dataKey="trials" 
                        name="Number of Trials" 
                        fill="#8884d8" 
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* Enrollment Trends Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Monthly Patient Enrollment Trends</h2>
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
                    data={enrollmentTrendsData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(value) => value ? `${value.toLocaleString()} patients` : ''} />
                    <Legend />
                    <Bar 
                      dataKey="actual" 
                      name="Actual Enrollment" 
                      barSize={20} 
                      fill="#8884d8" 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="target" 
                      name="Target Enrollment" 
                      stroke="#ff7300"
                      strokeWidth={2}
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Trial Duration Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Trial Duration by Phase (Months)</h2>
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
                    data={trialDurationData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="phase" />
                    <YAxis />
                    <Tooltip formatter={(value) => `${value} months`} />
                    <Legend />
                    <Bar 
                      dataKey="duration" 
                      name="Average Duration (Months)" 
                      fill="#82ca9d" 
                      barSize={40}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Active Trials Table */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Active Clinical Trials</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Trial ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Compound</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Phase</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Disease</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Centers</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Enrollment</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Start Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Est. Completion</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Trial Manager</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-28" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-40" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                    </tr>
                  ))
                ) : (
                  activeTrials.map((trial, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{trial.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{trial.compound}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getPhaseClass(trial.phase)}`}>
                          {trial.phase}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm">{trial.disease}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center">{trial.centers}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{trial.enrolled}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{trial.startDate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{trial.estCompletion}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(trial.status)}`}>
                          {trial.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{trial.manager}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Trial Sites Table */}
        <Card className="border border-neutral-light overflow-hidden">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Top Trial Sites</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Site ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Specialization</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Active Trials</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Total Patients</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Enrollment Rate</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Rating</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Lead Investigator</th>
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
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                    </tr>
                  ))
                ) : (
                  trialSites.map((site, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{site.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{site.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{site.location}</td>
                      <td className="px-6 py-4 text-sm">{site.specialization}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center">{site.activeTrials}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{site.totalPatients}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{site.enrollment}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={getRatingClass(site.rating)}>
                          {site.rating}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{site.leadInvestigator}</td>
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

export default ClinicalTrialsView;