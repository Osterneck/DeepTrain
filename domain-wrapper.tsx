import { FC } from 'react';
import { Button } from "@/components/ui/button";
import { PlusIcon, DownloadIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Domain, DomainTool } from '@/data/domains';
import { Skeleton } from "@/components/ui/skeleton";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

// Oil & Gas components
import OilGasMetricsSection from "@/components/oil-gas/metrics-section";
import OilGasModelsTable from "@/components/oil-gas/models-table";
import OilGasAnalyticsSection from "@/components/oil-gas/analytics-section";

// IT Project Management components
import ITProjectMetricsSection from "@/components/it-project/metrics-section";
import ITProjectsTable from "@/components/it-project/projects-table";
import ITProjectAnalyticsSection from "@/components/it-project/analytics-section";
import AgileDevView from "@/components/it-project/agile-development-view";
import ResourceAllocationView from "@/components/it-project/resource-allocation-view";
import BudgetTrackingView from "@/components/it-project/budget-tracking-view";
import RiskAssessmentView from "@/components/it-project/risk-assessment-view";
import QualityAssuranceView from "@/components/it-project/quality-assurance-view";
import VendorManagementView from "@/components/it-project/vendor-management-view";
import DocumentationView from "@/components/it-project/documentation-view";

// State Government components
import StateGovMetricsSection from "@/components/state-gov/metrics-section";
import DiseaseTable from "@/components/state-gov/disease-table";
import StateGovAnalyticsSection from "@/components/state-gov/analytics-section";
import EmergencyManagementView from "@/components/state-gov/emergency-management-view";
import LawEnforcementView from "@/components/state-gov/law-enforcement-view";
import TransportationView from "@/components/state-gov/transportation-view";
import EducationView from "@/components/state-gov/education-view";
import EnvironmentView from "@/components/state-gov/environment-view";
import SocialServicesView from "@/components/state-gov/social-services-view";
import EconomicDevelopmentView from "@/components/state-gov/economic-development-view";

// Finance components
import FinanceMetricsSection from "@/components/finance/metrics-section";
import PortfolioTable from "@/components/finance/portfolio-table";
import FinanceAnalyticsSection from "@/components/finance/analytics-section";
import AlgoTradingView from '@/components/finance/algo-trading-view';
import RiskManagementView from '@/components/finance/risk-management-view';
import FraudDetectionView from '@/components/finance/fraud-detection-view';
import FinancialModelingView from '@/components/finance/financial-modeling-view';
import InsuranceActuarialView from '@/components/finance/insurance-actuarial-view';
import MergersAcquisitionsView from '@/components/finance/mergers-acquisitions-view';
import RegulatoryComplianceView from '@/components/finance/regulatory-compliance-view';

// Pharmaceutical components
import DrugDiscoveryView from "@/components/pharmaceutical/drug-discovery-view";
import ClinicalTrialsView from "@/components/pharmaceutical/clinical-trials-view";
import ManufacturingOptimizationView from "@/components/pharmaceutical/manufacturing-optimization-view";

// Military components
import LogisticsPlanningView from "@/components/military/logistics-planning-view";
import TacticalSimulationView from "@/components/military/tactical-simulation-view";
import IntelligenceAnalysisView from "@/components/military/intelligence-analysis-view";
import ForceDeploymentView from "@/components/military/force-deployment-view";
import TrainingSimulationView from "@/components/military/training-simulation-view";
import CyberDefenseView from "@/components/military/cyber-defense-view";
import CommunicationSystemsView from "@/components/military/communication-systems-view";

// Healthcare components
import PatientAnalysisView from "@/components/healthcare/patient-analysis-view";

// Legal Tech components
import CaseAnalysisView from "@/components/legal-tech/case-analysis-view";

// Sports components
import PlayerPerformanceView from "@/components/sports/player-performance-view";
import GameStrategyView from "@/components/sports/game-strategy-view";
import InjuryPredictionView from "@/components/sports/injury-prediction-view";
import TalentScoutingView from "@/components/sports/talent-scouting-view";

