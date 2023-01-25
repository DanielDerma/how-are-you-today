import { useUser } from '@supabase/auth-helpers-react'

const Home = () => {
  const user = useUser()
  console.log(user)
  if (!user) return null
  return (
    <>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo exercitationem ratione quibusdam facilis non vitae asperiores! Porro dignissimos sed repudiandae minima temporibus alias?
    </>
  )
}

export default Home