import { Fragment } from 'react/jsx-runtime'
import { myLocalData } from '../../constants/constant'
import { getDataFromLocalStorage } from '../../Utils/Utils'
import './ExploreChallenges.css'
import HackathonCard from './HackathonCard/HackathonCard'
import SearchFilterTags from './SearchFilterTags/SearchFilterTags'
import { useEffect, useState } from 'react'

const ExploreChallenges = () => {
  interface Card {
    id: string;
    challengeName: string;
    startDate: string;
    endDate: string;
    lavelType: 'Easy' | 'Medium' | 'Hard'; // Enums or Union types to represent specific values
    description: string;
  }
  const [card, setCard] = useState<Card[]>([])
  const { data }:any = getDataFromLocalStorage(myLocalData)

  useEffect(()=>{
    setCard(data?.card)
  },[])

  return (
    <>
      <SearchFilterTags />
      <div className="ExploreChallengesLayout">
        <div className="ExploreChallengesLayoutfluid">
          {
            card?.map((value: any, index: any) => {
              return (
                <Fragment key={index}>
                  {
                    value?.challengeName && <HackathonCard value={{value, index}} />
                  }
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
