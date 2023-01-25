import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useUser, useSupabaseClient, useSessionContext } from '@supabase/auth-helpers-react'
import { useEffect, useState } from 'react'

const Home = () => {
  const supabaseClient = useSupabaseClient()
  const { isLoading } = useSessionContext()
  const user = useUser()

  if (!user || isLoading) return null
  return (
    <>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo exercitationem ratione quibusdam facilis non vitae asperiores! Porro dignissimos sed repudiandae minima temporibus alias?
    </>
  )
}

export default Home