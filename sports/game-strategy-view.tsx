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
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ScatterChart,
  Scatter,
  ZAxis
} from "recharts";

interface GameStrategyViewProps {
  isLoading: boolean;
}

const GameStrategyView: FC<GameStrategyViewProps> = ({ isLoading }) => {
  // Mock data for strategy metrics
  const strategyMetrics = [
    {
      name: "Win Probability",
      value: "68.5%",
      change: "+4.2%",
      changeType: "positive",
      description: "Projected game outcome",
    },
    {
      name: "Offensive Rating",
      value: "112.8",
      change: "+2.5",
      changeType: "positive",
      description: "Points per 100 possessions",
    },
    {
      name: "Defensive Rating",
      value: "105.2",
      change: "-1.8",
      changeType: "positive",
      description: "Points allowed per 100",
    },
    {
      name: "Simulated Margin",
      value: "+7.6",
      change: "+2.1",
      changeType: "positive",
      description: "Average point differential",
    },
  ];

  // Mock data for strategy type distribution
  const strategyTypesData = [
    { name: "Pick & Roll", value: 28 },
    { name: "Isolation", value: 18 },
    { name: "Post Up", value: 14 },
    { name: "Off Screen", value: 16 },
    { name: "Transition", value: 24 },
  ];

  // Color palette for charts
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  // Mock data for matchup analysis
  const matchupAnalysisData = [
    { 
      position: "PG", 
      advantage: 8, 
      offensiveRating: 112, 
      defensiveRating: 105,
      winProbability: 65
    },
    { 
      position: "SG", 
      advantage: -5, 
      offensiveRating: 105, 
      defensiveRating: 108,
      winProbability: 42
    },
    { 
      position: "SF", 
      advantage: 12, 
      offensiveRating: 118, 
      defensiveRating: 102,
      winProbability: 72
    },
    { 
      position: "PF", 
      advantage: 3, 
      offensiveRating: 110, 
      defensiveRating: 106,
      winProbability: 58
    },
    { 
      position: "C", 
      advantage: -2, 
      offensiveRating: 107, 
      defensiveRating: 109,
      winProbability: 48
    },
  ];

  // Mock data for shot location effectiveness
  const shotLocationData = [
    { location: "Corner 3", efficiency: 1.25, frequency: 15, league: 1.08 },
    { location: "Wing 3", efficiency: 1.15, frequency: 20, league: 1.05 },
    { location: "Top of Key", efficiency: 1.05, frequency: 18, league: 1.02 },
    { location: "Mid-Range", efficiency: 0.85, frequency: 22, league: 0.80 },
    { location: "Paint (Non-RA)", efficiency: 0.95, frequency: 10, league: 0.92 },
    { location: "Restricted Area", efficiency: 1.35, frequency: 15, league: 1.30 },
  ];

  // Mock data for pace simulations
  const paceSimulationsData = [
    { pace: "Very Fast (105+)", winProbability: 72, offRating: 118, defRating: 110 },
    { pace: "Fast (100-105)", winProbability: 68, offRating: 115, defRating: 108 },
    { pace: "Moderate (95-100)", winProbability: 62, offRating: 110, defRating: 105 },
    { pace: "Slow (90-95)", winProbability: 58, offRating: 105, defRating: 102 },
    { pace: "Very Slow (<90)", winProbability: 52, offRating: 100, defRating: 98 },
  ];

  // Mock data for play success rates
  const playSuccessData = [
    { play: "High Pick & Roll", successRate: 58, expectedPoints: 1.12, turnovers: 12, usage: 25 },
    { play: "Isolation (Wing)", successRate: 45, expectedPoints: 0.95, turnovers: 8, usage: 15 },
    { play: "Post Up", successRate: 48, expectedPoints: 0.98, turnovers: 10, usage: 12 },
    { play: "Off-Ball Screen", successRate: 52, expectedPoints: 1.05, turnovers: 7, usage: 18 },
    { play: "Transition", successRate: 62, expectedPoints: 1.25, turnovers: 15, usage: 22 },
    { play: "Dribble Handoff", successRate: 50, expectedPoints: 1.02, turnovers: 9, usage: 8 },
  ];

  // Mock data for simulation results
  const simulationResults = [
    {
      id: "SIM-2025-4281",
      scenario: "Base Game Plan",
      winProbability: "68.5%",
      projectedScore: "112-104",
      keyFactors: "Transition advantage, 3PT shooting",
      offensiveRating: 112.8,
      defensiveRating: 105.2,
      paceProjection: 98.5,
      turnoverDifferential: "+2.5",
      reboundDifferential: "+3.2",
      pointsInPaint: 48.2,
      keyLineups: "Starting 5, Small Ball",
    },
    {
      id: "SIM-2025-4295",
      scenario: "Fast Pace",
      winProbability: "72.3%",
      projectedScore: "118-108",
      keyFactors: "Transition scoring, guard play",
      offensiveRating: 118.5,
      defensiveRating: 109.2,
      paceProjection: 105.8,
      turnoverDifferential: "+1.2",
      reboundDifferential: "-1.5",
      pointsInPaint: 52.5,
      keyLineups: "Small Ball, 3-Guard",
    },
    {
      id: "SIM-2025-4308",
      scenario: "Defensive Focus",
      winProbability: "65.8%",
      projectedScore: "102-92",
      keyFactors: "Half-court defense, rebounding",
      offensiveRating: 105.2,
      defensiveRating: 95.8,
      paceProjection: 92.5,
      turnoverDifferential: "+3.8",
      reboundDifferential: "+5.2",
      pointsInPaint: 42.5,
      keyLineups: "Defensive Unit, Twin Towers",
    },
    {
      id: "SIM-2025-4317",
      scenario: "3-PT Heavy",
      winProbability: "62.4%",
      projectedScore: "115-108",
      keyFactors: "3PT shooting, spacing",
      offensiveRating: 115.8,
      defensiveRating: 108.5,
      paceProjection: 96.5,
      turnoverDifferential: "-1.2",
      reboundDifferential: "-2.8",
      pointsInPaint: 36.8,
      keyLineups: "Shooting Lineup, 5-Out",
    },
    {
      id: "SIM-2025-4325",
      scenario: "Post-Focused",
      winProbability: "58.2%",
      projectedScore: "104-98",
      keyFactors: "Post scoring, size advantage",
      offensiveRating: 106.5,
      defensiveRating: 100.2,
      paceProjection: 91.8,
      turnoverDifferential: "+0.5",
      reboundDifferential: "+6.5",
      pointsInPaint: 56.2,
      keyLineups: "Twin Towers, Traditional",
    },
  ];

  // Mock data for optimal lineups
  const optimalLineups = [
    {
      id: "LINE-2025-142",
      name: "Small Ball",
      players: "Johnson, Williams, Mitchell, Davis, Thompson",
      netRating: "+12.5",
      minutesProjection: "16-20",
      offensiveRating: 118.2,
      defensiveRating: 105.7,
      reboundRate: "48.5%",
      assistRatio: "18.2%",
      pacePreference: "Fast",
      bestAgainst: "Traditional lineups, poor transition defense",
      situationalUse: "When trailing, 4th quarter offense",
    },
    {
      id: "LINE-2025-156",
      name: "Defensive Unit",
      players: "Williams, Mitchell, Johnson, Davis, Roberts",
      netRating: "+8.5",
      minutesProjection: "12-16",
      offensiveRating: 104.2,
      defensiveRating: 95.7,
      reboundRate: "52.8%",
      assistRatio: "16.5%",
      pacePreference: "Slow",
      bestAgainst: "High-scoring opponents, isolation-heavy offenses",
      situationalUse: "Protecting leads, final defensive possessions",
    },
    {
      id: "LINE-2025-168",
      name: "3-Guard Lineup",
      players: "Williams, Mitchell, Anderson, Johnson, Thompson",
      netRating: "+10.2",
      minutesProjection: "8-12",
      offensiveRating: 116.8,
      defensiveRating: 106.6,
      reboundRate: "45.2%",
      assistRatio: "21.5%",
      pacePreference: "Very Fast",
      bestAgainst: "Slow teams, poor perimeter defense",
      situationalUse: "Creating runs, increasing tempo",
    },
    {
      id: "LINE-2025-175",
      name: "Twin Towers",
      players: "Williams, Johnson, Davis, Roberts, Bennett",
      netRating: "+6.5",
      minutesProjection: "8-10",
      offensiveRating: 108.5,
      defensiveRating: 102.0,
      reboundRate: "58.5%",
      assistRatio: "14.8%",
      pacePreference: "Slow",
      bestAgainst: "Small lineups, weak interior defense",
      situationalUse: "Exploiting size advantages, controlling paint",
    },
    {
      id: "LINE-2025-189",
      name: "Shooting Lineup",
      players: "Williams, Anderson, Mitchell, Thompson, Davis",
      netRating: "+9.8",
      minutesProjection: "10-14",
      offensiveRating: 115.5,
      defensiveRating: 105.7,
      reboundRate: "46.2%",
      assistRatio: "19.5%",
      pacePreference: "Moderate",
      bestAgainst: "Zone defense, poor perimeter defenders",
      situationalUse: "Breaking zones, spacing the floor",
    },
  ];

  const getLineupPreferenceClass = (preference: string) => {
    switch (preference) {
      case 'Very Fast': return 'bg-red-100 text-red-800';
      case 'Fast': return 'bg-orange-100 text-orange-800';
      case 'Moderate': return 'bg-blue-100 text-blue-800';
      case 'Slow': return 'bg-green-100 text-green-800';
      case 'Very Slow': return 'bg-teal-100 text-teal-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Function to determine color based on advantage
  const getAdvantageColor = (value: number) => {
    if (value > 5) return '#4CAF50';
    if (value > 0) return '#8BC34A';
    if (value > -5) return '#FFC107';
    return '#F44336';
  };

  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        {/* Strategy Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {strategyMetrics.map((metric, index) => (
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
          {/* Play Type Distribution Pie Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Strategy Distribution</h2>
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
                        data={strategyTypesData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {strategyTypesData.map((entry, index) => (
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

          {/* Matchup Analysis Bar Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Matchup Analysis</h2>
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
                      data={matchupAnalysisData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      layout="vertical"
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" domain={[-15, 15]} />
                      <YAxis type="category" dataKey="position" width={40} />
                      <Tooltip formatter={(value) => `${value > 0 ? '+' : ''}${value}`} />
                      <Legend />
                      <Bar 
                        dataKey="advantage" 
                        name="Matchup Advantage" 
                        fill="#8884d8"
                        barSize={20}
                      >
                        {matchupAnalysisData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={getAdvantageColor(entry.advantage)} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* Shot Location Effectiveness Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Shot Location Effectiveness</h2>
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
                    data={shotLocationData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="location" />
                    <YAxis domain={[0, 1.5]} />
                    <Tooltip formatter={(value) => `${value} points per shot`} />
                    <Legend />
                    <Bar 
                      dataKey="efficiency" 
                      name="Team Efficiency" 
                      fill="#8884d8" 
                    />
                    <Bar 
                      dataKey="league" 
                      name="League Average" 
                      fill="#82ca9d" 
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Pace Simulations Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Pace Simulation Analysis</h2>
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
                    data={paceSimulationsData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="pace" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="winProbability" name="Win Probability %" fill="#8884d8" />
                    <Bar dataKey="offRating" name="Off. Rating" fill="#82ca9d" />
                    <Bar dataKey="defRating" name="Def. Rating" fill="#ff8042" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Play Success Rates Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Play Type Effectiveness</h2>
          </div>
          
          {isLoading ? (
            <div className="chart-placeholder">
              <Skeleton className="h-80 w-full" />
            </div>
          ) : (
            <div className="p-4">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius={80} data={playSuccessData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="play" />
                    <PolarRadiusAxis angle={30} domain={[0, 65]} />
                    <Radar
                      name="Success Rate %"
                      dataKey="successRate"
                      stroke="#8884d8"
                      fill="#8884d8"
                      fillOpacity={0.6}
                    />
                    <Radar
                      name="Expected Points"
                      dataKey="expectedPoints"
                      stroke="#82ca9d"
                      fill="#82ca9d"
                      fillOpacity={0.6}
                    />
                    <Legend />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Simulation Results Table */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Game Strategy Simulations</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Scenario</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Win Prob.</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Proj. Score</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Key Factors</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Off. Rating</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Def. Rating</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Pace</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">TO Diff.</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Reb. Diff.</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Pts. in Paint</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Key Lineups</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-40" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                    </tr>
                  ))
                ) : (
                  simulationResults.map((sim, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{sim.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{sim.scenario}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{sim.winProbability}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{sim.projectedScore}</td>
                      <td className="px-6 py-4 text-sm">{sim.keyFactors}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{sim.offensiveRating}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{sim.defensiveRating}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{sim.paceProjection}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{sim.turnoverDifferential}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{sim.reboundDifferential}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{sim.pointsInPaint}</td>
                      <td className="px-6 py-4 text-sm">{sim.keyLineups}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Optimal Lineups Table */}
        <Card className="border border-neutral-light overflow-hidden">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Optimal Lineup Combinations</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Lineup</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Players</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Net Rating</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Minutes Proj.</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Off. Rating</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Def. Rating</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Reb. Rate</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Assist Ratio</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Pace Pref.</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Best Against</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Situational Use</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-28" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-48" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-36" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-36" /></td>
                    </tr>
                  ))
                ) : (
                  optimalLineups.map((lineup, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{lineup.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{lineup.name}</td>
                      <td className="px-6 py-4 text-sm">{lineup.players}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{lineup.netRating}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{lineup.minutesProjection}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{lineup.offensiveRating}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{lineup.defensiveRating}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{lineup.reboundRate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{lineup.assistRatio}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getLineupPreferenceClass(lineup.pacePreference)}`}>
                          {lineup.pacePreference}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm">{lineup.bestAgainst}</td>
                      <td className="px-6 py-4 text-sm">{lineup.situationalUse}</td>
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

export default GameStrategyView;