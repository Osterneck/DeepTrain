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
} from "recharts";

interface MergersAcquisitionsViewProps {
  isLoading: boolean;
}

const MergersAcquisitionsView: FC<MergersAcquisitionsViewProps> = ({ isLoading }) => {
  // Mock data for M&A metrics
  const maMetrics = [
    {
      name: "Deal Pipeline",
      value: "28",
      change: "+5",
      changeType: "positive",
      description: "Potential M&A deals currently in pipeline",
    },
    {
      name: "Average Deal Size",
      value: "$242M",
      change: "+$18M",
      changeType: "positive",
      description: "Average transaction value for current deals",
    },
    {
      name: "Time to Close",
      value: "4.8 mo",
      change: "-0.6 mo",
      changeType: "positive",
      description: "Average time from LOI to deal completion",
    },
    {
      name: "Synergy Realization",
      value: "82%",
      change: "+4%",
      changeType: "positive",
      description: "Actual vs. projected synergy value realization",
    },
  ];

  // Mock data for deal types
  const dealTypeData = [
    { name: "Full Acquisition", value: 45 },
    { name: "Majority Stake", value: 28 },
    { name: "Joint Venture", value: 15 },
    { name: "Asset Purchase", value: 8 },
    { name: "Minority Stake", value: 4 },
  ];

  // Mock data for industry sectors
  const sectorData = [
    { name: "Technology", count: 9, value: 3850 },
    { name: "Healthcare", count: 6, value: 2420 },
    { name: "Financial", count: 5, value: 1950 },
    { name: "Industrial", count: 4, value: 1540 },
    { name: "Consumer", count: 3, value: 980 },
    { name: "Energy", count: 1, value: 620 },
  ];

  // Color palette for pie chart
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  // Mock data for deal valuation multiples over time
  const valuationMultiplesData = [
    { quarter: "Q1 2024", ebitdaMultiple: 7.2, revenueMultiple: 1.8 },
    { quarter: "Q2 2024", ebitdaMultiple: 7.5, revenueMultiple: 1.9 },
    { quarter: "Q3 2024", ebitdaMultiple: 7.8, revenueMultiple: 2.0 },
    { quarter: "Q4 2024", ebitdaMultiple: 8.1, revenueMultiple: 2.1 },
    { quarter: "Q1 2025", ebitdaMultiple: 8.4, revenueMultiple: 2.2 },
    { quarter: "Q2 2025", ebitdaMultiple: 8.6, revenueMultiple: 2.3 },
  ];

  // Mock data for active M&A deals
  const activeDeals = [
    {
      id: "MA-2025-042",
      targetName: "TechSolutions Inc.",
      acquirerName: "Global Innovate Corp",
      dealSize: "$485M",
      dealType: "Full Acquisition",
      industry: "Technology",
      status: "Due Diligence",
      progress: 65,
    },
    {
      id: "MA-2025-038",
      targetName: "MediHealth Systems",
      acquirerName: "CareGroup International",
      dealSize: "$312M",
      dealType: "Majority Stake",
      industry: "Healthcare",
      status: "LOI Signed",
      progress: 35,
    },
    {
      id: "MA-2025-036",
      targetName: "Financial Partners Ltd",
      acquirerName: "Global Banking Corp",
      dealSize: "$628M",
      dealType: "Full Acquisition",
      industry: "Financial",
      status: "Integration Planning",
      progress: 85,
    },
    {
      id: "MA-2025-032",
      targetName: "Consumer Retail Group",
      acquirerName: "Global Retail Holdings",
      dealSize: "$175M",
      dealType: "Asset Purchase",
      industry: "Consumer",
      status: "Negotiations",
      progress: 45,
    },
    {
      id: "MA-2025-028",
      targetName: "Industrial Solutions Co.",
      acquirerName: "United Manufacturing",
      dealSize: "$238M",
      dealType: "Joint Venture",
      industry: "Industrial",
      status: "Regulatory Review",
      progress: 70,
    },
  ];

  const statusColors = {
    "Due Diligence": "bg-blue-100 text-blue-800",
    "LOI Signed": "bg-amber-100 text-amber-800",
    "Integration Planning": "bg-green-100 text-green-800",
    "Negotiations": "bg-purple-100 text-purple-800",
    "Regulatory Review": "bg-orange-100 text-orange-800",
    "Closed": "bg-teal-100 text-teal-800",
  };

  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        {/* M&A Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {maMetrics.map((metric, index) => (
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
          {/* Deal Type Distribution */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Deal Type Distribution</h2>
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
                        data={dealTypeData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {dealTypeData.map((entry, index) => (
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

          {/* Valuation Multiples Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Valuation Multiples Trend</h2>
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
                      data={valuationMultiplesData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="quarter" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="ebitdaMultiple" 
                        name="EBITDA Multiple" 
                        stroke="#8884d8" 
                        strokeWidth={2}
                        activeDot={{ r: 8 }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="revenueMultiple" 
                        name="Revenue Multiple" 
                        stroke="#82ca9d" 
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

        {/* Industry Sector Analysis */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Industry Sector Analysis (Deal Count & Value $M)</h2>
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
                    data={sectorData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                    <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                    <Tooltip />
                    <Legend />
                    <Bar 
                      yAxisId="left" 
                      dataKey="count" 
                      name="Deal Count" 
                      fill="#8884d8" 
                    />
                    <Bar 
                      yAxisId="right" 
                      dataKey="value" 
                      name="Deal Value ($M)" 
                      fill="#82ca9d" 
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Active M&A Deals */}
        <Card className="border border-neutral-light overflow-hidden">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Active M&A Deals</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Deal ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Target</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Acquirer</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Deal Size</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Industry</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Progress</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-40" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-40" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                    </tr>
                  ))
                ) : (
                  activeDeals.map((deal, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{deal.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{deal.targetName}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{deal.acquirerName}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold">{deal.dealSize}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{deal.dealType}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{deal.industry}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColors[deal.status]}`}>
                          {deal.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div 
                            className="bg-primary h-2.5 rounded-full" 
                            style={{ width: `${deal.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-right block mt-1">{deal.progress}%</span>
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

export default MergersAcquisitionsView;