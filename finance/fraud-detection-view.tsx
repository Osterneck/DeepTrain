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
} from "recharts";

interface FraudDetectionViewProps {
  isLoading: boolean;
}

const FraudDetectionView: FC<FraudDetectionViewProps> = ({ isLoading }) => {
  // Mock data for fraud detection metrics
  const fraudMetrics = [
    {
      name: "Transactions Analyzed",
      value: "2.8M",
      change: "+12%",
      changeType: "positive",
      description: "Total transactions analyzed in the last 30 days",
    },
    {
      name: "Fraud Attempts",
      value: "487",
      change: "-3%",
      changeType: "positive", // positive because reduction in fraud attempts is good
      description: "Detected fraud attempts in the last 30 days",
    },
    {
      name: "False Positives",
      value: "1.2%",
      change: "-0.3%",
      changeType: "positive",
      description: "Rate of falsely flagged legitimate transactions",
    },
    {
      name: "Fraud Prevented",
      value: "$1.85M",
      change: "+$320K",
      changeType: "positive",
      description: "Estimated fraud losses prevented in the last 30 days",
    },
  ];

  // Mock data for fraud types
  const fraudTypeData = [
    { name: "Stolen Credentials", value: 42 },
    { name: "Account Takeover", value: 28 },
    { name: "Payment Fraud", value: 16 },
    { name: "Identity Theft", value: 8 },
    { name: "Fake Accounts", value: 6 },
  ];

  // Color palette for pie chart
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  // Mock data for fraud detection over time
  const fraudTimelineData = [
    { date: "Jan", attempts: 428, prevented: 402 },
    { date: "Feb", attempts: 452, prevented: 435 },
    { date: "Mar", attempts: 418, prevented: 401 },
    { date: "Apr", attempts: 445, prevented: 422 },
    { date: "May", attempts: 470, prevented: 455 },
    { date: "Jun", attempts: 495, prevented: 480 },
    { date: "Jul", attempts: 510, prevented: 490 },
    { date: "Aug", attempts: 482, prevented: 472 },
    { date: "Sep", attempts: 468, prevented: 457 },
    { date: "Oct", attempts: 492, prevented: 483 },
    { date: "Nov", attempts: 505, prevented: 495 },
    { date: "Dec", attempts: 487, prevented: 479 },
  ];

  // Mock data for suspicious transaction alerts
  const suspiciousTransactions = [
    {
      id: "TR-8724",
      date: "2025-05-20 14:28:15",
      amount: "$12,850.00",
      risk: "High",
      trigger: "Unusual location + Amount spike",
      status: "Pending Review"
    },
    {
      id: "TR-8712",
      date: "2025-05-20 13:42:53",
      amount: "$5,742.33",
      risk: "Medium",
      trigger: "Velocity pattern",
      status: "Blocked"
    },
    {
      id: "TR-8695",
      date: "2025-05-20 11:15:27",
      amount: "$2,248.99",
      risk: "High",
      trigger: "Device mismatch + New recipient",
      status: "Blocked"
    },
    {
      id: "TR-8684",
      date: "2025-05-20 09:53:08",
      amount: "$853.45",
      risk: "Medium",
      trigger: "Unusual merchant category",
      status: "Pending Review"
    },
    {
      id: "TR-8672",
      date: "2025-05-20 08:12:41",
      amount: "$3,499.99",
      risk: "Low",
      trigger: "New recipient",
      status: "Cleared"
    },
  ];

  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        {/* Fraud Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {fraudMetrics.map((metric, index) => (
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
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Fraud Detection Over Time</h2>
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
                      data={fraudTimelineData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="attempts" 
                        name="Fraud Attempts" 
                        stroke="hsl(var(--danger))" 
                        strokeWidth={2}
                        activeDot={{ r: 8 }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="prevented" 
                        name="Prevented Fraud" 
                        stroke="hsl(var(--success))" 
                        strokeWidth={2}
                        activeDot={{ r: 8 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </Card>

          {/* Fraud Types Distribution */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Fraud Types Distribution</h2>
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
                        data={fraudTypeData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {fraudTypeData.map((entry, index) => (
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

        {/* Suspicious Transactions */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Recent Suspicious Transactions</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Transaction ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Date & Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Risk Level</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Trigger</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-40" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                    </tr>
                  ))
                ) : (
                  suspiciousTransactions.map((transaction, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{transaction.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{transaction.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold">{transaction.amount}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          transaction.risk === 'High' 
                            ? 'bg-red-100 text-red-800' 
                            : transaction.risk === 'Medium'
                              ? 'bg-amber-100 text-amber-800'
                              : 'bg-green-100 text-green-800'
                        }`}>
                          {transaction.risk}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm">{transaction.trigger}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          transaction.status === 'Blocked' 
                            ? 'bg-red-100 text-red-800' 
                            : transaction.status === 'Pending Review'
                              ? 'bg-amber-100 text-amber-800'
                              : 'bg-green-100 text-green-800'
                        }`}>
                          {transaction.status}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Card>

        {/* AI Fraud Detection Insights */}
        <Card className="border border-neutral-light overflow-hidden">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">AI Fraud Detection Insights</h2>
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
                  <h3 className="text-md font-semibold text-primary mb-2">Emerging Fraud Pattern Detected</h3>
                  <p className="text-sm text-neutral-dark">
                    Our AI has identified an emerging pattern of sophisticated fraud attempts targeting 
                    high-net-worth clients. The pattern involves a sequence of small test transactions followed 
                    by a larger unauthorized transfer. We've updated our detection rules to capture this pattern, 
                    resulting in 15 blocked attempts in the past week.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-md font-semibold text-primary mb-2">Behavioral Biometrics Enhancement</h3>
                  <p className="text-sm text-neutral-dark">
                    Recent implementation of advanced behavioral biometrics has improved our fraud detection 
                    accuracy by 23%. The system now monitors typing patterns, mouse movements, and device 
                    handling characteristics to identify suspicious account access. This has reduced false 
                    positives by 18% while increasing detection of sophisticated fraud attempts.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-md font-semibold text-primary mb-2">Geographic Risk Model Updated</h3>
                  <p className="text-sm text-neutral-dark">
                    Our geographic risk model has been updated with the latest data. We've identified five 
                    new high-risk regions with elevated fraud attempts. Transactions originating from or 
                    directed to these regions now undergo enhanced scrutiny and secondary verification 
                    processes to mitigate risk.
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

export default FraudDetectionView;