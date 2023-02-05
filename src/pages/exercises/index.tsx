import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import Head from "next/head";

type PageProps = {
  initialSession: any;
  user: any;
};

const Exercises: NextPage<PageProps> = ({ initialSession, user }) => {
  return (
    <>
      <Head>
        <title>Exercises | How Are You Today?</title>
      </Head>
      <div>Exercises</div>
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
