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
  Area,
  ScatterChart,
  Scatter,
  ZAxis
} from "recharts";

interface TacticalSimulationViewProps {
  isLoading: boolean;
}

const TacticalSimulationView: FC<TacticalSimulationViewProps> = ({ isLoading }) => {
  // Mock data for simulation metrics
  const simulationMetrics = [
    {
      name: "Mission Success",
      value: "84.7%",
      change: "+2.3%",
      changeType: "positive",
      description: "Projected success rate",
    },
    {
      name: "Force Efficiency",
      value: "78.5%",
      change: "+1.8%",
      changeType: "positive",
      description: "Optimal resource use",
    },
    {
      name: "Time to Objective",
      value: "45 min",
      change: "-6 min",
      changeType: "positive",
      description: "Average completion time",
    },
    {
      name: "Casualty Rate",
      value: "2.1%",
      change: "-0.5%",
      changeType: "positive",
      description: "Projected friendly losses",
    },
  ];

  // Mock data for scenario outcomes
  const scenarioOutcomesData = [
    { name: "Success", value: 68 },
    { name: "Partial Success", value: 18 },
    { name: "Neutral", value: 8 },
    { name: "Failure", value: 6 },
  ];

  // Color palette for charts
  const COLORS = ['#4CAF50', '#FFB74D', '#64B5F6', '#E57373', '#8884d8', '#82ca9d'];

  // Mock data for terrain impact analysis
  const terrainImpactData = [
    { terrain: "Urban", mobility: 65, cover: 82, visibility: 42, communications: 76 },
    { terrain: "Forest", mobility: 58, cover: 88, visibility: 32, communications: 63 },
    { terrain: "Desert", mobility: 85, cover: 25, visibility: 92, communications: 80 },
    { terrain: "Mountain", mobility: 42, cover: 75, visibility: 78, communications: 52 },
    { terrain: "Coastal", mobility: 72, cover: 43, visibility: 85, communications: 88 },
  ];

  // Mock data for weapons effectiveness comparison
  const weaponsEffectivenessData = [
    { 
      weapon: "System A", 
      range: 85, 
      accuracy: 80, 
      mobility: 75, 
      damage: 90, 
      deploymentSpeed: 70
    },
    { 
      weapon: "System B", 
      range: 95, 
      accuracy: 70, 
      mobility: 45, 
      damage: 95, 
      deploymentSpeed: 60
    },
    { 
      weapon: "System C", 
      range: 65, 
      accuracy: 85, 
      mobility: 90, 
      damage: 75, 
      deploymentSpeed: 85
    },
    { 
      weapon: "System D", 
      range: 75, 
      accuracy: 90, 
      mobility: 65, 
      damage: 85, 
      deploymentSpeed: 65
    },
    { 
      weapon: "System E", 
      range: 80, 
      accuracy: 75, 
      mobility: 80, 
      damage: 80, 
      deploymentSpeed: 75
    },
  ];

  // Mock data for time-to-objective trends
  const timeToObjectiveData = [
    { run: 1, time: 58, casualties: 4.2 },
    { run: 2, time: 52, casualties: 3.8 },
    { run: 3, time: 50, casualties: 3.5 },
    { run: 4, time: 48, casualties: 3.2 },
    { run: 5, time: 46, casualties: 2.8 },
    { run: 6, time: 45, casualties: 2.1 },
    { run: 7, time: 44, casualties: 2.3 },
    { run: 8, time: 42, casualties: 2.2 },
    { run: 9, time: 43, casualties: 2.0 },
    { run: 10, time: 41, casualties: 1.9 },
  ];

  // Mock data for tactical scenarios
  const tacticalScenarios = [
    {
      id: "SCEN-2025-048",
      name: "Urban Extraction Alpha",
      type: "Urban Combat",
      objective: "Asset Extraction",
      terrain: "Urban",
      force: "Team Alpha (12 personnel)",
      status: "Completed",
      runs: 24,
      successRate: "82.5%",
      avgTime: "48 min",
      casualtyRate: "2.2%",
    },
    {
      id: "SCEN-2025-052",
      name: "Mountain Defense Beta",
      type: "Defensive",
      objective: "Perimeter Hold",
      terrain: "Mountain",
      force: "2nd Battalion, Delta Company",
      status: "Active",
      runs: 18,
      successRate: "76.4%",
      avgTime: "120 min",
      casualtyRate: "4.5%",
    },
    {
      id: "SCEN-2025-055",
      name: "Desert Strike Charlie",
      type: "Offensive",
      objective: "Forward Base Seizure",
      terrain: "Desert",
      force: "Combined Task Force 2",
      status: "Active",
      runs: 12,
      successRate: "68.2%",
      avgTime: "85 min",
      casualtyRate: "5.8%",
    },
    {
      id: "SCEN-2025-061",
      name: "Coastal Infiltration Delta",
      type: "Amphibious",
      objective: "Intelligence Gathering",
      terrain: "Coastal",
      force: "Special Forces Team Foxtrot",
      status: "Pending",
      runs: 0,
      successRate: "N/A",
      avgTime: "N/A",
      casualtyRate: "N/A",
    },
    {
      id: "SCEN-2025-064",
      name: "Forest Ambush Echo",
      type: "Guerrilla",
      objective: "Supply Line Disruption",
      terrain: "Forest",
      force: "Team Sierra (8 personnel)",
      status: "Completed",
      runs: 32,
      successRate: "91.2%",
      avgTime: "62 min",
      casualtyRate: "1.8%",
    },
  ];

  // Mock data for simulation variables
  const simulationVariables = [
    {
      id: "VAR-2025-128",
      name: "Enemy Force Composition",
      baseSetting: "Standard Infantry Battalion",
      variations: "Light Infantry, Mechanized, Special Forces",
      impact: "High",
      sensitivity: "Medium",
      currentValue: "Mixed Force (40% Mechanized)",
      notes: "Force composition significantly affects success probability and time to objective",
    },
    {
      id: "VAR-2025-132",
      name: "Weather Conditions",
      baseSetting: "Clear, Daylight",
      variations: "Rain, Fog, Night, Sandstorm",
      impact: "Medium",
      sensitivity: "Medium",
      currentValue: "Light Rain, Dawn",
      notes: "Affects visibility, mobility, and air support effectiveness",
    },
    {
      id: "VAR-2025-138",
      name: "Civilian Presence",
      baseSetting: "Minimal",
      variations: "None, Moderate, Heavy",
      impact: "Medium",
      sensitivity: "High",
      currentValue: "Moderate (25% urban density)",
      notes: "ROE constraints significantly change tactical options",
    },
    {
      id: "VAR-2025-145",
      name: "Air Support Availability",
      baseSetting: "On-call, 15min delay",
      variations: "None, Immediate, Limited",
      impact: "High",
      sensitivity: "High",
      currentValue: "Limited (1 asset, 20min delay)",
      notes: "Critical for several scenarios, major factor in casualty rates",
    },
    {
      id: "VAR-2025-152",
      name: "Enemy Intelligence",
      baseSetting: "Moderate Awareness",
      variations: "Unaware, Fully Alert, Deception",
      impact: "High",
      sensitivity: "Medium",
      currentValue: "Limited Awareness (60%)",
      notes: "Affects enemy response time and force allocation",
    },
  ];

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Active': return 'bg-blue-100 text-blue-800';
      case 'Pending': return 'bg-purple-100 text-purple-800';
      case 'Canceled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getImpactClass = (impact: string) => {
    switch (impact) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-amber-100 text-amber-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSensitivityClass = (sensitivity: string) => {
    switch (sensitivity) {
      case 'High': return 'bg-purple-100 text-purple-800';
      case 'Medium': return 'bg-blue-100 text-blue-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        {/* Simulation Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {simulationMetrics.map((metric, index) => (
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
          {/* Scenario Outcomes Pie Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Scenario Outcomes Distribution</h2>
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
                        data={scenarioOutcomesData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {scenarioOutcomesData.map((entry, index) => (
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

          {/* Terrain Impact Analysis Radar Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Terrain Impact on Operations</h2>
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
                      data={terrainImpactData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="terrain" />
                      <YAxis domain={[0, 100]} />
                      <Tooltip formatter={(value) => `${value}%`} />
                      <Legend />
                      <Bar dataKey="mobility" name="Mobility" fill="#8884d8" />
                      <Bar dataKey="cover" name="Cover & Concealment" fill="#82ca9d" />
                      <Bar dataKey="visibility" name="Visibility" fill="#ffc658" />
                      <Bar dataKey="communications" name="Communications" fill="#ff8042" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* Weapon System Effectiveness Spider Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Weapons System Effectiveness Comparison</h2>
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
                    data={weaponsEffectivenessData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="weapon" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Legend />
                    <Bar dataKey="range" name="Effective Range" fill="#8884d8" />
                    <Bar dataKey="accuracy" name="Accuracy" fill="#82ca9d" />
                    <Bar dataKey="mobility" name="Mobility" fill="#ffc658" />
                    <Bar dataKey="damage" name="Damage Potential" fill="#ff8042" />
                    <Bar dataKey="deploymentSpeed" name="Deployment Speed" fill="#ba68c8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Time to Objective Trends */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Simulation Improvement Trends</h2>
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
                    data={timeToObjectiveData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="run" label={{ value: 'Simulation Run', position: 'insideBottomRight', offset: -10 }} />
                    <YAxis yAxisId="left" domain={[30, 60]} label={{ value: 'Time (minutes)', angle: -90, position: 'insideLeft' }} />
                    <YAxis yAxisId="right" orientation="right" domain={[0, 5]} label={{ value: 'Casualty Rate (%)', angle: 90, position: 'insideRight' }} />
                    <Tooltip />
                    <Legend />
                    <Line 
                      yAxisId="left"
                      type="monotone" 
                      dataKey="time" 
                      name="Time to Objective (min)" 
                      stroke="#8884d8" 
                      activeDot={{ r: 8 }} 
                      strokeWidth={2}
                    />
                    <Line 
                      yAxisId="right"
                      type="monotone" 
                      dataKey="casualties" 
                      name="Casualty Rate (%)" 
                      stroke="#ff8042" 
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Tactical Scenarios Table */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Tactical Scenarios</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Objective</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Terrain</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Force</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Runs</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Success Rate</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Avg Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Casualty Rate</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                    </tr>
                  ))
                ) : (
                  tacticalScenarios.map((scenario, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{scenario.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{scenario.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{scenario.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{scenario.objective}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{scenario.terrain}</td>
                      <td className="px-6 py-4 text-sm">{scenario.force}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(scenario.status)}`}>
                          {scenario.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center">{scenario.runs}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{scenario.successRate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{scenario.avgTime}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{scenario.casualtyRate}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Simulation Variables Table */}
        <Card className="border border-neutral-light overflow-hidden">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Simulation Variables</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Variable</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Base Setting</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Variations</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Impact</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Sensitivity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Current Value</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Notes</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-40" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-48" /></td>
                    </tr>
                  ))
                ) : (
                  simulationVariables.map((variable, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{variable.id}</td>
                      <td className="px-6 py-4 text-sm font-medium">{variable.name}</td>
                      <td className="px-6 py-4 text-sm">{variable.baseSetting}</td>
                      <td className="px-6 py-4 text-sm">{variable.variations}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getImpactClass(variable.impact)}`}>
                          {variable.impact}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getSensitivityClass(variable.sensitivity)}`}>
                          {variable.sensitivity}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm">{variable.currentValue}</td>
                      <td className="px-6 py-4 text-sm">{variable.notes}</td>
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

export default TacticalSimulationView;