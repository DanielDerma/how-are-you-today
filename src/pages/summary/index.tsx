import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import Chart from "@/components/Chart";
import { Database } from "@/types/supabase";

type PageProps = {
  initialSession: any;
  user: any;
  data: any;
};

const Summary: NextPage<PageProps> = ({ initialSession, user, data }) => {
  console.log(data);
  return (
    <div className="grid grid-cols-1 grid-rows-[repeat(4,200px)] gap-10 md:grid-cols-2 md:grid-rows-[repeat(2,200px)] ">
      <Chart
        prediction={data?.mood_prediction}
        confidence={data?.mood_confidence}
        created_at={data?.created_at}
        title="Mood"
      />
      <Chart
        prediction={data?.sleep_prediction}
        confidence={data?.sleep_confidence}
        created_at={data?.created_at}
        title="Sleep"
      />
      <Chart
        prediction={data?.physical_prediction}
        confidence={data?.physical_confidence}
        created_at={data?.created_at}
        title="Physical"
      />
      <Chart
        prediction={data?.nutrition_prediction}
        confidence={data?.nutrition_confidence}
        created_at={data?.created_at}
        title="Nutrition"
      />
    </div>
  );
};

export default Summary;

export const getServerSideProps: GetServerSideProps<PageProps> = async (
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
    .select("*")
    .eq("userId", session.user.id)
    .single();

  return {
    props: {
      initialSession: session,
      user: session.user,
      data: data,
    },
  };
};
