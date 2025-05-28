import { FC } from 'react';
import { Button } from "@/components/ui/button";
import financeIconPath from "@assets/FINANCE.png";
import itProjectIconPath from "@assets/IT-Project-Mgt.png";
import oilGasIconPath from "@assets/OIL-_-GAS-051925-Document1_1.png";
import stateGovIconPath from "@assets/State-Gov.png";

interface LandingScreenProps {
  onDomainSelect: (domainId: string, domainName: string) => void;
}

const LandingScreen: FC<LandingScreenProps> = ({ onDomainSelect }) => {
  // Domain cards data
  const domains = [
    { id: 'oil-gas', name: 'Oil & Gas', icon: oilGasIconPath, description: 'Reservoir modeling, drilling optimization, and production forecasting tools' },
    { id: 'finance', name: 'Finance', icon: financeIconPath, description: 'Portfolio optimization, algorithmic trading, and risk management' },
    { id: 'it-project-management', name: 'IT Project Management', icon: itProjectIconPath, description: 'Project scheduling, resource allocation, and team management' },
    { id: 'state-government', name: 'State Government', icon: stateGovIconPath, description: 'Public health, transportation planning, and emergency management' },
    { id: 'pharmaceutical', name: 'Pharmaceutical', icon: null, description: 'Drug discovery, clinical trials, and manufacturing optimization' },
    { id: 'healthcare', name: 'Healthcare', icon: null, description: 'Patient care, medical diagnostics, and hospital resource management' },
    { id: 'military', name: 'Military', icon: null, description: 'Combat simulation, tactical decision support, and supply chain optimization' },
    { id: 'federal-government', name: 'Federal Government', icon: null, description: 'Policy simulation, emergency response, and financial forecasting' },
    { id: 'legal-tech', name: 'Legal Tech', icon: null, description: 'Contract analysis, case management, and legal document generation' },
    { id: 'sports', name: 'Sports', icon: null, description: 'Performance analytics, training optimization, and game strategy' },
    { id: 'manufacturing', name: 'Manufacturing', icon: null, description: 'Production simulation, quality control, supply chain optimization, and factory operations' }
  ];

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">
      {/* Header with logo */}
      <header className="bg-primary text-white shadow-md py-3">
        <div className="container mx-auto px-4 flex items-center">
          <div className="flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 mr-2"
            >
              <path d="M2 12h5" />
              <path d="M17 12h5" />
              <path d="M7 12a5 5 0 0 1 5-5" />
              <path d="M17 12a5 5 0 0 0-5-5" />
              <path d="M7 12a5 5 0 0 0 5 5" />
              <path d="M17 12a5 5 0 0 1-5 5" />
            </svg>
            <span>team-d DeepTrain</span>
          </div>
          
          <div className="ml-auto flex items-center">
            <div className="bg-neutral-lightest text-primary w-8 h-8 rounded-full flex items-center justify-center">
              <span className="font-medium text-sm">AI</span>
            </div>
            <span className="ml-2 text-sm text-white">pre-prototype / ai70000</span>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Welcome to DeepTrain</h1>
          <p className="text-lg text-gray-700">Select domain to access newest 2026 generative-simulation models</p>
        </div>

        {/* Domain grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {domains.map((domain) => (
            <div 
              key={domain.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer border border-gray-200"
              onClick={() => onDomainSelect(domain.id, domain.name)}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {domain.icon ? (
                    <div className="w-12 h-12 mr-4">
                      <img 
                        src={domain.icon} 
                        alt={domain.name} 
                        className="w-full h-full object-contain" 
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <span className="text-primary font-bold">{domain.name.charAt(0)}</span>
                    </div>
                  )}
                  <h2 className="text-xl font-semibold">{domain.name}</h2>
                </div>
                <p className="text-gray-600 text-sm mb-4">{domain.description}</p>
                <Button 
                  className="w-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    onDomainSelect(domain.id, domain.name);
                  }}
                >
                  Select Domain
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Simple footer */}
      <footer className="bg-neutral-lightest py-4 border-t border-neutral-light">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs text-neutral-medium">© {new Date().getFullYear()} ai70000, Ltd. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingScreen;