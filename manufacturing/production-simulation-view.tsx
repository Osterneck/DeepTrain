import { FC } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area
} from "recharts";

interface ProductionSimulationViewProps {
  isLoading: boolean;
}

const ProductionSimulationView: FC<ProductionSimulationViewProps> = ({ isLoading }) => {
  // Mock data for production metrics
  const productionMetrics = [
    {
      name: "Production Efficiency",
      value: "85.4%",
      change: "+3.2%",
      changeType: "positive",
      description: "Output vs capacity",
    },
    {
      name: "Downtime",
      value: "4.2%",
      change: "-1.8%",
      changeType: "positive",
      description: "Unscheduled stops",
    },
    {
      name: "Cycle Time",
      value: "28.5 min",
      change: "-2.1 min",
      changeType: "positive",
      description: "Avg. production cycle",
    },
    {
      name: "First Pass Yield",
      value: "92.8%",
      change: "+1.5%",
      changeType: "positive",
      description: "Quality at first pass",
    },
  ];

  // Mock data for production types
  const productionTypesData = [
    { name: "Assembly", value: 35 },
    { name: "Machining", value: 25 },
    { name: "Fabrication", value: 20 },
    { name: "Packaging", value: 12 },
    { name: "Testing", value: 8 },
  ];

  // Color palette for charts
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  // Mock data for production throughput over time
  const throughputData = [
    { day: "Monday", actual: 845, target: 850 },
    { day: "Tuesday", actual: 872, target: 850 },
    { day: "Wednesday", actual: 863, target: 850 },
    { day: "Thursday", actual: 882, target: 850 },
    { day: "Friday", actual: 895, target: 850 },
    { day: "Saturday", actual: 822, target: 850 },
    { day: "Sunday", actual: 815, target: 850 },
  ];

  // Mock data for work in progress
  const wipData = [
    { time: "08:00", assembly: 45, machining: 32, fabrication: 28 },
    { time: "10:00", assembly: 50, machining: 35, fabrication: 30 },
    { time: "12:00", assembly: 48, machining: 30, fabrication: 32 },
    { time: "14:00", assembly: 52, machining: 38, fabrication: 35 },
    { time: "16:00", assembly: 55, machining: 42, fabrication: 38 },
    { time: "18:00", assembly: 48, machining: 38, fabrication: 30 },
    { time: "20:00", assembly: 42, machining: 30, fabrication: 25 },
  ];

  // Mock data for defect rates by station
  const defectRateData = [
    { station: "Assembly Station 1", rate: 3.2 },
    { station: "Assembly Station 2", rate: 2.8 },
    { station: "Machining Center A", rate: 4.5 },
    { station: "Machining Center B", rate: 3.7 },
    { station: "Fabrication Bay", rate: 5.2 },
    { station: "Packaging Line", rate: 2.5 },
    { station: "Testing Station", rate: 1.8 },
  ];

  // Mock data for production line status
  const productionLines = [
    {
      id: "LINE-2025-001",
      name: "Main Assembly Line",
      status: "Running",
      efficiency: "87.5%",
      currentOutput: "42 units/hr",
      targetOutput: "45 units/hr",
      staffed: "18/20",
      nextMaintenance: "2025-05-25",
      downtime: "3.8%",
      bottleneck: "Station 3 - Final Assembly",
      qualityMetric: "93.2% First Pass Yield",
    },
    {
      id: "LINE-2025-002",
      name: "Machining Center",
      status: "Running",
      efficiency: "92.3%",
      currentOutput: "68 parts/hr",
      targetOutput: "70 parts/hr",
      staffed: "8/8",
      nextMaintenance: "2025-05-28",
      downtime: "2.1%",
      bottleneck: "None",
      qualityMetric: "95.8% First Pass Yield",
    },
    {
      id: "LINE-2025-003",
      name: "Fabrication Line",
      status: "Maintenance",
      efficiency: "0%",
      currentOutput: "0 units/hr",
      targetOutput: "55 units/hr",
      staffed: "4/12",
      nextMaintenance: "In Progress",
      downtime: "100%",
      bottleneck: "N/A - Maintenance",
      qualityMetric: "N/A",
    },
    {
      id: "LINE-2025-004",
      name: "Packaging Line A",
      status: "Running",
      efficiency: "84.2%",
      currentOutput: "120 units/hr",
      targetOutput: "140 units/hr",
      staffed: "12/15",
      nextMaintenance: "2025-06-05",
      downtime: "6.5%",
      bottleneck: "Station 2 - Box Forming",
      qualityMetric: "96.5% First Pass Yield",
    },
    {
      id: "LINE-2025-005",
      name: "Testing & Quality Control",
      status: "Running",
      efficiency: "91.8%",
      currentOutput: "175 tests/hr",
      targetOutput: "180 tests/hr",
      staffed: "10/10",
      nextMaintenance: "2025-06-10",
      downtime: "1.2%",
      bottleneck: "None",
      qualityMetric: "99.2% First Pass Yield",
    },
  ];

  // Mock data for production simulations
  const productionSimulations = [
    {
      id: "SIM-2025-142",
      name: "Line A Throughput Optimization",
      objective: "Increase throughput by 15%",
      parameters: "Staffing +2, Speed +10%, Buffer +30%",
      result: "12.8% throughput increase, 1.2% quality decrease",
      recommendation: "Implement staffing and speed increase, maintain current buffer",
      roi: "Estimated $245K annual savings",
      implementationStatus: "Approved",
      runDate: "2025-05-10",
      configuredBy: "J. Martinez",
    },
    {
      id: "SIM-2025-156",
      name: "Quality Improvement - Station 4",
      objective: "Reduce defect rate by 25%",
      parameters: "Add inspection step, Slow speed by 5%, Add rework loop",
      result: "32.5% defect reduction, 3.8% throughput decrease",
      recommendation: "Implement inspection step and rework loop only",
      roi: "Estimated $320K annual savings in reduced rework",
      implementationStatus: "In Review",
      runDate: "2025-05-12",
      configuredBy: "A. Johnson",
    },
    {
      id: "SIM-2025-163",
      name: "Layout Optimization - Assembly",
      objective: "Reduce movement waste by 30%",
      parameters: "Relocate storage, Reorder stations, Add conveyor",
      result: "27.5% movement reduction, 8.2% throughput increase",
      recommendation: "Implement all changes during scheduled downtime",
      roi: "Estimated $175K annual savings",
      implementationStatus: "Planned",
      runDate: "2025-05-15",
      configuredBy: "S. Lee",
    },
    {
      id: "SIM-2025-175",
      name: "Capacity Planning - Q3 Demand",
      objective: "Meet 25% demand increase",
      parameters: "Overtime model, Weekend shift, Inventory buffer",
      result: "Can meet demand with 15% overtime and weekend shifts",
      recommendation: "Implement overtime model, begin hiring for permanent expansion",
      roi: "Prevents estimated $1.2M in lost sales",
      implementationStatus: "Approved",
      runDate: "2025-05-16",
      configuredBy: "T. Wilson",
    },
    {
      id: "SIM-2025-182",
      name: "Automation - Packaging Line",
      objective: "Reduce labor requirements by 40%",
      parameters: "Add robots at stations 2 & 4, Redesign flow, Add vision system",
      result: "32.5% labor reduction, 15.8% throughput increase, 5.2% quality increase",
      recommendation: "Implement full automation package",
      roi: "Estimated $850K annual savings, 18-month payback",
      implementationStatus: "In Review",
      runDate: "2025-05-18",
      configuredBy: "M. Chang",
    },
  ];

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Running': return 'bg-green-100 text-green-800';
      case 'Maintenance': return 'bg-amber-100 text-amber-800';
      case 'Offline': return 'bg-red-100 text-red-800';
      case 'Setup': return 'bg-blue-100 text-blue-800';
      case 'Standby': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getImplementationStatusClass = (status: string) => {
    switch (status) {
      case 'Approved': return 'bg-green-100 text-green-800';
      case 'In Review': return 'bg-amber-100 text-amber-800';
      case 'Planned': return 'bg-blue-100 text-blue-800';
      case 'Rejected': return 'bg-red-100 text-red-800';
      case 'Implemented': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        {/* Production Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {productionMetrics.map((metric, index) => (
            <Card key={index} className="border border-neutral-light">
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-1">{metric.name}</h3>
                <div className="flex items-end space-x-2">
                  <div className="text-2xl font-bold">{metric.value}</div>
                  <div className={`text-sm ${
                    metric.changeType === 'positive' 
                      ? 'text-success' 
                      : metric.changeType === 'negative' 
                        ? 'text-danger' 
                        : 'text-neutral-dark'
                  }`}>
                    {metric.change}
                  </div>
                </div>
                <p className="text-xs text-neutral-medium mt-2">{metric.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Production Types Pie Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Production by Type</h2>
            </div>
            
            {isLoading ? (
              <div className="chart-placeholder">
                <Skeleton className="h-80 w-full" />
              </div>
            ) : (
              <div className="p-4">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={productionTypesData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {productionTypesData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${value}%`} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </Card>

          {/* Defect Rate by Station Bar Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Defect Rate by Station (%)</h2>
            </div>
            
            {isLoading ? (
              <div className="chart-placeholder">
                <Skeleton className="h-80 w-full" />
              </div>
            ) : (
              <div className="p-4">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={defectRateData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      layout="vertical"
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" domain={[0, 6]} />
                      <YAxis type="category" dataKey="station" width={150} />
                      <Tooltip formatter={(value) => `${value}%`} />
                      <Legend />
                      <Bar 
                        dataKey="rate" 
                        name="Defect Rate" 
                        fill="#FF8042" 
                        barSize={20}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* Production Throughput Line Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Daily Production Throughput</h2>
          </div>
          
          {isLoading ? (
            <div className="chart-placeholder">
              <Skeleton className="h-80 w-full" />
            </div>
          ) : (
            <div className="p-4">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={throughputData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis domain={[800, 900]} />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="actual" 
                      name="Actual Units" 
                      stroke="#8884d8" 
                      activeDot={{ r: 8 }} 
                      strokeWidth={2}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="target" 
                      name="Target Units" 
                      stroke="#82ca9d" 
                      strokeDasharray="5 5"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Work In Progress Area Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Work In Progress by Department</h2>
          </div>
          
          {isLoading ? (
            <div className="chart-placeholder">
              <Skeleton className="h-80 w-full" />
            </div>
          ) : (
            <div className="p-4">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={wipData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area 
                      type="monotone" 
                      dataKey="assembly" 
                      name="Assembly" 
                      stackId="1"
                      stroke="#8884d8" 
                      fill="#8884d8" 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="machining" 
                      name="Machining" 
                      stackId="1"
                      stroke="#82ca9d" 
                      fill="#82ca9d" 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="fabrication" 
                      name="Fabrication" 
                      stackId="1"
                      stroke="#ffc658" 
                      fill="#ffc658" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Production Lines Table */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Production Line Status</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Line Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Efficiency</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Current Output</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Target Output</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Staffed</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Next Maintenance</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Downtime</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Bottleneck</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Quality Metric</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-40" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                    </tr>
                  ))
                ) : (
                  productionLines.map((line, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{line.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{line.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(line.status)}`}>
                          {line.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{line.efficiency}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{line.currentOutput}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{line.targetOutput}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{line.staffed}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{line.nextMaintenance}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{line.downtime}</td>
                      <td className="px-6 py-4 text-sm">{line.bottleneck}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{line.qualityMetric}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Production Simulations Table */}
        <Card className="border border-neutral-light overflow-hidden">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Production Simulations</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Simulation</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Objective</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Parameters</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Result</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Recommendation</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">ROI</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Run Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Configured By</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-40" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-40" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-40" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-48" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                    </tr>
                  ))
                ) : (
                  productionSimulations.map((simulation, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{simulation.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{simulation.name}</td>
                      <td className="px-6 py-4 text-sm">{simulation.objective}</td>
                      <td className="px-6 py-4 text-sm">{simulation.parameters}</td>
                      <td className="px-6 py-4 text-sm">{simulation.result}</td>
                      <td className="px-6 py-4 text-sm">{simulation.recommendation}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{simulation.roi}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getImplementationStatusClass(simulation.implementationStatus)}`}>
                          {simulation.implementationStatus}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{simulation.runDate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{simulation.configuredBy}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProductionSimulationView;