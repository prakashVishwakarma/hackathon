import './HackathonCard.css'
import cardImg1 from './../../../assets/cardimage/Group 1000002771.png'
import GreenButton from '../../buttons/GreenButton/GreenButton'
import { Link, useNavigate } from 'react-router-dom'

const HackathonCard = ({ value }: any) => {
console.log('value',value)
    const navigate = useNavigate();

    const handleCliekCard = (id: any) => {
        navigate(`/details?id=${id}`);
    }

    return (
        <>
            <div onClick={() => handleCliekCard(value.value.id)} className="HackathonCard">
                <div className="img">
                    <img src={cardImg1} alt="cardImg1" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>

                    <div className="HackathonCardTextContainer">
                        <span>{value.value.challengeName}</span>
                        <h1>{value.value.challengeName}</h1>
                        <p>Starts in</p>
                        <h2>{value.value.endDate}</h2>
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
