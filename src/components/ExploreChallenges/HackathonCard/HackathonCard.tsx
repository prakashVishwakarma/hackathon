import './HackathonCard.css'
import cardImg1 from './../../../assets/cardimage/Group 1000002771.png'
import GreenButton from '../../buttons/GreenButton/GreenButton'
import { Link, useNavigate } from 'react-router-dom'

const HackathonCard = () => {

    const navigate = useNavigate();

    const handleCliekCard = () => {
        navigate("/details");
    }

    return (
        <>
            <div onClick={() => handleCliekCard()} className="HackathonCard">
                <div className="img">
                    <img src={cardImg1} alt="cardImg1" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>

                    <div className="HackathonCardTextContainer">
                        <span>incomming</span>
                        <h1>Data Science Bootcamp - Graded Datathon</h1>
                        <p>Starts in</p>
                        <h2>{`00 : 00 : 00`}</h2>
                        <p>{`Days Hours Mins`}</p>
                        <div className="button">
                            <GreenButton text={'Participate Now'} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HackathonCard
