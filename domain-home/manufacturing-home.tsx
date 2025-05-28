import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Factory, Settings, TrendingUp, Truck, Users, LineChart, BarChart2, Wrench } from "lucide-react";
import { DomainTool } from "@/data/domains";

interface ManufacturingHomeProps {
  tools: DomainTool[];
  setActiveTool: (toolId: string) => void;
}

const ManufacturingHome: FC<ManufacturingHomeProps> = ({ tools, setActiveTool }) => {
  const handleToolSelect = (toolId: string) => {
    setActiveTool(toolId);
  };

  // Key metrics for Manufacturing domain
  const metrics = [
    {
      name: "Production Efficiency",
      value: "92.7%",
      trend: "+3.4%",
      trendPositive: true,
      description: "Overall equipment effectiveness"
    },
    {
      name: "Downtime",
      value: "3.2%",
      trend: "-1.7%",
      trendPositive: true,
      description: "Unplanned stops"
    },
    {
      name: "Defect Rate",
      value: "0.84%",
      trend: "-0.3%",
      trendPositive: true,
      description: "Quality issues"
    },
    {
      name: "Throughput",
      value: "4.6K",
      unit: "/day",
      trend: "+8.2%",
      trendPositive: true,
      description: "Units produced"
    }
  ];

  // Tool icons mapping
  const getToolIcon = (toolId: string) => {
    switch (toolId) {
      case 'production-simulation':
        return <Factory className="h-5 w-5" />;
      case 'quality-control':
        return <Settings className="h-5 w-5" />;
      case 'supply-chain':
        return <Truck className="h-5 w-5" />;
      case 'equipment-maintenance':
        return <Wrench className="h-5 w-5" />;
      case 'workforce-planning':
        return <Users className="h-5 w-5" />;
      case 'inventory-management':
        return <BarChart2 className="h-5 w-5" />;
      case 'process-optimization':
        return <TrendingUp className="h-5 w-5" />;
      case 'cost-analysis':
        return <LineChart className="h-5 w-5" />;
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
          <h1 className="text-4xl font-bold mb-2">Manufacturing Operations Platform</h1>
          <p className="text-xl">Advanced production simulation and process optimization tools</p>
        </div>
      </div>

      {/* Metrics Overview */}
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Production Performance Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric, index) => (
            <Card key={index} className="border border-neutral-light">
              <CardContent className="p-4">
                <h3 className="font-medium text-neutral-dark text-base mb-1">{metric.name}</h3>
                <div className="flex items-end space-x-2">
                  <div className="text-2xl font-bold">
                    {metric.value}{metric.unit && <span className="text-sm font-normal ml-1">{metric.unit}</span>}
                  </div>
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
        <h2 className="text-2xl font-semibold mb-4">Manufacturing Management Tools</h2>
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
    case 'production-simulation':
      return "Simulate and optimize production lines with real-time analysis and scenario testing";
    case 'quality-control':
      return "Implement statistical process control and automated defect detection";
    case 'supply-chain':
      return "Manage suppliers, logistics, and inventory with predictive analytics";
    case 'equipment-maintenance':
      return "Prevent downtime with predictive maintenance and equipment health monitoring";
    case 'workforce-planning':
      return "Optimize staffing levels, skills allocation, and shift scheduling";
    case 'inventory-management':
      return "Track and optimize inventory levels with demand forecasting";
    case 'process-optimization':
      return "Identify bottlenecks and optimize manufacturing processes";
    case 'cost-analysis':
      return "Analyze production costs and identify optimization opportunities";
    default:
      return "Advanced manufacturing operations and process optimization tools";
  }
}

export default ManufacturingHome;