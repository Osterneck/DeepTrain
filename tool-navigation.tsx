import { FC } from "react";
import { cn } from "@/lib/utils";

interface ToolType {
  id: string;
  name: string;
  icon: string;
}

interface ToolNavigationProps {
  activeTool: string;
  setActiveTool: (tool: string) => void;
  tools: ToolType[];
}

const ToolNavigation: FC<ToolNavigationProps> = ({
  activeTool,
  setActiveTool,
  tools
}) => {
  // Function to render icon based on tool.icon string
  const renderIcon = (iconName: string) => {
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
      case "robot":
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
            <rect width="18" height="10" x="3" y="11" rx="2" />
            <circle cx="12" cy="5" r="2" />
            <path d="M12 7v4" />
            <line x1="8" x2="8" y1="16" y2="16" />
            <line x1="16" x2="16" y1="16" y2="16" />
          </svg>
        );
      case "shield":
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
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
          </svg>
        );
      case "search-dollar":
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
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
            <path d="M11 8v6" />
            <path d="M8 11h6" />
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
      case "file-invoice":
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
            <rect width="16" height="18" x="4" y="3" rx="2" />
            <path d="M8 7h8" />
            <path d="M8 11h8" />
            <path d="M8 15h2" />
          </svg>
        );
      case "handshake":
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
            <path d="M22 17H2a3 3 0 0 0 3-3V9a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v1" />
            <path d="M17 17v1a3 3 0 0 1-3 3h-2" />
            <path d="M18 13h.01" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <nav className="bg-white border-b border-neutral-light">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto hide-scrollbar">
          {tools.map((tool) => (
            <a
              key={tool.id}
              href="#"
              className={cn(
                "tool-tab flex items-center whitespace-nowrap px-4 py-3 text-sm font-medium hover:text-primary transition-colors duration-150 ease-in-out border-b-3",
                activeTool === tool.name && "active"
              )}
              onClick={(e) => {
                e.preventDefault();
                setActiveTool(tool.name);
              }}
            >
              {renderIcon(tool.icon)}
              {tool.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default ToolNavigation;
