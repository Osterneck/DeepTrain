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
  ZAxis,
  ComposedChart
} from "recharts";

interface TalentScoutingViewProps {
  isLoading: boolean;
}

const TalentScoutingView: FC<TalentScoutingViewProps> = ({ isLoading }) => {
  // Mock data for scouting metrics
  const scoutingMetrics = [
    {
      name: "Scouting ROI",
      value: "218%",
      change: "+24%",
      changeType: "positive",
      description: "Return on investment",
    },
    {
      name: "Prediction Accuracy",
      value: "82.5%",
      change: "+4.2%",
      changeType: "positive",
      description: "Career outcome matches",
    },
    {
      name: "Efficiency Gain",
      value: "36.8%",
      change: "+8.5%",
      changeType: "positive",
      description: "Time & resource savings",
    },
    {
      name: "Draft Success",
      value: "74.2%",
      change: "+6.1%",
      changeType: "positive",
      description: "Picks meeting goals",
    },
  ];

  // Mock data for scouting regions
  const scoutingRegionsData = [
    { name: "North America", value: 42 },
    { name: "Europe", value: 28 },
    { name: "South America", value: 15 },
    { name: "Africa", value: 8 },
    { name: "Asia", value: 5 },
    { name: "Australia/Oceania", value: 2 },
  ];

  // Color palette for charts
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  // Mock data for attribute importance
  const attributeImportanceData = [
    { attribute: "Athleticism", importance: 85, correlationToSuccess: 78 },
    { attribute: "Skill Level", importance: 92, correlationToSuccess: 88 },
    { attribute: "Basketball IQ", importance: 90, correlationToSuccess: 92 },
    { attribute: "Work Ethic", importance: 88, correlationToSuccess: 90 },
    { attribute: "Character", importance: 82, correlationToSuccess: 85 },
    { attribute: "Physical Metrics", importance: 75, correlationToSuccess: 72 },
    { attribute: "Health History", importance: 78, correlationToSuccess: 80 },
    { attribute: "Adaptability", importance: 80, correlationToSuccess: 82 },
  ];

  // Mock data for historical draft success
  const draftSuccessData = [
    { year: "2020", successRate: 68, leagueAverage: 60 },
    { year: "2021", successRate: 72, leagueAverage: 62 },
    { year: "2022", successRate: 70, leagueAverage: 61 },
    { year: "2023", successRate: 75, leagueAverage: 63 },
    { year: "2024", successRate: 74, leagueAverage: 65 },
    { year: "2025", successRate: 82, leagueAverage: 67 },
  ];

  // Mock data for prospect comparison radar chart
  const prospectRadarData = [
    { attribute: "Scoring", prospect1: 85, prospect2: 75, prospect3: 90, average: 70 },
    { attribute: "Ball Handling", prospect1: 78, prospect2: 88, prospect3: 72, average: 65 },
    { attribute: "Defense", prospect1: 72, prospect2: 70, prospect3: 85, average: 68 },
    { attribute: "Passing", prospect1: 80, prospect2: 90, prospect3: 65, average: 64 },
    { attribute: "Rebounding", prospect1: 75, prospect2: 65, prospect3: 88, average: 72 },
    { attribute: "Basketball IQ", prospect1: 82, prospect2: 85, prospect3: 75, average: 67 },
    { attribute: "Athleticism", prospect1: 88, prospect2: 72, prospect3: 90, average: 75 },
    { attribute: "Work Ethic", prospect1: 85, prospect2: 82, prospect3: 80, average: 70 },
  ];

  // Mock data for top prospects
  const topProspectsData = [
    {
      id: "PROS-2025-142",
      name: "Michael Johnson",
      position: "Point Guard",
      age: 19,
      country: "USA",
      height: "6'3\"",
      wingspan: "6'7\"",
      weight: "185 lbs",
      currentTeam: "Duke University",
      projectability: "High (92%)",
      strengths: "Exceptional court vision, elite ball-handling, basketball IQ",
      weaknesses: "Needs to improve outside shooting, slight frame",
      athleticProfile: "Above Average",
      overallRating: 94,
      developmentNeeds: "Strength training, consistent 3PT shot",
      projectedDraft: "Top 3",
      scoutingMethod: "Multiple In-Person + AI Analysis",
    },
    {
      id: "PROS-2025-156",
      name: "Stefan Petrovic",
      position: "Power Forward",
      age: 20,
      country: "Serbia",
      height: "6'10\"",
      wingspan: "7'1\"",
      weight: "230 lbs",
      currentTeam: "KK Partizan",
      projectability: "High (88%)",
      strengths: "Versatile scoring, passing ability, basketball fundamentals",
      weaknesses: "Lateral quickness, defensive awareness",
      athleticProfile: "Average",
      overallRating: 91,
      developmentNeeds: "Lateral movement, defensive positioning",
      projectedDraft: "Top 5",
      scoutingMethod: "European Scout Network + Video Analysis",
    },
    {
      id: "PROS-2025-163",
      name: "Jamal Williams",
      position: "Small Forward",
      age: 19,
      country: "USA",
      height: "6'8\"",
      wingspan: "7'0\"",
      weight: "210 lbs",
      currentTeam: "Kansas University",
      projectability: "High (90%)",
      strengths: "Explosive athleticism, defensive versatility, transition offense",
      weaknesses: "Inconsistent shooting, half-court creation",
      athleticProfile: "Elite",
      overallRating: 93,
      developmentNeeds: "Jump shot mechanics, half-court offense",
      projectedDraft: "Top 5",
      scoutingMethod: "Multiple In-Person + Performance Analytics",
    },
    {
      id: "PROS-2025-175",
      name: "Luis Gomez",
      position: "Shooting Guard",
      age: 18,
      country: "Spain",
      height: "6'6\"",
      wingspan: "6'8\"",
      weight: "195 lbs",
      currentTeam: "Real Madrid",
      projectability: "Medium-High (85%)",
      strengths: "Shooting, basketball IQ, off-ball movement",
      weaknesses: "Creating separation, on-ball defense",
      athleticProfile: "Above Average",
      overallRating: 89,
      developmentNeeds: "Strength, first step explosiveness",
      projectedDraft: "Lottery",
      scoutingMethod: "European Scout + AI Analysis",
    },
    {
      id: "PROS-2025-182",
      name: "Ndidi Okoro",
      position: "Center",
      age: 20,
      country: "Nigeria",
      height: "7'0\"",
      wingspan: "7'4\"",
      weight: "245 lbs",
      currentTeam: "Arizona State",
      projectability: "Medium-High (82%)",
      strengths: "Rim protection, rebounding, physical presence",
      weaknesses: "Offensive skillset, free throw shooting",
      athleticProfile: "Above Average",
      overallRating: 87,
      developmentNeeds: "Post moves, shooting touch",
      projectedDraft: "Lottery",
      scoutingMethod: "Multiple In-Person + Physical Analytics",
    },
  ];

  // Mock data for performance prediction analyses
  const performancePredictions = [
    {
      id: "PRED-2025-287",
      prospect: "Michael Johnson",
      rookiePoints: 14.5,
      rookieAssists: 6.2,
      rookieRebounds: 3.8,
      peakPoints: 22.4,
      peakAssists: 8.5,
      peakRebounds: 5.2,
      careerLength: "12-15 years",
      allStarProbability: "85%",
      allNBAProbability: "60%",
      developmentTrajectory: "Fast",
      bestFitTeams: "Atlanta, Chicago, Los Angeles",
      similarPlayers: "Chris Paul, Damian Lillard",
      recommendedDevelopment: "Shooting specialist coach, strength training",
      modelConfidence: "High",
    },
    {
      id: "PRED-2025-295",
      prospect: "Stefan Petrovic",
      rookiePoints: 11.2,
      rookieAssists: 2.5,
      rookieRebounds: 7.8,
      peakPoints: 18.5,
      peakAssists: 4.2,
      peakRebounds: 9.4,
      careerLength: "10-13 years",
      allStarProbability: "70%",
      allNBAProbability: "45%",
      developmentTrajectory: "Moderate",
      bestFitTeams: "San Antonio, Boston, Denver",
      similarPlayers: "Nikola Jokic (lighter version), Domantas Sabonis",
      recommendedDevelopment: "Defensive footwork, shooting range extension",
      modelConfidence: "High",
    },
    {
      id: "PRED-2025-308",
      prospect: "Jamal Williams",
      rookiePoints: 12.8,
      rookieAssists: 2.2,
      rookieRebounds: 5.5,
      peakPoints: 20.5,
      peakAssists: 3.8,
      peakRebounds: 7.2,
      careerLength: "10-14 years",
      allStarProbability: "75%",
      allNBAProbability: "50%",
      developmentTrajectory: "Fast",
      bestFitTeams: "Orlando, Memphis, Golden State",
      similarPlayers: "Jaylen Brown, Andrew Wiggins",
      recommendedDevelopment: "Shot creation, ball handling refinement",
      modelConfidence: "Medium-High",
    },
    {
      id: "PRED-2025-317",
      prospect: "Luis Gomez",
      rookiePoints: 9.5,
      rookieAssists: 2.8,
      rookieRebounds: 2.2,
      peakPoints: 17.8,
      peakAssists: 4.5,
      peakRebounds: 3.5,
      careerLength: "10-12 years",
      allStarProbability: "65%",
      allNBAProbability: "35%",
      developmentTrajectory: "Moderate",
      bestFitTeams: "Dallas, Miami, New York",
      similarPlayers: "Devin Booker, Bradley Beal",
      recommendedDevelopment: "Physical development, defensive awareness",
      modelConfidence: "Medium-High",
    },
    {
      id: "PRED-2025-325",
      prospect: "Ndidi Okoro",
      rookiePoints: 8.2,
      rookieAssists: 1.0,
      rookieRebounds: 8.5,
      peakPoints: 14.5,
      peakAssists: 2.2,
      peakRebounds: 12.5,
      careerLength: "8-12 years",
      allStarProbability: "55%",
      allNBAProbability: "25%",
      developmentTrajectory: "Slow",
      bestFitTeams: "Cleveland, Portland, Oklahoma City",
      similarPlayers: "Clint Capela, Robert Williams",
      recommendedDevelopment: "Offensive skill development, free throw mechanics",
      modelConfidence: "Medium",
    },
  ];

  const getProjectabilityClass = (projectability: string) => {
    if (projectability.includes("High")) return 'bg-green-100 text-green-800';
    if (projectability.includes("Medium-High")) return 'bg-teal-100 text-teal-800';
    if (projectability.includes("Medium")) return 'bg-yellow-100 text-yellow-800';
    if (projectability.includes("Medium-Low")) return 'bg-amber-100 text-amber-800';
    if (projectability.includes("Low")) return 'bg-red-100 text-red-800';
    return 'bg-gray-100 text-gray-800';
  };

  const getAthleticProfileClass = (profile: string) => {
    if (profile === "Elite") return 'bg-indigo-100 text-indigo-800';
    if (profile === "Above Average") return 'bg-blue-100 text-blue-800';
    if (profile === "Average") return 'bg-green-100 text-green-800';
    if (profile === "Below Average") return 'bg-yellow-100 text-yellow-800';
    if (profile === "Poor") return 'bg-red-100 text-red-800';
    return 'bg-gray-100 text-gray-800';
  };

  const getModelConfidenceClass = (confidence: string) => {
    if (confidence === "High") return 'bg-green-100 text-green-800';
    if (confidence === "Medium-High") return 'bg-teal-100 text-teal-800';
    if (confidence === "Medium") return 'bg-yellow-100 text-yellow-800';
    if (confidence === "Medium-Low") return 'bg-amber-100 text-amber-800';
    if (confidence === "Low") return 'bg-red-100 text-red-800';
    return 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        {/* Scouting Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {scoutingMetrics.map((metric, index) => (
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
          {/* Scouting Regions Pie Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Scouting Coverage by Region</h2>
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
                        data={scoutingRegionsData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {scoutingRegionsData.map((entry, index) => (
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

          {/* Attribute Importance Bar Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Attribute Importance for Success</h2>
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
                      data={attributeImportanceData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      layout="vertical"
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" domain={[0, 100]} />
                      <YAxis type="category" dataKey="attribute" width={120} />
                      <Tooltip formatter={(value) => `${value}%`} />
                      <Legend />
                      <Bar 
                        dataKey="importance" 
                        name="Model Weighting" 
                        fill="#8884d8" 
                        barSize={12}
                      />
                      <Bar 
                        dataKey="correlationToSuccess" 
                        name="Success Correlation" 
                        fill="#82ca9d" 
                        barSize={12}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* Historical Draft Success Line Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Historical Draft Success Rate (%)</h2>
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
                    data={draftSuccessData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis domain={[50, 90]} />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="successRate" 
                      name="Our Success Rate" 
                      stroke="#8884d8" 
                      activeDot={{ r: 8 }} 
                      strokeWidth={2}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="leagueAverage" 
                      name="League Average" 
                      stroke="#82ca9d" 
                      activeDot={{ r: 8 }}
                      strokeDasharray="5 5"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Prospect Comparison Radar Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Top Prospect Comparison</h2>
          </div>
          
          {isLoading ? (
            <div className="chart-placeholder">
              <Skeleton className="h-80 w-full" />
            </div>
          ) : (
            <div className="p-4">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius={80} data={prospectRadarData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="attribute" />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} />
                    <Radar
                      name="Michael Johnson"
                      dataKey="prospect1"
                      stroke="#8884d8"
                      fill="#8884d8"
                      fillOpacity={0.5}
                    />
                    <Radar
                      name="Stefan Petrovic"
                      dataKey="prospect2"
                      stroke="#82ca9d"
                      fill="#82ca9d"
                      fillOpacity={0.5}
                    />
                    <Radar
                      name="Jamal Williams"
                      dataKey="prospect3"
                      stroke="#ff8042"
                      fill="#ff8042"
                      fillOpacity={0.5}
                    />
                    <Radar
                      name="Average Draft Prospect"
                      dataKey="average"
                      stroke="#888"
                      fill="#888"
                      fillOpacity={0.1}
                      strokeDasharray="5 5"
                    />
                    <Legend />
                    <Tooltip formatter={(value) => `${value}/100`} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Top Prospects Table */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Top Draft Prospects</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Position</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Age</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Country</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Height</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Wingspan</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Weight</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Current Team</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Projectability</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Strengths</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Weaknesses</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Athletic Profile</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Rating</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Development Needs</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Projected Draft</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Scouting Method</th>
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
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-48" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-40" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-28" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-12" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-36" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                    </tr>
                  ))
                ) : (
                  topProspectsData.map((prospect, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{prospect.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{prospect.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{prospect.position}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center">{prospect.age}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{prospect.country}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{prospect.height}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{prospect.wingspan}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{prospect.weight}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{prospect.currentTeam}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getProjectabilityClass(prospect.projectability)}`}>
                          {prospect.projectability}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm">{prospect.strengths}</td>
                      <td className="px-6 py-4 text-sm">{prospect.weaknesses}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getAthleticProfileClass(prospect.athleticProfile)}`}>
                          {prospect.athleticProfile}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-bold">{prospect.overallRating}</td>
                      <td className="px-6 py-4 text-sm">{prospect.developmentNeeds}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{prospect.projectedDraft}</td>
                      <td className="px-6 py-4 text-sm">{prospect.scoutingMethod}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Performance Predictions Table */}
        <Card className="border border-neutral-light overflow-hidden">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Performance Prediction Analysis</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Prospect</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Rookie PPG</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Rookie APG</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Rookie RPG</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Peak PPG</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Peak APG</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Peak RPG</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Career Length</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">All-Star Prob.</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">All-NBA Prob.</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Development</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Best Fit Teams</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Similar Players</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Dev. Recommendation</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Model Confidence</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-40" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                    </tr>
                  ))
                ) : (
                  performancePredictions.map((prediction, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{prediction.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{prediction.prospect}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center">{prediction.rookiePoints}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center">{prediction.rookieAssists}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center">{prediction.rookieRebounds}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center">{prediction.peakPoints}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center">{prediction.peakAssists}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center">{prediction.peakRebounds}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{prediction.careerLength}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{prediction.allStarProbability}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{prediction.allNBAProbability}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{prediction.developmentTrajectory}</td>
                      <td className="px-6 py-4 text-sm">{prediction.bestFitTeams}</td>
                      <td className="px-6 py-4 text-sm">{prediction.similarPlayers}</td>
                      <td className="px-6 py-4 text-sm">{prediction.recommendedDevelopment}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getModelConfidenceClass(prediction.modelConfidence)}`}>
                          {prediction.modelConfidence}
                        </span>
                      </td>
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

export default TalentScoutingView;