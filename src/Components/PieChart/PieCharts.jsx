import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const PieCharts = () => {

  const progressData = [
    { name: "Module finish on time", value: 24.33 },
    { name: "Module progress", value: 19.67 },
    { name: "Quiz mark", value: 14.45 },
    { name: "Video duration", value: 10.12 }, 
    { name: "Assignment Mark", value: 31.43 }, 
  ];
 
  
      
    return (
        <div className="m-12">
      <h2 className="text-5xl mx-10">Health Check</h2>
      <PieChart width={500} height={500}>
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={progressData}
          cx="50%"
          cy="50%"
          outerRadius={160}
          innerRadius={80}
          fill="#8884d8"
          label
        >
          {progressData.map((entry, index) => (
            <Cell key={index} fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
    );
};

export default PieCharts;