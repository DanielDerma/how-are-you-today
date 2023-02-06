import Modal from "@/components/Modal";
import { mood, nutrition, physical, sleep } from "@/constants/exercises";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

type PageProps = {
  initialSession: any;
  user: any;
};

type Form = {
  mood_rating: string;
  mood_journal: string;
  mood_events: string;
  sleep_hours: string;
  sleep_bedtime: string;
  sleep_caffeine: string;
  physical_hours: string;
  physical_activities: string;
  physical_challenges: string;
  nutrition_food: string;
  nutrition_meals: string;
  nutrition_rating: string;
  nutrition_challenges: string;
};

const Exercises: NextPage<PageProps> = ({ initialSession, user }) => {
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(true);
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const form: Form = {
      mood_rating: data.get("mood_rating") as string,
      mood_journal: data.get("mood_journal") as string,
      mood_events: data.get("mood_events") as string,
      sleep_hours: data.get("sleep_hours") as string,
      sleep_bedtime: data.get("sleep_bedtime") as string,
      sleep_caffeine: data.get("sleep_caffeine") as string,
      physical_hours: data.get("physical_hours") as string,
      physical_activities: data.get("physical_activities") as string,
      physical_challenges: data.get("physical_challenges") as string,
      nutrition_food: data.get("nutrition_food") as string,
      nutrition_meals: data.get("nutrition_meals") as string,
      nutrition_rating: data.get("nutrition_rating") as string,
      nutrition_challenges: data.get("nutrition_challenges") as string,
    };
  };
  return (
    <div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
  return (
    <>
      <Head>
        <title>Exercises | How Are You Today?</title>
      </Head>
      <div>
        <form onSubmit={handleSubmit}>
          <h3 className="font-semibold">Mood:</h3>
          <div className="">
            {mood.map((e) => (
              <div className="" key={e.id}>
                <label htmlFor={e.question}>{e.question}</label>
                <input
                  name={e.name}
                  type={e.type}
                  className=""
                  key={e.id}
                  required
                />
              </div>
            ))}
          </div>
          <h3 className="font-semibold">Sleep:</h3>
          <div className="">
            {sleep.map((e) => (
              <div className="" key={e.id}>
                <label htmlFor={e.question}>{e.question}</label>
                <input
                  name={e.name}
                  type={e.type}
                  className=""
                  key={e.id}
                  required
                />
              </div>
            ))}
          </div>
          <h3 className="font-semibold">Physical:</h3>
          <div className="">
            {physical.map((e) => (
              <div className="" key={e.id}>
                <label htmlFor={e.question}>{e.question}</label>
                <input
                  name={e.name}
                  type={e.type}
                  className=""
                  key={e.id}
                  required
                />
              </div>
            ))}
          </div>
          <h3 className="font-semibold">Nutrition:</h3>
          <div className="">
            {nutrition.map((e) => (
              <div className="" key={e.id}>
                <label htmlFor={e.question}>{e.question}</label>
                <input
                  name={e.name}
                  type={e.type}
                  className=""
                  key={e.id}
                  required
                />
              </div>
            ))}
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
