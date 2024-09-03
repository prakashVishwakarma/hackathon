import './statistic.css'
import StatisticIcon1 from "./../../assets/icons/Group 1000002515.svg";
import StatisticIcon2 from "./../../assets/icons/Group 1000002516.svg";
import StatisticIcon3 from "./../../assets/icons/Group 1000002518.svg";

const Statistic = () => {
    return (
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
    )
}

export default Statistic
