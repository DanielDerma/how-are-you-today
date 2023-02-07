import Modal from "@/components/Modal";
import { outputQuestions } from "@/services/cohere";
import { Database } from "@/types/supabase";
import { canInvoice, separateResponses } from "@/utils";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

type PageProps = {
  initialSession: any;
  user: any;
  canInvoice: string;
};

const Exercises: NextPage<PageProps> = ({
  initialSession,
  user,
  canInvoice,
}) => {
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
    if (user && canInvoice) loadData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const interval2 = setInterval(() => {
      setText("Generating new problems with AI...");
    }, 4000);

    return () => {
      clearInterval(interval2);
    };
  }, []);

  const updateData = async (data: any) => {
    try {
      const { error } = await supabaseClient.from("tracking").insert(data);
      if (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const entries = formData.entries();
    const dataEntries = Object.fromEntries(entries);
    const data = separateResponses(dataEntries);
    outputQuestions(data as any)
      .then((res) => {
        return updateData({ userId: user, ...res });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("done");
      });
  };

  if (!canInvoice) {
    return (
      <div>
        <Head>
          <title>Exercises | How Are You Today?</title>
        </Head>
        <Modal
          text="Wait 24hr, You only can do this once a day."
          isCanInvoice
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>
    );
  }
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
                  <div className="" key={`question_mood_${i}`}>
                    <label htmlFor={`question_mood_${i}`}>{e}</label>
                    <input
                      name={`mood_${e}`}
                      type="text"
                      className=""
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
                  <div className="" key={`question_sleep_${i}`}>
                    <label htmlFor={`question_sleep_${i}`}>{e}</label>
                    <input
                      name={`sleep_${e}`}
                      type="text"
                      className=""
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
                  <div className="" key={`physical_${e}`}>
                    <label htmlFor={`question_physical_${i}`}>{e}</label>
                    <input
                      name={`physical_${e}`}
                      type="text"
                      className=""
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
                  <div className="" key={`question_nutrition_${i}`}>
                    <label htmlFor={`question_nutrition_${i}`}>{e}</label>
                    <input
                      name={`nutrition_${e}`}
                      type="text"
                      className=""
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

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  // Create authenticated Supabase Client
  const supabase = createServerSupabaseClient<Database>(ctx);
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

  const { data } = await supabase
    .from("tracking")
    .select("created_at")
    .eq("userId", session.user.id)
    .single();

  return {
    props: {
      initialSession: session,
      user: session.user.id,
      canInvoice: canInvoice(data?.created_at),
    },
  };
};
