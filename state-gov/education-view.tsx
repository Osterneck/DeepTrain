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

interface EducationViewProps {
  isLoading: boolean;
}

const EducationView: FC<EducationViewProps> = ({ isLoading }) => {
  // Mock data for education metrics
  const educationMetrics = [
    {
      name: "Graduation Rate",
      value: "87.2%",
      change: "+1.5%",
      changeType: "positive",
      description: "High school completion rate",
    },
    {
      name: "College Enrollment",
      value: "68.5%",
      change: "+0.8%",
      changeType: "positive",
      description: "High school graduates entering college",
    },
    {
      name: "Teacher Retention",
      value: "82.4%",
      change: "-1.2%",
      changeType: "negative",
      description: "Teachers remaining in profession",
    },
    {
      name: "Student-Teacher Ratio",
      value: "16:1",
      change: "-0.5",
      changeType: "positive",
      description: "Average class size",
    },
  ];

  // Mock data for education funding allocation
  const fundingAllocationData = [
    { name: "K-12 Education", value: 48 },
    { name: "Higher Education", value: 24 },
    { name: "Special Education", value: 14 },
    { name: "Vocational Training", value: 8 },
    { name: "Administration", value: 6 },
  ];

  // Color palette for pie chart
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  // Mock data for test scores by grade
  const testScoreData = [
    { grade: "3rd", math: 78, reading: 82, science: 76 },
    { grade: "4th", math: 76, reading: 80, science: 75 },
    { grade: "5th", math: 74, reading: 79, science: 77 },
    { grade: "6th", math: 72, reading: 77, science: 76 },
    { grade: "7th", math: 70, reading: 75, science: 74 },
    { grade: "8th", math: 68, reading: 74, science: 72 },
    { grade: "9th", math: 67, reading: 72, science: 70 },
    { grade: "10th", math: 69, reading: 73, science: 71 },
    { grade: "11th", math: 72, reading: 75, science: 73 },
    { grade: "12th", math: 75, reading: 78, science: 76 },
  ];

  // Mock data for graduation trends
  const graduationTrendsData = [
    { year: 2020, rate: 82.8 },
    { year: 2021, rate: 83.5 },
    { year: 2022, rate: 84.7 },
    { year: 2023, rate: 85.9 },
    { year: 2024, rate: 87.2 },
    { year: 2025, rate: 87.2, forecast: true },
    { year: 2026, rate: 88.0, forecast: true },
    { year: 2027, rate: 88.7, forecast: true },
    { year: 2028, rate: 89.5, forecast: true },
    { year: 2029, rate: 90.2, forecast: true },
  ];

  // Mock data for school performance
  const schoolPerformanceData = [
    {
      id: "SCH-2025-042",
      name: "Northside High School",
      district: "Northern School District",
      type: "Public",
      students: 1250,
      gradRate: "92.5%",
      avgTestScore: "88/100",
      rating: "A",
      specialPrograms: "STEM, Arts, AP/IB",
    },
    {
      id: "SCH-2025-108",
      name: "Eastwood Elementary",
      district: "Eastern School District",
      type: "Public",
      students: 680,
      gradRate: "N/A",
      avgTestScore: "82/100",
      rating: "B+",
      specialPrograms: "Language Immersion, STEAM",
    },
    {
      id: "SCH-2025-215",
      name: "Westside Academy",
      district: "Western School District",
      type: "Charter",
      students: 420,
      gradRate: "95.2%",
      avgTestScore: "91/100",
      rating: "A+",
      specialPrograms: "College Prep, Arts",
    },
    {
      id: "SCH-2025-187",
      name: "Central Middle School",
      district: "Central School District",
      type: "Public",
      students: 840,
      gradRate: "N/A",
      avgTestScore: "79/100",
      rating: "B",
      specialPrograms: "Technology, Sports",
    },
    {
      id: "SCH-2025-093",
      name: "Southridge High School",
      district: "Southern School District",
      type: "Public",
      students: 1100,
      gradRate: "85.6%",
      avgTestScore: "81/100",
      rating: "B",
      specialPrograms: "Vocational, AP",
    },
  ];

  // Mock data for teacher statistics
  const teacherStatistics = [
    {
      district: "Northern School District",
      totalTeachers: 685,
      studentTeacherRatio: "14:1",
      avgExperience: "8.5 years",
      certificationRate: "98.2%",
      vacancies: 12,
      avgSalary: "$58,520",
    },
    {
      district: "Southern School District",
      totalTeachers: 542,
      studentTeacherRatio: "16:1",
      avgExperience: "7.2 years",
      certificationRate: "96.5%",
      vacancies: 18,
      avgSalary: "$55,180",
    },
    {
      district: "Eastern School District",
      totalTeachers: 498,
      studentTeacherRatio: "15:1",
      avgExperience: "8.1 years",
      certificationRate: "97.8%",
      vacancies: 8,
      avgSalary: "$56,750",
    },
    {
      district: "Western School District",
      totalTeachers: 520,
      studentTeacherRatio: "15:1",
      avgExperience: "9.2 years",
      certificationRate: "99.1%",
      vacancies: 5,
      avgSalary: "$59,280",
    },
    {
      district: "Central School District",
      totalTeachers: 612,
      studentTeacherRatio: "16:1",
      avgExperience: "7.8 years",
      certificationRate: "97.2%",
      vacancies: 15,
      avgSalary: "$57,420",
    },
  ];

  const getRatingClass = (rating: string) => {
    switch (rating.charAt(0)) {
      case 'A': return 'bg-green-100 text-green-800';
      case 'B': return 'bg-blue-100 text-blue-800';
      case 'C': return 'bg-amber-100 text-amber-800';
      case 'D': return 'bg-orange-100 text-orange-800';
      case 'F': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        {/* Education Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {educationMetrics.map((metric, index) => (
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
          {/* Education Funding Pie Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Education Funding Allocation</h2>
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
                        data={fundingAllocationData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {fundingAllocationData.map((entry, index) => (
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

          {/* Graduation Trends Chart */}
          <Card className="border border-neutral-light overflow-hidden">
            <div className="p-4 border-b border-neutral-light">
              <h2 className="text-lg font-semibold">Graduation Rate Trends</h2>
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
                      data={graduationTrendsData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis domain={[80, 95]} />
                      <Tooltip formatter={(value) => `${value}%`} />
                      <Legend />
                      <Bar 
                        dataKey="rate"
                        name="Graduation Rate" 
                        barSize={20} 
                        fill="#8884d8"
                        isAnimationActive={true}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="forecast" 
                        stroke="#ff7300" 
                        name="Forecast"
                        strokeDasharray="5 5"
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* Test Scores Chart */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Test Scores by Grade (Out of 100)</h2>
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
                    data={testScoreData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="grade" />
                    <YAxis domain={[60, 90]} />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="math" 
                      name="Math" 
                      stroke="#8884d8" 
                      activeDot={{ r: 8 }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="reading" 
                      name="Reading" 
                      stroke="#82ca9d" 
                      activeDot={{ r: 8 }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="science" 
                      name="Science" 
                      stroke="#ffc658" 
                      activeDot={{ r: 8 }} 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </Card>

        {/* School Performance Table */}
        <Card className="border border-neutral-light overflow-hidden mb-6">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Top Performing Schools</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">School ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">District</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Students</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Graduation Rate</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Avg Test Score</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Rating</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Special Programs</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-40" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-40" /></td>
                    </tr>
                  ))
                ) : (
                  schoolPerformanceData.map((school, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{school.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{school.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{school.district}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{school.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold">{school.students.toLocaleString()}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{school.gradRate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{school.avgTestScore}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getRatingClass(school.rating)}`}>
                          {school.rating}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm">{school.specialPrograms}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Teacher Statistics Table */}
        <Card className="border border-neutral-light overflow-hidden">
          <div className="p-4 border-b border-neutral-light">
            <h2 className="text-lg font-semibold">Teacher Statistics by District</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">District</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Total Teachers</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Student-Teacher Ratio</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Avg Experience</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Certification Rate</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Vacancies</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-medium uppercase tracking-wider">Avg Salary</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-light">
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                    </tr>
                  ))
                ) : (
                  teacherStatistics.map((stats, index) => (
                    <tr key={index} className="hover:bg-neutral-lightest">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{stats.district}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{stats.totalTeachers}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{stats.studentTeacherRatio}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{stats.avgExperience}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{stats.certificationRate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{stats.vacancies}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold">{stats.avgSalary}</td>
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

export default EducationView;