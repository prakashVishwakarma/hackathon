import DetailsHero from "../components/DetailsHero/DetailsHero"
import OverviewTab from "../components/OverviewTab/OverviewTab"

const Details: React.FC = () => {
  return (
    <>
      <div className="detailsContainer">
        <DetailsHero />
      </div>
      <OverviewTab />
    </>

  )
}

export default Details
