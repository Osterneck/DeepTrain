import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Droplet, LineChart, BarChart4, Activity, Hammer, Truck, Beaker } from "lucide-react";
import { DomainTool } from "@/data/domains";
import oilGasBg from "@assets/OIL-_-GAS-051925-Document1_1.png";

interface OilGasHomeProps {
  tools: DomainTool[];
  setActiveTool: (toolId: string) => void;
}

const OilGasHome: FC<OilGasHomeProps> = ({ tools, setActiveTool }) => {
  const handleToolSelect = (toolId: string) => {
    setActiveTool(toolId);
  };

  // Key metrics for Oil & Gas domain
  const metrics = [
    {
      name: "Production Volume",
      value: "18.5K",
      unit: "bbl/day",
      trend: "+3.2%",
      trendPositive: true,
      description: "Average daily output"
    },
    {
      name: "Field Efficiency",
      value: "92.3%",
      trend: "+1.7%",
      trendPositive: true,
      description: "Operating efficiency"
    },
    {
      name: "Recovery Rate",
      value: "42.7%",
      trend: "+2.5%",
      trendPositive: true,
      description: "Estimated recovery"
    },
    {
      name: "Production Cost",
      value: "$34.80",
      unit: "/bbl",
      trend: "-1.9%",
      trendPositive: true,
      description: "Cost per barrel"
    }
  ];

  // Tool icons mapping
  const getToolIcon = (toolId: string) => {
    switch (toolId) {
      case 'reservoir-modeling':
        return <Droplet className="h-5 w-5" />;
      case 'production-optimization':
        return <LineChart className="h-5 w-5" />;
      case 'drilling-simulation':
        return <Hammer className="h-5 w-5" />;
      case 'field-development':
        return <BarChart4 className="h-5 w-5" />;
      case 'well-monitoring':
        return <Activity className="h-5 w-5" />;
      case 'logistics-planning':
        return <Truck className="h-5 w-5" />;
      case 'geochemical-analysis':
        return <Beaker className="h-5 w-5" />;
      case 'equipment-maintenance':
        return <Hammer className="h-5 w-5" />;
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
          <h1 className="text-4xl font-bold mb-2">Oil & Gas Operations Platform</h1>
          <p className="text-xl">Advanced reservoir modeling and production optimization solutions</p>
        </div>
      </div>

      {/* Metrics Overview */}
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Production Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric, index) => (
            <Card key={index} className="border border-neutral-light">
              <CardContent className="p-4">
                <h3 className="font-medium text-neutral-dark text-base mb-1">{metric.name}</h3>
                <div className="flex items-end space-x-2">
                  <div className="text-2xl font-bold">
                    {metric.value} <span className="text-sm font-normal">{metric.unit}</span>
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
        <h2 className="text-2xl font-semibold mb-4">Oil & Gas Management Tools</h2>
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
    case 'reservoir-modeling':
      return "Simulate and visualize reservoir behavior using advanced physics-based modeling";
    case 'production-optimization':
      return "Maximize hydrocarbon recovery and production rates through AI optimization";
    case 'drilling-simulation':
      return "Plan and optimize drilling operations with real-time simulation and risk analysis";
    case 'field-development':
      return "Design comprehensive field development plans with economic analysis";
    case 'well-monitoring':
      return "Real-time monitoring of well performance and predictive maintenance";
    case 'logistics-planning':
      return "Optimize supply chain and logistics operations for oil and gas facilities";
    case 'geochemical-analysis':
      return "Advanced geochemical characterization and fluid analysis for reservoirs";
    case 'equipment-maintenance':
      return "Predictive maintenance scheduling and asset management";
    default:
      return "Advanced oil and gas operational analysis and optimization";
  }
}

export default OilGasHome;