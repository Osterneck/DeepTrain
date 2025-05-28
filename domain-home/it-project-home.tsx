import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, CalendarDays, Users, DollarSign, AlertTriangle, CheckSquare, Briefcase, FileText, Users2 } from "lucide-react";
import { DomainTool } from "@/data/domains";
import itProjectBg from "@assets/IT-Project-Mgt.png";

interface ITProjectHomeProps {
  tools: DomainTool[];
  setActiveTool: (toolId: string) => void;
}

const ITProjectHome: FC<ITProjectHomeProps> = ({ tools, setActiveTool }) => {
  const handleToolSelect = (toolId: string) => {
    setActiveTool(toolId);
  };

  // Key metrics for IT Project Management domain
  const metrics = [
    {
      name: "Active Projects",
      value: "24",
      trend: "+3",
      trendPositive: true,
      description: "Current projects"
    },
    {
      name: "On-Time Delivery",
      value: "87.2%",
      trend: "+2.4%",
      trendPositive: true,
      description: "Projects on schedule"
    },
    {
      name: "Budget Variance",
      value: "-3.8%",
      trend: "+1.2%",
      trendPositive: true,
      description: "Under budget"
    },
    {
      name: "Team Utilization",
      value: "92.7%",
      trend: "+4.3%",
      trendPositive: true,
      description: "Resource allocation"
    }
  ];

  // Tool icons mapping
  const getToolIcon = (toolId: string) => {
    switch (toolId) {
      case 'project-scheduling':
        return <CalendarDays className="h-5 w-5" />;
      case 'resource-allocation':
        return <Users className="h-5 w-5" />;
      case 'budgeting':
        return <DollarSign className="h-5 w-5" />;
      case 'risk-management':
        return <AlertTriangle className="h-5 w-5" />;
      case 'quality-assurance':
        return <CheckSquare className="h-5 w-5" />;
      case 'vendor-management':
        return <Briefcase className="h-5 w-5" />;
      case 'documentation':
        return <FileText className="h-5 w-5" />;
      case 'agile-management':
        return <Users2 className="h-5 w-5" />;
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
          <h1 className="text-4xl font-bold mb-2">IT Project Management Suite</h1>
          <p className="text-xl">Comprehensive tools for planning, executing, and monitoring IT projects</p>
        </div>
      </div>

      {/* Metrics Overview */}
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Project Performance Metrics</h2>
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
        <h2 className="text-2xl font-semibold mb-4">Project Management Tools</h2>
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
    case 'project-scheduling':
      return "Create and optimize project schedules with Gantt charts and critical path analysis";
    case 'resource-allocation':
      return "Efficiently allocate team members and resources across multiple projects";
    case 'budgeting':
      return "Track project expenses, manage budgets, and forecast financial requirements";
    case 'risk-management':
      return "Identify, assess, and mitigate project risks with advanced probability analysis";
    case 'quality-assurance':
      return "Implement quality control processes and track defects throughout the project lifecycle";
    case 'vendor-management':
      return "Manage vendor relationships, contracts, and performance in IT projects";
    case 'documentation':
      return "Create and manage comprehensive project documentation and knowledge base";
    case 'agile-management':
      return "Plan and execute sprints, track user stories, and facilitate agile ceremonies";
    default:
      return "Advanced tools for IT project planning and execution";
  }
}

export default ITProjectHome;