import { useSearchParams } from "react-router-dom";
import Form from "../components/Form/Form"
import { myLocalData } from "../constants/constant";
import { getDataFromLocalStorage, findCardById } from "../Utils/Utils";

const AdminEditChallenge: React.FC = () => {

  
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const { data } = getDataFromLocalStorage<any>(myLocalData);
  const card = findCardById(data.card, id);

  return (
    <>
      <Form card={card} />
    </>
  )
}

export default AdminEditChallenge
