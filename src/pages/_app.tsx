import Header from "@/components/header";
import "@/styles/globals.css";
import { Database } from "@/types/supabase";
import { Inter } from "@next/font/google";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Session, SessionContextProvider } from "@supabase/auth-helpers-react";
import { AppProps } from "next/app";
import { useState } from "react";

const inter = Inter({
  subsets: ["latin"],
});

export default function MyApp({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session;
}>) {
  const [supabaseClient] = useState(() =>
    createBrowserSupabaseClient<Database>()
  );

  return (
    <>
      <style jsx global>{`
        :root {
          --font-inter: ${inter.style.fontFamily};
        }
      `}</style>
      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
      >
        <main className={`px-5 py-5 font-sans md:px-10`}>
          <Header />
          <Component {...pageProps} />
        </main>
      </SessionContextProvider>
    </>
  );
}
