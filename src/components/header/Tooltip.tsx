import { useUser } from "@supabase/auth-helpers-react";
import Image from "next/image";
import three from "/public/three.svg";
import two from "/public/two.svg";
import one from "/public/one.svg";

const Tooltip = () => {
  const user = useUser();
  return (
    <div className="">
      {/* {user && (
        <div className="flex gap-x-4">
          <div className="flex items-center gap-x-2 rounded-full border-2 border-black px-2">
            <Image src={one} alt="two" height="29.67" width="14.35" />
            <p className="font-semibold">Positive</p>
          </div>
          <div className="flex items-center gap-x-2 rounded-full border-2 border-black px-2">
            <Image src={two} alt="two" height="22.19" width="14.35" />
            <p className="font-semibold">Negative</p>
          </div>
          <div className="flex items-center gap-x-2 rounded-full border-2 border-black px-2">
            <Image src={three} alt="two" height="14.35" width="14.35" />
            <p className="font-semibold">Neutral</p>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Tooltip;
