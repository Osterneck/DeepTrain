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

interface PlayerPerformanceViewProps {
  isLoading: boolean;
}

const PlayerPerformanceView: FC<PlayerPerformanceViewProps> = ({ isLoading }) => {
  // Mock data for performance metrics
  const performanceMetrics = [
    {
      name: "Offensive Rating",
      value: "118.2",
      change: "+3.5",
      changeType: "positive",
      description: "Points per 100 possessions",
    },
    {
      name: "Defensive Rating",
      value: "104.8",
      change: "-2.1",
      changeType: "positive",
      description: "Points allowed per 100",
    },
    {
      name: "True Shooting %",
      value: "58.7%",
      change: "+1.2%",
      changeType: "positive",
      description: "Shooting efficiency",
    },
    {
      name: "Usage Rate",
      value: "24.2%",
      change: "+0.8%",
      changeType: "positive",
      description: "Plays used by player",
    },
  ];

  // Mock data for performance by position
  const positionPerformanceData = [
    { position: "Point Guard", offensive: 112, defensive: 108, versatility: 75 },
    { position: "Shooting Guard", offensive: 115, defensive: 105, versatility: 70 },
    { position: "Small Forward", offensive: 110, defensive: 102, versatility: 85 },
    { position: "Power Forward", offensive: 105, defensive: 100, versatility: 80 },
    { position: "Center", offensive: 108, defensive: 95, versatility: 65 },
  ];

  // Color palette for charts
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  // Mock data for player skills assessment
  const skillsAssessmentData = [
    { skill: "Shooting", value: 85 },
    { skill: "Ball Handling", value: 78 },
    { skill: "Passing", value: 82 },
    { skill: "Defense", value: 75 },
    { skill: "Rebounding", value: 70 },
    { skill: "Court Vision", value: 80 },
    { skill: "Basketball IQ", value: 85 },
    { skill: "Athleticism", value: 88 },
  ];

  // Mock data for performance over time
  const performanceOverTimeData = [
    { game: 1, points: 18, rebounds: 6, assists: 4, efficiency: 20 },
    { game: 2, points: 22, rebounds: 5, assists: 7, efficiency: 25 },
    { game: 3, points: 15, rebounds: 8, assists: 6, efficiency: 22 },
    { game: 4, points: 25, rebounds: 7, assists: 5, efficiency: 28 },
    { game: 5, points: 20, rebounds: 9, assists: 3, efficiency: 24 },
    { game: 6, points: 28, rebounds: 6, assists: 8, efficiency: 32 },
    { game: 7, points: 24, rebounds: 4, assists: 6, efficiency: 26 },
    { game: 8, points: 19, rebounds: 7, assists: 9, efficiency: 27 },
    { game: 9, points: 26, rebounds: 8, assists: 5, efficiency: 29 },
    { game: 10, points: 22, rebounds: 10, assists: 7, efficiency: 30 },
  ];

  // Mock data for shot distribution
  const shotDistributionData = [
    { name: "3-Pointers", value: 35 },
    { name: "Mid-Range", value: 25 },
    { name: "Paint", value: 30 },
    { name: "Free Throws", value: 10 },
  ];

  // Mock data for performance against competition
  const competitionPerformanceData = [
    { team: "Team A", rating: 88, avgLeague: 80 },
    { team: "Team B", rating: 92, avgLeague: 80 },
    { team: "Team C", rating: 85, avgLeague: 80 },
    { team: "Team D", rating: 79, avgLeague: 80 },
    { team: "Team E", rating: 95, avgLeague: 80 },
    { team: "Team F", rating: 82, avgLeague: 80 },
  ];

  // Mock data for players performance comparison
  const playersData = [
    {
      name: "James Johnson",
      points: 24.5,
      assists: 6.8,
      rebounds: 8.2,
      steals: 1.2,
      blocks: 0.8,
      efficiency: 28.5,
      shootingPct: 48.5,
      threePtPct: 38.2,
      freePct: 85.5,
      gamesPlayed: 58,
      minutesPerGame: 34.2,
      status: "Active",
      trend: "Improving",
    },
    {
      name: "Marcus Williams",
      points: 22.2,
      assists: 8.5,
      rebounds: 4.5,
      steals: 1.8,
      blocks: 0.3,
      efficiency: 25.2,
      shootingPct: 46.2,
      threePtPct: 40.5,
      freePct: 90.2,
      gamesPlayed: 62,
      minutesPerGame: 32.8,
      status: "Active",
      trend: "Stable",
    },
    {
      name: "Anthony Davis",
      points: 19.8,
      assists: 3.2,
      rebounds: 12.5,
      steals: 0.9,
      blocks: 2.2,
      efficiency: 26.4,
      shootingPct: 52.8,
      threePtPct: 32.1,
      freePct: 78.5,
      gamesPlayed: 56,
      minutesPerGame: 31.5,
      status: "Active",
      trend: "Improving",
    },
    {
      name: "Kevin Mitchell",
      points: 18.5,
      assists: 5.5,
      rebounds: 6.8,
      steals: 1.5,
      blocks: 0.5,
      efficiency: 22.8,
      shootingPct: 44.8,
      threePtPct: 37.8,
      freePct: 82.4,
      gamesPlayed: 64,
      minutesPerGame: 30.5,
      status: "Active",
      trend: "Declining",
    },
    {
      name: "Tyler Johnson",
      points: 15.2,
      assists: 7.8,
      rebounds: 3.5,
      steals: 2.1,
      blocks: 0.2,
      efficiency: 20.5,
      shootingPct: 42.5,
      threePtPct: 38.5,
      freePct: 88.5,
      gamesPlayed: 60,
      minutesPerGame: 28.5,
      status: "Active",
      trend: "Stable",
    },
  ];

  // Mock data for player achievements and milestones
  const playerAchievements = [
    {
      id: "ACH-2025-142",
      player: "James Johnson",
      achievement: "Season Scoring Leader",
      date: "2025-04-15",
      value: "24.5 PPG",
      significance: "Led team in scoring for the 3rd consecutive season",
      vsHistorical: "+2.1 from previous season",
      nextMilestone: "25.0 PPG (franchise record)",
      notes: "Consistent improvement in scoring efficiency while maintaining high volume",
    },
    {
      id: "ACH-2025-156",
      player: "Marcus Williams",
      achievement: "Season Assist Leader",
      date: "2025-04-15",
      value: "8.5 APG",
      significance: "Led team in assists, ranked 5th in league",
      vsHistorical: "+0.8 from previous season",
      nextMilestone: "9.0 APG (career high)",
      notes: "Improved assist-to-turnover ratio from 2.5 to 3.2",
    },
    {
      id: "ACH-2025-168",
      player: "Anthony Davis",
      achievement: "Season Rebounding Leader",
      date: "2025-04-15",
      value: "12.5 RPG",
      significance: "Led team in rebounds, ranked 3rd in league",
      vsHistorical: "+1.2 from previous season",
      nextMilestone: "13.0 RPG (career high)",
      notes: "Significant improvement in defensive rebounding percentage",
    },
    {
      id: "ACH-2025-175",
      player: "Kevin Mitchell",
      achievement: "50-40-90 Club",
      date: "2025-04-15",
      value: "50.2% FG / 40.8% 3PT / 90.5% FT",
      significance: "One of only 3 players in league with this shooting efficiency",
      vsHistorical: "First time achieving this milestone",
      nextMilestone: "Maintain for multiple seasons",
      notes: "Dramatic improvement in three-point shooting from previous seasons",
    },
    {
      id: "ACH-2025-189",
      player: "Tyler Johnson",
      achievement: "Steals Leader",
      date: "2025-04-15",
      value: "2.1 SPG",
      significance: "Led team in steals, ranked 6th in league",
      vsHistorical: "+0.3 from previous season",
      nextMilestone: "2.5 SPG (franchise record)",
      notes: "Developed into elite perimeter defender with improved positioning",
    },
  ];

  const getTrendClass = (trend: string) => {
    switch (trend) {
      case 'Improving': return 'bg-green-100 text-green-800';
      case 'Stable': return 'bg-blue-100 text-blue-800';
      case 'Declining': return 'bg-amber-100 text-amber-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Injured': return 'bg-red-100 text-red-800';
      case 'Resting': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        {/* Performance Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {performanceMetrics.map((metric, index) => (
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
          {/* Player Skills Radar Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Player Skills Assessment</h2>
            </div>
            
            {isLoading ? (
              <div className="chart-placeholder">
                <Skeleton className="h-80 w-full" />
              </div>
            ) : (
              <div className="p-4">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius={80} data={skillsAssessmentData}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="skill" />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} />
                      <Radar
                        name="Player Skills"
                        dataKey="value"
                        stroke="#8884d8"
                        fill="#8884d8"
                        fillOpacity={0.6}
                      />
                      <Tooltip formatter={(value) => `${value}/100`} />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </Card>

          {/* Shot Distribution Pie Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Shot Distribution</h2>
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
                        data={shotDistributionData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {shotDistributionData.map((entry, index) => (
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
        </div>

        {/* Performance Over Time Line Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Performance Over Last 10 Games</h2>
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
                    data={performanceOverTimeData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="game" label={{ value: 'Game', position: 'insideBottomRight', offset: -5 }} />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Legend />
                    <Line 
                      yAxisId="left"
                      type="monotone" 
                      dataKey="points" 
                      name="Points" 
                      stroke="#8884d8" 
                      activeDot={{ r: 8 }} 
                      strokeWidth={2}
                    />
                    <Line 
                      yAxisId="left"
                      type="monotone" 
                      dataKey="rebounds" 
                      name="Rebounds" 
                      stroke="#82ca9d" 
                      activeDot={{ r: 8 }}
                    />
                    <Line 
                      yAxisId="left"
                      type="monotone" 
                      dataKey="assists" 
                      name="Assists" 
                      stroke="#ffc658" 
                      activeDot={{ r: 8 }}
                    />
                    <Line 
                      yAxisId="right"
                      type="monotone" 
                      dataKey="efficiency" 
                      name="Efficiency Rating" 
                      stroke="#ff7300" 
                      activeDot={{ r: 8 }}
                      strokeDasharray="5 5"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Position Performance Bar Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Performance by Position</h2>
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
                    data={positionPerformanceData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="position" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="offensive" name="Offensive Rating" fill="#8884d8" />
                    <Bar dataKey="defensive" name="Defensive Rating" fill="#82ca9d" />
                    <Bar dataKey="versatility" name="Versatility Score" fill="#ffc658" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Competition Performance Bar Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Performance Against Competition</h2>
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
                    data={competitionPerformanceData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="team" />
                    <YAxis domain={[60, 100]} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="rating" name="Player Rating" fill="#8884d8" />
                    <Bar dataKey="avgLeague" name="League Average" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Players Comparison Table */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Player Performance Comparison</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Player</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">PTS</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">AST</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">REB</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">STL</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">BLK</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">EFF</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">FG%</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">3P%</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">FT%</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">GP</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">MPG</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Trend</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-12" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-12" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-12" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-12" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-12" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-12" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-12" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-12" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-12" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-12" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-12" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                    </tr>
                  ))
                ) : (
                  playersData.map((player, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{player.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{player.points}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{player.assists}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{player.rebounds}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{player.steals}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{player.blocks}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{player.efficiency}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{player.shootingPct}%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{player.threePtPct}%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{player.freePct}%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{player.gamesPlayed}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{player.minutesPerGame}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(player.status)}`}>
                          {player.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getTrendClass(player.trend)}`}>
                          {player.trend}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Player Achievements Table */}
        <Card className="border border-neutral-light overflow-hidden">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Player Achievements & Milestones</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Player</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Achievement</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Value</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Significance</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">vs Historical</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Next Milestone</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Notes</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-36" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-48" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-36" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-48" /></td>
                    </tr>
                  ))
                ) : (
                  playerAchievements.map((achievement, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{achievement.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{achievement.player}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{achievement.achievement}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{achievement.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{achievement.value}</td>
                      <td className="px-6 py-4 text-sm">{achievement.significance}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{achievement.vsHistorical}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{achievement.nextMilestone}</td>
                      <td className="px-6 py-4 text-sm">{achievement.notes}</td>
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

export default PlayerPerformanceView;