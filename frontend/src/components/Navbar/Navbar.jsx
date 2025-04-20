import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleDeviceResize = () => setIsMobile(window.innerWidth <= 768);
        handleDeviceResize();
        window.addEventListener('resize', handleDeviceResize);
        return () => window.removeEventListener('resize', handleDeviceResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let current = 'home';

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight /2) {
                    current = section.getAttribute("id");
                }
            });

            requestAnimationFrame(() => setActiveSection(current));
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (id, route) => {
        setMenuOpen(false);
        if (isMobile) {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate(route);
        }
    };


    const navItemClass = (id, route) => {
        const isMobile = window.innerWidth <= 768;
        const isActive = isMobile || location.pathname ==='/'
            ? activeSection === id
            : location.pathname === route;

        return `relative cursor-pointer transition-colors duration-300
            ${isActive ? 'text-blue-600 font-semibold' : 'hover:text-blue-500'}
            after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:transition-all after:duration-300
            ${isActive ? 'after:bg-blue-600' : 'after:bg-transparent hover:after:bg-blue-400'}`;

    };

    return (
        <motion.nav
            className="flex flex-col md:flex-row md:justify-between items-center gap-4 md:gap-0  px-6 py-4 bg-white bg-opacity-80 backdrop-blur-md fixed w-full z-50 shadow-md transition-all duration-500 ease-in-out"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
        >
            <div className="flex justify-between items-center w-full px-6 py-4">
                <h1 className="text-2xl font-bold tracking-wider text-blue-800 transition-colors duration-300">Resian.dev</h1>
                <div className="md:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-blue-800 focus:outline-none transform transition-transform duration-200 hover:scale-110"
                    >
                        {menuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
                    </button>
                </div>
                <ul className="hidden md:flex gap-6 text-lg">
                    <li className={navItemClass('home', '/')} onClick={() => handleClick('home', '/')}>Home</li>
                    <li className={navItemClass('experiences', '/experiences')} onClick={() => handleClick('experiences', '/experiences')}>Experiences</li>
                    <li className={navItemClass('projects', '/projects')} onClick={() => handleClick('projects', '/projects')}>Projects</li>
                    <li className={navItemClass('contact', '/contact')} onClick={() => handleClick('contact', '/contact')}>Contact</li>
                </ul>
            </div>
            {menuOpen && (
                <div className="md:hidden px-6 pb-4">
                    <ul className="flex flex-col gap-4 text-lg">
                        <li className="cursor-pointer" onClick={() => handleClick('home', '/')}>Home</li>
                        <li className="cursor-pointer" onClick={() => handleClick('projects', '/projects')}>Projects</li>
                        <li className="cursor-pointer" onClick={() => handleClick('contact', '/contact')}>Contact</li>
                    </ul>
                </div>
            )}
        </motion.nav>
    );
};

export default Navbar;
