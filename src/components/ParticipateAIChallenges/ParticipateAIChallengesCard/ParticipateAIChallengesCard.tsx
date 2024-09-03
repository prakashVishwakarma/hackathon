import notebookIcon from './../../../assets/icons/carbon_notebook-reference.svg'
import './ParticipateAIChallengesCard.css'

const ParticipateAIChallengesCard = () => {
    return (
        <>
            <div className='ParticipateAIChallengesCardContainer'>
                <img src={notebookIcon} alt="notebookIcon" />
                <h1>Prove your skills</h1>
                <p>Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.</p>
            </div>
        </>
    )
}

export default ParticipateAIChallengesCard
