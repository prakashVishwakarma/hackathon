import { Fragment } from 'react/jsx-runtime'
import { myLocalData } from '../../constants/constant'
import { getDataFromLocalStorage } from '../../Utils/Utils'
import './ExploreChallenges.css'
import HackathonCard from './HackathonCard/HackathonCard'
import SearchFilterTags from './SearchFilterTags/SearchFilterTags'

const ExploreChallenges = () => {

  const { data, exists } = getDataFromLocalStorage(myLocalData)

  return (
    <>
      <SearchFilterTags />
      <div className="ExploreChallengesLayout">
        <div className="ExploreChallengesLayoutfluid">
          {
            data?.card?.map((value: any, index: any, array: any) => {
              return (
                <Fragment key={index}>
                  <HackathonCard value={{value, index}} />
                </Fragment>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default ExploreChallenges
