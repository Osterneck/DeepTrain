import Header from "@/components/header";
import Footer from "@/components/footer";
import DomainWrapper from "@/components/domain-wrapper";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { domains, getDomainByName, getDomainById } from "@/data/domains";

// Import domain home pages
import FinanceHome from "@/components/domain-home/finance-home";
import OilGasHome from "@/components/domain-home/oil-gas-home";
import ITProjectHome from "@/components/domain-home/it-project-home";
import StateGovernmentHome from "@/components/domain-home/state-government-home";
import MilitaryHome from "@/components/domain-home/military-home";
import HealthcareHome from "@/components/domain-home/healthcare-home";
import SportsHome from "@/components/domain-home/sports-home";
import PharmaceuticalHome from "@/components/domain-home/pharmaceutical-home";
import LegalTechHome from "@/components/domain-home/legal-tech-home";
import ManufacturingHome from "@/components/domain-home/manufacturing-home";

interface HomeProps {
  initialDomain: { id: string; name: string } | null;
}

export default function Home({ initialDomain = null }: HomeProps) {
  // State for active domain and tool
  const [activeDomainName, setActiveDomainName] = useState(initialDomain?.name || "Oil & Gas");
  const [activeDomain, setActiveDomain] = useState(initialDomain ? 
    getDomainById(initialDomain.id) : getDomainByName("Oil & Gas"));
  const [activeToolId, setActiveToolId] = useState(""); 
  const [activeTool, setActiveTool] = useState<any>(null);
  const [showDomainHome, setShowDomainHome] = useState(true);
  
  // Initialize with the initial domain if provided
  useEffect(() => {
    if (initialDomain) {
      const domain = getDomainById(initialDomain.id);
      if (domain) {
        setActiveDomain(domain);
        setActiveDomainName(domain.name);
        // Show domain home page initially
        setActiveToolId("");
        setActiveTool(null);
        setShowDomainHome(true);
      }
    }
  }, [initialDomain]);
  
  // Fixed domain name map to ensure consistency
  const domainNameMap: Record<string, string> = {
    'Oil & Gas': 'oil-gas',
    'Finance': 'finance',
    'IT Project Management': 'it-project-management',
    'IT-Project-Management': 'it-project-management',
    'State Government': 'state-government',
    'State-Government': 'state-government',
    'Pharmaceutical': 'pharmaceutical',
    'Military': 'military',
    'Legal Tech': 'legal-tech',
    'Legal-Tech': 'legal-tech',
    'Sports': 'sports',
    'Federal Government': 'federal-government',
    'Federal-Government': 'federal-government',
    'Manufacturing': 'manufacturing',
    'Healthcare': 'healthcare'
  };

  // When the domain name changes, show the corresponding domain home page
  useEffect(() => {
    console.log("Domain name changed to:", activeDomainName);
    
    // Step 1: Try direct lookup from name map
    let domainId = domainNameMap[activeDomainName];
    
    // Step 2: If not found, try normalized name (remove hyphens, case insensitive)
    if (!domainId) {
      const normalizedName = activeDomainName.toLowerCase().replace(/[-\s]+/g, ' ');
      const matchingKey = Object.keys(domainNameMap).find(key => 
        key.toLowerCase().replace(/[-\s]+/g, ' ') === normalizedName
      );
      
      if (matchingKey) {
        domainId = domainNameMap[matchingKey];
      }
    }
    
    // Step 3: Find domain by ID
    const domain = domains.find(d => d.id === domainId);
    
    if (domain) {
      console.log("Domain found:", domain.id);
      
      // Update the active domain state
      setActiveDomain(domain);
      
      // Reset tool selection
      setActiveToolId("");
      setActiveTool(null);
      
      // Always show domain home page when domain changes
      setShowDomainHome(true);
    } else {
      console.log("Domain not found for name:", activeDomainName);
      console.log("Available domains:", domains.map(d => ({id: d.id, name: d.name})));
    }
  }, [activeDomainName]);
  
  // Update active tool object when ID changes
  useEffect(() => {
    if (activeDomain) {
      const tool = activeDomain.tools.find(t => t.id === activeToolId);
      if (tool) {
        setActiveTool(tool);
      }
    }
  }, [activeToolId, activeDomain]);
  
  // Handle tool selection
  const handleToolSelect = (toolId: string) => {
    console.log("Tool selected:", toolId);
    setActiveToolId(toolId);
    setShowDomainHome(false);
  };

  // Load domain data based on active domain
  const getQueryEndpoint = () => {
    switch (activeDomain?.id) {
      case 'oil-gas':
        return '/api/reservoirs';
      case 'it-project-management':
        return '/api/projects';
      case 'state-government':
        return '/api/public-health';
      default:
        return '/api/domain-data';
    }
  };

  const { data, isLoading } = useQuery({
    queryKey: [getQueryEndpoint()],
    enabled: !!activeDomain,
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        activeIndustry={activeDomainName}
        setActiveIndustry={setActiveDomainName}
        industries={domains.map(d => ({ id: d.id, name: d.name }))}
        activeTool={activeTool?.name || ""}
        setActiveTool={handleToolSelect}
      />
      
      {/* Domain content area */}
      {activeDomain && (
        <>
          {/* Show domain home page when first selecting a domain */}
          {showDomainHome && (
            <>
              {/* Render domain home page based on domain name rather than ID */}
              {(() => {
                // Use a switch statement to handle all domain cases
                switch (activeDomain.id) {
                  case 'finance':
                    return <FinanceHome tools={activeDomain.tools} setActiveTool={handleToolSelect} />;
                  case 'oil-gas':
                    return <OilGasHome tools={activeDomain.tools} setActiveTool={handleToolSelect} />;
                  case 'it-project-management':
                    return <ITProjectHome tools={activeDomain.tools} setActiveTool={handleToolSelect} />;
                  case 'state-government':
                    return <StateGovernmentHome tools={activeDomain.tools} setActiveTool={handleToolSelect} />;
                  case 'military':
                    return <MilitaryHome tools={activeDomain.tools} setActiveTool={handleToolSelect} />;
                  case 'healthcare':
                    return <HealthcareHome tools={activeDomain.tools} setActiveTool={handleToolSelect} />;
                  case 'sports':
                    return <SportsHome tools={activeDomain.tools} setActiveTool={handleToolSelect} />;
                  case 'pharmaceutical':
                    return <PharmaceuticalHome tools={activeDomain.tools} setActiveTool={handleToolSelect} />;
                  case 'legal-tech':
                    return <LegalTechHome tools={activeDomain.tools} setActiveTool={handleToolSelect} />;
                  case 'manufacturing':
                    return <ManufacturingHome tools={activeDomain.tools} setActiveTool={handleToolSelect} />;
                  case 'federal-government':
                    return <div className="bg-primary p-8 rounded-lg text-white">
                      <h2 className="text-2xl font-bold mb-6">Federal Government Simulation Tools</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {activeDomain.tools.map(tool => (
                          <div 
                            key={tool.id}
                            className="bg-primary-dark p-4 rounded-lg cursor-pointer hover:bg-blue-800 transition-colors"
                            onClick={() => handleToolSelect(tool)}
                          >
                            <h3 className="font-semibold mb-2">{tool.name}</h3>
                            <p className="text-sm text-gray-200">Advanced simulation for federal policy and operations</p>
                          </div>
                        ))}
                      </div>
                    </div>;
                  default:
                    return <OilGasHome tools={activeDomain.tools} setActiveTool={handleToolSelect} />;
                }
              })()}
            </>
          )}
          
          {/* Show specific tool when selected */}
          {!showDomainHome && activeTool && (
            <DomainWrapper
              activeDomain={activeDomain}
              activeTool={activeTool}
              setActiveTool={handleToolSelect}
              isLoading={isLoading}
            />
          )}
        </>
      )}
      
      <Footer />
    </div>
  );
}
