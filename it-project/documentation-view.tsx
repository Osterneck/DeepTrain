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
} from "recharts";

interface DocumentationViewProps {
  isLoading: boolean;
}

const DocumentationView: FC<DocumentationViewProps> = ({ isLoading }) => {
  // Mock data for documentation metrics
  const docMetrics = [
    {
      name: "Total Documents",
      value: "428",
      change: "+24",
      changeType: "positive",
      description: "Total documentation artifacts across all projects",
    },
    {
      name: "Documentation Coverage",
      value: "84%",
      change: "+6%",
      changeType: "positive",
      description: "Requirements with corresponding documentation",
    },
    {
      name: "Doc Quality Score",
      value: "4.2/5",
      change: "+0.3",
      changeType: "positive",
      description: "Average quality rating from user feedback",
    },
    {
      name: "Update Frequency",
      value: "8.4 days",
      change: "-1.2 days",
      changeType: "positive",
      description: "Average time between document updates",
    },
  ];

  // Mock data for document types
  const documentTypeData = [
    { name: "Technical Specs", value: 125 },
    { name: "User Guides", value: 98 },
    { name: "Process Flows", value: 72 },
    { name: "Architecture Docs", value: 58 },
    { name: "API References", value: 45 },
    { name: "Other", value: 30 },
  ];

  // Color palette for pie chart
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  // Mock data for document age
  const documentAgeData = [
    { age: "< 30 days", count: 85 },
    { age: "30-90 days", count: 155 },
    { age: "91-180 days", count: 120 },
    { age: "181-365 days", count: 45 },
    { age: "> 365 days", count: 23 },
  ];

  // Mock data for recent documents
  const recentDocuments = [
    {
      id: "DOC-2025-0142",
      title: "Cloud Migration Architecture Blueprint",
      type: "Architecture Docs",
      project: "Cloud Migration",
      author: "Michael Chen",
      lastUpdated: "2025-05-18",
      status: "Published",
      version: "2.3",
    },
    {
      id: "DOC-2025-0138",
      title: "Database Replication Process Guide",
      type: "Technical Specs",
      project: "Data Analytics Platform",
      author: "Sarah Johnson",
      lastUpdated: "2025-05-15",
      status: "Published",
      version: "1.2",
    },
    {
      id: "DOC-2025-0134",
      title: "Mobile App User Interface Guidelines",
      type: "User Guides",
      project: "Mobile App Development",
      author: "Emily Davis",
      lastUpdated: "2025-05-12",
      status: "In Review",
      version: "3.1",
    },
    {
      id: "DOC-2025-0130",
      title: "Secure Authentication API Reference",
      type: "API References",
      project: "Security Upgrades",
      author: "Kevin Yang",
      lastUpdated: "2025-05-08",
      status: "Draft",
      version: "0.8",
    },
    {
      id: "DOC-2025-0128",
      title: "Data Migration Test Plan",
      type: "Technical Specs",
      project: "ERP Implementation",
      author: "Lisa Martinez",
      lastUpdated: "2025-05-05",
      status: "Published",
      version: "1.0",
    },
  ];

  // Mock data for document reviews
  const documentReviews = [
    {
      documentId: "DOC-2025-0134",
      documentTitle: "Mobile App User Interface Guidelines",
      reviewer: "Jason Rodriguez",
      reviewDate: "2025-05-14",
      status: "Pending",
      dueDate: "2025-05-20",
      priority: "High",
    },
    {
      documentId: "DOC-2025-0130",
      documentTitle: "Secure Authentication API Reference",
      reviewer: "Jennifer Kim",
      reviewDate: "2025-05-10",
      status: "Completed",
      dueDate: "2025-05-15",
      priority: "Medium",
    },
    {
      documentId: "DOC-2025-0126",
      documentTitle: "DevOps Pipeline Implementation",
      reviewer: "David Wilson",
      reviewDate: "2025-05-08",
      status: "Pending",
      dueDate: "2025-05-22",
      priority: "Medium",
    },
    {
      documentId: "DOC-2025-0122",
      documentTitle: "System Architecture Overview",
      reviewer: "Michael Chen",
      reviewDate: "2025-05-04",
      status: "Overdue",
      dueDate: "2025-05-12",
      priority: "High",
    },
  ];

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Published': return 'bg-green-100 text-green-800';
      case 'In Review': return 'bg-blue-100 text-blue-800';
      case 'Draft': return 'bg-amber-100 text-amber-800';
      case 'Archived': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getReviewStatusClass = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-blue-100 text-blue-800';
      case 'Overdue': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityClass = (priority: string) => {
    switch (priority) {
      case 'High': return 'text-danger font-semibold';
      case 'Medium': return 'text-amber-600';
      case 'Low': return 'text-success';
      default: return 'text-neutral-dark';
    }
  };

  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        {/* Documentation Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {docMetrics.map((metric, index) => (
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
          {/* Document Types Pie Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Document Types Distribution</h2>
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
                        data={documentTypeData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {documentTypeData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${value} documents`} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </Card>

          {/* Document Age Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Document Age Analysis</h2>
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
                      data={documentAgeData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      barSize={60}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="age" />
                      <YAxis />
                      <Tooltip formatter={(value) => `${value} documents`} />
                      <Legend />
                      <Bar 
                        dataKey="count" 
                        name="Number of Documents" 
                        fill="#8884d8" 
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* Recent Documents Table */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Recent Documents</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Document ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Project</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Author</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Last Updated</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Version</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-48" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                    </tr>
                  ))
                ) : (
                  recentDocuments.map((doc, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{doc.id}</td>
                      <td className="px-6 py-4 text-sm font-medium">{doc.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{doc.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{doc.project}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{doc.author}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{doc.lastUpdated}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(doc.status)}`}>
                          {doc.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center">{doc.version}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Document Reviews Table */}
        <Card className="border border-neutral-light overflow-hidden">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Pending Document Reviews</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Document ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Reviewer</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Review Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Due Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Priority</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(4)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-48" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                    </tr>
                  ))
                ) : (
                  documentReviews.map((review, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{review.documentId}</td>
                      <td className="px-6 py-4 text-sm font-medium">{review.documentTitle}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{review.reviewer}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{review.reviewDate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{review.dueDate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={getPriorityClass(review.priority)}>
                          {review.priority}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getReviewStatusClass(review.status)}`}>
                          {review.status}
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

export default DocumentationView;