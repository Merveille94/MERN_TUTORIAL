import { useOutletContext } from "react-router-dom";
import Hero from "../components/Hero";

const Homepage = () => {
    const { isDarkMode } = useOutletContext();

    return (
        <>
            <Hero isDarkMode={isDarkMode} />
        </>
    );
};

export default Homepage;
