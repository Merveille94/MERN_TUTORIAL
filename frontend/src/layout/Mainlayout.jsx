import { Outlet } from "react-router-dom";
import { useDarkMode } from 'usehooks-ts';
import Navbar from "../components/Navbar";
import {Toaster } from "react-hot-toast";

const MainLayout = () => {
    const { isDarkMode, toggle } = useDarkMode();

    return (
        <>
           <Toaster/>
           <Navbar toggleTheme={toggle} isDarkMode={isDarkMode} />
           <Outlet context={{ isDarkMode }} />
        </>
    );
};

export default MainLayout;
