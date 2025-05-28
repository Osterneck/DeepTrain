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
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";

interface ManufacturingOptimizationViewProps {
  isLoading: boolean;
}

const ManufacturingOptimizationView: FC<ManufacturingOptimizationViewProps> = ({ isLoading }) => {
  // Mock data for manufacturing metrics
  const manufacturingMetrics = [
    {
      name: "Production Efficiency",
      value: "94.8%",
      change: "+1.2%",
      changeType: "positive",
      description: "Actual vs planned output",
    },
    {
      name: "Quality Rate",
      value: "99.6%",
      change: "+0.3%",
      changeType: "positive",
      description: "Batches within specification",
    },
    {
      name: "Cycle Time",
      value: "18.5 hrs",
      change: "-2.0 hrs",
      changeType: "positive",
      description: "Average manufacturing time",
    },
    {
      name: "Operating Cost",
      value: "$428/kg",
      change: "-$12/kg",
      changeType: "positive",
      description: "Per unit production cost",
    },
  ];

  // Mock data for manufacturing facilities
  const facilitiesData = [
    { name: "Boston", capacity: 24000, utilization: 89, quality: 99.7 },
    { name: "Singapore", capacity: 32000, utilization: 92, quality: 99.8 },
    { name: "Dublin", capacity: 28000, utilization: 85, quality: 99.5 },
    { name: "San Francisco", capacity: 18000, utilization: 78, quality: 99.6 },
    { name: "Shanghai", capacity: 30000, utilization: 96, quality: 99.4 },
  ];

  // Mock data for process optimization
  const processOptimizationData = [
    { parameter: "Temperature", current: 72, target: 70, optimal: 68 },
    { parameter: "Pressure", current: 5.8, target: 6.0, optimal: 6.2 },
    { parameter: "pH", current: 7.2, target: 7.0, optimal: 6.8 },
    { parameter: "Duration", current: 18, target: 16, optimal: 15 },
    { parameter: "Concentration", current: 4.5, target: 4.8, optimal: 5.0 },
  ];

  // Mock data for batch quality trends
  const batchQualityData = [
    { month: "Jan", passing: 98.9, deviation: 0.8, rejection: 0.3 },
    { month: "Feb", passing: 99.1, deviation: 0.7, rejection: 0.2 },
    { month: "Mar", passing: 99.3, deviation: 0.5, rejection: 0.2 },
    { month: "Apr", passing: 99.4, deviation: 0.4, rejection: 0.2 },
    { month: "May", passing: 99.6, deviation: 0.3, rejection: 0.1 },
    { month: "Jun", passing: 99.7, deviation: 0.2, rejection: 0.1 },
  ];

  // Mock data for AI-driven optimization radar chart
  const optimizationRadarData = [
    {
      subject: "Yield",
      current: 85,
      target: 90,
      optimal: 95,
      fullMark: 100,
    },
    {
      subject: "Purity",
      current: 92,
      target: 95,
      optimal: 98,
      fullMark: 100,
    },
    {
      subject: "Energy",
      current: 70,
      target: 80,
      optimal: 90,
      fullMark: 100,
    },
    {
      subject: "Cost",
      current: 75,
      target: 85,
      optimal: 92,
      fullMark: 100,
    },
    {
      subject: "Cycle Time",
      current: 80,
      target: 88,
      optimal: 95,
      fullMark: 100,
    },
    {
      subject: "Consistency",
      current: 88,
      target: 92,
      optimal: 96,
      fullMark: 100,
    },
  ];

  // Mock data for production batches
  const productionBatches = [
    {
      id: "B-2025-4289",
      product: "Avastoronib 10mg",
      facility: "Boston",
      startDate: "2025-05-12",
      completionDate: "2025-05-14",
      yield: "98.2%",
      purity: "99.86%",
      status: "Completed",
      batchSize: "250 kg",
      operator: "J. Thompson",
    },
    {
      id: "B-2025-4290",
      product: "Nexotinol 25mg",
      facility: "Singapore",
      startDate: "2025-05-13",
      completionDate: "2025-05-15",
      yield: "97.8%",
      purity: "99.92%",
      status: "Completed",
      batchSize: "320 kg",
      operator: "L. Chen",
    },
    {
      id: "B-2025-4291",
      product: "Cardiostat 50mg",
      facility: "Dublin",
      startDate: "2025-05-14",
      completionDate: "2025-05-16",
      yield: "96.5%",
      purity: "99.78%",
      status: "Quality Testing",
      batchSize: "280 kg",
      operator: "S. O'Brien",
    },
    {
      id: "B-2025-4292",
      product: "Luminavir 100mg",
      facility: "San Francisco",
      startDate: "2025-05-15",
      completionDate: "2025-05-17",
      yield: "In Progress",
      purity: "In Progress",
      status: "In Production",
      batchSize: "180 kg",
      operator: "M. Garcia",
    },
    {
      id: "B-2025-4293",
      product: "Immunorilide 5mg",
      facility: "Shanghai",
      startDate: "2025-05-16",
      completionDate: "2025-05-18",
      yield: "Pending",
      purity: "Pending",
      status: "Scheduled",
      batchSize: "300 kg",
      operator: "H. Zhang",
    },
  ];

  // Color palette for charts
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Quality Testing': return 'bg-blue-100 text-blue-800';
      case 'In Production': return 'bg-purple-100 text-purple-800';
      case 'Scheduled': return 'bg-amber-100 text-amber-800';
      case 'On Hold': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        {/* Manufacturing Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {manufacturingMetrics.map((metric, index) => (
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
          {/* Facilities Bar Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Manufacturing Facilities Performance</h2>
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
                      data={facilitiesData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                      <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                      <Tooltip />
                      <Legend />
                      <Bar 
                        yAxisId="left"
                        dataKey="capacity" 
                        name="Capacity (kg/month)" 
                        fill="#8884d8" 
                        barSize={30}
                      />
                      <Bar 
                        yAxisId="right"
                        dataKey="utilization" 
                        name="Utilization (%)" 
                        fill="#82ca9d" 
                        barSize={30}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </Card>

          {/* Process Optimization Bar Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Process Parameter Optimization</h2>
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
                      data={processOptimizationData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      layout="vertical"
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis type="category" dataKey="parameter" width={100} />
                      <Tooltip />
                      <Legend />
                      <Bar 
                        dataKey="current" 
                        name="Current" 
                        fill="#ff8042" 
                        barSize={20}
                      />
                      <Bar 
                        dataKey="target" 
                        name="Target" 
                        fill="#8884d8" 
                        barSize={20}
                      />
                      <Bar 
                        dataKey="optimal" 
                        name="Optimal (AI predicted)" 
                        fill="#82ca9d" 
                        barSize={20}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* Batch Quality Trends Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Batch Quality Trends (%)</h2>
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
                    data={batchQualityData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="passing" 
                      name="Passing Specification (%)" 
                      stroke="#82ca9d" 
                      activeDot={{ r: 8 }} 
                      strokeWidth={2}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="deviation" 
                      name="Process Deviation (%)" 
                      stroke="#ffc658" 
                      activeDot={{ r: 8 }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="rejection" 
                      name="Batch Rejection (%)" 
                      stroke="#ff8042" 
                      activeDot={{ r: 8 }} 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* AI-Driven Optimization Radar Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">AI-Driven Manufacturing Optimization</h2>
          </div>
          
          {isLoading ? (
            <div className="chart-placeholder">
              <Skeleton className="h-80 w-full" />
            </div>
          ) : (
            <div className="p-4">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart outerRadius={120} width={500} height={300} data={optimizationRadarData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} />
                    <Radar
                      name="Current"
                      dataKey="current"
                      stroke="#8884d8"
                      fill="#8884d8"
                      fillOpacity={0.4}
                    />
                    <Radar
                      name="Target"
                      dataKey="target"
                      stroke="#ff8042"
                      fill="#ff8042"
                      fillOpacity={0.4}
                    />
                    <Radar
                      name="AI Optimal"
                      dataKey="optimal"
                      stroke="#82ca9d"
                      fill="#82ca9d"
                      fillOpacity={0.4}
                    />
                    <Legend />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Production Batches Table */}
        <Card className="border border-neutral-light overflow-hidden">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Recent Production Batches</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Batch ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Product</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Facility</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Start Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Completion Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Yield</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Purity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Batch Size</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Operator</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                    </tr>
                  ))
                ) : (
                  productionBatches.map((batch, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{batch.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{batch.product}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{batch.facility}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{batch.startDate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{batch.completionDate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{batch.yield}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{batch.purity}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(batch.status)}`}>
                          {batch.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{batch.batchSize}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{batch.operator}</td>
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

export default ManufacturingOptimizationView;