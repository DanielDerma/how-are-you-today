import Arrow from "@/icons/Arrow";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";

const Login = () => {
  const user = useUser();
  const supabaseClient = useSupabaseClient();

  const handleLogin = async () => {
    if (!user) {
      await supabaseClient.auth.signInWithOAuth({
        provider: "google",
      });
    } else {
      await supabaseClient.auth.signOut();
    }
  };
  return (
    <button
      onClick={handleLogin}
      className="flex items-center gap-x-2 rounded-full border-2 border-black bg-black px-2"
    >
      <p className="font-medium text-white">{user ? "Sign up" : "Log in"}</p>
      <Arrow className={`h-4 w-4  text-white ${user ? "rotate-180" : ""}`} />
    </button>
  );
};

export default Login;
