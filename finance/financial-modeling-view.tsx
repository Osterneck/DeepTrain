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
  AreaChart,
  Area,
} from "recharts";

interface FinancialModelingViewProps {
  isLoading: boolean;
}

const FinancialModelingView: FC<FinancialModelingViewProps> = ({ isLoading }) => {
  // Mock data for financial projections
  const revenueProjections = [
    { quarter: "Q1 2025", actual: 4.5, projected: 4.5 },
    { quarter: "Q2 2025", actual: 5.2, projected: 5.0 },
    { quarter: "Q3 2025", actual: 5.8, projected: 5.5 },
    { quarter: "Q4 2025", actual: 6.4, projected: 6.2 },
    { quarter: "Q1 2026", actual: null, projected: 6.8 },
    { quarter: "Q2 2026", actual: null, projected: 7.4 },
    { quarter: "Q3 2026", actual: null, projected: 8.1 },
    { quarter: "Q4 2026", actual: null, projected: 8.9 },
  ];

  // Mock data for cash flow projections
  const cashFlowData = [
    { quarter: "Q1 2025", operatingCF: 3.2, investingCF: -1.2, financingCF: -0.5 },
    { quarter: "Q2 2025", operatingCF: 3.5, investingCF: -1.3, financingCF: -0.6 },
    { quarter: "Q3 2025", operatingCF: 3.8, investingCF: -1.4, financingCF: -0.7 },
    { quarter: "Q4 2025", operatingCF: 4.2, investingCF: -1.5, financingCF: -0.8 },
    { quarter: "Q1 2026", operatingCF: 4.5, investingCF: -1.7, financingCF: -0.8 },
    { quarter: "Q2 2026", operatingCF: 4.9, investingCF: -1.8, financingCF: -0.9 },
    { quarter: "Q3 2026", operatingCF: 5.3, investingCF: -2.0, financingCF: -1.0 },
    { quarter: "Q4 2026", operatingCF: 5.8, investingCF: -2.2, financingCF: -1.0 },
  ];

  // Mock data for scenario analysis
  const scenarioData = [
    { metric: "Revenue Growth", baseline: 10, optimistic: 15, pessimistic: 5 },
    { metric: "Gross Margin", baseline: 62, optimistic: 65, pessimistic: 58 },
    { metric: "EBITDA Margin", baseline: 28, optimistic: 32, pessimistic: 22 },
    { metric: "Net Income", baseline: 18, optimistic: 22, pessimistic: 14 },
    { metric: "Free Cash Flow", baseline: 15, optimistic: 19, pessimistic: 11 },
  ];

  // Mock data for financial models
  const financialModels = [
    {
      name: "2026 Business Expansion",
      type: "DCF Valuation",
      lastUpdated: "2025-05-18",
      status: "Active",
      description: "Discounted cash flow model for upcoming business expansion into Asian markets",
      metrics: {
        npv: "$245M",
        irr: "18.5%",
        paybackPeriod: "4.2 yrs"
      }
    },
    {
      name: "Acquisition Target Analysis",
      type: "LBO Model",
      lastUpdated: "2025-05-15",
      status: "Active",
      description: "Leveraged buyout analysis for potential acquisition of TechSolutions, Inc.",
      metrics: {
        npv: "$82M",
        irr: "22.3%",
        paybackPeriod: "3.8 yrs"
      }
    },
    {
      name: "Capital Structure Optimization",
      type: "Financial Model",
      lastUpdated: "2025-05-10",
      status: "Active",
      description: "Analysis of optimal debt-to-equity ratio given current market conditions",
      metrics: {
        npv: "$118M",
        irr: "15.2%",
        paybackPeriod: "5.1 yrs"
      }
    },
  ];

  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        {/* Revenue Projections Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Revenue Projections ($B)</h2>
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
                    data={revenueProjections}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="quarter" />
                    <YAxis />
                    <Tooltip formatter={(value) => value ? `$${value}B` : 'N/A'} />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="actual" 
                      name="Actual Revenue" 
                      stroke="#8884d8" 
                      strokeWidth={2}
                      activeDot={{ r: 8 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="projected" 
                      name="Projected Revenue" 
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

        {/* Cash Flow Projections */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Cash Flow Projections ($B)</h2>
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
                    data={cashFlowData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="quarter" />
                    <YAxis />
                    <Tooltip formatter={(value) => `$${value}B`} />
                    <Legend />
                    <Area 
                      type="monotone" 
                      dataKey="operatingCF" 
                      name="Operating Cash Flow" 
                      stackId="1"
                      fill="rgba(130, 202, 157, 0.6)" 
                      stroke="#82ca9d" 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="investingCF" 
                      name="Investing Cash Flow" 
                      stackId="1"
                      fill="rgba(136, 132, 216, 0.6)" 
                      stroke="#8884d8" 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="financingCF" 
                      name="Financing Cash Flow" 
                      stackId="1"
                      fill="rgba(255, 177, 101, 0.6)" 
                      stroke="#ffb165" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Scenario Analysis */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Scenario Analysis (2026 Projections)</h2>
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
                    data={scenarioData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    layout="vertical"
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="metric" type="category" />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Legend />
                    <Bar dataKey="pessimistic" name="Pessimistic Scenario" fill="#ff7373" />
                    <Bar dataKey="baseline" name="Baseline Scenario" fill="#8884d8" />
                    <Bar dataKey="optimistic" name="Optimistic Scenario" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Financial Models Table */}
        <Card className="border border-neutral-light overflow-hidden">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Active Financial Models</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Model Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Last Updated</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">NPV</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">IRR</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Payback Period</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(3)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-40" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                    </tr>
                  ))
                ) : (
                  financialModels.map((model, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{model.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{model.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{model.lastUpdated}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold">{model.metrics.npv}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{model.metrics.irr}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{model.metrics.paybackPeriod}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {model.status}
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

export default FinancialModelingView;