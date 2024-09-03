import ExploreChallenges from "../components/ExploreChallenges/ExploreChallenges"
import Hero from "../components/HomeHero/Hero"
import ParticipateAIChallenges from "../components/ParticipateAIChallenges/ParticipateAIChallenges"

const Home: React.FC = () => {
  return (
    <>
      <Hero/>
      <ParticipateAIChallenges />
      <ExploreChallenges />
    </>
  )
}

export default Home
