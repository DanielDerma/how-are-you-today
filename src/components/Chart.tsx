import {
  LineChart,
  Line,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
const data = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 300, pv: 4567, amt: 2400 },
  { name: "Page C", uv: 300, pv: 1398, amt: 2400 },
  { name: "Page D", uv: 200, pv: 9800, amt: 2400 },
  { name: "Page E", uv: 278, pv: 3908, amt: 2400 },
  { name: "Page F", uv: 189, pv: 4800, amt: 2400 },
];

const Chart = () => {
  return (
    <ResponsiveContainer>
      <LineChart data={data}>
        <Tooltip />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
