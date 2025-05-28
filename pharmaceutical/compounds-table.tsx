import { FC } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface CompoundsTableProps {
  isLoading: boolean;
}

const CompoundsTable: FC<CompoundsTableProps> = ({ isLoading }) => {
  // Mock data for compounds
  const compounds = [
    {
      id: "XDR-24589",
      name: "Avastoronib",
      stage: "Phase III",
      indication: "Non-Small Cell Lung Cancer",
      mechanism: "EGFR Inhibitor",
      success: "72%",
      timeToMarket: "18 months",
      value: "$1.8B",
    },
    {
      id: "ZNT-42187",
      name: "Nexotinol",
      stage: "Phase II",
      indication: "Rheumatoid Arthritis",
      mechanism: "IL-6 Inhibitor",
      success: "45%",
      timeToMarket: "32 months",
      value: "$950M",
    },
    {
      id: "CRV-35219",
      name: "Luminavir",
      stage: "Phase I",
      indication: "Alzheimer's Disease",
      mechanism: "Tau Protein Aggregation Inhibitor",
      success: "23%",
      timeToMarket: "48 months",
      value: "$3.2B",
    },
    {
      id: "PTL-12587",
      name: "Cardiostat",
      stage: "Phase II",
      indication: "Heart Failure",
      mechanism: "SGLT2 Inhibitor",
      success: "56%",
      timeToMarket: "28 months",
      value: "$1.3B",
    },
    {
      id: "MND-63025",
      name: "Immunorilide",
      stage: "Phase I",
      indication: "Multiple Sclerosis",
      mechanism: "B-Cell Depleting Agent",
      success: "31%",
      timeToMarket: "52 months",
      value: "$785M",
    },
  ];

  const getStageClass = (stage: string) => {
    switch (stage) {
      case 'Phase I': return 'bg-blue-100 text-blue-800';
      case 'Phase II': return 'bg-purple-100 text-purple-800';
      case 'Phase III': return 'bg-green-100 text-green-800';
      case 'FDA Review': return 'bg-amber-100 text-amber-800';
      case 'Approved': return 'bg-teal-100 text-teal-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-neutral-light">
        <thead className="bg-neutral-lightest">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Compound</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Stage</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Indication</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Mechanism</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Success Prob.</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Time to Market</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Projected Value</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-neutral-light">
          {isLoading ? (
            [...Array(5)].map((_, i) => (
              <tr key={i}>
                <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                <td className="px-6 py-4"><Skeleton className="h-4 w-28" /></td>
                <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                <td className="px-6 py-4"><Skeleton className="h-4 w-40" /></td>
                <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
              </tr>
            ))
          ) : (
            compounds.map((compound, index) => (
              <tr key={index} className="hover:bg-neutral-lightest">
                <td className="px-6 py-4 whitespace-nowrap text-sm">{compound.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{compound.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStageClass(compound.stage)}`}>
                    {compound.stage}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">{compound.indication}</td>
                <td className="px-6 py-4 text-sm">{compound.mechanism}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{compound.success}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{compound.timeToMarket}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold">{compound.value}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CompoundsTable;