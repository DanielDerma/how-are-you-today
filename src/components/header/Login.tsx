import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react"

const Login = () => {
  const user = useUser()
  const supabaseClient = useSupabaseClient()

  const handleLogin = async () => {
    if (!user) {
      await supabaseClient.auth.signInWithOAuth({
        provider: 'google',
      })
    } else {
      await supabaseClient.auth.signOut()
    }
  }
  return (
    <button onClick={handleLogin} className="outline px-2 rounded-full bg-black">
      <p className="text-white">{user ? "Sign up" : "Log in"}</p>
    </button>
  )
}

export default Login