// Manufacturing components
import ProductionSimulationView from "@/components/manufacturing/production-simulation-view";
import QualityControlView from "@/components/manufacturing/quality-control-view";
import SupplyChainView from "@/components/manufacturing/supply-chain-view";
import InventoryManagementView from "@/components/manufacturing/inventory-management-view";
import EquipmentMaintenanceView from "@/components/manufacturing/equipment-maintenance-view";
import FactoryLayoutView from "@/components/manufacturing/factory-layout-view";
import WorkforcePlanningView from "@/components/manufacturing/workforce-planning-view";
import EnergyEfficiencyView from "@/components/manufacturing/energy-efficiency-view";
import ProcessOptimizationView from "@/components/manufacturing/process-optimization-view";

interface DomainWrapperProps {
  activeDomain: Domain;
  activeTool: DomainTool;
  setActiveTool: (toolId: string) => void;
  isLoading: boolean;
}

const DomainWrapper: FC<DomainWrapperProps> = ({ 
  activeDomain, 
  activeTool, 
  setActiveTool,
  isLoading 
}) => {
  // Handle primary action (e.g., New Model, New Project, New Report)
  const handlePrimaryAction = () => {
    const domainId = activeDomain.id;
    console.log(`Primary action for domain: ${domainId}, tool: ${activeTool.id}`);
  };

  // Handle export data
  const handleExportData = () => {
    const domainId = activeDomain.id;
    console.log(`Exporting data for domain: ${domainId}, tool: ${activeTool.id}`);
  };

  // Function to render tool icon
  const renderToolIcon = (iconName: string) => {
    switch (iconName) {
      case "chart-bar":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 mr-2"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M7 16V8" />
            <path d="M12 16v-4" />
            <path d="M17 16v-8" />
          </svg>
        );
      case "drill":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 mr-2"
          >
            <path d="m5 19 2.5-6.5M8 15l-1.5 4"/>
            <path d="M12 3v6h3a3 3 0 0 0 0-6h-3z"/>
            <path d="M10 9v12"/>
            <path d="M5 9h10"/>
          </svg>
        );
      case "chart-line":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 mr-2"
          >
            <path d="M21 21H4.6c-.2 0-.3 0-.4-.1a.8.8 0 0 1-.1-.4V3" />
            <path d="m21 7-9.1 9.1-3.5-3.5L3 18" />
          </svg>
        );
      default:
        return null;
    }
  };

  // Get primary action text based on domain
  const getPrimaryActionText = () => {
    switch (activeDomain.id) {
      case 'oil-gas':
        return 'New Model';
      case 'it-project-management':
        return 'New Project';
      case 'state-government':
        return 'New Report';
      default:
        return 'New Item';
    }
  };

  // Get content title based on active tool
  const getContentTitle = () => {
    if (activeTool) {
      if (activeTool.id === 'reservoir-modeling') {
        return 'Reservoir Modeling and Management';
      } else if (activeTool.id === 'project-scheduling') {
        return 'Project Scheduling & Resource Allocation';
      } else if (activeTool.id === 'public-health') {
        return 'Public Health Management & Disease Surveillance';
      } else {
        return activeTool.name;
      }
    }
    return '';
  };

  // Render domain tools navigation
  const renderDomainTools = () => (
    <div className="bg-white border-b border-neutral-light">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto hide-scrollbar">
          {activeDomain.tools.map((tool) => (
            <a
              key={tool.id}
              href="#"
              className={cn(
                "tool-tab flex items-center whitespace-nowrap px-4 py-3 text-sm font-medium hover:text-primary transition-colors duration-150 ease-in-out border-b-3",
                activeTool.id === tool.id && "active"
              )}
              onClick={(e) => {
                e.preventDefault();
                setActiveTool(tool.id);
              }}
            >
              {renderToolIcon(tool.icon)}
              {tool.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );

  // Render content based on active domain and tool
  const renderDomainContent = () => {
    // If we have a specific content for the domain + tool combination, show it
    if (activeDomain.id === 'oil-gas') {
      switch (activeTool.id) {
        case 'reservoir-modeling':
          return (
            <>
              <OilGasMetricsSection isLoading={isLoading} />
              <OilGasModelsTable isLoading={isLoading} />
              <OilGasAnalyticsSection isLoading={isLoading} />
            </>
          );
        default:
          return renderGenericTool(activeTool.name);
      }
    } else if (activeDomain.id === 'finance') {
      switch (activeTool.id) {
        case 'portfolio-optimization':
          return (
            <>
              <FinanceMetricsSection isLoading={isLoading} />
              <PortfolioTable isLoading={isLoading} />
              <FinanceAnalyticsSection isLoading={isLoading} />
            </>
          );
        case 'algo-trading':
          return <AlgoTradingView isLoading={isLoading} />;
        case 'risk-management':
          return <RiskManagementView isLoading={isLoading} />;
        case 'fraud-detection':
          return <FraudDetectionView isLoading={isLoading} />;
        case 'financial-modeling':
          return <FinancialModelingView isLoading={isLoading} />;
        case 'insurance-actuarial':
          return <InsuranceActuarialView isLoading={isLoading} />;
        case 'mergers-acquisitions':
          return <MergersAcquisitionsView isLoading={isLoading} />;
        case 'regulatory-compliance':
          return <RegulatoryComplianceView isLoading={isLoading} />;
        default:
          return renderGenericTool(activeTool.name);
      }
    } else if (activeDomain.id === 'it-project-management') {
      switch (activeTool.id) {
        case 'project-scheduling':
          return (
            <>
              <ITProjectMetricsSection isLoading={isLoading} />
              <ITProjectsTable isLoading={isLoading} />
              <ITProjectAnalyticsSection isLoading={isLoading} />
            </>
          );
        case 'agile-management':
          return <AgileDevView isLoading={isLoading} />;
        case 'resource-allocation':
          return <ResourceAllocationView isLoading={isLoading} />;
        case 'budgeting':
          return <BudgetTrackingView isLoading={isLoading} />;
        case 'risk-management':
          return <RiskAssessmentView isLoading={isLoading} />;
        case 'quality-assurance':
          return <QualityAssuranceView isLoading={isLoading} />;
        case 'vendor-management':
          return <VendorManagementView isLoading={isLoading} />;
        case 'documentation':
          return <DocumentationView isLoading={isLoading} />;
        default:
          return renderGenericTool(activeTool.name);
      }
    } else if (activeDomain.id === 'state-government') {
      switch (activeTool.id) {
        case 'public-health':
          return (
            <>
              <StateGovMetricsSection isLoading={isLoading} />
              <DiseaseTable isLoading={isLoading} />
              <StateGovAnalyticsSection isLoading={isLoading} />
            </>
          );
        case 'emergency-management':
          return <EmergencyManagementView isLoading={isLoading} />;
        case 'law-enforcement':
          return <LawEnforcementView isLoading={isLoading} />;
        case 'transportation':
          return <TransportationView isLoading={isLoading} />;
        case 'education':
          return <EducationView isLoading={isLoading} />;
        case 'environment':
          return <EnvironmentView isLoading={isLoading} />;
        case 'social-services':
          return <SocialServicesView isLoading={isLoading} />;
        case 'economic-development':
          return <EconomicDevelopmentView isLoading={isLoading} />;
        default:
          return renderGenericTool(activeTool.name);
      }
    } else if (activeDomain.id === 'pharmaceutical') {
      switch (activeTool.id) {
        case 'drug-discovery':
          return <DrugDiscoveryView isLoading={isLoading} />;
        case 'clinical-trials':
          return <ClinicalTrialsView isLoading={isLoading} />;
        case 'manufacturing-optimization':
          return <ManufacturingOptimizationView isLoading={isLoading} />;
        default:
          return renderGenericTool(activeTool.name);
      }
    } else if (activeDomain.id === 'military') {
      switch (activeTool.id) {
        case 'logistics-planning':
          return <LogisticsPlanningView isLoading={isLoading} />;
        case 'tactical-simulation':
          return <TacticalSimulationView isLoading={isLoading} />;
        case 'intelligence-analysis':
          return <IntelligenceAnalysisView isLoading={isLoading} />;
        case 'force-deployment':
          return <ForceDeploymentView isLoading={isLoading} />;
        case 'training-simulation':
          return <TrainingSimulationView isLoading={isLoading} />;
        case 'cyber-defense':
          return <CyberDefenseView isLoading={isLoading} />;
        case 'communication-systems':
          return <CommunicationSystemsView isLoading={isLoading} />;
        default:
          return renderGenericTool(activeTool.name);
      }
    } else if (activeDomain.id === 'legal-tech') {
      switch (activeTool.id) {
        case 'case-analysis':
          return <CaseAnalysisView isLoading={isLoading} />;
        default:
          return renderGenericTool(activeTool.name);
      }
    } else if (activeDomain.id === 'sports') {
      switch (activeTool.id) {
        case 'player-performance':
          return <PlayerPerformanceView isLoading={isLoading} />;
        case 'game-strategy':
          return <GameStrategyView isLoading={isLoading} />;
        case 'injury-prediction':
          return <InjuryPredictionView isLoading={isLoading} />;
        case 'talent-scouting':
          return <TalentScoutingView isLoading={isLoading} />;
        default:
          return renderGenericTool(activeTool.name);
      }
    } else if (activeDomain.id === 'manufacturing') {
      switch (activeTool.id) {
        case 'production-simulation':
          return <ProductionSimulationView isLoading={isLoading} />;
        case 'quality-control':
          return <QualityControlView isLoading={isLoading} />;
        case 'supply-chain':
          return <SupplyChainView isLoading={isLoading} />;
        case 'inventory-management':
          return <InventoryManagementView isLoading={isLoading} />;
        case 'equipment-maintenance':
          return <EquipmentMaintenanceView isLoading={isLoading} />;
        case 'factory-layout':
          return <FactoryLayoutView isLoading={isLoading} />;
        case 'workforce-planning':
          return <WorkforcePlanningView isLoading={isLoading} />;
        case 'energy-efficiency':
          return <EnergyEfficiencyView isLoading={isLoading} />;
        case 'process-optimization':
          return <ProcessOptimizationView isLoading={isLoading} />;
        default:
          return renderGenericTool(activeTool.name);
      }
    } else if (activeDomain.id === 'healthcare') {
      switch (activeTool.id) {
        case 'patient-analysis':
          return <PatientAnalysisView isLoading={isLoading} />;
        default:
          return renderGenericTool(activeTool.name);
      }
    } else {
      // Generic tool display for other domains
      return renderGenericTool(activeTool.name);
    }
  };
  
  // Render a generic tool screen with simulated content
  const renderGenericTool = (toolName: string) => {
    // Generate some fake metrics for the tool
    const metrics = [
      { 
        title: `${toolName} Efficiency`,
        value: Math.floor(Math.random() * 30) + 70, 
        change: { 
          value: (Math.random() * 5).toFixed(1), 
          isPositive: Math.random() > 0.3 
        },
        icon: 'chart-line'
      },
      { 
        title: `${toolName} Utilization`,
        value: Math.floor(Math.random() * 20) + 75, 
        change: { 
          value: (Math.random() * 4).toFixed(1), 
          isPositive: Math.random() > 0.3 
        },
        icon: 'bar-chart' 
      },
      { 
        title: `${toolName} Performance`,
        value: Math.floor(Math.random() * 15) + 80, 
        change: { 
          value: (Math.random() * 3).toFixed(1), 
          isPositive: Math.random() > 0.3 
        },
        icon: 'activity'
      }
    ];
    
    // Generate fake table data
    const tableData = Array.from({ length: 5 }, (_, i) => ({
      id: `item-${i + 1}`,
      name: `${toolName} Simulation ${i + 1}`,
      status: ['Active', 'Pending', 'Completed'][Math.floor(Math.random() * 3)],
      date: new Date(Date.now() - Math.random() * 10000000000).toISOString().split('T')[0],
      progress: Math.floor(Math.random() * 100),
      owner: ['Alex Johnson', 'Maria Garcia', 'James Smith', 'Sarah Lee', 'David Wilson'][Math.floor(Math.random() * 5)]
    }));
    
    // Generate chart data
    const chartData = Array.from({ length: 6 }, (_, i) => ({
      month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'][i],
      actual: Math.floor(Math.random() * 30) + 60,
      predicted: Math.floor(Math.random() * 20) + 50
    }));
    
    return (
      <>
        {/* Metrics Section */}
        <section className="pb-6">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {metrics.map((metric, idx) => (
                <div key={idx} className="border border-neutral-light rounded-lg bg-white shadow-sm">
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-sm text-neutral-medium font-medium">{metric.title}</h3>
                      <div className="text-secondary bg-secondary-light bg-opacity-10 p-1 rounded">
                        {renderMetricIcon(metric.icon)}
                      </div>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold">
                        {metric.value}%
                      </span>
                    </div>
                    <div className="mt-2 text-xs flex items-center">
                      <span className={`flex items-center ${metric.change.isPositive ? 'text-success' : 'text-danger'}`}>
                        {metric.change.isPositive ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-3 w-3 mr-1"
                          >
                            <path d="m18 15-6-6-6 6" />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-3 w-3 mr-1"
                          >
                            <path d="m6 9 6 6 6-6" />
                          </svg>
                        )}
                        {metric.change.value}% {metric.change.isPositive ? 'increase' : 'decrease'} from last period
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Table Section */}
        <section className="pb-6">
          <div className="container mx-auto px-4">
            <div className="border border-neutral-light rounded-lg bg-white shadow-sm overflow-hidden">
              <div className="p-4 border-b border-neutral-light">
                <h2 className="text-lg font-medium">{toolName} Simulations</h2>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-neutral-lightest">
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Created</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Progress</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Owner</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-light">
                    {isLoading ? (
                      // Show loading skeleton
                      Array.from({ length: 5 }).map((_, i) => (
                        <tr key={i}>
                          <td className="px-6 py-4">
                            <Skeleton className="h-4 w-16" />
                          </td>
                          <td className="px-6 py-4">
                            <Skeleton className="h-4 w-48" />
                          </td>
                          <td className="px-6 py-4">
                            <Skeleton className="h-4 w-20" />
                          </td>
                          <td className="px-6 py-4">
                            <Skeleton className="h-4 w-24" />
                          </td>
                          <td className="px-6 py-4">
                            <Skeleton className="h-4 w-24" />
                          </td>
                          <td className="px-6 py-4">
                            <Skeleton className="h-4 w-32" />
                          </td>
                        </tr>
                      ))
                    ) : (
                      // Show actual data
                      tableData.map((item) => (
                        <tr key={item.id} className="hover:bg-neutral-lightest">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-medium">
                            {item.id}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            {item.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              item.status === "Active"
                                ? "bg-green-100 text-green-800"
                                : item.status === "Pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-blue-100 text-blue-800"
                            }`}>
                              {item.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-medium">
                            {item.date}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <div className="w-full bg-neutral-lightest rounded-full h-2">
                              <div 
                                className="bg-primary h-2 rounded-full" 
                                style={{ width: `${item.progress}%` }}
                              ></div>
                            </div>
                            <span className="text-xs text-neutral-medium mt-1">
                              {item.progress}%
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-medium">
                            {item.owner}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        
        {/* Chart Section */}
        <section className="pb-6">
          <div className="container mx-auto px-4">
            <div className="border border-neutral-light rounded-lg bg-white shadow-sm">
              <div className="p-4 border-b border-neutral-light">
                <h2 className="text-lg font-medium">{toolName} Analytics</h2>
              </div>
              <div className="p-4">
                <div className="h-80">
                  {isLoading ? (
                    <Skeleton className="h-full w-full" />
                  ) : (
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line 
                          type="monotone" 
                          dataKey="actual" 
                          name="Actual" 
                          stroke="#8884d8" 
                          activeDot={{ r: 8 }} 
                        />
                        <Line 
                          type="monotone" 
                          dataKey="predicted" 
                          name="Predicted" 
                          stroke="#82ca9d" 
                          strokeDasharray="5 5"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };
  
  // Helper to render metric icon
  const renderMetricIcon = (icon: string) => {
    switch (icon) {
      case 'chart-line':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M21 21H4.6c-.2 0-.3 0-.4-.1a.8.8 0 0 1-.1-.4V3" />
            <path d="m21 7-9.1 9.1-3.5-3.5L3 18" />
          </svg>
        );
      case 'bar-chart':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M7 16V8" />
            <path d="M12 16v-4" />
            <path d="M17 16v-8" />
          </svg>
        );
      case 'activity':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <main className="flex-1 flex flex-col">
      {/* Domain tool navigation */}
      {renderDomainTools()}
      
      {/* Domain content header */}
      <div className="bg-white py-4 border-b border-neutral-light">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-medium">{getContentTitle()}</h1>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                onClick={handleExportData}
                className="text-sm flex items-center"
              >
                <DownloadIcon className="h-4 w-4 mr-1" />
                Export Data
              </Button>
              <Button
                onClick={handlePrimaryAction}
                className="text-sm flex items-center"
              >
                <PlusIcon className="h-4 w-4 mr-1" />
                {getPrimaryActionText()}
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main content area */}
      <div className="flex-1 bg-neutral-lightest pb-6">
        {renderDomainContent()}
      </div>
    </main>
  );
};

export default DomainWrapper;