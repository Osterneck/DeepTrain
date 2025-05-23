import { cn } from "@/lib/utils";
import { FC, useState, useRef, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import financeIconPath from "@assets/FINANCE.png";
import itProjectIconPath from "@assets/IT-Project-Mgt.png";
import oilGasIconPath from "@assets/OIL-_-GAS-051925-Document1_1.png";
import stateGovIconPath from "@assets/State-Gov.png";
import { getDomainById, getToolsForDomain } from "@/data/domains";

interface IndustryType {
  name: string;
  id: string;
}

interface IndustryToolType {
  id: string;
  name: string;
  icon: string;
  industryId: string;
}

interface HeaderProps {
  activeIndustry: string;
  setActiveIndustry: (industry: string) => void;
  industries: IndustryType[];
  activeTool: string;
  setActiveTool: (tool: string) => void;
}

const Header: FC<HeaderProps> = ({ 
  activeIndustry, 
  setActiveIndustry,
  industries,
  activeTool,
  setActiveTool
}) => {
  const [industryTools, setIndustryTools] = useState<{[key: string]: IndustryToolType[]}>({});
  const menuRef = useRef<HTMLDivElement>(null);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  // Load tools for each industry using domains.ts data
  useEffect(() => {
    // Prepare tools for each industry
    const tools: {[key: string]: IndustryToolType[]} = {};
    
    industries.forEach(industry => {
      const domain = getDomainById(industry.id);
      if (domain) {
        const domainTools = getToolsForDomain(industry.id);
        tools[industry.id] = domainTools.map(tool => ({
          id: tool.id,
          name: tool.name,
          icon: tool.icon,
          industryId: industry.id
        }));
      } else {
        // Fallback tools if domain not found
        tools[industry.id] = Array(8).fill(null).map((_, i) => ({
          id: `tool-${i+1}`,
          name: `Tool ${i+1}`,
          icon: 'activity',
          industryId: industry.id
        }));
      }
    });
    
    setIndustryTools(tools);
    
    // Set a default tool for the active industry if we're just loading
    if (activeIndustry && !activeTool) {
      const activeDomainTools = getDomainById(activeIndustry)?.tools;
      if (activeDomainTools && activeDomainTools.length > 0) {
        setActiveTool(activeDomainTools[0].id);
      }
    }
  }, [industries, activeIndustry, activeTool]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenuId(null);
      }
    };
    
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const getIconPath = (industryId: string): string | undefined => {
    switch(industryId) {
      case 'finance':
        return financeIconPath;
      case 'it-project-management':
        return itProjectIconPath;
      case 'oil-gas':
        return oilGasIconPath;
      case 'state-government':
        return stateGovIconPath;
      default:
        return undefined;
    }
  };

  return (
    <header className="bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center">
            <h1 className="text-xl font-bold mr-4">DeepTrain</h1>
            <div className="hidden md:flex" ref={menuRef}>
              {industries.map((industry) => (
                <div key={industry.id} className="relative mx-2">
                  <DropdownMenu
                    open={openMenuId === industry.id}
                    onOpenChange={(isOpen) => {
                      if (isOpen) {
                        setOpenMenuId(industry.id);
                      } else {
                        setOpenMenuId(null);
                      }
                    }}
                  >
                    <DropdownMenuTrigger 
                      className={cn(
                        "px-3 py-2 rounded-md flex items-center",
                        activeIndustry === industry.id ? "bg-primary-dark" : "hover:bg-primary-dark"
                      )}
                      onClick={() => {
                        // Log which industry is being clicked to help debug
                        console.log(`Clicked on industry: ${industry.id} - ${industry.name}`);
                        
                        // Set the active industry
                        setActiveIndustry(industry.id);
                        
                        // For Federal Government, make sure we use the exact domain ID
                        if (industry.id === 'federal-government') {
                          console.log("Federal Government selected specifically");
                        }
                        
                        // Set a default tool when changing industries
                        const tools = industryTools[industry.id];
                        if (tools && tools.length > 0) {
                          setActiveTool(tools[0].id);
                        }
                      }}
                    >
                      {getIconPath(industry.id) ? (
                        <img 
                          src={getIconPath(industry.id)} 
                          alt={industry.name} 
                          className="w-6 h-6 mr-2" 
                        />
                      ) : null}
                      {industry.name}
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent 
                      className="w-64"
                      align="start"
                    >
                      {industryTools[industry.id]?.map((tool) => (
                        <DropdownMenuItem
                          key={tool.id}
                          className={cn(
                            "cursor-pointer text-primary p-3 flex items-center",
                            activeTool === tool.id && "bg-primary/10"
                          )}
                          onClick={() => {
                            console.log("Tool selected:", tool.id);
                            setActiveTool(tool.id);
                            setOpenMenuId(null);
                          }}
                        >
                          <span>{tool.name}</span>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;