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

interface TransportationViewProps {
  isLoading: boolean;
}

const TransportationView: FC<TransportationViewProps> = ({ isLoading }) => {
  // Mock data for transportation metrics
  const transportationMetrics = [
    {
      name: "Road Condition Index",
      value: "72/100",
      change: "+3",
      changeType: "positive",
      description: "Overall highway infrastructure rating",
    },
    {
      name: "Daily Traffic Volume",
      value: "1.8M",
      change: "+2.5%",
      changeType: "neutral",
      description: "Average vehicles per day on state roads",
    },
    {
      name: "Transit Ridership",
      value: "285K",
      change: "+5.2%",
      changeType: "positive",
      description: "Daily public transit passenger count",
    },
    {
      name: "Road Projects",
      value: "37",
      change: "+4",
      changeType: "positive",
      description: "Active infrastructure construction projects",
    },
  ];

  // Mock data for transportation modes
  const transportationModeData = [
    { name: "Personal Vehicle", value: 68 },
    { name: "Public Transit", value: 15 },
    { name: "Rideshare/Taxi", value: 8 },
    { name: "Walking", value: 5 },
    { name: "Biking", value: 3 },
    { name: "Other", value: 1 },
  ];

  // Color palette for pie chart
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  // Mock data for traffic volume by time
  const trafficVolumeData = [
    { hour: "00:00", volume: 1250 },
    { hour: "01:00", volume: 850 },
    { hour: "02:00", volume: 650 },
    { hour: "03:00", volume: 450 },
    { hour: "04:00", volume: 580 },
    { hour: "05:00", volume: 1450 },
    { hour: "06:00", volume: 4250 },
    { hour: "07:00", volume: 8950 },
    { hour: "08:00", volume: 11250 },
    { hour: "09:00", volume: 9850 },
    { hour: "10:00", volume: 7650 },
    { hour: "11:00", volume: 8250 },
    { hour: "12:00", volume: 9550 },
    { hour: "13:00", volume: 8450 },
    { hour: "14:00", volume: 7850 },
    { hour: "15:00", volume: 8650 },
    { hour: "16:00", volume: 10850 },
    { hour: "17:00", volume: 12650 },
    { hour: "18:00", volume: 11250 },
    { hour: "19:00", volume: 8450 },
    { hour: "20:00", volume: 6250 },
    { hour: "21:00", volume: 4850 },
    { hour: "22:00", volume: 3250 },
    { hour: "23:00", volume: 2150 },
  ];

  // Mock data for road conditions by region
  const roadConditionData = [
    { region: "Northern", good: 45, fair: 35, poor: 20 },
    { region: "Southern", good: 55, fair: 30, poor: 15 },
    { region: "Eastern", good: 40, fair: 40, poor: 20 },
    { region: "Western", good: 60, fair: 25, poor: 15 },
    { region: "Central", good: 50, fair: 35, poor: 15 },
  ];

  // Mock data for active road projects
  const roadProjects = [
    {
      id: "PROJ-2025-042",
      name: "Highway 101 Expansion",
      location: "Northern Region, Miles 45-60",
      type: "Road Expansion",
      budget: "$85.2M",
      start: "2025-01-15",
      expected: "2026-08-30",
      status: "On Schedule",
      progress: 35,
      contractor: "Highway Construction Co.",
    },
    {
      id: "PROJ-2025-038",
      name: "West Bridge Rehabilitation",
      location: "Western Region, River Crossing",
      type: "Bridge Repair",
      budget: "$42.8M",
      start: "2024-11-20",
      expected: "2025-12-15",
      status: "Behind Schedule",
      progress: 28,
      contractor: "Bridge Systems Inc.",
    },
    {
      id: "PROJ-2025-035",
      name: "Central Transit Hub",
      location: "Central Region, Downtown",
      type: "Transit Center",
      budget: "$124.5M",
      start: "2024-08-10",
      expected: "2026-07-01",
      status: "On Schedule",
      progress: 45,
      contractor: "Urban Development Group",
    },
    {
      id: "PROJ-2025-032",
      name: "Eastern Highway Resurfacing",
      location: "Eastern Region, Miles 10-35",
      type: "Maintenance",
      budget: "$28.7M",
      start: "2025-03-15",
      expected: "2025-09-15",
      status: "Ahead of Schedule",
      progress: 65,
      contractor: "Pavement Solutions LLC",
    },
    {
      id: "PROJ-2025-028",
      name: "Southern Interchange Upgrade",
      location: "Southern Region, Junction 28",
      type: "Infrastructure",
      budget: "$68.3M",
      start: "2024-10-05",
      expected: "2026-04-15",
      status: "On Schedule",
      progress: 42,
      contractor: "Interstate Builders Corp.",
    },
  ];

  // Mock data for public transit performance
  const transitPerformance = [
    {
      route: "Blue Line (Rail)",
      onTimeRate: "94.2%",
      dailyRiders: "42,550",
      status: "Normal",
      incidents: "0",
      satisfaction: "4.2/5",
      nextArrival: "3 min",
    },
    {
      route: "Red Line (Rail)",
      onTimeRate: "91.5%",
      dailyRiders: "38,750",
      status: "Delayed",
      incidents: "1",
      satisfaction: "3.8/5",
      nextArrival: "8 min",
    },
    {
      route: "Route 10 (Bus)",
      onTimeRate: "88.7%",
      dailyRiders: "12,280",
      status: "Normal",
      incidents: "0",
      satisfaction: "4.0/5",
      nextArrival: "5 min",
    },
    {
      route: "Express 5 (Bus)",
      onTimeRate: "92.3%",
      dailyRiders: "18,450",
      status: "Normal",
      incidents: "0",
      satisfaction: "4.3/5",
      nextArrival: "12 min",
    },
    {
      route: "Green Line (Rail)",
      onTimeRate: "93.8%",
      dailyRiders: "36,820",
      status: "Normal",
      incidents: "0",
      satisfaction: "4.1/5",
      nextArrival: "4 min",
    },
  ];

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'On Schedule': return 'bg-green-100 text-green-800';
      case 'Behind Schedule': return 'bg-red-100 text-red-800';
      case 'Ahead of Schedule': return 'bg-blue-100 text-blue-800';
      case 'Delayed': return 'bg-amber-100 text-amber-800';
      case 'Normal': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        {/* Transportation Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {transportationMetrics.map((metric, index) => (
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
          {/* Transportation Mode Pie Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Transportation Mode Distribution</h2>
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
                        data={transportationModeData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {transportationModeData.map((entry, index) => (
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

          {/* Traffic Volume Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">24-Hour Traffic Volume</h2>
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
                      data={trafficVolumeData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="hour" />
                      <YAxis />
                      <Tooltip formatter={(value) => `${value.toLocaleString()} vehicles`} />
                      <Area 
                        type="monotone" 
                        dataKey="volume" 
                        name="Traffic Volume" 
                        stroke="#8884d8" 
                        fill="#8884d8" 
                        fillOpacity={0.5}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* Road Conditions Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Road Conditions by Region (%)</h2>
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
                    data={roadConditionData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    layout="vertical"
                    barSize={20}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis type="category" dataKey="region" width={80} />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Legend />
                    <Bar 
                      dataKey="good" 
                      name="Good Condition" 
                      stackId="a" 
                      fill="#4CAF50" 
                    />
                    <Bar 
                      dataKey="fair" 
                      name="Fair Condition" 
                      stackId="a" 
                      fill="#FFC107" 
                    />
                    <Bar 
                      dataKey="poor" 
                      name="Poor Condition" 
                      stackId="a" 
                      fill="#F44336" 
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Road Projects Table */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Major Road Projects</h2>
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
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Progress</th>
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
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                    </tr>
                  ))
                ) : (
                  roadProjects.map((project, index) => (
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
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div 
                            className="bg-primary h-2.5 rounded-full" 
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-right block mt-1">{project.progress}%</span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Public Transit Table */}
        <Card className="border border-neutral-light overflow-hidden">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Public Transit Performance</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Route</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">On-Time Rate</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Daily Riders</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Incidents</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Satisfaction</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Next Arrival</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                    </tr>
                  ))
                ) : (
                  transitPerformance.map((transit, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{transit.route}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{transit.onTimeRate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{transit.dailyRiders}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(transit.status)}`}>
                          {transit.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center">{transit.incidents}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{transit.satisfaction}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{transit.nextArrival}</td>
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

export default TransportationView;