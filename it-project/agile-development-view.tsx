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
} from "recharts";

interface AgileDevViewProps {
  isLoading: boolean;
}

const AgileDevView: FC<AgileDevViewProps> = ({ isLoading }) => {
  // Mock data for sprint metrics
  const sprintMetrics = [
    {
      name: "Sprint Velocity",
      value: "42",
      change: "+4",
      changeType: "positive",
      description: "Average story points completed per sprint",
    },
    {
      name: "Delivery Rate",
      value: "94%",
      change: "+2%",
      changeType: "positive",
      description: "Percentage of committed stories delivered",
    },
    {
      name: "Defect Rate",
      value: "1.2",
      change: "-0.3",
      changeType: "positive",
      description: "Average number of defects per story",
    },
    {
      name: "Sprint Health",
      value: "86%",
      change: "+5%",
      changeType: "positive",
      description: "Overall sprint health based on metrics",
    },
  ];

  // Mock data for velocity over time
  const velocityData = [
    { sprint: "Sprint 1", velocity: 32, predicted: 30 },
    { sprint: "Sprint 2", velocity: 36, predicted: 34 },
    { sprint: "Sprint 3", velocity: 33, predicted: 36 },
    { sprint: "Sprint 4", velocity: 38, predicted: 35 },
    { sprint: "Sprint 5", velocity: 40, predicted: 39 },
    { sprint: "Sprint 6", velocity: 37, predicted: 40 },
    { sprint: "Sprint 7", velocity: 42, predicted: 39 },
    { sprint: "Sprint 8", velocity: 41, predicted: 41 },
    { sprint: "Sprint 9", velocity: 43, predicted: 42 },
    { sprint: "Sprint 10", velocity: 42, predicted: 43 },
    { sprint: "Sprint 11", velocity: null, predicted: 45 },
    { sprint: "Sprint 12", velocity: null, predicted: 46 },
  ];

  // Mock data for story status distribution
  const storyStatusData = [
    { name: "Completed", value: 312 },
    { name: "In Progress", value: 87 },
    { name: "Ready for Dev", value: 45 },
    { name: "Blocked", value: 14 },
    { name: "Backlog", value: 218 },
  ];

  // Color palette for pie chart
  const COLORS = ['#4CAF50', '#2196F3', '#FFC107', '#F44336', '#9E9E9E'];

  // Mock data for team workload
  const teamWorkloadData = [
    { name: "Frontend Team", capacity: 100, allocated: 85, overallocated: 0 },
    { name: "Backend Team", capacity: 100, allocated: 95, overallocated: 0 },
    { name: "QA Team", capacity: 100, allocated: 75, overallocated: 0 },
    { name: "DevOps", capacity: 100, allocated: 110, overallocated: 10 },
    { name: "UX/UI", capacity: 100, allocated: 90, overallocated: 0 },
    { name: "Product", capacity: 100, allocated: 105, overallocated: 5 },
  ];

  // Mock data for active sprints
  const activeSprints = [
    {
      id: "SPR-2025-Q2-05",
      name: "Sprint 11",
      team: "Platform Team",
      startDate: "2025-05-15",
      endDate: "2025-05-28",
      status: "Active",
      progress: 65,
      storiesTotal: 28,
      storiesCompleted: 18,
      storyPoints: 42,
      pointsCompleted: 27,
      blockers: 2,
    },
    {
      id: "SPR-2025-Q2-04",
      name: "Sprint 7",
      team: "Mobile Team",
      startDate: "2025-05-08",
      endDate: "2025-05-21",
      status: "Active",
      progress: 85,
      storiesTotal: 24,
      storiesCompleted: 20,
      storyPoints: 36,
      pointsCompleted: 31,
      blockers: 1,
    },
    {
      id: "SPR-2025-Q2-03",
      name: "Sprint 5",
      team: "Integration Team",
      startDate: "2025-05-01",
      endDate: "2025-05-14",
      status: "Closing",
      progress: 95,
      storiesTotal: 26,
      storiesCompleted: 25,
      storyPoints: 38,
      pointsCompleted: 36,
      blockers: 0,
    },
    {
      id: "SPR-2025-Q2-02",
      name: "Sprint 14",
      team: "Data Team",
      startDate: "2025-05-15",
      endDate: "2025-05-28",
      status: "Active",
      progress: 50,
      storiesTotal: 22,
      storiesCompleted: 11,
      storyPoints: 34,
      pointsCompleted: 17,
      blockers: 3,
    },
  ];

  const statusColors = {
    "Active": "bg-green-100 text-green-800",
    "Closing": "bg-blue-100 text-blue-800",
    "Planning": "bg-amber-100 text-amber-800",
    "Blocked": "bg-red-100 text-red-800",
  };

  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        {/* Sprint Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {sprintMetrics.map((metric, index) => (
            <Card key={index} className="border border-neutral-light">
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-1">{metric.name}</h3>
                <div className="flex items-end space-x-2">
                  <div className="text-2xl font-bold">{metric.value}</div>
                  <div className={`text-sm ${metric.changeType === 'positive' ? 'text-success' : 'text-danger'}`}>
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
          {/* Velocity Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Sprint Velocity Trend</h2>
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
                      data={velocityData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="sprint" />
                      <YAxis domain={[0, 'dataMax + 5']} />
                      <Tooltip />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="velocity" 
                        name="Actual Velocity" 
                        stroke="#8884d8" 
                        strokeWidth={2}
                        activeDot={{ r: 8 }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="predicted" 
                        name="Predicted Velocity" 
                        stroke="#82ca9d" 
                        strokeWidth={2}
                        strokeDasharray="5 5"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </Card>

          {/* Story Status Distribution */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Story Status Distribution</h2>
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
                        data={storyStatusData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, value, percent }) => `${name}: ${value} (${(percent * 100).toFixed(0)}%)`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {storyStatusData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${value} stories`} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* Team Workload Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Team Workload (% of Capacity)</h2>
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
                    data={teamWorkloadData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    barSize={40}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, 120]} />
                    <Tooltip />
                    <Legend />
                    <Bar 
                      dataKey="allocated" 
                      name="Allocated" 
                      stackId="a"
                      fill="#8884d8" 
                    />
                    <Bar 
                      dataKey="overallocated" 
                      name="Overallocated" 
                      stackId="a"
                      fill="#FF0000" 
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Active Sprints */}
        <Card className="border border-neutral-light overflow-hidden">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Active Sprints</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Sprint ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Team</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Dates</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Progress</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Stories</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Points</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Blockers</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(4)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-40" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                    </tr>
                  ))
                ) : (
                  activeSprints.map((sprint, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{sprint.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{sprint.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{sprint.team}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{sprint.startDate} to {sprint.endDate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColors[sprint.status]}`}>
                          {sprint.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div 
                            className="bg-primary h-2.5 rounded-full" 
                            style={{ width: `${sprint.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-right block mt-1">{sprint.progress}%</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{sprint.storiesCompleted} / {sprint.storiesTotal}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{sprint.pointsCompleted} / {sprint.storyPoints}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold">
                        <span className={sprint.blockers > 0 ? "text-danger" : "text-success"}>
                          {sprint.blockers}
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

export default AgileDevView;