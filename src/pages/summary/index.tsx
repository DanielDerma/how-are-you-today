import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import Chart from "@/components/Chart";

type PageProps = {
  initialSession: any;
  user: any;
};

const Summary: NextPage<PageProps> = ({ initialSession, user }) => {
  return (
    <div className="grid grid-cols-1 grid-rows-[repeat(4,200px)] gap-10 md:grid-cols-2 md:grid-rows-[repeat(2,200px)] ">
      <Chart />
      <Chart />
      <Chart />
      <Chart />
    </div>
  );
};

export default Summary;

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
