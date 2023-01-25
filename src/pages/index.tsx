import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useUser, useSupabaseClient, useSessionContext } from '@supabase/auth-helpers-react'
import { useEffect, useState } from 'react'

const Home = () => {
  const supabaseClient = useSupabaseClient()
  const { isLoading } = useSessionContext()
  const user = useUser()
  const [data, setData] = useState()
  console.log(user)

  if (isLoading) return null
  if (!user)
    return (
      <Auth
        redirectTo="http://localhost:3000/"
        appearance={{ theme: ThemeSupa }}
        supabaseClient={supabaseClient}
        providers={['google', 'github']}
        socialLayout="horizontal"
      />
    )
  console.log('hi')
  return (
    <>
      <button onClick={() => supabaseClient.auth.signOut()}>Sign out</button>
      <p>user:</p>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <p>client-side data fetching with RLS</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}

export default Home