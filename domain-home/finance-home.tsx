import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, TrendingUp, LineChart, BarChart4, PieChart, ShieldAlert, Building, ClipboardCheck } from "lucide-react";
import { DomainTool } from "@/data/domains";
import financeBg from "@assets/FINANCE.png";

interface FinanceHomeProps {
  tools: DomainTool[];
  setActiveTool: (toolId: string) => void;
}

const FinanceHome: FC<FinanceHomeProps> = ({ tools, setActiveTool }) => {
  const handleToolSelect = (toolId: string) => {
    setActiveTool(toolId);
  };

  // Key metrics for Finance domain
  const metrics = [
    {
      name: "Portfolio Growth",
      value: "12.4%",
      trend: "+2.1%",
      trendPositive: true,
      description: "Year-to-date increase"
    },
    {
      name: "Risk Assessment",
      value: "Medium",
      trend: "-5.3%",
      trendPositive: true,
      description: "Risk exposure"
    },
    {
      name: "Trading Volume",
      value: "$4.2M",
      trend: "+8.7%",
      trendPositive: true,
      description: "Weekly average"
    },
    {
      name: "Market Volatility",
      value: "18.2%",
      trend: "+3.5%",
      trendPositive: false,
      description: "30-day average"
    }
  ];

  // Tool icons mapping
  const getToolIcon = (toolId: string) => {
    switch (toolId) {
      case 'portfolio-optimization':
        return <PieChart className="h-5 w-5" />;
      case 'algo-trading':
        return <TrendingUp className="h-5 w-5" />;
      case 'risk-management':
        return <ShieldAlert className="h-5 w-5" />;
      case 'fraud-detection':
        return <ClipboardCheck className="h-5 w-5" />;
      case 'financial-modeling':
        return <LineChart className="h-5 w-5" />;
      case 'insurance-actuarial':
        return <BarChart4 className="h-5 w-5" />;
      case 'mergers-acquisitions':
        return <Building className="h-5 w-5" />;
      case 'regulatory-compliance':
        return <ClipboardCheck className="h-5 w-5" />;
      default:
        return <ChevronRight className="h-5 w-5" />;
    }
  };

  return (
    <div className="py-6 flex-1 flex flex-col">
      {/* Hero section with blue background */}
      <div 
        className="bg-blue-600 h-64 rounded-lg mx-4 mb-6 flex items-center justify-center relative overflow-hidden"
      >
        <div className="text-center text-white px-4">
          <h1 className="text-4xl font-bold mb-2">Financial Intelligence Suite</h1>
          <p className="text-xl">Advanced analytics and modeling for financial decision-making</p>
        </div>
      </div>

      {/* Metrics Overview */}
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Financial Performance Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric, index) => (
            <Card key={index} className="border border-neutral-light">
              <CardContent className="p-4">
                <h3 className="font-medium text-neutral-dark text-base mb-1">{metric.name}</h3>
                <div className="flex items-end space-x-2">
                  <div className="text-2xl font-bold">{metric.value}</div>
                  <div className={`text-sm ${metric.trendPositive ? 'text-success' : 'text-danger'}`}>
                    {metric.trend}
                  </div>
                </div>
                <p className="text-xs text-neutral-medium mt-2">{metric.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Tools Grid */}
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">Financial Analytics Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {tools.map((tool) => (
            <Card 
              key={tool.id} 
              className="border border-neutral-light hover:border-primary transition-colors cursor-pointer"
              onClick={() => handleToolSelect(tool.id)}
            >
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-full text-primary mr-4">
                    {getToolIcon(tool.id)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{tool.name}</h3>
                  </div>
                </div>
                <p className="text-neutral-medium text-sm">
                  {getToolDescription(tool.id)}
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-4 w-full"
                  onClick={() => handleToolSelect(tool.id)}
                >
                  Launch Tool
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

// Helper function to get tool descriptions
function getToolDescription(toolId: string): string {
  switch (toolId) {
    case 'portfolio-optimization':
      return "Optimize asset allocation and maximize returns based on risk tolerance and market conditions";
    case 'algo-trading':
      return "Deploy automated trading strategies with advanced backtesting and performance analytics";
    case 'risk-management':
      return "Comprehensive risk assessment and mitigation strategies for market, credit, and operational risks";
    case 'fraud-detection':
      return "AI-powered anomaly detection to identify suspicious activities and prevent financial fraud";
    case 'financial-modeling':
      return "Build sophisticated financial models with scenario analysis and sensitivity testing";
    case 'insurance-actuarial':
      return "Predictive modeling for insurance pricing, risk assessment, and reserve calculations";
    case 'mergers-acquisitions':
      return "End-to-end M&A analysis including valuation, synergy estimation, and integration planning";
    case 'regulatory-compliance':
      return "Automate compliance monitoring and reporting for financial regulations";
    default:
      return "Advanced financial analysis and decision support";
  }
}

export default FinanceHome;