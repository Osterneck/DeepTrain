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

interface RiskManagementViewProps {
  isLoading: boolean;
}

const RiskManagementView: FC<RiskManagementViewProps> = ({ isLoading }) => {
  // Mock data for risk exposures by category
  const riskExposureData = [
    { category: "Market Risk", value: 32.5, limit: 40 },
    { category: "Credit Risk", value: 28.7, limit: 35 },
    { category: "Operational Risk", value: 15.4, limit: 20 },
    { category: "Liquidity Risk", value: 8.9, limit: 15 },
    { category: "Compliance Risk", value: 6.2, limit: 10 },
    { category: "Strategic Risk", value: 12.8, limit: 20 },
  ];

  // Mock data for portfolio concentration
  const concentrationData = [
    { name: "Technology", value: 28 },
    { name: "Financials", value: 22 },
    { name: "Healthcare", value: 16 },
    { name: "Consumer Disc.", value: 12 },
    { name: "Industrials", value: 10 },
    { name: "Other", value: 12 },
  ];

  // Color palette for pie chart
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  // Mock data for risk metrics
  const riskMetrics = [
    {
      name: "Value at Risk (VaR)",
      value: "$2.45M",
      change: "-0.3M",
      changeType: "positive", // positive change means risk reduction
      description: "Maximum potential loss over a 1-day period with 95% confidence",
    },
    {
      name: "Expected Shortfall",
      value: "$3.82M",
      change: "+0.2M",
      changeType: "negative", // negative change means risk increase
      description: "Average loss in the worst 5% of scenarios",
    },
    {
      name: "Beta",
      value: "1.12",
      change: "+0.04",
      changeType: "negative",
      description: "Portfolio volatility relative to the market",
    },
    {
      name: "Sharpe Ratio",
      value: "1.84",
      change: "+0.12",
      changeType: "positive",
      description: "Excess return per unit of risk",
    },
  ];

  // Mock data for stress test scenarios
  const stressTestData = [
    { 
      scenario: "Market Crash", 
      impact: -15.2, 
      description: "Simulating a 20% market correction across major indices" 
    },
    { 
      scenario: "Interest Rate Spike", 
      impact: -8.7, 
      description: "Modeling effect of a sudden 100 bps rate increase" 
    },
    { 
      scenario: "Credit Downgrade", 
      impact: -5.4, 
      description: "Simulating major credit rating downgrades across portfolio" 
    },
    { 
      scenario: "Liquidity Crisis", 
      impact: -12.1, 
      description: "Modeling impact of significant bid-ask spread widening" 
    },
  ];

  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        {/* Risk Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {riskMetrics.map((metric, index) => (
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

        {/* Risk Exposures Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Risk Exposures vs Limits</h2>
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
                      data={riskExposureData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="category" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="value" name="Current Exposure" fill="hsl(var(--primary))" />
                      <Bar dataKey="limit" name="Risk Limit" fill="hsl(var(--neutral-medium))" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </Card>

          {/* Portfolio Concentration */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Portfolio Concentration</h2>
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
                        data={concentrationData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {concentrationData.map((entry, index) => (
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

        {/* Stress Test Results */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Stress Test Scenarios</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Scenario</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Impact (%)</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(4)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-48" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                    </tr>
                  ))
                ) : (
                  stressTestData.map((scenario, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{scenario.scenario}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-danger font-semibold">{scenario.impact}%</td>
                      <td className="px-6 py-4 text-sm">{scenario.description}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-amber-100 text-amber-800">
                          Warning
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Risk Management Recommendations */}
        <Card className="border border-neutral-light overflow-hidden">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Risk Management Recommendations</h2>
          </div>
          <div className="p-4">
            {isLoading ? (
              <>
                <Skeleton className="h-6 w-3/4 mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4 mb-6" />
                
                <Skeleton className="h-6 w-3/4 mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4 mb-6" />
              </>
            ) : (
              <div className="space-y-6">
                <div>
                  <h3 className="text-md font-semibold text-primary mb-2">Reduce Technology Sector Exposure</h3>
                  <p className="text-sm text-neutral-dark">
                    Technology sector concentration is approaching internal limits (28% vs 30% max). 
                    Consider rebalancing by reducing positions in high-volatility tech stocks to decrease 
                    sector concentration and improve overall portfolio diversification.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-md font-semibold text-primary mb-2">Hedge Against Interest Rate Risk</h3>
                  <p className="text-sm text-neutral-dark">
                    The portfolio shows heightened sensitivity to interest rate changes as shown in 
                    stress test results. Implement interest rate derivatives to hedge against potential 
                    Federal Reserve actions in the coming quarter.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-md font-semibold text-primary mb-2">Increase Liquidity Reserves</h3>
                  <p className="text-sm text-neutral-dark">
                    Current liquidity ratios are below optimal levels considering market volatility.
                    Increase cash reserves by 2-3% to provide additional buffer against potential 
                    market disruptions and to take advantage of opportunities during market corrections.
                  </p>
                </div>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default RiskManagementView;