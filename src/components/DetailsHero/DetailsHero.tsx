import './DetailsHero.css'
import lavelType from './../../assets/images/lavelType.png'

const DetailsHero = ({card}:any) => {
    return (
        <div className='detailsContainer'>
            <div className="detailsContainerfluid">
                <div className="detailsContainerStripe">
                    <img src="" alt="" />
                    <p>Starts on {card.startDate} (India Standard Time)</p>
                </div>
                <h1>{card.challengeName}</h1>
                <p>Identify the class to which each butterfly belongs to</p>
                <button className='detailsContainerLavelType'><img src={lavelType} alt="lavelType" /> {card.lavelType}</button>
            </div>
        </div>
    )
}

export default DetailsHero
