import Create from "../components/Create";
import { useOutletContext } from "react-router-dom";

const CreatePage = () => {
const { isDarkMode } = useOutletContext();

  return (
    <>
      <Create isDarkMode={isDarkMode}/>
    </>
  );
};

export default CreatePage;
