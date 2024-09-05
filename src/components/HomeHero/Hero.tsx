import { useNavigate } from "react-router-dom";
import WhiteButton from "../buttons/WhiteButton/WhiteButton"
import Statistic from "../Statistic/Statistic";
import MyIcon from "./../../assets/icons/PicsArt_04-14-04.42 1.svg";
import './hero.css'
import { getDataFromLocalStorage } from "../../Utils/Utils";
import { myLocalData } from "../../constants/constant";

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
            <Statistic />
        </>
    )
}

export default Hero
