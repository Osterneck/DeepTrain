import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Map, Target, Radar, Users, Cpu, Shield, Radio } from "lucide-react";
import { DomainTool } from "@/data/domains";

interface MilitaryHomeProps {
  tools: DomainTool[];
  setActiveTool: (toolId: string) => void;
}

const MilitaryHome: FC<MilitaryHomeProps> = ({ tools, setActiveTool }) => {
  const handleToolSelect = (toolId: string) => {
    setActiveTool(toolId);
  };

  // Key metrics for Military domain
  const metrics = [
    {
      name: "Operational Readiness",
      value: "94.2%",
      trend: "+2.3%",
      trendPositive: true,
      description: "Force readiness index"
    },
    {
      name: "Mission Success Rate",
      value: "97.8%",
      trend: "+1.2%",
      trendPositive: true,
      description: "Last 30 operations"
    },
    {
      name: "Training Completion",
      value: "92.5%",
      trend: "+3.7%",
      trendPositive: true,
      description: "Personnel trained"
    },
    {
      name: "Equipment Reliability",
      value: "88.9%",
      trend: "+2.1%",
      trendPositive: true,
      description: "Operational status"
    }
  ];

  // Tool icons mapping
  const getToolIcon = (toolId: string) => {
    switch (toolId) {
      case 'logistics-planning':
        return <Map className="h-5 w-5" />;
      case 'tactical-simulation':
        return <Target className="h-5 w-5" />;
      case 'intelligence-analysis':
        return <Radar className="h-5 w-5" />;
      case 'force-deployment':
        return <Users className="h-5 w-5" />;
      case 'training-simulation':
        return <Target className="h-5 w-5" />;
      case 'cyber-defense':
        return <Cpu className="h-5 w-5" />;
      case 'communication-systems':
        return <Radio className="h-5 w-5" />;
      case 'threat-assessment':
        return <Shield className="h-5 w-5" />;
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
          <h1 className="text-4xl font-bold mb-2">Military Command Platform</h1>
          <p className="text-xl">Advanced strategic planning and operational management tools</p>
        </div>
      </div>

      {/* Metrics Overview */}
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Command Performance Metrics</h2>
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
        <h2 className="text-2xl font-semibold mb-4">Military Command Tools</h2>
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
    case 'logistics-planning':
      return "Plan and optimize supply chain and logistics operations for military deployments";
    case 'tactical-simulation':
      return "Simulate tactical operations with real-time decision support and outcome prediction";
    case 'intelligence-analysis':
      return "Process and analyze intelligence data with pattern recognition and threat assessment";
    case 'force-deployment':
      return "Optimize force composition, positioning and deployment planning";
    case 'training-simulation':
      return "Create immersive training scenarios with real-time feedback and assessment";
    case 'cyber-defense':
      return "Detect, analyze and respond to cyber threats targeting military networks";
    case 'communication-systems':
      return "Manage secure communication networks and ensure operational reliability";
    case 'threat-assessment':
      return "Evaluate and prioritize potential threats with comprehensive risk analysis";
    default:
      return "Advanced military planning and operational management tools";
  }
}

export default MilitaryHome;