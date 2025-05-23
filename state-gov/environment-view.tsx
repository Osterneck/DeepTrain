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
  ComposedChart,
  Area,
  AreaChart
} from "recharts";

interface EnvironmentViewProps {
  isLoading: boolean;
}

const EnvironmentView: FC<EnvironmentViewProps> = ({ isLoading }) => {
  // Mock data for environment metrics
  const environmentMetrics = [
    {
      name: "Air Quality Index",
      value: "72/100",
      change: "+3",
      changeType: "positive",
      description: "Average urban AQI rating",
    },
    {
      name: "Protected Land",
      value: "24.8%",
      change: "+0.5%",
      changeType: "positive",
      description: "State land under conservation",
    },
    {
      name: "Carbon Emissions",
      value: "-12.5%",
      change: "-2.2%",
      changeType: "positive",
      description: "YoY reduction in CO2 emissions",
    },
    {
      name: "Renewable Energy",
      value: "32.7%",
      change: "+4.1%",
      changeType: "positive",
      description: "Of total power generation",
    },
  ];

  // Mock data for emission sources
  const emissionSourcesData = [
    { name: "Transportation", value: 38 },
    { name: "Electricity", value: 32 },
    { name: "Industry", value: 15 },
    { name: "Agriculture", value: 8 },
    { name: "Residential", value: 7 },
  ];

  // Color palette for pie chart
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  // Mock data for renewable energy
  const renewableEnergyData = [
    { name: "Solar", value: 42 },
    { name: "Wind", value: 35 },
    { name: "Hydro", value: 14 },
    { name: "Geothermal", value: 6 },
    { name: "Biomass", value: 3 },
  ];

  // Mock data for air quality trends
  const airQualityTrendsData = [
    { month: "Jan", aqi: 68, pm25: 35 },
    { month: "Feb", aqi: 72, pm25: 32 },
    { month: "Mar", aqi: 75, pm25: 30 },
    { month: "Apr", aqi: 78, pm25: 28 },
    { month: "May", aqi: 72, pm25: 32 },
    { month: "Jun", aqi: null, pm25: null, forecast: true },
    { month: "Jul", aqi: null, pm25: null, forecast: true },
    { month: "Aug", aqi: null, pm25: null, forecast: true },
    { month: "Sep", aqi: null, pm25: null, forecast: true },
    { month: "Oct", aqi: null, pm25: null, forecast: true },
    { month: "Nov", aqi: null, pm25: null, forecast: true },
    { month: "Dec", aqi: null, pm25: null, forecast: true },
  ];

  // Mock data for water quality
  const waterQualityData = [
    { region: "Northern Lakes", good: 65, fair: 25, poor: 10 },
    { region: "Southern Coastal", good: 58, fair: 32, poor: 10 },
    { region: "Eastern Rivers", good: 52, fair: 35, poor: 13 },
    { region: "Western Watersheds", good: 72, fair: 20, poor: 8 },
    { region: "Central Aquifers", good: 68, fair: 22, poor: 10 },
  ];

  // Mock data for active environmental projects
  const environmentalProjects = [
    {
      id: "ENV-2025-042",
      name: "Northern Watershed Restoration",
      location: "Northern Region, Forest Preserve",
      type: "Water Conservation",
      budget: "$4.8M",
      start: "2025-01-15",
      expected: "2027-06-30",
      status: "On Schedule",
      impact: "High",
      partner: "Nature Conservancy",
    },
    {
      id: "ENV-2025-038",
      name: "Urban Solar Initiative",
      location: "Metro Region, Multiple Sites",
      type: "Renewable Energy",
      budget: "$12.2M",
      start: "2024-11-20",
      expected: "2026-08-15",
      status: "Ahead of Schedule",
      impact: "High",
      partner: "SolarCity Corp.",
    },
    {
      id: "ENV-2025-035",
      name: "Wetland Biodiversity Study",
      location: "Eastern Region, Coastal Zone",
      type: "Research",
      budget: "$1.5M",
      start: "2025-03-10",
      expected: "2026-03-01",
      status: "On Schedule",
      impact: "Medium",
      partner: "State University",
    },
    {
      id: "ENV-2025-032",
      name: "Farm Runoff Mitigation",
      location: "Central Region, Agricultural Belt",
      type: "Water Quality",
      budget: "$3.2M",
      start: "2024-09-15",
      expected: "2025-12-15",
      status: "Behind Schedule",
      impact: "Medium",
      partner: "Agricultural Coalition",
    },
    {
      id: "ENV-2025-028",
      name: "Urban Air Quality Monitors",
      location: "Multiple Urban Centers",
      type: "Air Quality",
      budget: "$2.4M",
      start: "2025-02-01",
      expected: "2025-11-30",
      status: "On Schedule",
      impact: "Medium",
      partner: "Clean Air Alliance",
    },
  ];

  // Mock data for protected areas
  const protectedAreas = [
    {
      id: "PA-2025-001",
      name: "Northern Forest Preserve",
      type: "National Forest",
      size: "280,000 acres",
      established: "1975",
      species: "450+",
      visitation: "850,000/year",
      status: "Well Preserved",
      threats: "Low - Invasive Species",
    },
    {
      id: "PA-2025-002",
      name: "Blue River Watershed",
      type: "State Conservation Area",
      size: "85,000 acres",
      established: "1992",
      species: "320+",
      visitation: "320,000/year",
      status: "Well Preserved",
      threats: "Medium - Development Pressure",
    },
    {
      id: "PA-2025-003",
      name: "Coastal Wetlands Reserve",
      type: "Wildlife Refuge",
      size: "42,000 acres",
      established: "1988",
      species: "280+",
      visitation: "150,000/year",
      status: "Moderately Preserved",
      threats: "High - Climate Change, Sea Level",
    },
    {
      id: "PA-2025-004",
      name: "Western Canyon Lands",
      type: "National Monument",
      size: "120,000 acres",
      established: "2002",
      species: "210+",
      visitation: "680,000/year",
      status: "Well Preserved",
      threats: "Medium - Tourism Impact",
    },
    {
      id: "PA-2025-005",
      name: "Central Tallgrass Prairie",
      type: "State Park",
      size: "18,000 acres",
      established: "1985",
      species: "180+",
      visitation: "220,000/year",
      status: "Restoration Needed",
      threats: "High - Habitat Fragmentation",
    },
  ];

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'On Schedule': return 'bg-green-100 text-green-800';
      case 'Behind Schedule': return 'bg-red-100 text-red-800';
      case 'Ahead of Schedule': return 'bg-blue-100 text-blue-800';
      case 'Well Preserved': return 'bg-green-100 text-green-800';
      case 'Moderately Preserved': return 'bg-amber-100 text-amber-800';
      case 'Restoration Needed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getImpactClass = (impact: string) => {
    switch (impact) {
      case 'High': return 'text-success font-semibold';
      case 'Medium': return 'text-amber-600';
      case 'Low': return 'text-neutral-dark';
      default: return 'text-neutral-dark';
    }
  };

  const getThreatClass = (threats: string) => {
    if (threats.includes('High')) return 'text-danger font-semibold';
    if (threats.includes('Medium')) return 'text-amber-600';
    if (threats.includes('Low')) return 'text-success';
    return 'text-neutral-dark';
  };

  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        {/* Environment Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {environmentMetrics.map((metric, index) => (
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
          {/* Emission Sources Pie Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Carbon Emission Sources</h2>
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
                        data={emissionSourcesData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {emissionSourcesData.map((entry, index) => (
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

          {/* Renewable Energy Pie Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Renewable Energy Mix</h2>
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
                        data={renewableEnergyData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {renewableEnergyData.map((entry, index) => (
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

        {/* Air Quality Trends Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Air Quality Trends (2025)</h2>
          </div>
          
          {isLoading ? (
            <div className="chart-placeholder">
              <Skeleton className="h-80 w-full" />
            </div>
          ) : (
            <div className="p-4">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart
                    data={airQualityTrendsData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis yAxisId="left" orientation="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Legend />
                    <Bar 
                      yAxisId="left" 
                      dataKey="aqi" 
                      name="Air Quality Index" 
                      barSize={20} 
                      fill="#8884d8" 
                    />
                    <Line 
                      yAxisId="right" 
                      type="monotone" 
                      dataKey="pm25" 
                      name="PM2.5 Level" 
                      stroke="#ff7300" 
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Water Quality Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Water Quality by Region (%)</h2>
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
                    data={waterQualityData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    layout="vertical"
                    barSize={20}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis type="category" dataKey="region" width={120} />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Legend />
                    <Bar 
                      dataKey="good" 
                      name="Good Quality" 
                      stackId="a" 
                      fill="#4CAF50" 
                    />
                    <Bar 
                      dataKey="fair" 
                      name="Fair Quality" 
                      stackId="a" 
                      fill="#FFC107" 
                    />
                    <Bar 
                      dataKey="poor" 
                      name="Poor Quality" 
                      stackId="a" 
                      fill="#F44336" 
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Environmental Projects Table */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Active Environmental Projects</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Project ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Budget</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Timeframe</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Impact</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Partner</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-40" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-48" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                    </tr>
                  ))
                ) : (
                  environmentalProjects.map((project, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{project.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{project.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{project.type}</td>
                      <td className="px-6 py-4 text-sm">{project.location}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold">{project.budget}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {project.start} to {project.expected}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(project.status)}`}>
                          {project.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={getImpactClass(project.impact)}>
                          {project.impact}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{project.partner}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Protected Areas Table */}
        <Card className="border border-neutral-light overflow-hidden">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Protected Natural Areas</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Size</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Established</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Species</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Annual Visitation</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Threats</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-40" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-40" /></td>
                    </tr>
                  ))
                ) : (
                  protectedAreas.map((area, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{area.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{area.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{area.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{area.size}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{area.established}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{area.species}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{area.visitation}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(area.status)}`}>
                          {area.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <span className={getThreatClass(area.threats)}>
                          {area.threats}
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

export default EnvironmentView;