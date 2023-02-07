import Image from "next/image";
import {
  LineChart,
  Line,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
} from "recharts";
import one from "/public/one.svg";

const data = [
  { name: "Initial", uv: 0, pv: 0, amt: 2400 },
  { name: "06/02/2023", uv: 400, pv: 2400, amt: 2400 },
];

const Chart = ({ title }: { title: string }) => {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      if (label === "Initial") return null;
      return (
        <div className="custom-tooltip rounded-lg bg-white p-4">
          <p className="label">{`${label} : ${payload[0].value}`}</p>
          <div className="flex items-center gap-x-2 rounded-full border-2 border-black px-2">
            <Image src={one} alt="two" height="29.67" width="14.35" />
            <p className="font-semibold">Positive</p>
          </div>
          <p className="desc">Anything you want can be displayed here.</p>
        </div>
      );
    }

    return null;
  };
  return (
    <div className="">
      <h3 className="font-semibold">{title}:</h3>
      <ResponsiveContainer>
        <LineChart data={data}>
          <Tooltip content={<CustomTooltip />} />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <Line type="monotone" dataKey="uv" stroke="#000" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
