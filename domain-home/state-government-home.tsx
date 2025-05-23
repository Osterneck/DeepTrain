import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Heart, Shield, Car, GraduationCap, Leaf, Users, TrendingUp, Building } from "lucide-react";
import { DomainTool } from "@/data/domains";
import stateGovBg from "@assets/State-Gov.png";

interface StateGovernmentHomeProps {
  tools: DomainTool[];
  setActiveTool: (toolId: string) => void;
}

const StateGovernmentHome: FC<StateGovernmentHomeProps> = ({ tools, setActiveTool }) => {
  const handleToolSelect = (toolId: string) => {
    setActiveTool(toolId);
  };

  // Key metrics for State Government domain
  const metrics = [
    {
      name: "Public Health Index",
      value: "86.4",
      trend: "+2.1",
      trendPositive: true,
      description: "Health outcomes"
    },
    {
      name: "Emergency Readiness",
      value: "92.7%",
      trend: "+4.3%",
      trendPositive: true,
      description: "Preparedness score"
    },
    {
      name: "Infrastructure Rating",
      value: "B+",
      trend: "+1 grade",
      trendPositive: true,
      description: "Overall assessment"
    },
    {
      name: "Education Performance",
      value: "78.3",
      trend: "+3.2",
      trendPositive: true,
      description: "K-12 metrics composite"
    }
  ];

  // Tool icons mapping
  const getToolIcon = (toolId: string) => {
    switch (toolId) {
      case 'public-health':
        return <Heart className="h-5 w-5" />;
      case 'emergency-management':
        return <Shield className="h-5 w-5" />;
      case 'law-enforcement':
        return <Shield className="h-5 w-5" />;
      case 'transportation':
        return <Car className="h-5 w-5" />;
      case 'education':
        return <GraduationCap className="h-5 w-5" />;
      case 'environment':
        return <Leaf className="h-5 w-5" />;
      case 'social-services':
        return <Users className="h-5 w-5" />;
      case 'economic-development':
        return <TrendingUp className="h-5 w-5" />;
      default:
        return <Building className="h-5 w-5" />;
    }
  };

  return (
    <div className="py-6 flex-1 flex flex-col">
      {/* Hero section with blue background */}
      <div 
        className="bg-blue-600 h-64 rounded-lg mx-4 mb-6 flex items-center justify-center relative overflow-hidden"
      >
        <div className="text-center text-white px-4">
          <h1 className="text-4xl font-bold mb-2">State Government Platform</h1>
          <p className="text-xl">Comprehensive tools for state-level governance and public service management</p>
        </div>
      </div>

      {/* Metrics Overview */}
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-2xl font-semibold mb-4">State Performance Metrics</h2>
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
        <h2 className="text-2xl font-semibold mb-4">Government Management Tools</h2>
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
    case 'public-health':
      return "Monitor disease surveillance and manage public health programs across state regions";
    case 'emergency-management':
      return "Plan and coordinate emergency response for natural disasters and public safety threats";
    case 'law-enforcement':
      return "Analyze crime data and optimize law enforcement resource allocation";
    case 'transportation':
      return "Manage transportation infrastructure planning, maintenance and traffic optimization";
    case 'education':
      return "Track educational outcomes and manage state-wide school performance metrics";
    case 'environment':
      return "Monitor environmental indicators and manage conservation/protection programs";
    case 'social-services':
      return "Coordinate social service delivery and track program effectiveness";
    case 'economic-development':
      return "Stimulate economic growth through business incentives and workforce development";
    default:
      return "Advanced tools for state governance and public service delivery";
  }
}

export default StateGovernmentHome;