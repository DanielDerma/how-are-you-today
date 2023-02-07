import Arrow from "@/icons/Arrow";
import { useUser } from "@supabase/auth-helpers-react";
import Head from "next/head";
import Link from "next/link";
import flor from "/public/flor.jpg";
import face from "/public/face.jpg";
import Image from "next/image";
const Home = () => {
  const user = useUser();
  if (!user) return null;
  return (
    <>
      <Head>
        <title>How Are You Today?</title>
      </Head>
      <div className=" grid grid-cols-1 grid-rows-1 gap-x-5 gap-y-5 md:grid-cols-[1fr_65%] ">
        <div className="flex min-h-[370px] flex-col justify-between rounded-xl border-2 bg-[#f6f6f6] p-10 ">
          <Image width={80} height={80} src={flor} alt="flor" />
          <div className="">
            <h2 className="text-4xl font-semibold">
              <p>Discover our</p>
              <p>5 min exercises</p>
            </h2>
            <Link
              href="/exercises"
              className="mt-5 flex max-w-max items-center rounded-full border-2 border-black bg-black px-2"
            >
              <p className="mr-2 font-medium text-white">Start exercises</p>
              <Arrow className={`h-4 w-4  text-white`} />
            </Link>
          </div>
        </div>
        <div className="mb-5 flex min-h-[370px] flex-col justify-between rounded-xl border-2 bg-[#f6f6f6] p-10 md:mb-0">
          <Image width={80} height={80} src={face} alt="face" />
          <div className="">
            <h2 className="text-4xl font-semibold">
              <p>Track your</p>
              daily mood level
            </h2>
            <Link
              href="/summary"
              className="mt-5 flex max-w-max items-center rounded-full border-2 border-black bg-black px-2"
            >
              <p className="mr-2 font-medium text-white">Check your summary</p>
              <Arrow className={`h-4 w-4  text-white`} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
