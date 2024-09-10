import { Link } from 'react-router-dom';
import { FaMoon, FaRegSquarePlus, FaSun } from "react-icons/fa6";

const Navbar = ({ toggleTheme, isDarkMode }) => {
    return (
        <nav className={`fixed w-full h-auto p-2 bg-transparent z-10 flex justify-between items-center ${isDarkMode ? 'text-black' : 'text-white' }`}>
            <button className="border-2 border-emerald-400 rounded-xl p-2 font-bold">
                <Link to={'/'}>Home</Link>
            </button>
            <div>
                <button className="border-2 border-emerald-400 rounded-xl p-2 mr-2">
                    <Link to={'/create'} >
                        <FaRegSquarePlus size={30} />
                    </Link>
                </button>
                <button className="border-2 border-emerald-400 rounded-xl p-2" onClick={toggleTheme}>
                    {isDarkMode ? <FaMoon size={30} /> : <FaSun size={30}/>}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
