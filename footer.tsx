import { FC } from "react";

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-lightest py-6 border-t border-neutral-light mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-sm font-semibold mb-3">DeepTrain Simulation Platform</h3>
            <p className="text-xs text-neutral-medium">Advanced generative-simulation for industry.</p>
            <p className="text-xs text-neutral-medium mt-2">© {currentYear} ai70000, Ltd. All rights reserved.</p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-3">Resources</h3>
            <ul className="text-xs space-y-2">
              <li><a href="#" className="text-secondary hover:text-secondary-dark">Documentation</a></li>
              <li><a href="#" className="text-secondary hover:text-secondary-dark">API Reference</a></li>
              <li><a href="#" className="text-secondary hover:text-secondary-dark">Model Library</a></li>
              <li><a href="#" className="text-secondary hover:text-secondary-dark">Release Notes</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-3">Support</h3>
            <ul className="text-xs space-y-2">
              <li><a href="#" className="text-secondary hover:text-secondary-dark">Help Center</a></li>
              <li><a href="#" className="text-secondary hover:text-secondary-dark">Contact Support</a></li>
              <li><a href="#" className="text-secondary hover:text-secondary-dark">Training & Certification</a></li>
              <li><a href="#" className="text-secondary hover:text-secondary-dark">Status Page</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
