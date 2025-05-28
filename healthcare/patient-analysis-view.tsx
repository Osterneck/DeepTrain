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
  Cell
} from "recharts";

interface PatientAnalysisViewProps {
  isLoading: boolean;
}

const PatientAnalysisView: FC<PatientAnalysisViewProps> = ({ isLoading }) => {
  // Mock data for healthcare metrics
  const healthcareMetrics = [
    {
      name: "Patient Satisfaction",
      value: "92.7%",
      change: "+2.3%",
      changeType: "positive",
      description: "From patient surveys",
    },
    {
      name: "Readmission Rate",
      value: "3.8%",
      change: "-0.5%",
      changeType: "positive",
      description: "30-day readmissions",
    },
    {
      name: "Average Length of Stay",
      value: "4.2 days",
      change: "-0.3 days",
      changeType: "positive",
      description: "Acute care patients",
    },
    {
      name: "Treatment Success",
      value: "87.5%",
      change: "+1.8%",
      changeType: "positive",
      description: "Primary outcome met",
    },
  ];

  // Mock data for patient demographics
  const patientDemographicsData = [
    { name: "18-30", value: 15 },
    { name: "31-45", value: 25 },
    { name: "46-60", value: 30 },
    { name: "61-75", value: 22 },
    { name: "76+", value: 8 },
  ];

  // Color palette for charts
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  // Mock data for healthcare outcomes over time
  const outcomeData = [
    { month: "Jan", success: 82, benchmark: 80 },
    { month: "Feb", success: 84, benchmark: 80 },
    { month: "Mar", success: 83, benchmark: 80 },
    { month: "Apr", success: 86, benchmark: 80 },
    { month: "May", success: 87, benchmark: 80 },
    { month: "Jun", success: 88, benchmark: 80 },
    { month: "Jul", success: 89, benchmark: 80 },
  ];

  // Mock data for diagnosis distribution
  const diagnosisData = [
    { diagnosis: "Hypertension", count: 245 },
    { diagnosis: "Type 2 Diabetes", count: 178 },
    { diagnosis: "Coronary Artery Disease", count: 142 },
    { diagnosis: "Depression", count: 127 },
    { diagnosis: "Asthma", count: 112 },
    { diagnosis: "COPD", count: 98 },
    { diagnosis: "Osteoarthritis", count: 86 },
  ];

  // Mock data for patient records
  const patientRecords = [
    {
      id: "PT-2025-1001",
      name: "James Wilson",
      age: 58,
      gender: "Male",
      diagnosis: "Hypertension, Type 2 Diabetes",
      admissionDate: "2025-05-10",
      dischargeDate: "2025-05-14",
      primaryPhysician: "Dr. Elizabeth Chen",
      treatmentPlan: "Medication adjustment, dietary counseling, follow-up in 2 weeks",
      outcomes: "Blood pressure reduced from 160/95 to 138/88",
      riskScore: "Medium",
      insuranceStatus: "Medicare",
    },
    {
      id: "PT-2025-1047",
      name: "Maria Garcia",
      age: 42,
      gender: "Female",
      diagnosis: "Asthma exacerbation",
      admissionDate: "2025-05-12",
      dischargeDate: "2025-05-15",
      primaryPhysician: "Dr. Robert Johnson",
      treatmentPlan: "Bronchodilators, corticosteroids, respiratory therapy",
      outcomes: "Respiratory function improved, SpO2 98% at discharge",
      riskScore: "Low",
      insuranceStatus: "Private",
    },
    {
      id: "PT-2025-1098",
      name: "David Thompson",
      age: 74,
      gender: "Male",
      diagnosis: "Coronary Artery Disease, Heart Failure",
      admissionDate: "2025-05-14",
      dischargeDate: "2025-05-22",
      primaryPhysician: "Dr. Sarah Williams",
      treatmentPlan: "Medication optimization, cardiac rehabilitation referral",
      outcomes: "Improved cardiac function, EF increased from 30% to 38%",
      riskScore: "High",
      insuranceStatus: "Medicare",
    },
    {
      id: "PT-2025-1126",
      name: "Linda Johnson",
      age: 63,
      gender: "Female",
      diagnosis: "Osteoarthritis, Obesity",
      admissionDate: "2025-05-15",
      dischargeDate: "2025-05-18",
      primaryPhysician: "Dr. Michael Brown",
      treatmentPlan: "Joint replacement surgery, post-op rehabilitation",
      outcomes: "Successful surgery, pain reduced from 8/10 to 3/10",
      riskScore: "Medium",
      insuranceStatus: "Medicare",
    },
    {
      id: "PT-2025-1183",
      name: "John Davis",
      age: 29,
      gender: "Male",
      diagnosis: "Acute Appendicitis",
      admissionDate: "2025-05-16",
      dischargeDate: "2025-05-17",
      primaryPhysician: "Dr. Jennifer Lee",
      treatmentPlan: "Laparoscopic appendectomy, antibiotics",
      outcomes: "Successful surgery, uncomplicated recovery",
      riskScore: "Low",
      insuranceStatus: "Private",
    },
  ];

  const getRiskScoreClass = (riskScore: string) => {
    switch (riskScore) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-amber-100 text-amber-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        {/* Healthcare Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {healthcareMetrics.map((metric, index) => (
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
          {/* Patient Demographics Pie Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Patient Demographics by Age</h2>
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
                        data={patientDemographicsData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {patientDemographicsData.map((entry, index) => (
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

          {/* Diagnosis Distribution Bar Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Diagnosis Distribution</h2>
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
                      data={diagnosisData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      layout="vertical"
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis type="category" dataKey="diagnosis" width={150} />
                      <Tooltip />
                      <Legend />
                      <Bar 
                        dataKey="count" 
                        name="Patient Count" 
                        fill="#8884d8" 
                        barSize={20}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* Treatment Outcomes Line Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Treatment Success Rate Trends</h2>
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
                    data={outcomeData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis domain={[75, 95]} />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="success" 
                      name="Success Rate (%)" 
                      stroke="#8884d8" 
                      activeDot={{ r: 8 }} 
                      strokeWidth={2}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="benchmark" 
                      name="Benchmark (%)" 
                      stroke="#82ca9d" 
                      strokeDasharray="5 5"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* Patient Records Table */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Recent Patient Records</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Patient</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Age/Gender</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Diagnosis</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Admission</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Discharge</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Physician</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Risk Score</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Insurance</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-40" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-48" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-40" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                    </tr>
                  ))
                ) : (
                  patientRecords.map((patient, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{patient.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{patient.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{patient.age}, {patient.gender}</td>
                      <td className="px-6 py-4 text-sm">{patient.diagnosis}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{patient.admissionDate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{patient.dischargeDate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{patient.primaryPhysician}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getRiskScoreClass(patient.riskScore)}`}>
                          {patient.riskScore}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{patient.insuranceStatus}</td>
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

export default PatientAnalysisView;