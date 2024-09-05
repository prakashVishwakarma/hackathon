import { useSearchParams } from "react-router-dom";
import DetailsHero from "../components/DetailsHero/DetailsHero"
import OverviewTab from "../components/OverviewTab/OverviewTab"
import { findCardById, getDataFromLocalStorage } from "../Utils/Utils";
import { myLocalData } from "../constants/constant";

const Details: React.FC = () => {

  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const { data } = getDataFromLocalStorage<any>(myLocalData);
  const card = findCardById(data.card, id);

  return (
    <>
      <div className="detailsContainer">
        <DetailsHero card={card} />
      </div>
      <OverviewTab id={id} />
    </>

  )
}

export default Details
