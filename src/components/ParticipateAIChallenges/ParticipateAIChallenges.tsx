import ParticipateAIChallengesCard from "./ParticipateAIChallengesCard/ParticipateAIChallengesCard"
import './ParticipateAIChallenges.css'
import './ParticipateAIChallengesCard/ParticipateAIChallengesCard.css'

const ParticipateAIChallenges = () => {
    return (
        <div className="ParticipateAIChallengesContainer">
            <div className="ParticipateAIChallengesContainerFluid">
                <h1>Why Participate in AI Challenges?</h1>
                <div>
                    <ParticipateAIChallengesCard />
                    <ParticipateAIChallengesCard />
                    <ParticipateAIChallengesCard />
                    <ParticipateAIChallengesCard />
                </div>
            </div>
        </div>
    )
}

export default ParticipateAIChallenges
