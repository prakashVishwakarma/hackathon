import './HackathonCard.css'
import cardImg1 from './../../../assets/cardimage/Group 1000002771.png'
import GreenButton from '../../buttons/GreenButton/GreenButton'

const HackathonCard = () => {

    return (
        <>
            <div className="HackathonCard">
                <div className="img">
                    <img src={cardImg1} alt="cardImg1" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center',marginTop: '10px' }}>

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
                {/* Your chart visualization here */}
                {/* <div className="bootcamp-details">
                    <h2>Upcoming</h2>
                    <h3>Data Science Bootcamp - Graded Datathon</h3>
                    <p>Starts in:</p>
                    <div className="countdown">
                        <div className="countdown-item">
                            <span className="countdown-value">{'89'}</span>
                            <span className="countdown-label">Days</span>
                        </div>
                        <div className="countdown-item">
                            <span className="countdown-value">{'34'}</span>
                            <span className="countdown-label">Hours</span>
                        </div>
                        <div className="countdown-item">
                            <span className="countdown-value">{'23'}</span>
                            <span className="countdown-label">Mins</span>

                        </div>
                    </div>
                    <button className="participate-now">Participate Now</button>
                </div> */}
            </div>
        </>
    )
}

export default HackathonCard
