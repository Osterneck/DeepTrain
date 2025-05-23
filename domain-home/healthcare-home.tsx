import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Activity, HeartPulse, Stethoscope, Brain, LineChart, PieChart, Microscope, Pill } from "lucide-react";
import { DomainTool } from "@/data/domains";

interface HealthcareHomeProps {
  tools: DomainTool[];
  setActiveTool: (toolId: string) => void;
}

const HealthcareHome: FC<HealthcareHomeProps> = ({ tools, setActiveTool }) => {
  const handleToolSelect = (toolId: string) => {
    setActiveTool(toolId);
  };

  // Key metrics for Healthcare domain
  const metrics = [
    {
      name: "Patient Outcomes",
      value: "93.7%",
      trend: "+2.1%",
      trendPositive: true,
      description: "Treatment success rate"
    },
    {
      name: "Average Length of Stay",
      value: "4.2",
      unit: "days",
      trend: "-0.5",
      trendPositive: true,
      description: "Inpatient care"
    },
    {
      name: "Readmission Rate",
      value: "3.6%",
      trend: "-0.8%",
      trendPositive: true,
      description: "30-day returns"
    },
    {
      name: "Patient Satisfaction",
      value: "88.9",
      trend: "+3.2",
      trendPositive: true,
      description: "Survey score"
    }
  ];

  // Tool icons mapping
  const getToolIcon = (toolId: string) => {
    switch (toolId) {
      case 'patient-analysis':
        return <HeartPulse className="h-5 w-5" />;
      case 'diagnosis-support':
        return <Stethoscope className="h-5 w-5" />;
      case 'treatment-planning':
        return <Activity className="h-5 w-5" />;
      case 'health-monitoring':
        return <HeartPulse className="h-5 w-5" />;
      case 'medical-imaging':
        return <Brain className="h-5 w-5" />;
      case 'clinical-trials':
        return <Microscope className="h-5 w-5" />;
      case 'medication-management':
        return <Pill className="h-5 w-5" />;
      case 'population-health':
        return <PieChart className="h-5 w-5" />;
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
          <h1 className="text-4xl font-bold mb-2">Healthcare Analytics Platform</h1>
          <p className="text-xl">Advanced clinical decision support and patient analysis tools</p>
        </div>
      </div>

      {/* Metrics Overview */}
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Clinical Performance Metrics</h2>
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
        <h2 className="text-2xl font-semibold mb-4">Healthcare Management Tools</h2>
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
    case 'patient-analysis':
      return "Analyze patient data to identify trends, risk factors, and personalized treatment recommendations";
    case 'diagnosis-support':
      return "AI-powered clinical decision support system to assist with differential diagnosis";
    case 'treatment-planning':
      return "Create personalized treatment plans with evidence-based protocols and outcome prediction";
    case 'health-monitoring':
      return "Track patient vital signs and health metrics in real-time with predictive alerts";
    case 'medical-imaging':
      return "Advanced medical image analysis with AI-assisted diagnostic support";
    case 'clinical-trials':
      return "Design and manage clinical trials with patient matching and outcome tracking";
    case 'medication-management':
      return "Optimize medication regimens with interaction checking and adherence monitoring";
    case 'population-health':
      return "Analyze community health trends and manage public health interventions";
    default:
      return "Advanced clinical decision support and healthcare management tools";
  }
}

export default HealthcareHome;