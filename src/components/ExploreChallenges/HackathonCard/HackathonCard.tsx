import './HackathonCard.css'
import cardImg1 from './../../../assets/cardimage/Group 1000002771.png'
import GreenButton from '../../buttons/GreenButton/GreenButton'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { determineDateStatus } from '../../../Utils/Utils'

const HackathonCard = ({ value }: any) => {

    const [card] = useState<any>(value.value)

    console.log('value', value)
    const navigate = useNavigate();

    const handleCliekCard = (id: any) => {
        navigate(`/details?id=${id}`);
    }

    useEffect(() => {
        determineDateStatus(card.startDate ,card.endDate)
        // setCard(date)
        console.log(determineDateStatus(new Date(card.startDate) ,new Date(card.endDate)))
        // console.log((card.startDate ,card.endDate))
    }, [])

    return (
        <>
            <div onClick={() => handleCliekCard(card.id)} className="HackathonCard">
                <div className="img">
                    <img src={cardImg1} alt="cardImg1" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>

                    <div className="HackathonCardTextContainer">
                        <span>{determineDateStatus(new Date(card.startDate) ,new Date(card.endDate))}</span>
                        <p>{card?.lavelType}</p>
                        <h1>{card.challengeName}</h1>
                        <p>{determineDateStatus(new Date(card.startDate) ,new Date(card.endDate))!=='Past'?'Starts in':'Ended on'}</p>
                        <h2>{card.endDate}</h2>
                        {/* <p>{`Days Hours Mins`}</p> */}
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

