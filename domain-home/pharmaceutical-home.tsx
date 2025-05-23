import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Pill, TestTube, Microscope, Beaker, Factory, LineChart, Clipboard, Users } from "lucide-react";
import { DomainTool } from "@/data/domains";

interface PharmaceuticalHomeProps {
  tools: DomainTool[];
  setActiveTool: (toolId: string) => void;
}

const PharmaceuticalHome: FC<PharmaceuticalHomeProps> = ({ tools, setActiveTool }) => {
  const handleToolSelect = (toolId: string) => {
    setActiveTool(toolId);
  };

  // Key metrics for Pharmaceutical domain
  const metrics = [
    {
      name: "Drug Discovery",
      value: "24",
      trend: "+5",
      trendPositive: true,
      description: "Candidates in pipeline"
    },
    {
      name: "Trial Success Rate",
      value: "27.8%",
      trend: "+4.3%",
      trendPositive: true,
      description: "Phase II to approval"
    },
    {
      name: "Manufacturing Yield",
      value: "94.6%",
      trend: "+2.1%",
      trendPositive: true,
      description: "Production efficiency"
    },
    {
      name: "Time to Market",
      value: "6.8",
      unit: "years",
      trend: "-0.7",
      trendPositive: true,
      description: "Discovery to approval"
    }
  ];

  // Tool icons mapping
  const getToolIcon = (toolId: string) => {
    switch (toolId) {
      case 'drug-discovery':
        return <Microscope className="h-5 w-5" />;
      case 'clinical-trials':
        return <Clipboard className="h-5 w-5" />;
      case 'manufacturing-optimization':
        return <Factory className="h-5 w-5" />;
      case 'molecular-design':
        return <TestTube className="h-5 w-5" />;
      case 'formulation-development':
        return <Beaker className="h-5 w-5" />;
      case 'regulatory-submission':
        return <Clipboard className="h-5 w-5" />;
      case 'pharmacovigilance':
        return <Pill className="h-5 w-5" />;
      case 'market-analysis':
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
          <h1 className="text-4xl font-bold mb-2">Pharmaceutical R&D Platform</h1>
          <p className="text-xl">Advanced drug discovery and development tools for pharmaceutical research</p>
        </div>
      </div>

      {/* Metrics Overview */}
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Research & Development Metrics</h2>
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
        <h2 className="text-2xl font-semibold mb-4">Pharmaceutical Research Tools</h2>
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
    case 'drug-discovery':
      return "Identify and validate new drug targets using AI-powered compound screening";
    case 'clinical-trials':
      return "Design, manage, and analyze clinical trials with patient matching and outcome prediction";
    case 'manufacturing-optimization':
      return "Optimize pharmaceutical manufacturing processes for yield, quality, and efficiency";
    case 'molecular-design':
      return "Create and optimize molecular structures with desired pharmacological properties";
    case 'formulation-development':
      return "Develop stable drug formulations with improved bioavailability and delivery";
    case 'regulatory-submission':
      return "Prepare and manage regulatory submissions with compliance verification";
    case 'pharmacovigilance':
      return "Monitor and analyze post-market drug safety data and adverse event reporting";
    case 'market-analysis':
      return "Analyze pharmaceutical market trends, competition, and potential opportunities";
    default:
      return "Advanced pharmaceutical research and development tools";
  }
}

export default PharmaceuticalHome;