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

interface SocialServicesViewProps {
  isLoading: boolean;
}

const SocialServicesView: FC<SocialServicesViewProps> = ({ isLoading }) => {
  // Mock data for social services metrics
  const socialServicesMetrics = [
    {
      name: "Assistance Programs",
      value: "27",
      change: "+3",
      changeType: "positive",
      description: "State-operated social assistance programs",
    },
    {
      name: "Benefit Recipients",
      value: "248,520",
      change: "-2.3%",
      changeType: "positive",
      description: "Individuals receiving state benefits",
    },
    {
      name: "Program Funding",
      value: "$428.2M",
      change: "+$12.4M",
      changeType: "positive",
      description: "Annual budget for social services",
    },
    {
      name: "Case Completion",
      value: "82.5%",
      change: "+3.8%",
      changeType: "positive",
      description: "Cases successfully processed",
    },
  ];

  // Mock data for benefit distribution
  const benefitDistributionData = [
    { name: "Financial Assistance", value: 32 },
    { name: "Healthcare Access", value: 28 },
    { name: "Food Assistance", value: 18 },
    { name: "Housing Assistance", value: 12 },
    { name: "Child Services", value: 10 },
  ];

  // Color palette for pie chart
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  // Mock data for demographic breakdown
  const demographicBreakdownData = [
    { name: "Children & Youth", value: 28 },
    { name: "Working Adults", value: 32 },
    { name: "Elderly", value: 24 },
    { name: "Disabled", value: 16 },
  ];

  // Mock data for assistance trends
  const assistanceTrendsData = [
    { month: "Jan", financialAid: 12540, foodAssistance: 18200, housingSupport: 5420 },
    { month: "Feb", financialAid: 13250, foodAssistance: 17850, housingSupport: 5380 },
    { month: "Mar", financialAid: 14120, foodAssistance: 18420, housingSupport: 5520 },
    { month: "Apr", financialAid: 14850, foodAssistance: 19250, housingSupport: 5620 },
    { month: "May", financialAid: 15420, foodAssistance: 19840, housingSupport: 5780 },
    { month: "Jun", financialAid: null, foodAssistance: null, housingSupport: null, forecast: true },
    { month: "Jul", financialAid: null, foodAssistance: null, housingSupport: null, forecast: true },
    { month: "Aug", financialAid: null, foodAssistance: null, housingSupport: null, forecast: true },
    { month: "Sep", financialAid: null, foodAssistance: null, housingSupport: null, forecast: true },
    { month: "Oct", financialAid: null, foodAssistance: null, housingSupport: null, forecast: true },
    { month: "Nov", financialAid: null, foodAssistance: null, housingSupport: null, forecast: true },
    { month: "Dec", financialAid: null, foodAssistance: null, housingSupport: null, forecast: true },
  ];

  // Mock data for regional distribution
  const regionalDistributionData = [
    { region: "Urban Centers", recipients: 124850, funding: 212.6 },
    { region: "Suburban Areas", recipients: 68250, funding: 142.4 },
    { region: "Rural North", recipients: 24350, funding: 48.2 },
    { region: "Rural South", recipients: 18750, funding: 38.4 },
    { region: "Tribal Regions", recipients: 12320, funding: 26.8 },
  ];

  // Mock data for active social programs
  const socialPrograms = [
    {
      id: "PROG-2025-042",
      name: "Family Support Initiative",
      type: "Family Assistance",
      recipients: 35420,
      funding: "$42.8M",
      status: "Active",
      effectiveness: "High",
      waitlist: "None",
      nextReview: "2025-12-15",
    },
    {
      id: "PROG-2025-038",
      name: "Senior Care Network",
      type: "Elderly Support",
      recipients: 28750,
      funding: "$38.5M",
      status: "Active",
      effectiveness: "Medium",
      waitlist: "Low",
      nextReview: "2026-03-30",
    },
    {
      id: "PROG-2025-035",
      name: "Child Nutrition Program",
      type: "Food Assistance",
      recipients: 42180,
      funding: "$32.4M",
      status: "Active",
      effectiveness: "High",
      waitlist: "None",
      nextReview: "2025-09-10",
    },
    {
      id: "PROG-2025-032",
      name: "Housing First Initiative",
      type: "Housing Support",
      recipients: 15280,
      funding: "$68.2M",
      status: "Active",
      effectiveness: "Medium",
      waitlist: "High",
      nextReview: "2025-08-20",
    },
    {
      id: "PROG-2025-028",
      name: "Workforce Development",
      type: "Employment Support",
      recipients: 18640,
      funding: "$24.8M",
      status: "Under Review",
      effectiveness: "Medium",
      waitlist: "Low",
      nextReview: "2025-06-15",
    },
  ];

  // Mock data for service centers
  const serviceCenters = [
    {
      id: "CENTER-2025-001",
      name: "Downtown Community Center",
      location: "Central City, Main District",
      services: "Financial Aid, Food Assistance, Job Training",
      capacity: "250/day",
      current: "210/day",
      staffing: "28 full-time, 12 part-time",
      hours: "M-F 8:00-17:00, Sat 9:00-14:00",
      status: "Operational",
    },
    {
      id: "CENTER-2025-002",
      name: "Eastside Family Services",
      location: "Eastern District, Riverside Area",
      services: "Child Care, Family Counseling, Food Assistance",
      capacity: "180/day",
      current: "165/day",
      staffing: "22 full-time, 8 part-time",
      hours: "M-F 8:30-17:30, Sat 10:00-13:00",
      status: "Operational",
    },
    {
      id: "CENTER-2025-003",
      name: "Westside Community Support",
      location: "Western Region, Highland District",
      services: "Housing Support, Healthcare Referrals, Legal Aid",
      capacity: "150/day",
      current: "125/day",
      staffing: "18 full-time, 10 part-time",
      hours: "M-F 9:00-18:00",
      status: "Operational",
    },
    {
      id: "CENTER-2025-004",
      name: "Southern County Services",
      location: "Southern Region, Rural District",
      services: "Food Bank, Financial Counseling, Transportation",
      capacity: "100/day",
      current: "82/day",
      staffing: "15 full-time, 5 part-time",
      hours: "M-F 8:00-16:30",
      status: "Operational",
    },
    {
      id: "CENTER-2025-005",
      name: "Northern Mobile Services",
      location: "Northern Region, Multiple Locations",
      services: "Rural Outreach, Healthcare, Emergency Assistance",
      capacity: "75/day",
      current: "60/day",
      staffing: "12 full-time, 8 part-time",
      hours: "M-F 8:00-17:00",
      status: "Partial Service",
    },
  ];

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Under Review': return 'bg-amber-100 text-amber-800';
      case 'Inactive': return 'bg-red-100 text-red-800';
      case 'Operational': return 'bg-green-100 text-green-800';
      case 'Partial Service': return 'bg-amber-100 text-amber-800';
      case 'Closed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getEffectivenessClass = (effectiveness: string) => {
    switch (effectiveness) {
      case 'High': return 'text-success font-semibold';
      case 'Medium': return 'text-amber-600';
      case 'Low': return 'text-danger';
      default: return 'text-neutral-dark';
    }
  };

  const getWaitlistClass = (waitlist: string) => {
    switch (waitlist) {
      case 'None': return 'text-success font-semibold';
      case 'Low': return 'text-amber-600';
      case 'High': return 'text-danger font-semibold';
      default: return 'text-neutral-dark';
    }
  };

  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        {/* Social Services Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {socialServicesMetrics.map((metric, index) => (
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
          {/* Benefit Distribution Pie Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Benefit Distribution by Type</h2>
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
                        data={benefitDistributionData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {benefitDistributionData.map((entry, index) => (
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

          {/* Demographic Breakdown Pie Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Recipient Demographic Breakdown</h2>
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
                        data={demographicBreakdownData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {demographicBreakdownData.map((entry, index) => (
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

        {/* Assistance Trends Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Assistance Trends (2025)</h2>
          </div>
          
          {isLoading ? (
            <div className="chart-placeholder">
              <Skeleton className="h-80 w-full" />
            </div>
          ) : (
            <div className="p-4">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={assistanceTrendsData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(value) => value ? `${value.toLocaleString()} recipients` : ''} />
                    <Legend />
                    <Area 
                      type="monotone" 
                      dataKey="financialAid" 
                      name="Financial Assistance" 
                      stroke="#8884d8" 
                      fill="#8884d8" 
                      fillOpacity={0.5}
                      activeDot={{ r: 8 }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="foodAssistance" 
                      name="Food Assistance" 
                      stroke="#82ca9d" 
                      fill="#82ca9d" 
                      fillOpacity={0.5}
                      activeDot={{ r: 8 }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="housingSupport" 
                      name="Housing Support" 
                      stroke="#ffc658" 
                      fill="#ffc658" 
                      fillOpacity={0.5}
                      activeDot={{ r: 8 }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Regional Distribution Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Regional Distribution</h2>
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
                    data={regionalDistributionData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    barSize={20}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="region" />
                    <YAxis yAxisId="left" orientation="left" label={{ value: 'Recipients', angle: -90, position: 'insideLeft' }} />
                    <YAxis yAxisId="right" orientation="right" label={{ value: 'Funding (Millions $)', angle: 90, position: 'insideRight' }} />
                    <Tooltip />
                    <Legend />
                    <Bar 
                      yAxisId="left"
                      dataKey="recipients" 
                      name="Recipients" 
                      fill="#8884d8" 
                    />
                    <Bar 
                      yAxisId="right"
                      dataKey="funding" 
                      name="Funding (Millions $)" 
                      fill="#82ca9d" 
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Social Programs Table */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Active Social Programs</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Program ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Recipients</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Funding</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Effectiveness</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Waitlist</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Next Review</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-40" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                    </tr>
                  ))
                ) : (
                  socialPrograms.map((program, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{program.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{program.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{program.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{program.recipients.toLocaleString()}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold">{program.funding}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(program.status)}`}>
                          {program.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={getEffectivenessClass(program.effectiveness)}>
                          {program.effectiveness}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={getWaitlistClass(program.waitlist)}>
                          {program.waitlist}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{program.nextReview}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Service Centers Table */}
        <Card className="border border-neutral-light overflow-hidden">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Service Center Locations</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Services</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Capacity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Current Usage</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Staffing</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Hours</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-40" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-40" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-48" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                    </tr>
                  ))
                ) : (
                  serviceCenters.map((center, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{center.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{center.name}</td>
                      <td className="px-6 py-4 text-sm">{center.location}</td>
                      <td className="px-6 py-4 text-sm">{center.services}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{center.capacity}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{center.current}</td>
                      <td className="px-6 py-4 text-sm">{center.staffing}</td>
                      <td className="px-6 py-4 text-sm">{center.hours}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(center.status)}`}>
                          {center.status}
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

export default SocialServicesView;