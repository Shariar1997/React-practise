import { LineChart as LChart,Line, Tooltip, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const studentData = [
        { student: "Alice", mathMarks: 88, physicsMarks: 75, chemistryMarks: 82 },
        { student: "Bob", mathMarks: 92, physicsMarks: 80, chemistryMarks: 88 },
        { student: "Charlie", mathMarks: 78, physicsMarks: 70, chemistryMarks: 76 },
        { student: "David", mathMarks: 85, physicsMarks: 78, chemistryMarks: 84 },
        { student: "Emily", mathMarks: 76, physicsMarks: 68, chemistryMarks: 72 },
        { student: "Frank", mathMarks: 90, physicsMarks: 82, chemistryMarks: 88 },
        { student: "Grace", mathMarks: 89, physicsMarks: 84, chemistryMarks: 90 },
        { student: "Hannah", mathMarks: 95, physicsMarks: 88, chemistryMarks: 94 },
        { student: "Isaac", mathMarks: 87, physicsMarks: 80, chemistryMarks: 86 },
        { student: "Jack", mathMarks: 91, physicsMarks: 85, chemistryMarks: 89 }
      ];
      
      
    return (
        <div>
            <LChart width={800} height={400} data={studentData}>
                <XAxis dataKey={'student'}></XAxis>
                <YAxis></YAxis>
                <Tooltip/>
                <Line stroke='red'dataKey="mathMarks"></Line>
                <Line stroke='blue'dataKey="physicsMarks"></Line>
                <Line stroke='green'dataKey="chemistryMarks"></Line>
            </LChart>
        </div>
    );
};

export default LineChart;