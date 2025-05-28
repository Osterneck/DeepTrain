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
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts";

interface InsuranceActuarialViewProps {
  isLoading: boolean;
}

const InsuranceActuarialView: FC<InsuranceActuarialViewProps> = ({ isLoading }) => {
  // Mock data for actuarial metrics
  const actuarialMetrics = [
    {
      name: "Combined Ratio",
      value: "94.8%",
      change: "-1.2%",
      changeType: "positive", // positive because lower combined ratio is good
      description: "Claims + expenses as percentage of earned premiums",
    },
    {
      name: "Loss Ratio",
      value: "65.2%",
      change: "-0.8%",
      changeType: "positive",
      description: "Insurance losses as percentage of premium income",
    },
    {
      name: "Reserve Adequacy",
      value: "103.5%",
      change: "+0.5%",
      changeType: "positive",
      description: "Actual vs. expected claims reserves ratio",
    },
    {
      name: "Premium Growth",
      value: "8.2%",
      change: "+2.1%",
      changeType: "positive",
      description: "Year-over-year written premium growth",
    },
  ];

  // Mock data for loss ratios by line of business
  const lossRatioData = [
    { businessLine: "Auto", currentYear: 68.4, previousYear: 70.2 },
    { businessLine: "Home", currentYear: 62.5, previousYear: 64.1 },
    { businessLine: "Commercial", currentYear: 58.9, previousYear: 61.5 },
    { businessLine: "Health", currentYear: 72.6, previousYear: 73.8 },
    { businessLine: "Life", currentYear: 65.2, previousYear: 64.8 },
    { businessLine: "Workers Comp", currentYear: 61.3, previousYear: 62.7 },
  ];

  // Mock data for policy distribution
  const policyDistributionData = [
    { name: "Auto", value: 32 },
    { name: "Home", value: 24 },
    { name: "Commercial", value: 18 },
    { name: "Health", value: 15 },
    { name: "Life", value: 8 },
    { name: "Other", value: 3 },
  ];

  // Mock data for reserve development
  const reserveDevelopmentData = [
    { year: 2020, initialReserve: 100, year1: 98, year2: 95, year3: 92, year4: 90, year5: 89 },
    { year: 2021, initialReserve: 100, year1: 97, year2: 94, year3: 91, year4: 89, year5: null },
    { year: 2022, initialReserve: 100, year1: 96, year2: 93, year3: 90, year4: null, year5: null },
    { year: 2023, initialReserve: 100, year1: 97, year2: 94, year3: null, year4: null, year5: null },
    { year: 2024, initialReserve: 100, year1: 98, year2: null, year3: null, year4: null, year5: null },
    { year: 2025, initialReserve: 100, year1: null, year2: null, year3: null, year4: null, year5: null },
  ];

  // Color palette for pie chart
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  // Mock data for risk assessment models
  const riskModels = [
    {
      id: "RM-2025-001",
      name: "Auto Risk Predictive Model",
      type: "ML Classification",
      accuracy: "92.4%",
      lastUpdated: "2025-05-15",
      status: "Active",
      insight: "Driver history is 3.5x more predictive than credit score for collision risk"
    },
    {
      id: "RM-2025-002",
      name: "Property Catastrophe Model",
      type: "Stochastic Simulation",
      accuracy: "88.7%",
      lastUpdated: "2025-05-10",
      status: "Active",
      insight: "Climate change models suggest 22% increase in severe weather claims by 2030"
    },
    {
      id: "RM-2025-003",
      name: "Mortality Projection Model",
      type: "Statistical Regression",
      accuracy: "95.1%",
      lastUpdated: "2025-05-08",
      status: "Active",
      insight: "Pandemic effects on mortality tables show negligible long-term impact"
    },
    {
      id: "RM-2025-004",
      name: "Health Claims Cost Model",
      type: "Gradient Boosting",
      accuracy: "90.3%",
      lastUpdated: "2025-05-01",
      status: "Updating",
      insight: "Chronic condition management shows 15% cost reduction in managed care model"
    },
  ];

  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        {/* Actuarial Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {actuarialMetrics.map((metric, index) => (
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

        {/* Loss Ratio Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Loss Ratio by Line of Business</h2>
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
                    data={lossRatioData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="businessLine" />
                    <YAxis domain={[50, 80]} />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Legend />
                    <Bar 
                      dataKey="currentYear" 
                      name="Current Year" 
                      fill="hsl(var(--primary))" 
                    />
                    <Bar 
                      dataKey="previousYear" 
                      name="Previous Year" 
                      fill="hsl(var(--neutral-medium))" 
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Policy Distribution Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Policy Distribution</h2>
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
                        data={policyDistributionData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {policyDistributionData.map((entry, index) => (
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

          {/* Reserve Development Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Reserve Development (Base Year = 100)</h2>
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
                      data={reserveDevelopmentData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis domain={[85, 100]} />
                      <Tooltip />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="initialReserve" 
                        name="Initial Reserve" 
                        stroke="#8884d8" 
                        strokeWidth={2}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="year1" 
                        name="Year +1" 
                        stroke="#82ca9d" 
                        strokeWidth={2}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="year2" 
                        name="Year +2" 
                        stroke="#ffc658" 
                        strokeWidth={2}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="year3" 
                        name="Year +3" 
                        stroke="#ff8042" 
                        strokeWidth={2}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="year4" 
                        name="Year +4" 
                        stroke="#0088fe" 
                        strokeWidth={2}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="year5" 
                        name="Year +5" 
                        stroke="#00c49f" 
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* Risk Assessment Models */}
        <Card className="border border-neutral-light overflow-hidden">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Actuarial Risk Models</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Model ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Accuracy</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Last Updated</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Key Insight</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(4)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-40" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-48" /></td>
                    </tr>
                  ))
                ) : (
                  riskModels.map((model, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{model.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{model.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{model.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold">{model.accuracy}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{model.lastUpdated}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          model.status === 'Active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-amber-100 text-amber-800'
                        }`}>
                          {model.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-neutral-dark">{model.insight}</td>
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

export default InsuranceActuarialView;