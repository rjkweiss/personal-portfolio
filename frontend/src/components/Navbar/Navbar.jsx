import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <motion.nav
            className="flex justify-between items-center px-6 py-4 bg-white bg-opacity-80 backdrop-blur-md fixed w-full z-50 shadow-md transition-all duration-500 ease-in-out"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, ease: 'easeInOut'}}
        >
            <h1 className="text-2xl font-bold tracking-wider text-blue-800 transition-colors duration-300">Resian.dev</h1>
            <ul className="flex gap-6 text-lg">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? 'text-blue-600 font-semibold underline underline-offset-4'
                                : 'hover:text-blue-500 hover:underline hover:underline-offset-4     transition-colors duration-300'
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/projects"
                        className="hover:text-blue-500 hover:underline hover:underline-offset-4 transition-colors duration-300"
                    >
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        className="hover:text-blue-500 hover:underline hover:underline-offset-4 transition-colors duration-300"
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </motion.nav>
    );
};

export default Navbar;
