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
  Sankey,
  Scatter,
  ScatterChart,
  ZAxis
} from "recharts";

interface SupplyChainViewProps {
  isLoading: boolean;
}

const SupplyChainView: FC<SupplyChainViewProps> = ({ isLoading }) => {
  // Mock data for supply chain metrics
  const supplyChainMetrics = [
    {
      name: "Inventory Turnover",
      value: "4.8x",
      change: "+0.3x",
      changeType: "positive",
      description: "Annual inventory cycles",
    },
    {
      name: "Lead Time",
      value: "42 days",
      change: "-3 days",
      changeType: "positive",
      description: "Order to delivery time",
    },
    {
      name: "On-time Delivery",
      value: "96.8%",
      change: "+1.2%",
      changeType: "positive",
      description: "Shipments on schedule",
    },
    {
      name: "Supply Risk",
      value: "LOW",
      change: "-5%",
      changeType: "positive",
      description: "Weighted risk score",
    },
  ];

  // Mock data for global inventory distribution
  const inventoryDistributionData = [
    { name: "Raw Materials", value: 28 },
    { name: "Work In Progress", value: 17 },
    { name: "Finished Goods", value: 45 },
    { name: "Safety Stock", value: 10 },
  ];

  // Color palette for charts
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  // Mock data for regional inventory levels
  const regionalInventoryData = [
    { region: "North America", raw: 12000, wip: 8000, finished: 22000 },
    { region: "Europe", raw: 9500, wip: 6200, finished: 18000 },
    { region: "Asia Pacific", raw: 14500, wip: 7800, finished: 23500 },
    { region: "Latin America", raw: 4200, wip: 2500, finished: 8600 },
    { region: "Middle East", raw: 2800, wip: 1800, finished: 5400 },
  ];

  // Mock data for supplier performance
  const supplierPerformanceData = [
    { name: "Quality (%)", tier1: 98.5, tier2: 97.2, tier3: 94.8 },
    { name: "On-time (%)", tier1: 97.8, tier2: 95.6, tier3: 92.3 },
    { name: "Cost Efficiency", tier1: 95.2, tier2: 93.8, tier3: 90.5 },
    { name: "Responsiveness", tier1: 94.5, tier2: 91.2, tier3: 88.0 },
    { name: "Risk Score", tier1: 97.0, tier2: 94.5, tier3: 91.2 },
  ];

  // Mock data for shipment status
  const shipmentStatusData = [
    { name: "On Schedule", value: 82 },
    { name: "Minor Delay", value: 12 },
    { name: "Major Delay", value: 4 },
    { name: "In Transit", value: 2 },
  ];

  // Mock data for demand forecast accuracy
  const forecastAccuracyData = [
    { month: "Jan", actual: 96.8, target: 95.0 },
    { month: "Feb", actual: 95.2, target: 95.0 },
    { month: "Mar", actual: 97.1, target: 95.0 },
    { month: "Apr", actual: 96.5, target: 95.0 },
    { month: "May", actual: 98.2, target: 95.0 },
    { month: "Jun", actual: 94.8, target: 95.0 },
    { month: "Jul", actual: 95.9, target: 95.0 },
    { month: "Aug", actual: 97.2, target: 95.0 },
    { month: "Sep", actual: 96.4, target: 95.0 },
    { month: "Oct", actual: 95.8, target: 95.0 },
    { month: "Nov", actual: 96.2, target: 95.0 },
    { month: "Dec", actual: 96.9, target: 95.0 },
  ];

  // Mock data for active shipments
  const activeShipments = [
    {
      id: "SHIP-2025-5241",
      origin: "Boston, MA",
      destination: "London, UK",
      contents: "Avastoronib API",
      quantity: "450 kg",
      carrier: "Global Pharma Logistics",
      departureDate: "2025-05-12",
      estimatedArrival: "2025-05-18",
      status: "In Transit",
      tracking: "GLX42857612",
    },
    {
      id: "SHIP-2025-5242",
      origin: "Singapore",
      destination: "San Francisco, CA",
      contents: "Nexotinol Finished Product",
      quantity: "25,000 units",
      carrier: "PharmaExpress",
      departureDate: "2025-05-14",
      estimatedArrival: "2025-05-21",
      status: "On Schedule",
      tracking: "PEX72485136",
    },
    {
      id: "SHIP-2025-5243",
      origin: "Shanghai, CN",
      destination: "Dublin, IR",
      contents: "Raw Materials (Multiple)",
      quantity: "1,200 kg",
      carrier: "MediFreight",
      departureDate: "2025-05-10",
      estimatedArrival: "2025-05-22",
      status: "Minor Delay",
      tracking: "MFT58136479",
    },
    {
      id: "SHIP-2025-5244",
      origin: "Basel, CH",
      destination: "Tokyo, JP",
      contents: "Cardiostat Finished Product",
      quantity: "18,000 units",
      carrier: "Global Pharma Logistics",
      departureDate: "2025-05-15",
      estimatedArrival: "2025-05-25",
      status: "On Schedule",
      tracking: "GLX53197284",
    },
    {
      id: "SHIP-2025-5245",
      origin: "Chicago, IL",
      destination: "São Paulo, BR",
      contents: "Luminavir API",
      quantity: "280 kg",
      carrier: "PharmaExpress",
      departureDate: "2025-05-16",
      estimatedArrival: "2025-05-24",
      status: "On Schedule",
      tracking: "PEX85217463",
    },
  ];

  // Mock data for critical suppliers
  const criticalSuppliers = [
    {
      id: "SUP-2025-142",
      name: "AdvancedPharmaChemicals",
      category: "API Precursors",
      location: "Frankfurt, Germany",
      riskScore: "Low",
      reliabilityRating: "A+",
      leadTime: "28 days",
      lastAudit: "2025-03-12",
      qualityScore: "98.6%",
      contingencyPlan: "Secondary supplier identified",
    },
    {
      id: "SUP-2025-158",
      name: "PrecisionMolecular Inc.",
      category: "Custom Synthesis",
      location: "Cambridge, MA",
      riskScore: "Low",
      reliabilityRating: "A",
      leadTime: "35 days",
      lastAudit: "2025-02-28",
      qualityScore: "97.2%",
      contingencyPlan: "Process validation with alt. supplier",
    },
    {
      id: "SUP-2025-163",
      name: "AsiaPharmaChem Ltd.",
      category: "Raw Materials",
      location: "Singapore",
      riskScore: "Medium",
      reliabilityRating: "B+",
      leadTime: "42 days",
      lastAudit: "2025-01-18",
      qualityScore: "95.8%",
      contingencyPlan: "Buffer stock policy in place",
    },
    {
      id: "SUP-2025-187",
      name: "BioPackaging Systems",
      category: "Primary Packaging",
      location: "Lyon, France",
      riskScore: "Low",
      reliabilityRating: "A",
      leadTime: "24 days",
      lastAudit: "2025-04-05",
      qualityScore: "98.1%",
      contingencyPlan: "Dual-source strategy",
    },
    {
      id: "SUP-2025-192",
      name: "GlobalExcipients Corp.",
      category: "Excipients",
      location: "Toronto, Canada",
      riskScore: "Low",
      reliabilityRating: "A-",
      leadTime: "21 days",
      lastAudit: "2025-03-22",
      qualityScore: "96.5%",
      contingencyPlan: "Safety stock maintained",
    },
  ];

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'On Schedule': return 'bg-green-100 text-green-800';
      case 'Minor Delay': return 'bg-amber-100 text-amber-800';
      case 'Major Delay': return 'bg-red-100 text-red-800';
      case 'In Transit': return 'bg-blue-100 text-blue-800';
      case 'Delivered': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRiskClass = (risk: string) => {
    switch (risk) {
      case 'Low': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-amber-100 text-amber-800';
      case 'High': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRatingClass = (rating: string) => {
    if (rating.startsWith('A+')) return 'text-green-600 font-semibold';
    if (rating.startsWith('A')) return 'text-green-500';
    if (rating.startsWith('B+')) return 'text-blue-600';
    if (rating.startsWith('B')) return 'text-blue-500';
    if (rating.startsWith('C')) return 'text-amber-500';
    return 'text-neutral-dark';
  };

  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        {/* Supply Chain Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {supplyChainMetrics.map((metric, index) => (
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
          {/* Inventory Distribution Pie Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Global Inventory Distribution</h2>
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
                        data={inventoryDistributionData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {inventoryDistributionData.map((entry, index) => (
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

          {/* Shipment Status Pie Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Current Shipment Status</h2>
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
                        data={shipmentStatusData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {shipmentStatusData.map((entry, index) => (
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

        {/* Regional Inventory Bar Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Regional Inventory Levels (kg)</h2>
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
                    data={regionalInventoryData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="region" />
                    <YAxis />
                    <Tooltip formatter={(value) => `${value.toLocaleString()} kg`} />
                    <Legend />
                    <Bar 
                      dataKey="raw" 
                      name="Raw Materials" 
                      fill="#8884d8" 
                      stackId="a"
                    />
                    <Bar 
                      dataKey="wip" 
                      name="Work In Progress" 
                      fill="#82ca9d" 
                      stackId="a"
                    />
                    <Bar 
                      dataKey="finished" 
                      name="Finished Goods" 
                      fill="#ffc658" 
                      stackId="a"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Supplier Performance Radar Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Supplier Performance by Tier</h2>
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
                    data={supplierPerformanceData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[80, 100]} />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="tier1" 
                      name="Tier 1 Suppliers" 
                      stroke="#8884d8" 
                      activeDot={{ r: 8 }} 
                      strokeWidth={2}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="tier2" 
                      name="Tier 2 Suppliers" 
                      stroke="#82ca9d" 
                      activeDot={{ r: 8 }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="tier3" 
                      name="Tier 3 Suppliers" 
                      stroke="#ffc658" 
                      activeDot={{ r: 8 }} 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Forecast Accuracy Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Demand Forecast Accuracy (%)</h2>
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
                    data={forecastAccuracyData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis domain={[90, 100]} />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="actual" 
                      name="Actual Accuracy" 
                      stroke="#8884d8" 
                      activeDot={{ r: 8 }} 
                      strokeWidth={2}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="target" 
                      name="Target" 
                      stroke="#ff8042" 
                      strokeDasharray="5 5"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Active Shipments Table */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Active Shipments</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Origin</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Destination</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Contents</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Quantity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Carrier</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Departure</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Est. Arrival</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Tracking #</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-28" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-28" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                    </tr>
                  ))
                ) : (
                  activeShipments.map((shipment, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{shipment.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{shipment.origin}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{shipment.destination}</td>
                      <td className="px-6 py-4 text-sm">{shipment.contents}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{shipment.quantity}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{shipment.carrier}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{shipment.departureDate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{shipment.estimatedArrival}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(shipment.status)}`}>
                          {shipment.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-mono">{shipment.tracking}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Critical Suppliers Table */}
        <Card className="border border-neutral-light overflow-hidden">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Critical Suppliers</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Supplier</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Risk Score</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Rating</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Lead Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Last Audit</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Quality</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Contingency</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-28" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-28" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-40" /></td>
                    </tr>
                  ))
                ) : (
                  criticalSuppliers.map((supplier, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{supplier.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{supplier.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{supplier.category}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{supplier.location}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getRiskClass(supplier.riskScore)}`}>
                          {supplier.riskScore}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={getRatingClass(supplier.reliabilityRating)}>
                          {supplier.reliabilityRating}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{supplier.leadTime}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{supplier.lastAudit}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{supplier.qualityScore}</td>
                      <td className="px-6 py-4 text-sm">{supplier.contingencyPlan}</td>
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

export default SupplyChainView;