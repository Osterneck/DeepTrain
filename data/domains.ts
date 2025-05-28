// Define the tool interface
export interface DomainTool {
  id: string;
  name: string;
  icon: string;
}

// Define the domain interface
export interface Domain {
  id: string;
  name: string;
  tools: DomainTool[];
}

// Create domain data
export const domains: Domain[] = [
  {
    id: 'oil-gas',
    name: 'Oil & Gas',
    tools: [
      { id: 'reservoir-modeling', name: 'Reservoir Modeling', icon: 'chart-bar' },
      { id: 'drilling-optimization', name: 'Drilling Optimization', icon: 'drill' },
      { id: 'production-optimization', name: 'Production Optimization', icon: 'chart-line' },
      { id: 'supply-chain', name: 'Supply Chain & Logistics', icon: 'truck' },
      { id: 'asset-integrity', name: 'Asset Integrity', icon: 'shield' },
      { id: 'safety-risk', name: 'Safety & Risk', icon: 'alert-triangle' },
      { id: 'energy-transition', name: 'Energy Transition', icon: 'sun' },
      { id: 'seismic-analysis', name: 'Seismic Analysis', icon: 'activity' }
    ]
  },
  {
    id: 'finance',
    name: 'Finance',
    tools: [
      { id: 'portfolio-optimization', name: 'Portfolio Optimization', icon: 'chart-bar' },
      { id: 'algorithmic-trading', name: 'Algorithmic Trading & HFT', icon: 'robot' },
      { id: 'risk-management', name: 'Risk Management', icon: 'shield' },
      { id: 'fraud-detection', name: 'Fraud Detection', icon: 'search-dollar' },
      { id: 'financial-modeling', name: 'Financial Modeling', icon: 'chart-line' },
      { id: 'insurance-actuarial', name: 'Insurance & Actuarial', icon: 'file-invoice' },
      { id: 'mergers-acquisitions', name: 'Mergers & Acquisitions', icon: 'handshake' },
      { id: 'asset-management', name: 'Asset Management', icon: 'chart-bar' }
    ]
  },
  {
    id: 'it-project-management',
    name: 'IT Project Management',
    tools: [
      { id: 'project-scheduling', name: 'Project Scheduling & Resource Allocation', icon: 'calendar' },
      { id: 'risk-management', name: 'Risk Management & Mitigation', icon: 'shield' },
      { id: 'budgeting', name: 'Budgeting & Cost Estimation', icon: 'dollar-sign' },
      { id: 'team-collaboration', name: 'Team Collaboration & Communication', icon: 'users' },
      { id: 'performance-tracking', name: 'Performance Tracking & KPI Analysis', icon: 'bar-chart' },
      { id: 'agile-management', name: 'Agile Management', icon: 'refresh-cw' },
      { id: 'devops-automation', name: 'DevOps & Automation', icon: 'git-branch' },
      { id: 'quality-assurance', name: 'Quality Assurance', icon: 'check-circle' }
    ]
  },
  {
    id: 'state-government',
    name: 'State Government',
    tools: [
      { id: 'public-health', name: 'Public Health', icon: 'activity' },
      { id: 'emergency-management', name: 'Emergency Management', icon: 'alert-triangle' },
      { id: 'law-enforcement', name: 'Law Enforcement', icon: 'shield' },
      { id: 'transportation', name: 'Transportation', icon: 'truck' },
      { id: 'education', name: 'Education', icon: 'book' },
      { id: 'environment', name: 'Environment', icon: 'cloud' },
      { id: 'social-services', name: 'Social Services', icon: 'users' },
      { id: 'economic-development', name: 'Economic Development', icon: 'trending-up' }
    ]
  },
  {
    id: 'pharmaceutical',
    name: 'Pharmaceutical',
    tools: [
      { id: 'drug-discovery', name: 'Drug Discovery & Development', icon: 'search' },
      { id: 'clinical-trials', name: 'Clinical Trials Simulation', icon: 'clipboard' },
      { id: 'manufacturing-optimization', name: 'Manufacturing Optimization', icon: 'settings' },
      { id: 'supply-chain', name: 'Supply Chain Management', icon: 'truck' },
      { id: 'regulatory-compliance', name: 'Regulatory Compliance', icon: 'check-square' },
      { id: 'market-analysis', name: 'Market Analysis', icon: 'trending-up' },
      { id: 'patient-outcomes', name: 'Patient Outcomes Prediction', icon: 'heart' },
      { id: 'pricing-strategy', name: 'Pricing Strategy Optimization', icon: 'tag' }
    ]
  },
  {
    id: 'military',
    name: 'Military',
    tools: [
      { id: 'logistics-planning', name: 'Logistics & Supply Planning', icon: 'package' },
      { id: 'tactical-simulation', name: 'Tactical Simulation', icon: 'target' },
      { id: 'intelligence-analysis', name: 'Intelligence Analysis', icon: 'eye' },
      { id: 'force-deployment', name: 'Force Deployment Optimization', icon: 'map' },
      { id: 'training-simulation', name: 'Training Simulation', icon: 'users' },
      { id: 'cyber-defense', name: 'Cyber Defense Planning', icon: 'shield' },
      { id: 'communication-systems', name: 'Communication Systems', icon: 'radio' },
      { id: 'threat-assessment', name: 'Threat Assessment', icon: 'alert-circle' }
    ]
  },
  {
    id: 'legal-tech',
    name: 'Legal-Tech',
    tools: [
      { id: 'case-analysis', name: 'Case Analysis & Prediction', icon: 'file-text' },
      { id: 'document-review', name: 'Document Review & Analysis', icon: 'search' },
      { id: 'compliance-tracking', name: 'Compliance Tracking', icon: 'check-square' },
      { id: 'contract-management', name: 'Contract Management', icon: 'file' },
      { id: 'legal-research', name: 'Legal Research Optimization', icon: 'book' },
      { id: 'e-discovery', name: 'E-Discovery', icon: 'layers' },
      { id: 'risk-assessment', name: 'Risk Assessment', icon: 'alert-triangle' },
      { id: 'billing-optimization', name: 'Billing & Time Optimization', icon: 'clock' }
    ]
  },
  {
    id: 'sports',
    name: 'Sports',
    tools: [
      { id: 'player-performance', name: 'Player Performance Analysis', icon: 'activity' },
      { id: 'game-strategy', name: 'Game Strategy Simulation', icon: 'target' },
      { id: 'injury-prediction', name: 'Injury Prediction & Prevention', icon: 'heart' },
      { id: 'talent-scouting', name: 'Talent Scouting Optimization', icon: 'search' },
      { id: 'team-composition', name: 'Team Composition Analysis', icon: 'users' },
      { id: 'training-plans', name: 'Training Plans Optimization', icon: 'trending-up' },
      { id: 'fan-engagement', name: 'Fan Engagement Analytics', icon: 'message-circle' },
      { id: 'event-operations', name: 'Event Operations', icon: 'calendar' }
    ]
  },
  {
    id: 'federal-government',
    name: 'Federal Government',
    tools: [
      { id: 'policy-modeling', name: 'Policy Modeling & Simulation', icon: 'file-text' },
      { id: 'resource-allocation', name: 'Resource Allocation', icon: 'pie-chart' },
      { id: 'economic-forecasting', name: 'Economic Forecasting', icon: 'trending-up' },
      { id: 'defense-planning', name: 'Defense Planning', icon: 'shield' },
      { id: 'emergency-management', name: 'Emergency Management', icon: 'alert-triangle' },
      { id: 'social-programs', name: 'Social Programs Analysis', icon: 'users' },
      { id: 'healthcare-systems', name: 'Healthcare Systems', icon: 'activity' },
      { id: 'regulatory-impact', name: 'Regulatory Impact Analysis', icon: 'check-square' }
    ]
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    tools: [
      { id: 'production-simulation', name: 'Production Line Simulation', icon: 'settings' },
      { id: 'quality-control', name: 'Quality Control Optimization', icon: 'check-circle' },
      { id: 'supply-chain', name: 'Supply Chain Optimization', icon: 'truck' },
      { id: 'inventory-management', name: 'Inventory Management', icon: 'package' },
      { id: 'equipment-maintenance', name: 'Equipment Maintenance', icon: 'tool' },
      { id: 'factory-layout', name: 'Factory Layout Optimization', icon: 'grid' },
      { id: 'workforce-planning', name: 'Workforce Planning', icon: 'users' },
      { id: 'process-optimization', name: 'Process Optimization', icon: 'zap' }
    ]
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    tools: [
      { id: 'patient-outcome', name: 'Patient Outcome Prediction', icon: 'activity' },
      { id: 'resource-allocation', name: 'Resource Allocation', icon: 'pie-chart' },
      { id: 'clinical-trials', name: 'Clinical Trial Simulation', icon: 'clipboard' },
      { id: 'diagnostic-assistance', name: 'Diagnostic Assistance', icon: 'search' },
      { id: 'staff-scheduling', name: 'Staff Scheduling', icon: 'calendar' },
      { id: 'epidemic-modeling', name: 'Epidemic Modeling', icon: 'trending-up' },
      { id: 'drug-interaction', name: 'Drug Interaction Analysis', icon: 'alert-triangle' },
      { id: 'cost-optimization', name: 'Cost Optimization', icon: 'dollar-sign' }
    ]
  }
];

// Helper function to get a domain by ID
export function getDomainById(id: string): Domain | undefined {
  return domains.find(domain => domain.id === id);
}

// Helper function to get a domain by name
export function getDomainByName(name: string): Domain | undefined {
  return domains.find(domain => domain.name === name);
}

// Helper function to get tools for a domain
export function getToolsForDomain(domainId: string): DomainTool[] {
  const domain = getDomainById(domainId);
  return domain ? domain.tools : [];
}

// Helper function to convert domain name to ID format
export function getDomainIdFromName(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-');
}