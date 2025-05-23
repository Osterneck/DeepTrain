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
  Radar
} from "recharts";

interface TrainingSimulationViewProps {
  isLoading: boolean;
}

const TrainingSimulationView: FC<TrainingSimulationViewProps> = ({ isLoading }) => {
  // Mock data for training metrics
  const trainingMetrics = [
    {
      name: "Effectiveness",
      value: "86.2%",
      change: "+3.5%",
      changeType: "positive",
      description: "Overall training outcomes",
    },
    {
      name: "Completion Rate",
      value: "92.7%",
      change: "+1.8%",
      changeType: "positive",
      description: "Personnel finishing training",
    },
    {
      name: "Skills Improvement",
      value: "38.4%",
      change: "+5.2%",
      changeType: "positive",
      description: "Average skills growth",
    },
    {
      name: "Time Efficiency",
      value: "76.8%",
      change: "+4.3%",
      changeType: "positive",
      description: "Training time optimization",
    },
  ];

  // Mock data for training types
  const trainingTypesData = [
    { name: "Virtual Reality", value: 35 },
    { name: "Live Exercise", value: 25 },
    { name: "Classroom", value: 15 },
    { name: "Field Training", value: 20 },
    { name: "Tabletop Exercise", value: 5 },
  ];

  // Color palette for charts
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  // Mock data for skills performance radar
  const skillsPerformanceData = [
    { subject: "Combat Readiness", baseline: 65, current: 85, target: 90 },
    { subject: "Command & Control", baseline: 60, current: 78, target: 85 },
    { subject: "Tactical Planning", baseline: 70, current: 82, target: 90 },
    { subject: "Technical Skills", baseline: 75, current: 88, target: 92 },
    { subject: "Communication", baseline: 68, current: 80, target: 88 },
    { subject: "Adaptability", baseline: 62, current: 75, target: 85 },
  ];

  // Mock data for training progression
  const trainingProgressionData = [
    { week: 1, performance: 52, confidence: 48 },
    { week: 2, performance: 58, confidence: 52 },
    { week: 3, performance: 65, confidence: 60 },
    { week: 4, performance: 72, confidence: 68 },
    { week: 5, performance: 78, confidence: 75 },
    { week: 6, performance: 81, confidence: 80 },
    { week: 7, performance: 85, confidence: 82 },
    { week: 8, performance: 86, confidence: 85 },
  ];

  // Mock data for unit training performance
  const unitPerformanceData = [
    { unit: "Alpha Team", performance: 88, readiness: 85, completion: 95 },
    { unit: "Bravo Squad", performance: 82, readiness: 80, completion: 90 },
    { unit: "Charlie Platoon", performance: 75, readiness: 72, completion: 88 },
    { unit: "Delta Company", performance: 80, readiness: 78, completion: 92 },
    { unit: "Echo Battalion", performance: 72, readiness: 70, completion: 85 },
  ];

  // Mock data for scenario success rates
  const scenarioSuccessData = [
    { scenario: "Urban Warfare", success: 82, difficulty: 85 },
    { scenario: "Desert Operations", success: 78, difficulty: 75 },
    { scenario: "Maritime Interdiction", success: 86, difficulty: 80 },
    { scenario: "Mountain Assault", success: 72, difficulty: 90 },
    { scenario: "Cyber Defense", success: 75, difficulty: 88 },
    { scenario: "Hostage Rescue", success: 80, difficulty: 92 },
  ];

  // Mock data for active training courses
  const activeTrainings = [
    {
      id: "TRAIN-2025-0348",
      name: "Advanced Urban Combat",
      type: "Live Exercise + VR",
      duration: "3 weeks",
      personnel: "120",
      instructor: "Col. J. Matthews",
      location: "Training Facility Alpha",
      startDate: "2025-05-08",
      completion: "65%",
      status: "In Progress",
      performance: "High",
    },
    {
      id: "TRAIN-2025-0352",
      name: "Joint Command Operations",
      type: "Tabletop + VR",
      duration: "2 weeks",
      personnel: "48",
      instructor: "Maj. S. Rodriguez",
      location: "Command Training Center",
      startDate: "2025-05-12",
      completion: "45%",
      status: "In Progress",
      performance: "Medium",
    },
    {
      id: "TRAIN-2025-0361",
      name: "Special Reconnaissance",
      type: "Field Training",
      duration: "4 weeks",
      personnel: "32",
      instructor: "Lt. Col. A. Johnson",
      location: "Mountain Training Range",
      startDate: "2025-04-28",
      completion: "80%",
      status: "In Progress",
      performance: "High",
    },
    {
      id: "TRAIN-2025-0372",
      name: "Cyber Defense Operations",
      type: "Virtual Simulation",
      duration: "3 weeks",
      personnel: "24",
      instructor: "Maj. L. Chen",
      location: "Cyber Training Center",
      startDate: "2025-05-10",
      completion: "55%",
      status: "In Progress",
      performance: "Medium-High",
    },
    {
      id: "TRAIN-2025-0385",
      name: "Tactical Combat Casualty Care",
      type: "Hands-on + VR",
      duration: "2 weeks",
      personnel: "64",
      instructor: "Capt. M. Santos, MD",
      location: "Medical Training Facility",
      startDate: "2025-05-15",
      completion: "35%",
      status: "In Progress",
      performance: "Medium",
    },
  ];

  // Mock data for training scenarios
  const trainingScenarios = [
    {
      id: "SCEN-2025-142",
      name: "Urban Assault Complex",
      type: "Combined Arms",
      difficulty: "High",
      objectives: "Building clearing, hostage rescue, sector control",
      terrain: "Urban",
      enemyComposition: "Mixed conventional and irregular",
      requiredSkills: "CQB, breaching, team coordination",
      successRate: "76%",
      averageCompletion: "43 minutes",
      recommendedFor: "Infantry, Special Forces",
    },
    {
      id: "SCEN-2025-158",
      name: "Desert Storm Operations",
      type: "Conventional Warfare",
      difficulty: "Medium",
      objectives: "Area control, supply line protection, forward deployment",
      terrain: "Desert",
      enemyComposition: "Conventional armor and infantry",
      requiredSkills: "Long-range engagement, heat management, navigation",
      successRate: "82%",
      averageCompletion: "3.5 hours",
      recommendedFor: "Armor, Infantry, Artillery",
    },
    {
      id: "SCEN-2025-163",
      name: "Maritime Interdiction",
      type: "Naval Operations",
      difficulty: "Medium-High",
      objectives: "Vessel boarding, contraband seizure, personnel security",
      terrain: "Maritime",
      enemyComposition: "Armed smugglers, potential hostages",
      requiredSkills: "Maritime boarding, search procedures, prisoner handling",
      successRate: "71%",
      averageCompletion: "58 minutes",
      recommendedFor: "Maritime Special Forces, Coast Guard",
    },
    {
      id: "SCEN-2025-179",
      name: "Mountain Warfare",
      type: "Small Unit Tactics",
      difficulty: "Very High",
      objectives: "High-altitude operation, observation post establishment",
      terrain: "Mountainous",
      enemyComposition: "Guerrilla forces with local knowledge",
      requiredSkills: "Mountaineering, cold weather operations, long-range patrol",
      successRate: "65%",
      averageCompletion: "72 hours",
      recommendedFor: "Mountain Infantry, Special Forces",
    },
    {
      id: "SCEN-2025-185",
      name: "Cyber Defense Exercise",
      type: "Technical Operation",
      difficulty: "High",
      objectives: "Network defense, threat identification, system recovery",
      terrain: "Virtual",
      enemyComposition: "Advanced Persistent Threat actors",
      requiredSkills: "Network security, forensics, incident response",
      successRate: "68%",
      averageCompletion: "8 hours",
      recommendedFor: "Cyber Command, Technical Units",
    },
  ];

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Scheduled': return 'bg-purple-100 text-purple-800';
      case 'Canceled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPerformanceClass = (performance: string) => {
    switch (performance) {
      case 'High': return 'bg-green-100 text-green-800';
      case 'Medium-High': return 'bg-emerald-100 text-emerald-800';
      case 'Medium': return 'bg-blue-100 text-blue-800';
      case 'Medium-Low': return 'bg-amber-100 text-amber-800';
      case 'Low': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyClass = (difficulty: string) => {
    switch (difficulty) {
      case 'Very High': return 'bg-red-100 text-red-800';
      case 'High': return 'bg-amber-100 text-amber-800';
      case 'Medium-High': return 'bg-yellow-100 text-yellow-800';
      case 'Medium': return 'bg-blue-100 text-blue-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        {/* Training Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {trainingMetrics.map((metric, index) => (
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
          {/* Training Types Pie Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Training Type Distribution</h2>
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
                        data={trainingTypesData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {trainingTypesData.map((entry, index) => (
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

          {/* Skills Performance Radar Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Skills Performance Assessment</h2>
            </div>
            
            {isLoading ? (
              <div className="chart-placeholder">
                <Skeleton className="h-80 w-full" />
              </div>
            ) : (
              <div className="p-4">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius={80} data={skillsPerformanceData}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="subject" />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} />
                      <Radar
                        name="Baseline"
                        dataKey="baseline"
                        stroke="#8884d8"
                        fill="#8884d8"
                        fillOpacity={0.1}
                      />
                      <Radar
                        name="Current"
                        dataKey="current"
                        stroke="#82ca9d"
                        fill="#82ca9d"
                        fillOpacity={0.4}
                      />
                      <Radar
                        name="Target"
                        dataKey="target"
                        stroke="#ff8042"
                        fill="#ff8042"
                        fillOpacity={0.1}
                        strokeDasharray="5 5"
                      />
                      <Legend />
                      <Tooltip />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* Training Progression Line Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Training Progression Over Time</h2>
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
                    data={trainingProgressionData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="week" label={{ value: 'Training Week', position: 'insideBottomRight', offset: -10 }} />
                    <YAxis domain={[40, 100]} label={{ value: 'Score (%)', angle: -90, position: 'insideLeft' }} />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="performance" 
                      name="Performance Score" 
                      stroke="#8884d8" 
                      activeDot={{ r: 8 }} 
                      strokeWidth={2}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="confidence" 
                      name="Confidence Level" 
                      stroke="#82ca9d" 
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Unit Performance Bar Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Unit Training Performance</h2>
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
                    data={unitPerformanceData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="unit" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Legend />
                    <Bar dataKey="performance" name="Performance" fill="#8884d8" />
                    <Bar dataKey="readiness" name="Readiness" fill="#82ca9d" />
                    <Bar dataKey="completion" name="Completion Rate" fill="#ffc658" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Scenario Success Rate Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Scenario Success vs Difficulty</h2>
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
                    data={scenarioSuccessData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="scenario" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Legend />
                    <Bar dataKey="success" name="Success Rate" fill="#82ca9d" />
                    <Bar dataKey="difficulty" name="Difficulty Level" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Active Training Courses Table */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Active Training Courses</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Course</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Duration</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Personnel</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Instructor</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Start Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Completion</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Performance</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-36" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-28" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-36" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                    </tr>
                  ))
                ) : (
                  activeTrainings.map((training, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{training.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{training.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{training.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{training.duration}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center">{training.personnel}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{training.instructor}</td>
                      <td className="px-6 py-4 text-sm">{training.location}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{training.startDate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <div className="w-24 bg-gray-200 rounded-full h-2.5">
                          <div 
                            className="bg-blue-600 h-2.5 rounded-full" 
                            style={{ width: training.completion }}
                          ></div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(training.status)}`}>
                          {training.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getPerformanceClass(training.performance)}`}>
                          {training.performance}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Training Scenarios Table */}
        <Card className="border border-neutral-light overflow-hidden">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Training Scenarios</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Scenario</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Difficulty</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Objectives</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Terrain</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Enemy</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Required Skills</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Success Rate</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Avg. Completion</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Recommended For</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-36" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-28" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-48" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-36" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-48" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-36" /></td>
                    </tr>
                  ))
                ) : (
                  trainingScenarios.map((scenario, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{scenario.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{scenario.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{scenario.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getDifficultyClass(scenario.difficulty)}`}>
                          {scenario.difficulty}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm">{scenario.objectives}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{scenario.terrain}</td>
                      <td className="px-6 py-4 text-sm">{scenario.enemyComposition}</td>
                      <td className="px-6 py-4 text-sm">{scenario.requiredSkills}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{scenario.successRate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{scenario.averageCompletion}</td>
                      <td className="px-6 py-4 text-sm">{scenario.recommendedFor}</td>
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

export default TrainingSimulationView;