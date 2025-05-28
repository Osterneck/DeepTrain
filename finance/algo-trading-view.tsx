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
} from "recharts";

interface AlgoTradingViewProps {
  isLoading: boolean;
}

const AlgoTradingView: FC<AlgoTradingViewProps> = ({ isLoading }) => {
  // Mock data for algorithmic trading
  const tradingData = [
    { time: "09:30", strategy1: 1000, strategy2: 1000, benchmark: 1000 },
    { time: "10:00", strategy1: 1005, strategy2: 1002, benchmark: 998 },
    { time: "10:30", strategy1: 1010, strategy2: 1008, benchmark: 997 },
    { time: "11:00", strategy1: 1008, strategy2: 1012, benchmark: 999 },
    { time: "11:30", strategy1: 1015, strategy2: 1010, benchmark: 1001 },
    { time: "12:00", strategy1: 1020, strategy2: 1015, benchmark: 1003 },
    { time: "12:30", strategy1: 1018, strategy2: 1018, benchmark: 1002 },
    { time: "13:00", strategy1: 1025, strategy2: 1022, benchmark: 1005 },
    { time: "13:30", strategy1: 1030, strategy2: 1025, benchmark: 1008 },
    { time: "14:00", strategy1: 1035, strategy2: 1030, benchmark: 1010 },
    { time: "14:30", strategy1: 1042, strategy2: 1035, benchmark: 1012 },
    { time: "15:00", strategy1: 1050, strategy2: 1040, benchmark: 1015 },
    { time: "15:30", strategy1: 1045, strategy2: 1038, benchmark: 1012 },
    { time: "16:00", strategy1: 1055, strategy2: 1045, benchmark: 1018 },
  ];

  // Mock strategy metrics
  const strategies = [
    {
      name: "Momentum Strategy",
      performance: "+5.5%",
      sharpeRatio: "1.82",
      maxDrawdown: "-2.1%",
      trades: 42,
      winRate: "68%",
    },
    {
      name: "Mean Reversion",
      performance: "+4.5%",
      sharpeRatio: "1.65",
      maxDrawdown: "-1.8%",
      trades: 76,
      winRate: "62%",
    },
    {
      name: "Statistical Arbitrage",
      performance: "+3.8%",
      sharpeRatio: "1.56",
      maxDrawdown: "-1.5%",
      trades: 128,
      winRate: "59%",
    },
  ];

  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        {/* Performance Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light flex justify-between items-center">
            <h2 className="text-lg font-semibold">Algorithmic Trading Performance</h2>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                <span className="text-sm">Strategy 1</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-secondary rounded-full mr-2"></div>
                <span className="text-sm">Strategy 2</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-neutral-dark rounded-full mr-2"></div>
                <span className="text-sm">Benchmark</span>
              </div>
            </div>
          </div>
          
          {isLoading ? (
            <div className="chart-placeholder">
              <Skeleton className="h-80 w-full" />
            </div>
          ) : (
            <div className="p-4">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={tradingData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis domain={['dataMin - 5', 'dataMax + 5']} />
                    <Tooltip 
                      formatter={(value: number) => [`${value}`, 'Value']} 
                      labelFormatter={(label) => `Time: ${label}`}
                    />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="strategy1" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={2}
                      activeDot={{ r: 8 }}
                      name="Strategy 1: Momentum"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="strategy2" 
                      stroke="hsl(var(--secondary))" 
                      strokeWidth={2}
                      activeDot={{ r: 8 }}
                      name="Strategy 2: Mean Reversion"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="benchmark" 
                      stroke="hsl(var(--neutral-dark))" 
                      strokeWidth={2}
                      strokeDasharray="5 5" 
                      name="Market Benchmark"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Strategy Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {strategies.map((strategy, index) => (
            <Card key={index} className="border border-neutral-light">
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-3">{strategy.name}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-neutral-medium mb-1">Performance</div>
                    <div className="text-success font-bold">{strategy.performance}</div>
                  </div>
                  <div>
                    <div className="text-xs text-neutral-medium mb-1">Sharpe Ratio</div>
                    <div className="font-bold">{strategy.sharpeRatio}</div>
                  </div>
                  <div>
                    <div className="text-xs text-neutral-medium mb-1">Max Drawdown</div>
                    <div className="text-danger font-bold">{strategy.maxDrawdown}</div>
                  </div>
                  <div>
                    <div className="text-xs text-neutral-medium mb-1">Trades</div>
                    <div className="font-bold">{strategy.trades}</div>
                  </div>
                  <div>
                    <div className="text-xs text-neutral-medium mb-1">Win Rate</div>
                    <div className="font-bold">{strategy.winRate}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Latest Trades */}
        <Card className="border border-neutral-light overflow-hidden">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Latest Algorithmic Trades</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Strategy</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Symbol</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Quantity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Direction</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">P&L</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                    </tr>
                  ))
                ) : (
                  <>
                    <tr className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">Momentum Strategy</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">AAPL</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">15:45:22</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">$178.34</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">150</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className="inline-flex items-center text-success">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>
                          BUY
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-success">+$420.50</td>
                    </tr>
                    <tr className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">Mean Reversion</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">MSFT</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">15:42:18</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">$332.65</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">75</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className="inline-flex items-center text-danger">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          SELL
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-danger">-$115.25</td>
                    </tr>
                    <tr className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">Statistical Arbitrage</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">TSLA</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">15:38:45</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">$248.12</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">50</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className="inline-flex items-center text-success">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>
                          BUY
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-success">+$310.75</td>
                    </tr>
                    <tr className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">Momentum Strategy</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">GOOGL</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">15:32:11</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">$138.92</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">125</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className="inline-flex items-center text-success">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>
                          BUY
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-success">+$255.35</td>
                    </tr>
                    <tr className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">Mean Reversion</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">AMZN</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">15:28:37</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">$172.45</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">80</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className="inline-flex items-center text-danger">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          SELL
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-success">+$187.60</td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AlgoTradingView;