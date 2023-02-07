import Modal from "@/components/Modal";
import { Database } from "@/types/supabase";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

type PageProps = {
  initialSession: any;
  user: any;
};

const Exercises: NextPage<PageProps> = ({ initialSession, user }) => {
  const supabaseClient = useSupabaseClient<Database>();
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("Working with AI Model...");
  const [data, setData] = useState<any>([]);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const dataJson = await fetch("/api/questions");
      const { data } = await dataJson.json();
      setLoading(false);
      setIsOpen(false);
      setData(data);
    };
    if (user) loadData();
  }, [user]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const interval2 = setInterval(() => {
      setText("Generating new problems with AI...");
    }, 4000);

    return () => {
      clearInterval(interval2);
    };
  }, []);
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const entries = formData.entries();
    console.log(entries);
    const data = Object.fromEntries(entries);
    console.log(data);
  };
  if (loading) {
    return (
      <div>
        <Head>
          <title>Exercises | How Are You Today?</title>
        </Head>
        <Modal text={text} isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    );
  }
  return (
    <>
      <Head>
        <title>Exercises | How Are You Today?</title>
      </Head>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 grid-rows-2">
            <div className="">
              <h3 className="font-semibold">Mood:</h3>
              <div className="">
                {data.mood.map((e: any, i: any) => (
                  <div className="" key={e.id}>
                    <label htmlFor={`question_mood_${i}`}>{e}</label>
                    <input
                      name={`mood_${e}`}
                      type="text"
                      className=""
                      key={e.id}
                      required
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="">
              <h3 className="font-semibold">Sleep:</h3>
              <div className="">
                {data.sleep.map((e: any, i: any) => (
                  <div className="" key={e.id}>
                    <label htmlFor={`question_sleep_${i}`}>{e}</label>
                    <input
                      name={`sleep_${e}`}
                      type="text"
                      className=""
                      key={e.id}
                      required
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="">
              <h3 className="font-semibold">Physical:</h3>
              <div className="">
                {data.physical.map((e: any, i: any) => (
                  <div className="" key={e.id}>
                    <label htmlFor={`question_physical_${i}`}>{e}</label>
                    <input
                      name={`physical_${e}`}
                      type="text"
                      className=""
                      key={e.id}
                      required
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="">
              <h3 className="font-semibold">Nutrition:</h3>
              <div className="">
                {data.nutrition.map((e: any, i: any) => (
                  <div className="" key={e.id}>
                    <label htmlFor={`question_nutrition_${i}`}>{e}</label>
                    <input
                      name={`nutrition_${e}`}
                      type="text"
                      className=""
                      key={e.id}
                      required
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Exercises;

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  ctx: GetServerSidePropsContext
) => {
  // Create authenticated Supabase Client
  const supabase = createServerSupabaseClient(ctx);
  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session)
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };

  return {
    props: {
      initialSession: session,
      user: session.user,
    },
  };
};
