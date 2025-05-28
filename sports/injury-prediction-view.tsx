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
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ScatterChart,
  Scatter,
  ZAxis
} from "recharts";

interface InjuryPredictionViewProps {
  isLoading: boolean;
}

const InjuryPredictionView: FC<InjuryPredictionViewProps> = ({ isLoading }) => {
  // Mock data for injury metrics
  const injuryMetrics = [
    {
      name: "Injury Prediction",
      value: "85.2%",
      change: "+3.7%",
      changeType: "positive",
      description: "Accuracy of predictions",
    },
    {
      name: "Prevention Rate",
      value: "42.8%",
      change: "+5.3%",
      changeType: "positive",
      description: "Injuries prevented",
    },
    {
      name: "Recovery Time",
      value: "-18.5%",
      change: "+2.1%",
      changeType: "positive",
      description: "Reduction in recovery",
    },
    {
      name: "Active Monitoring",
      value: "96.3%",
      change: "+1.8%",
      changeType: "positive",
      description: "Player tracking coverage",
    },
  ];

  // Mock data for injury types distribution
  const injuryTypesData = [
    { name: "Sprains/Strains", value: 35 },
    { name: "Contusions", value: 20 },
    { name: "Fractures", value: 12 },
    { name: "Concussions", value: 8 },
    { name: "Overuse", value: 25 },
  ];

  // Color palette for charts
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  // Mock data for injury risk assessment by position
  const riskAssessmentData = [
    { 
      position: "Point Guard", 
      currentRisk: 65, 
      historicalRisk: 72, 
      leagueAverage: 68,
      preventionEfficacy: 85
    },
    { 
      position: "Shooting Guard", 
      currentRisk: 58, 
      historicalRisk: 65, 
      leagueAverage: 62,
      preventionEfficacy: 80
    },
    { 
      position: "Small Forward", 
      currentRisk: 62, 
      historicalRisk: 68, 
      leagueAverage: 65,
      preventionEfficacy: 78
    },
    { 
      position: "Power Forward", 
      currentRisk: 72, 
      historicalRisk: 78, 
      leagueAverage: 75,
      preventionEfficacy: 75
    },
    { 
      position: "Center", 
      currentRisk: 78, 
      historicalRisk: 85, 
      leagueAverage: 80,
      preventionEfficacy: 70
    },
  ];

  // Mock data for workload management
  const workloadManagementData = [
    { week: "Week 1", actualLoad: 85, optimalLoad: 80, injuryRisk: 15 },
    { week: "Week 2", actualLoad: 90, optimalLoad: 82, injuryRisk: 18 },
    { week: "Week 3", actualLoad: 95, optimalLoad: 85, injuryRisk: 25 },
    { week: "Week 4", actualLoad: 88, optimalLoad: 86, injuryRisk: 20 },
    { week: "Week 5", actualLoad: 82, optimalLoad: 84, injuryRisk: 12 },
    { week: "Week 6", actualLoad: 85, optimalLoad: 85, injuryRisk: 15 },
    { week: "Week 7", actualLoad: 87, optimalLoad: 86, injuryRisk: 16 },
    { week: "Week 8", actualLoad: 92, optimalLoad: 87, injuryRisk: 22 },
  ];

  // Mock data for body heat map
  const bodyHeatMapData = [
    { bodyPart: "Ankle", injuryFrequency: 28, recoveryTime: 14, preventionSuccess: 65 },
    { bodyPart: "Knee", injuryFrequency: 22, recoveryTime: 28, preventionSuccess: 58 },
    { bodyPart: "Shoulder", injuryFrequency: 15, recoveryTime: 21, preventionSuccess: 62 },
    { bodyPart: "Back", injuryFrequency: 18, recoveryTime: 18, preventionSuccess: 70 },
    { bodyPart: "Hamstring", injuryFrequency: 25, recoveryTime: 16, preventionSuccess: 68 },
    { bodyPart: "Groin", injuryFrequency: 12, recoveryTime: 12, preventionSuccess: 72 },
    { bodyPart: "Wrist", injuryFrequency: 8, recoveryTime: 10, preventionSuccess: 75 },
    { bodyPart: "Foot", injuryFrequency: 10, recoveryTime: 14, preventionSuccess: 65 },
  ];

  // Mock data for high-risk players
  const highRiskPlayersData = [
    {
      id: "PLR-2025-0142",
      name: "James Johnson",
      position: "Power Forward",
      age: 28,
      riskScore: "High (78%)",
      primaryConcern: "Knee Stress",
      secondaryConcern: "Ankle Instability",
      workloadStatus: "Above Optimal",
      monitoringStatus: "Active",
      recommendedActions: "Reduce practice intensity, targeted strengthening",
      previousInjuries: "ACL (2023), Ankle Sprain (2024)",
      preventionPlan: "Custom knee & ankle protocol, gradual loading",
    },
    {
      id: "PLR-2025-0156",
      name: "Marcus Williams",
      position: "Point Guard",
      age: 25,
      riskScore: "Medium-High (65%)",
      primaryConcern: "Hamstring Tightness",
      secondaryConcern: "Hip Flexor Imbalance",
      workloadStatus: "Optimal",
      monitoringStatus: "Active",
      recommendedActions: "Mobility work, targeted stretching routine",
      previousInjuries: "Hamstring Strain (2024)",
      preventionPlan: "Flexibility program, load management",
    },
    {
      id: "PLR-2025-0168",
      name: "Anthony Davis",
      position: "Center",
      age: 32,
      riskScore: "High (82%)",
      primaryConcern: "Lower Back",
      secondaryConcern: "Shoulder Instability",
      workloadStatus: "Above Optimal",
      monitoringStatus: "Active",
      recommendedActions: "Rest day implementation, core strengthening",
      previousInjuries: "Back Spasms (2024), Shoulder Subluxation (2023)",
      preventionPlan: "Core stability program, reduced back loading",
    },
    {
      id: "PLR-2025-0175",
      name: "Kevin Mitchell",
      position: "Small Forward",
      age: 24,
      riskScore: "Medium (58%)",
      primaryConcern: "Ankle Mobility",
      secondaryConcern: "Fatigue Management",
      workloadStatus: "Slightly Above Optimal",
      monitoringStatus: "Active",
      recommendedActions: "Proprioception training, recovery protocols",
      previousInjuries: "Ankle Sprain (2023)",
      preventionPlan: "Balance training, ankle bracing during practice",
    },
    {
      id: "PLR-2025-0189",
      name: "Tyler Johnson",
      position: "Shooting Guard",
      age: 26,
      riskScore: "Medium-Low (42%)",
      primaryConcern: "General Fatigue",
      secondaryConcern: "Minor Wrist Soreness",
      workloadStatus: "Optimal",
      monitoringStatus: "Active",
      recommendedActions: "Regular monitoring, recovery optimization",
      previousInjuries: "None significant",
      preventionPlan: "Standard prevention protocol, wrist taping",
    },
  ];

  // Mock data for custom injury prevention plans
  const preventionPlans = [
    {
      id: "PREV-2025-142",
      name: "ACL Prevention Protocol",
      targetGroup: "Guards & Wings",
      objective: "Reduce ACL injury risk by 40%",
      keyComponents: "Neuromuscular training, landing mechanics, deceleration patterns",
      duration: "Year-round",
      implementationStatus: "Full Implementation",
      effectiveness: "35% risk reduction observed",
      stakeholders: "Players, Athletic Trainers, Physical Therapists",
      keyMetrics: "Force plate measurements, movement screening scores",
      integratedTechnologies: "3D motion capture, force platforms",
      notes: "Highest compliance rates among younger players",
    },
    {
      id: "PREV-2025-156",
      name: "Load Management System",
      targetGroup: "All Players",
      objective: "Optimize workload distribution",
      keyComponents: "GPS tracking, heart rate monitoring, subjective wellness",
      duration: "Season-long",
      implementationStatus: "Full Implementation",
      effectiveness: "22% reduction in soft-tissue injuries",
      stakeholders: "Coaching Staff, Medical Team, S&C Coaches",
      keyMetrics: "Acute:chronic workload ratio, perceived exertion",
      integratedTechnologies: "Wearable sensors, data analytics platform",
      notes: "Modified implementation during playoffs",
    },
    {
      id: "PREV-2025-168",
      name: "Lower Back Injury Prevention",
      targetGroup: "Forwards & Centers",
      objective: "Reduce lower back injury incidence",
      keyComponents: "Core stability, hip mobility, ergonomic education",
      duration: "Year-round",
      implementationStatus: "Partial Implementation",
      effectiveness: "28% reduction in reported symptoms",
      stakeholders: "Players, Medical Staff, S&C Coaches",
      keyMetrics: "Functional movement scores, pain reports",
      integratedTechnologies: "Biofeedback devices, pressure sensors",
      notes: "Additional focus on sleep positioning and travel ergonomics",
    },
    {
      id: "PREV-2025-175",
      name: "Ankle Stability Program",
      targetGroup: "Guards & Wings",
      objective: "Prevent ankle sprains and reinjury",
      keyComponents: "Proprioception, balance training, ankle strengthening",
      duration: "Pre & In-season",
      implementationStatus: "Full Implementation",
      effectiveness: "45% reduction in ankle injuries",
      stakeholders: "Players, Athletic Trainers",
      keyMetrics: "Balance assessments, strength measurements",
      integratedTechnologies: "Balance platforms, resistance monitoring",
      notes: "Includes both preventive bracing and rehabilitation protocols",
    },
    {
      id: "PREV-2025-189",
      name: "Recovery Optimization Protocol",
      targetGroup: "All Players",
      objective: "Maximize recovery between games",
      keyComponents: "Sleep hygiene, nutrition timing, modalities",
      duration: "Season-long",
      implementationStatus: "Full Implementation",
      effectiveness: "18% improvement in subjective recovery",
      stakeholders: "Players, Medical Staff, Nutritionists",
      keyMetrics: "Sleep quality, muscle soreness, readiness scores",
      integratedTechnologies: "Sleep trackers, recovery assessment apps",
      notes: "Customized protocols based on individual recovery profiles",
    },
  ];

  const getRiskScoreClass = (risk: string) => {
    if (risk.includes("High")) return 'bg-red-100 text-red-800';
    if (risk.includes("Medium-High")) return 'bg-amber-100 text-amber-800';
    if (risk.includes("Medium")) return 'bg-yellow-100 text-yellow-800';
    if (risk.includes("Medium-Low")) return 'bg-blue-100 text-blue-800';
    if (risk.includes("Low")) return 'bg-green-100 text-green-800';
    return 'bg-gray-100 text-gray-800';
  };

  const getImplementationStatusClass = (status: string) => {
    switch (status) {
      case 'Full Implementation': return 'bg-green-100 text-green-800';
      case 'Partial Implementation': return 'bg-amber-100 text-amber-800';
      case 'Planning Phase': return 'bg-blue-100 text-blue-800';
      case 'Early Testing': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Function to determine color based on workload status
  const getWorkloadStatusClass = (status: string) => {
    if (status.includes("Above")) return 'bg-amber-100 text-amber-800';
    if (status.includes("Optimal")) return 'bg-green-100 text-green-800';
    if (status.includes("Below")) return 'bg-blue-100 text-blue-800';
    return 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        {/* Injury Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {injuryMetrics.map((metric, index) => (
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
          {/* Injury Types Pie Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Injury Type Distribution</h2>
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
                        data={injuryTypesData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {injuryTypesData.map((entry, index) => (
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

          {/* Risk Assessment by Position */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Risk Assessment by Position</h2>
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
                      data={riskAssessmentData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="position" />
                      <YAxis domain={[0, 100]} />
                      <Tooltip formatter={(value) => `${value}%`} />
                      <Legend />
                      <Bar dataKey="currentRisk" name="Current Risk" fill="#FF8042" />
                      <Bar dataKey="historicalRisk" name="Historical Risk" fill="#8884d8" />
                      <Bar dataKey="leagueAverage" name="League Average" fill="#82ca9d" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* Workload Management Line Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Workload Management & Injury Risk</h2>
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
                    data={workloadManagementData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="week" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" domain={[0, 50]} />
                    <Tooltip />
                    <Legend />
                    <Line 
                      yAxisId="left"
                      type="monotone" 
                      dataKey="actualLoad" 
                      name="Actual Load" 
                      stroke="#8884d8" 
                      activeDot={{ r: 8 }} 
                      strokeWidth={2}
                    />
                    <Line 
                      yAxisId="left"
                      type="monotone" 
                      dataKey="optimalLoad" 
                      name="Optimal Load" 
                      stroke="#82ca9d" 
                      strokeDasharray="5 5"
                    />
                    <Line 
                      yAxisId="right"
                      type="monotone" 
                      dataKey="injuryRisk" 
                      name="Injury Risk %" 
                      stroke="#ff7300" 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Body Heat Map Bar Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Body Region Analysis</h2>
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
                    data={bodyHeatMapData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="bodyPart" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="injuryFrequency" name="Injury Frequency %" fill="#8884d8" />
                    <Bar dataKey="recoveryTime" name="Avg. Recovery Days" fill="#FF8042" />
                    <Bar dataKey="preventionSuccess" name="Prevention Success %" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Position Risk Radar Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Prevention Efficacy by Position</h2>
          </div>
          
          {isLoading ? (
            <div className="chart-placeholder">
              <Skeleton className="h-80 w-full" />
            </div>
          ) : (
            <div className="p-4">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius={80} data={riskAssessmentData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="position" />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} />
                    <Radar
                      name="Current Risk %"
                      dataKey="currentRisk"
                      stroke="#FF8042"
                      fill="#FF8042"
                      fillOpacity={0.6}
                    />
                    <Radar
                      name="Prevention Efficacy %"
                      dataKey="preventionEfficacy"
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

        {/* High Risk Players Table */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">High Risk Players</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Player</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Position</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Age</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Risk Score</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Primary Concern</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Secondary Concern</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Workload Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Monitoring</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Recommended Actions</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Previous Injuries</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Prevention Plan</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-28" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-12" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-28" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-28" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-28" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-48" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-36" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-40" /></td>
                    </tr>
                  ))
                ) : (
                  highRiskPlayersData.map((player, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{player.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{player.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{player.position}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center">{player.age}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getRiskScoreClass(player.riskScore)}`}>
                          {player.riskScore}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{player.primaryConcern}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{player.secondaryConcern}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getWorkloadStatusClass(player.workloadStatus)}`}>
                          {player.workloadStatus}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{player.monitoringStatus}</td>
                      <td className="px-6 py-4 text-sm">{player.recommendedActions}</td>
                      <td className="px-6 py-4 text-sm">{player.previousInjuries}</td>
                      <td className="px-6 py-4 text-sm">{player.preventionPlan}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Injury Prevention Plans Table */}
        <Card className="border border-neutral-light overflow-hidden">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Injury Prevention Programs</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Program</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Target Group</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Objective</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Key Components</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Duration</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Effectiveness</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Stakeholders</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Key Metrics</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Technologies</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Notes</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-28" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-36" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-48" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-28" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-28" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-36" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-36" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-36" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-40" /></td>
                    </tr>
                  ))
                ) : (
                  preventionPlans.map((plan, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{plan.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{plan.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{plan.targetGroup}</td>
                      <td className="px-6 py-4 text-sm">{plan.objective}</td>
                      <td className="px-6 py-4 text-sm">{plan.keyComponents}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{plan.duration}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getImplementationStatusClass(plan.implementationStatus)}`}>
                          {plan.implementationStatus}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{plan.effectiveness}</td>
                      <td className="px-6 py-4 text-sm">{plan.stakeholders}</td>
                      <td className="px-6 py-4 text-sm">{plan.keyMetrics}</td>
                      <td className="px-6 py-4 text-sm">{plan.integratedTechnologies}</td>
                      <td className="px-6 py-4 text-sm">{plan.notes}</td>
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

export default InjuryPredictionView;