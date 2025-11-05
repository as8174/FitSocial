import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const WeeklyGraph = () => {
  const data = [
    { day: "Mon", "Iron Warriors": 90, "Fitness Legends": 80, "Beast Mode": 85 },
    { day: "Tue", "Iron Warriors": 88, "Fitness Legends": 78, "Beast Mode": 87 },
    { day: "Wed", "Iron Warriors": 95, "Fitness Legends": 82, "Beast Mode": 90 },
    { day: "Thu", "Iron Warriors": 92, "Fitness Legends": 85, "Beast Mode": 89 },
    { day: "Fri", "Iron Warriors": 89, "Fitness Legends": 84, "Beast Mode": 91 },
    { day: "Sat", "Iron Warriors": 93, "Fitness Legends": 86, "Beast Mode": 92 },
    { day: "Sun", "Iron Warriors": 87, "Fitness Legends": 80, "Beast Mode": 88 },
  ];

  return (
    <div className="bg-dark-2 p-4 rounded-2xl shadow-md">
      <h3 className="font-semibold text-lg mb-2">Weekly Consistency</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
          <XAxis dataKey="day" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Iron Warriors" stroke="#00FF66" />
          <Line type="monotone" dataKey="Fitness Legends" stroke="#FFD700" />
          <Line type="monotone" dataKey="Beast Mode" stroke="#1E90FF" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
