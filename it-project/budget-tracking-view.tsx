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
} from "recharts";

interface BudgetTrackingViewProps {
  isLoading: boolean;
}

const BudgetTrackingView: FC<BudgetTrackingViewProps> = ({ isLoading }) => {
  // Mock data for budget metrics
  const budgetMetrics = [
    {
      name: "Total Budget",
      value: "$4.2M",
      change: "+$0.5M",
      changeType: "positive",
      description: "Total allocated budget for all active projects",
    },
    {
      name: "Spent to Date",
      value: "$2.85M",
      change: "+$420K",
      changeType: "neutral",
      description: "Cumulative spent across all projects",
    },
    {
      name: "Budget Variance",
      value: "-2.8%",
      change: "+0.7%",
      changeType: "positive",
      description: "Variance between projected and actual costs",
    },
    {
      name: "Forecasted EOY",
      value: "$5.1M",
      change: "-$0.2M",
      changeType: "positive",
      description: "Projected end-of-year total spend",
    },
  ];

  // Mock data for budget by category
  const budgetCategoryData = [
    { name: "Labor", planned: 2800000, actual: 2750000 },
    { name: "Hardware", planned: 750000, actual: 820000 },
    { name: "Software", planned: 450000, actual: 410000 },
    { name: "Services", planned: 350000, actual: 390000 },
    { name: "Contingency", planned: 150000, actual: 0 },
  ];

  // Mock data for monthly spending
  const monthlySpendingData = [
    { month: "Jan", planned: 310000, actual: 305000 },
    { month: "Feb", planned: 325000, actual: 328000 },
    { month: "Mar", planned: 340000, actual: 352000 },
    { month: "Apr", planned: 355000, actual: 362000 },
    { month: "May", planned: 370000, actual: 380000 },
    { month: "Jun", planned: 385000, actual: null },
    { month: "Jul", planned: 400000, actual: null },
    { month: "Aug", planned: 415000, actual: null },
    { month: "Sep", planned: 430000, actual: null },
    { month: "Oct", planned: 445000, actual: null },
    { month: "Nov", planned: 460000, actual: null },
    { month: "Dec", planned: 475000, actual: null },
  ];

  // Mock data for project budget allocation
  const projectBudgetData = [
    { name: "Cloud Migration", value: 1250000 },
    { name: "ERP Implementation", value: 950000 },
    { name: "Mobile App Development", value: 685000 },
    { name: "Security Upgrades", value: 450000 },
    { name: "Data Analytics Platform", value: 575000 },
    { name: "Legacy System Maintenance", value: 290000 },
  ];

  // Color palette for pie chart
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  // Mock data for budget line items
  const budgetLineItems = [
    {
      id: "BLI-2025-001",
      category: "Labor",
      description: "Development Team",
      budgeted: "$1,250,000",
      actual: "$1,185,000",
      remaining: "$65,000",
      variance: "+5.2%",
      status: "On Budget",
    },
    {
      id: "BLI-2025-002",
      category: "Hardware",
      description: "Server Infrastructure",
      budgeted: "$450,000",
      actual: "$482,000",
      remaining: "-$32,000",
      variance: "-7.1%",
      status: "Over Budget",
    },
    {
      id: "BLI-2025-003",
      category: "Software",
      description: "Licenses & Subscriptions",
      budgeted: "$320,000",
      actual: "$298,000",
      remaining: "$22,000",
      variance: "+6.9%",
      status: "On Budget",
    },
    {
      id: "BLI-2025-004",
      category: "Labor",
      description: "QA & Testing",
      budgeted: "$580,000",
      actual: "$562,000",
      remaining: "$18,000",
      variance: "+3.1%",
      status: "On Budget",
    },
    {
      id: "BLI-2025-005",
      category: "Services",
      description: "Cloud Services",
      budgeted: "$210,000",
      actual: "$235,000",
      remaining: "-$25,000",
      variance: "-11.9%",
      status: "Over Budget",
    },
  ];

  const statusColors = {
    "On Budget": "bg-green-100 text-green-800",
    "Over Budget": "bg-red-100 text-red-800",
    "Under Budget": "bg-blue-100 text-blue-800",
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
        {/* Budget Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {budgetMetrics.map((metric, index) => (
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
          {/* Budget Allocation Pie Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Budget Allocation by Project</h2>
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
                        data={projectBudgetData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {projectBudgetData.map((entry, index) => (
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

          {/* Monthly Spending Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Monthly Spending Trends</h2>
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
                      data={monthlySpendingData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis tickFormatter={(value) => `$${value/1000}K`} />
                      <Tooltip formatter={(value) => formatCurrency(value as number)} />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="planned" 
                        name="Planned Spend" 
                        stroke="#8884d8" 
                        strokeWidth={2}
                        activeDot={{ r: 8 }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="actual" 
                        name="Actual Spend" 
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

        {/* Budget by Category Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Budget vs Actual by Category</h2>
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
                    data={budgetCategoryData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    barSize={40}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis tickFormatter={(value) => `$${value/1000}K`} />
                    <Tooltip formatter={(value) => formatCurrency(value as number)} />
                    <Legend />
                    <Bar 
                      dataKey="planned" 
                      name="Planned Budget" 
                      fill="#8884d8" 
                    />
                    <Bar 
                      dataKey="actual" 
                      name="Actual Spend" 
                      fill="#82ca9d" 
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Budget Line Items Table */}
        <Card className="border border-neutral-light overflow-hidden">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Key Budget Items</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Budgeted</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Actual</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Remaining</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Variance</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-40" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                    </tr>
                  ))
                ) : (
                  budgetLineItems.map((item, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{item.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{item.category}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{item.description}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{item.budgeted}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{item.actual}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold">
                        {item.remaining.startsWith('-') ? (
                          <span className="text-danger">{item.remaining}</span>
                        ) : (
                          <span className="text-success">{item.remaining}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold">
                        {item.variance.startsWith('-') ? (
                          <span className="text-danger">{item.variance}</span>
                        ) : (
                          <span className="text-success">{item.variance}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColors[item.status]}`}>
                          {item.status}
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

export default BudgetTrackingView;