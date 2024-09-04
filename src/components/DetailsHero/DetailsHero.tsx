import './DetailsHero.css'
import lavelType from './../../assets/images/lavelType.png'

const DetailsHero = () => {
    return (
        <div className='detailsContainer'>
            <div className="detailsContainerfluid">
                <div className="detailsContainerStripe">
                    <img src="" alt="" />
                    <p>Starts on 17th Jun'22 09:00 PM (India Standard Time)</p>
                </div>
                <h1>Data Sprint 72 - Butterfly Identification</h1>
                <p>Identify the class to which each butterfly belongs to</p>
                <button className='detailsContainerLavelType'><img src={lavelType} alt="lavelType" /> Easy</button>
            </div>
        </div>
    )
}

export default DetailsHero
