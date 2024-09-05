import { useNavigate } from "react-router-dom";
import WhiteButton from "../buttons/WhiteButton/WhiteButton"
import MyIcon from "./../../assets/icons/PicsArt_04-14-04.42 1.svg";
import './hero.css'
import { getDataFromLocalStorage } from "../../Utils/Utils";
import { myLocalData } from "../../constants/constant";
import StatisticIcon1 from "./../../assets/icons/Group 1000002515.svg";
import StatisticIcon2 from "./../../assets/icons/Group 1000002516.svg";
import StatisticIcon3 from "./../../assets/icons/Group 1000002518.svg";
const Hero = () => {

    const navigate = useNavigate();

    const handleCreateChallenge = () => {
        const { data } = getDataFromLocalStorage<any>(myLocalData);
        if(data.credentials.role === 'Organizers'){
            navigate("/admin-create-challenge");
        }else{
            alert('Signup as a Organizers to create challenge')
        }
    }

    return (
        <>
            <div className="heroContainer">
                <div className="heroContainerFluid">
                    <div className="heroContainerLeft">
                        <div className="heroContainerLeftHeading">
                            <h1>Accelerate Innovation with Global AI Challenges</h1>
                        </div>
                        <p>AI Challenges at DPhi simulate real-world problems. It is a great place to put your AI/Data Science skills to test on diverse datasets allowing you to foster learning through competitions.</p>
                        <div style={{ width: '85%' }}>
                            <WhiteButton onClick={() => handleCreateChallenge()} text={'Create Challenge'} />
                        </div>
                    </div>
                    <div className="heroContainerRight">
                        <img src={MyIcon} alt="heroContainerRight" />
                    </div>
                </div>
            </div>
            {/* <Statistic /> */}
            <div className="statisticContainer">
            <div className="statisticContainerFluid">
                <div className="statisticContainerstatistics">
                    <img src={StatisticIcon1} alt="" />
                    <div className="statisticContainerstatisticsTexts Texts">
                        <div>
                            <h1>100K+</h1>
                            <p>AI model submissions</p>
                        </div>
                    </div>
                </div>
                <div className="statisticContainerstatistics">
                    <img src={StatisticIcon2} alt="" />
                    <div className="statisticContainerstatisticsTexts Texts">
                        <div>
                            <h1>50K+</h1>
                            <p>Data Scientists</p>
                        </div>
                    </div>
                </div>
                <div className="statisticContainerstatistics">
                    <img src={StatisticIcon3} alt="" />
                    <div className="statisticContainerstatisticsTexts">
                        <div>
                            <h1>100+</h1>
                            <p>AI Challenges hosted</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Hero
