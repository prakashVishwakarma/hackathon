import './ExploreChallenges.css'
import HackathonCard from './HackathonCard/HackathonCard'
import SearchFilterTags from './SearchFilterTags/SearchFilterTags'

const ExploreChallenges = () => {

  return (
    <>
      <SearchFilterTags />
      <div className="ExploreChallengesLayout">
        <div className="ExploreChallengesLayoutfluid">
          <HackathonCard />
          <HackathonCard />
          <HackathonCard />
          <HackathonCard />
          <HackathonCard />
          <HackathonCard />
          <HackathonCard />
          <HackathonCard />
        </div>
      </div>
    </>
  )
}

export default ExploreChallenges
