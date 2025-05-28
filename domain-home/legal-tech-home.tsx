import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Scale, FileText, Search, BookOpen, LineChart, PieChart, Calendar, Clock } from "lucide-react";
import { DomainTool } from "@/data/domains";

interface LegalTechHomeProps {
  tools: DomainTool[];
  setActiveTool: (toolId: string) => void;
}

const LegalTechHome: FC<LegalTechHomeProps> = ({ tools, setActiveTool }) => {
  const handleToolSelect = (toolId: string) => {
    setActiveTool(toolId);
  };

  // Key metrics for Legal Tech domain
  const metrics = [
    {
      name: "Case Prediction",
      value: "88.4%",
      trend: "+3.7%",
      trendPositive: true,
      description: "Outcome accuracy"
    },
    {
      name: "Document Processing",
      value: "5.8K",
      unit: "/day",
      trend: "+24%",
      trendPositive: true,
      description: "Pages analyzed"
    },
    {
      name: "Time Savings",
      value: "68%",
      trend: "+12%",
      trendPositive: true,
      description: "Research efficiency"
    },
    {
      name: "Compliance Score",
      value: "94.2",
      trend: "+2.8",
      trendPositive: true,
      description: "Regulatory adherence"
    }
  ];

  // Tool icons mapping
  const getToolIcon = (toolId: string) => {
    switch (toolId) {
      case 'case-analysis':
        return <Scale className="h-5 w-5" />;
      case 'document-management':
        return <FileText className="h-5 w-5" />;
      case 'legal-research':
        return <Search className="h-5 w-5" />;
      case 'contract-review':
        return <FileText className="h-5 w-5" />;
      case 'compliance-tracking':
        return <BookOpen className="h-5 w-5" />;
      case 'litigation-analytics':
        return <LineChart className="h-5 w-5" />;
      case 'client-management':
        return <PieChart className="h-5 w-5" />;
      case 'court-scheduling':
        return <Calendar className="h-5 w-5" />;
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
          <h1 className="text-4xl font-bold mb-2">Legal Technology Platform</h1>
          <p className="text-xl">Advanced legal analytics and case management tools for modern practice</p>
        </div>
      </div>

      {/* Metrics Overview */}
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Legal Practice Metrics</h2>
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
        <h2 className="text-2xl font-semibold mb-4">Legal Practice Tools</h2>
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
    case 'case-analysis':
      return "Analyze case facts and predict outcomes based on historical precedents and judicial patterns";
    case 'document-management':
      return "Organize, search, and analyze legal documents with AI-powered information extraction";
    case 'legal-research':
      return "Conduct comprehensive legal research across statutes, case law, and regulatory materials";
    case 'contract-review':
      return "Automate contract review with clause identification, risk analysis, and compliance checking";
    case 'compliance-tracking':
      return "Monitor regulatory changes and maintain compliance across jurisdictions";
    case 'litigation-analytics':
      return "Analyze litigation trends, judge behavior patterns, and case outcomes";
    case 'client-management':
      return "Manage client relationships, communications, and matter tracking";
    case 'court-scheduling':
      return "Coordinate court dates, deadlines, and procedural requirements";
    default:
      return "Advanced legal practice management and analytics tools";
  }
}

export default LegalTechHome;