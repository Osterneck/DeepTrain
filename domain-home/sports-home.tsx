import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Activity, LineChart, UserCheck, Timer, BarChart2, Users, Trophy, Flag } from "lucide-react";
import { DomainTool } from "@/data/domains";

interface SportsHomeProps {
  tools: DomainTool[];
  setActiveTool: (toolId: string) => void;
}

const SportsHome: FC<SportsHomeProps> = ({ tools, setActiveTool }) => {
  const handleToolSelect = (toolId: string) => {
    setActiveTool(toolId);
  };

  // Key metrics for Sports domain
  const metrics = [
    {
      name: "Team Performance",
      value: "87.3",
      trend: "+4.2",
      trendPositive: true,
      description: "Performance index"
    },
    {
      name: "Player Efficiency",
      value: "92.8",
      trend: "+3.5",
      trendPositive: true,
      description: "Average PER"
    },
    {
      name: "Injury Reduction",
      value: "38%",
      trend: "+12%",
      trendPositive: true,
      description: "Year-over-year"
    },
    {
      name: "Win Prediction",
      value: "84.6%",
      trend: "+6.2%",
      trendPositive: true,
      description: "Model accuracy"
    }
  ];

  // Tool icons mapping
  const getToolIcon = (toolId: string) => {
    switch (toolId) {
      case 'player-performance':
        return <Activity className="h-5 w-5" />;
      case 'game-strategy':
        return <Flag className="h-5 w-5" />;
      case 'injury-prediction':
        return <UserCheck className="h-5 w-5" />;
      case 'talent-scouting':
        return <Users className="h-5 w-5" />;
      case 'training-optimization':
        return <Timer className="h-5 w-5" />;
      case 'match-analysis':
        return <BarChart2 className="h-5 w-5" />;
      case 'competition-planning':
        return <Trophy className="h-5 w-5" />;
      case 'fan-engagement':
        return <Users className="h-5 w-5" />;
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
          <h1 className="text-4xl font-bold mb-2">Sports Analytics Platform</h1>
          <p className="text-xl">Advanced performance analysis and optimization tools for athletes and teams</p>
        </div>
      </div>

      {/* Metrics Overview */}
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Performance Metrics</h2>
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
        <h2 className="text-2xl font-semibold mb-4">Sports Analytics Tools</h2>
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
    case 'player-performance':
      return "Analyze individual athlete performance with advanced metrics and trend analysis";
    case 'game-strategy':
      return "Develop and simulate game strategies with opponent analysis and tactical planning";
    case 'injury-prediction':
      return "Predict and prevent potential injuries through biomechanical analysis and monitoring";
    case 'talent-scouting':
      return "Identify and evaluate promising talent using comprehensive analytics and projections";
    case 'training-optimization':
      return "Customize training programs based on individual needs and performance data";
    case 'match-analysis':
      return "Break down game footage with automated play recognition and statistical analysis";
    case 'competition-planning':
      return "Plan and optimize season schedules, tournament strategies, and resource allocation";
    case 'fan-engagement':
      return "Enhance fan experience through personalized content and interactive features";
    default:
      return "Advanced sports performance analytics and optimization tools";
  }
}

export default SportsHome;