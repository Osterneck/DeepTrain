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
} from "recharts";

interface RegulatoryComplianceViewProps {
  isLoading: boolean;
}

const RegulatoryComplianceView: FC<RegulatoryComplianceViewProps> = ({ isLoading }) => {
  // Mock data for regulatory metrics
  const regulatoryMetrics = [
    {
      name: "Compliance Rate",
      value: "98.2%",
      change: "+1.1%",
      changeType: "positive",
      description: "Overall regulatory adherence",
    },
    {
      name: "Open Findings",
      value: "5",
      change: "-3",
      changeType: "positive",
      description: "Unresolved compliance issues",
    },
    {
      name: "Avg. Resolution",
      value: "12 days",
      change: "-2 days",
      changeType: "positive",
      description: "Time to resolve findings",
    },
    {
      name: "Approval Rate",
      value: "94.5%",
      change: "+1.5%",
      changeType: "positive",
      description: "Successful submissions",
    },
  ];

  // Mock data for compliance by region
  const complianceByRegionData = [
    { region: "North America", rate: 98.7 },
    { region: "Europe", rate: 99.2 },
    { region: "Asia Pacific", rate: 97.5 },
    { region: "Latin America", rate: 96.8 },
    { region: "Middle East & Africa", rate: 95.9 },
  ];

  // Mock data for compliance by category
  const complianceByCategoryData = [
    { name: "GMP", value: 98.8 },
    { name: "GCP", value: 97.5 },
    { name: "GLP", value: 99.1 },
    { name: "Pharmacovigilance", value: 98.3 },
    { name: "Labeling", value: 97.2 },
  ];

  // Color palette for pie chart
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  // Mock data for audit findings by severity
  const auditFindingsData = [
    { severity: "Critical", count: 1 },
    { severity: "Major", count: 4 },
    { severity: "Minor", count: 18 },
    { severity: "Observation", count: 27 },
  ];

  // Mock data for audit findings by department
  const findingsByDepartmentData = [
    { department: "Manufacturing", count: 12 },
    { department: "Quality Control", count: 8 },
    { department: "R&D", count: 6 },
    { department: "Supply Chain", count: 9 },
    { department: "Regulatory Affairs", count: 4 },
    { department: "Clinical", count: 11 },
  ];

  // Mock data for regulatory submissions trend
  const submissionsTrendData = [
    { month: "Jan", submissions: 8, approvals: 7 },
    { month: "Feb", submissions: 6, approvals: 5 },
    { month: "Mar", submissions: 9, approvals: 8 },
    { month: "Apr", submissions: 12, approvals: 11 },
    { month: "May", submissions: 7, approvals: 7 },
    { month: "Jun", submissions: 10, approvals: 10 },
    { month: "Jul", submissions: 5, approvals: 5 },
    { month: "Aug", submissions: 8, approvals: 7 },
    { month: "Sep", submissions: 11, approvals: 10 },
    { month: "Oct", submissions: 7, approvals: 6 },
    { month: "Nov", submissions: 9, approvals: 9 },
    { month: "Dec", submissions: 6, approvals: 6 },
  ];

  // Mock data for regulatory inspections
  const inspections = [
    {
      id: "INSP-2025-042",
      authority: "FDA",
      site: "Boston Manufacturing",
      type: "GMP",
      date: "2025-02-18",
      status: "Completed",
      findings: "2 Minor",
      classification: "VAI",
      responseStatus: "Accepted",
      nextSteps: "Follow-up in Q4 2025",
    },
    {
      id: "INSP-2025-057",
      authority: "EMA",
      site: "Dublin R&D",
      type: "GCP",
      date: "2025-03-05",
      status: "Completed",
      findings: "1 Minor, 2 Observations",
      classification: "No Action",
      responseStatus: "N/A",
      nextSteps: "Routine inspection in 2027",
    },
    {
      id: "INSP-2025-063",
      authority: "PMDA",
      site: "Tokyo Quality Control",
      type: "GMP",
      date: "2025-03-22",
      status: "Completed",
      findings: "1 Major, 3 Minor",
      classification: "VAI",
      responseStatus: "Pending",
      nextSteps: "Submit response by June 15",
    },
    {
      id: "INSP-2025-089",
      authority: "MHRA",
      site: "London Distribution",
      type: "GDP",
      date: "2025-05-12",
      status: "Scheduled",
      findings: "Pending",
      classification: "Pending",
      responseStatus: "N/A",
      nextSteps: "Prepare documentation",
    },
    {
      id: "INSP-2025-094",
      authority: "FDA",
      site: "Singapore Manufacturing",
      type: "GMP",
      date: "2025-06-08",
      status: "Scheduled",
      findings: "Pending",
      classification: "Pending",
      responseStatus: "N/A",
      nextSteps: "Mock inspection scheduled",
    },
  ];

  // Mock data for open compliance actions
  const complianceActions = [
    {
      id: "CAPA-2025-128",
      title: "Batch Documentation Update",
      site: "Boston Manufacturing",
      type: "CAPA",
      priority: "High",
      source: "Internal Audit",
      assigned: "J. Hamilton",
      dueDate: "2025-06-15",
      status: "In Progress",
      progress: "70%",
    },
    {
      id: "CAPA-2025-132",
      title: "Training Protocol Revision",
      site: "Singapore Manufacturing",
      type: "CAPA",
      priority: "Medium",
      source: "Regulatory Inspection",
      assigned: "L. Chen",
      dueDate: "2025-07-05",
      status: "In Progress",
      progress: "45%",
    },
    {
      id: "DEV-2025-078",
      title: "Stability Testing Procedure",
      site: "Dublin R&D",
      type: "Deviation",
      priority: "Medium",
      source: "Self-identified",
      assigned: "S. O'Brien",
      dueDate: "2025-06-22",
      status: "In Progress",
      progress: "80%",
    },
    {
      id: "CAPA-2025-142",
      title: "Data Integrity Controls",
      site: "Tokyo Quality Control",
      type: "CAPA",
      priority: "High",
      source: "Regulatory Inspection",
      assigned: "H. Tanaka",
      dueDate: "2025-06-30",
      status: "Review",
      progress: "95%",
    },
    {
      id: "DEV-2025-092",
      title: "Temperature Excursion",
      site: "London Distribution",
      type: "Deviation",
      priority: "Low",
      source: "Self-identified",
      assigned: "E. Smith",
      dueDate: "2025-06-10",
      status: "Approved",
      progress: "100%",
    },
  ];

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Scheduled': return 'bg-blue-100 text-blue-800';
      case 'In Progress': return 'bg-purple-100 text-purple-800';
      case 'Canceled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityClass = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-amber-100 text-amber-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getActionStatusClass = (status: string) => {
    switch (status) {
      case 'Approved': return 'bg-green-100 text-green-800';
      case 'Review': return 'bg-blue-100 text-blue-800';
      case 'In Progress': return 'bg-purple-100 text-purple-800';
      case 'Overdue': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        {/* Regulatory Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {regulatoryMetrics.map((metric, index) => (
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
          {/* Compliance by Region Bar Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Compliance Rate by Region (%)</h2>
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
                      data={complianceByRegionData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      layout="vertical"
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" domain={[94, 100]} />
                      <YAxis type="category" dataKey="region" width={120} />
                      <Tooltip formatter={(value) => `${value}%`} />
                      <Legend />
                      <Bar 
                        dataKey="rate" 
                        name="Compliance Rate (%)" 
                        fill="#8884d8" 
                        barSize={20}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </Card>

          {/* Compliance by Category Pie Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Compliance Rate by Category</h2>
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
                        data={complianceByCategoryData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, value }) => `${name}: ${value}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {complianceByCategoryData.map((entry, index) => (
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Audit Findings by Severity */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Audit Findings by Severity</h2>
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
                      data={auditFindingsData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="severity" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar 
                        dataKey="count" 
                        name="Number of Findings" 
                        fill="#FF8042" 
                        barSize={40}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </Card>

          {/* Findings by Department */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Findings by Department</h2>
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
                      data={findingsByDepartmentData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      layout="vertical"
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis type="category" dataKey="department" width={120} />
                      <Tooltip />
                      <Legend />
                      <Bar 
                        dataKey="count" 
                        name="Number of Findings" 
                        fill="#82ca9d" 
                        barSize={20}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* Regulatory Submissions Trend */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Regulatory Submissions & Approvals</h2>
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
                    data={submissionsTrendData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="submissions" 
                      name="Submissions" 
                      stroke="#8884d8" 
                      activeDot={{ r: 8 }} 
                      strokeWidth={2}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="approvals" 
                      name="Approvals" 
                      stroke="#82ca9d" 
                      activeDot={{ r: 8 }} 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Regulatory Inspections Table */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Regulatory Inspections</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Authority</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Site</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Findings</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Classification</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Response</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Next Steps</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                    </tr>
                  ))
                ) : (
                  inspections.map((inspection, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{inspection.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{inspection.authority}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{inspection.site}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{inspection.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{inspection.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(inspection.status)}`}>
                          {inspection.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{inspection.findings}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{inspection.classification}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{inspection.responseStatus}</td>
                      <td className="px-6 py-4 text-sm">{inspection.nextSteps}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Compliance Actions Table */}
        <Card className="border border-neutral-light overflow-hidden">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Open Compliance Actions</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Site</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Priority</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Source</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Assigned To</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Due Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Progress</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-28" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                    </tr>
                  ))
                ) : (
                  complianceActions.map((action, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{action.id}</td>
                      <td className="px-6 py-4 text-sm font-medium">{action.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{action.site}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{action.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getPriorityClass(action.priority)}`}>
                          {action.priority}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{action.source}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{action.assigned}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{action.dueDate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getActionStatusClass(action.status)}`}>
                          {action.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <div className="w-24 bg-gray-200 rounded-full h-2.5">
                          <div 
                            className="bg-blue-600 h-2.5 rounded-full" 
                            style={{ width: action.progress }}
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

export default RegulatoryComplianceView;