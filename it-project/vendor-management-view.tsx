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
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";

interface VendorManagementViewProps {
  isLoading: boolean;
}

const VendorManagementView: FC<VendorManagementViewProps> = ({ isLoading }) => {
  // Mock data for vendor metrics
  const vendorMetrics = [
    {
      name: "Active Vendors",
      value: "24",
      change: "+2",
      changeType: "positive",
      description: "Current vendors with active contracts",
    },
    {
      name: "Vendor Spend",
      value: "$3.85M",
      change: "+$240K",
      changeType: "neutral",
      description: "Year-to-date spending across all vendors",
    },
    {
      name: "Avg Vendor Score",
      value: "84/100",
      change: "+3",
      changeType: "positive",
      description: "Average performance rating of vendors",
    },
    {
      name: "Contract Renewals",
      value: "8",
      change: "-1",
      changeType: "neutral",
      description: "Upcoming contract renewals in next 90 days",
    },
  ];

  // Mock data for vendor spend by category
  const spendCategoryData = [
    { name: "Software Licenses", value: 1250000 },
    { name: "Cloud Services", value: 950000 },
    { name: "Consulting Services", value: 680000 },
    { name: "Hardware", value: 450000 },
    { name: "Support & Maintenance", value: 520000 },
  ];

  // Color palette for pie chart
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  // Mock data for vendor performance
  const vendorPerformanceData = [
    {
      vendor: "Cloud Solutions Pro",
      quality: 90,
      delivery: 85,
      responsiveness: 92,
      costEffectiveness: 78,
      innovation: 88,
      overall: 87,
    },
    {
      vendor: "DataTech Systems",
      quality: 82,
      delivery: 75,
      responsiveness: 80,
      costEffectiveness: 92,
      innovation: 70,
      overall: 80,
    },
    {
      vendor: "SecureNet",
      quality: 95,
      delivery: 88,
      responsiveness: 75,
      costEffectiveness: 70,
      innovation: 85,
      overall: 83,
    },
    {
      vendor: "InfoSys Consulting",
      quality: 85,
      delivery: 82,
      responsiveness: 90,
      costEffectiveness: 85,
      innovation: 92,
      overall: 87,
    },
    {
      vendor: "TechBuild Inc",
      quality: 78,
      delivery: 80,
      responsiveness: 85,
      costEffectiveness: 90,
      innovation: 75,
      overall: 82,
    },
  ];

  // Mock data for spend trends
  const spendTrendsData = [
    { month: "Jan", spend: 285000, forecast: 290000 },
    { month: "Feb", spend: 310000, forecast: 300000 },
    { month: "Mar", spend: 295000, forecast: 305000 },
    { month: "Apr", spend: 320000, forecast: 310000 },
    { month: "May", spend: 340000, forecast: 320000 },
    { month: "Jun", spend: null, forecast: 330000 },
    { month: "Jul", spend: null, forecast: 340000 },
    { month: "Aug", spend: null, forecast: 350000 },
    { month: "Sep", spend: null, forecast: 345000 },
    { month: "Oct", spend: null, forecast: 355000 },
    { month: "Nov", spend: null, forecast: 360000 },
    { month: "Dec", spend: null, forecast: 365000 },
  ];

  // Mock data for key vendors
  const keyVendors = [
    {
      id: "VEN-2025-001",
      name: "Cloud Solutions Pro",
      category: "Cloud Services",
      contractValue: "$850,000",
      contractEnd: "2025-12-31",
      status: "Active",
      riskLevel: "Low",
      performanceScore: 87,
      manager: "Sarah Johnson",
    },
    {
      id: "VEN-2025-002",
      name: "DataTech Systems",
      category: "Data Management",
      contractValue: "$620,000",
      contractEnd: "2025-08-15",
      status: "Active",
      riskLevel: "Medium",
      performanceScore: 80,
      manager: "Michael Chen",
    },
    {
      id: "VEN-2025-003",
      name: "SecureNet",
      category: "Security Services",
      contractValue: "$450,000",
      contractEnd: "2025-09-30",
      status: "Active",
      riskLevel: "Low",
      performanceScore: 83,
      manager: "Emily Davis",
    },
    {
      id: "VEN-2025-004",
      name: "InfoSys Consulting",
      category: "Professional Services",
      contractValue: "$780,000",
      contractEnd: "2025-07-15",
      status: "Renewal Pending",
      riskLevel: "Low",
      performanceScore: 87,
      manager: "David Wilson",
    },
    {
      id: "VEN-2025-005",
      name: "TechBuild Inc",
      category: "Hardware",
      contractValue: "$320,000",
      contractEnd: "2025-10-31",
      status: "Active",
      riskLevel: "High",
      performanceScore: 82,
      manager: "Lisa Martinez",
    },
  ];

  const getRiskLevelClass = (riskLevel: string) => {
    switch (riskLevel) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-amber-100 text-amber-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Renewal Pending': return 'bg-blue-100 text-blue-800';
      case 'Inactive': return 'bg-gray-100 text-gray-800';
      case 'Terminated': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPerformanceClass = (score: number) => {
    if (score >= 85) return 'text-success font-semibold';
    if (score >= 75) return 'text-amber-600';
    return 'text-danger';
  };

  // Format currency helper
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        {/* Vendor Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {vendorMetrics.map((metric, index) => (
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
          {/* Spend by Category Pie Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Vendor Spend by Category</h2>
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
                        data={spendCategoryData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {spendCategoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => formatCurrency(value as number)} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </Card>

          {/* Spend Trends Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Vendor Spend Trends</h2>
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
                      data={spendTrendsData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis tickFormatter={(value) => `$${value/1000}K`} />
                      <Tooltip formatter={(value) => formatCurrency(value as number)} />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="spend" 
                        name="Actual Spend" 
                        stroke="#8884d8" 
                        strokeWidth={2}
                        activeDot={{ r: 8 }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="forecast" 
                        name="Forecast Spend" 
                        stroke="#82ca9d" 
                        strokeWidth={2}
                        strokeDasharray="5 5"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* Vendor Performance Radar Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Top Vendor Performance Comparison</h2>
          </div>
          
          {isLoading ? (
            <div className="chart-placeholder">
              <Skeleton className="h-80 w-full" />
            </div>
          ) : (
            <div className="p-4">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart outerRadius={90} data={[
                    { subject: 'Quality', Cloud: 90, DataTech: 82, SecureNet: 95, InfoSys: 85, TechBuild: 78 },
                    { subject: 'Delivery', Cloud: 85, DataTech: 75, SecureNet: 88, InfoSys: 82, TechBuild: 80 },
                    { subject: 'Responsiveness', Cloud: 92, DataTech: 80, SecureNet: 75, InfoSys: 90, TechBuild: 85 },
                    { subject: 'Cost', Cloud: 78, DataTech: 92, SecureNet: 70, InfoSys: 85, TechBuild: 90 },
                    { subject: 'Innovation', Cloud: 88, DataTech: 70, SecureNet: 85, InfoSys: 92, TechBuild: 75 },
                  ]}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis domain={[0, 100]} />
                    <Radar name="Cloud Solutions Pro" dataKey="Cloud" stroke="#8884d8" fill="#8884d8" fillOpacity={0.2} />
                    <Radar name="DataTech Systems" dataKey="DataTech" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.2} />
                    <Radar name="SecureNet" dataKey="SecureNet" stroke="#ffc658" fill="#ffc658" fillOpacity={0.2} />
                    <Radar name="InfoSys Consulting" dataKey="InfoSys" stroke="#ff8042" fill="#ff8042" fillOpacity={0.2} />
                    <Radar name="TechBuild Inc" dataKey="TechBuild" stroke="#0088fe" fill="#0088fe" fillOpacity={0.2} />
                    <Legend />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Key Vendors Table */}
        <Card className="border border-neutral-light overflow-hidden">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Key Vendors</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Vendor Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Contract Value</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">End Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Risk Level</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Performance</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Manager</th>
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
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                    </tr>
                  ))
                ) : (
                  keyVendors.map((vendor, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{vendor.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{vendor.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{vendor.category}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold">{vendor.contractValue}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{vendor.contractEnd}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(vendor.status)}`}>
                          {vendor.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getRiskLevelClass(vendor.riskLevel)}`}>
                          {vendor.riskLevel}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={getPerformanceClass(vendor.performanceScore)}>
                          {vendor.performanceScore}/100
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{vendor.manager}</td>
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

export default VendorManagementView;