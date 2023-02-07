import Image from "next/image";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import one from "/public/one.svg";
import three from "/public/three.svg";
import two from "/public/two.svg";

const Prediction = ({
  prediction,
  confidence,
}: {
  prediction: any;
  confidence: any;
}) => {
  console.log(prediction);
  if (prediction === 2)
    return (
      <div className="">
        <div className="flex items-center justify-start gap-x-2 rounded-full border-2 border-black px-2">
          <Image src={three} alt="two" height="29.67" width="14.35" />
          <p className="font-semibold">Excellent</p>
        </div>
        <p className="desc">
          Your certainty is {String(confidence).split(".")[1].slice(0, 2)}%
        </p>
        <p>You are doing great!</p>
      </div>
    );
  if (prediction === 1)
    return (
      <div className="">
        <div className="flex items-center justify-start gap-x-2 rounded-full border-2 border-black px-2">
          <Image src={two} alt="two" height="22.19" width="14.35" />
          <p className="font-semibold">Good</p>
        </div>
        Your certainty is {String(confidence).split(".")[1].slice(0, 2)}%
        <p>You are doing great!</p>
      </div>
    );
  if (prediction === 0)
    return (
      <div>
        <div className="flex items-center justify-start gap-x-2 rounded-full border-2 border-black px-2">
          <Image src={one} alt="two" height="14.35" width="14.35" />
          <p className="font-semibold">Bad</p>
        </div>
        Your certainty is {String(confidence).split(".")[1].slice(0, 2)}%
        <p>You can work in your mood by doing some exercise, meditation.</p>
      </div>
    );

  return <></>;
};

const Chart = ({
  title,
  prediction,
  confidence,
  created_at,
}: {
  title: string;
  prediction: any;
  confidence: any;
  created_at: any;
}) => {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      if (label === "Initial") return null;
      return (
        <div className="custom-tooltip rounded-lg border-2 border-black bg-white p-4">
          <p className="label">{`${label}`}</p>
          <Prediction prediction={prediction} confidence={confidence} />
        </div>
      );
    }

    return null;
  };
  const year = new Date(created_at).getFullYear();
  const month = new Date(created_at).getMonth();
  const day = new Date(created_at).getDate();
  const data = [
    { name: "Initial", status: 0 },
    { name: `${day}/${month}/${year}`, status: prediction },
  ];
  return (
    <div className="">
      <h3 className="font-semibold">{title}:</h3>
      <ResponsiveContainer>
        <LineChart data={data}>
          <Tooltip content={<CustomTooltip />} />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <Line type="monotone" dataKey="status" stroke="#000" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
