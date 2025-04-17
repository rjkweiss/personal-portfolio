import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const toggleMenu = () => setIsOpen(!isOpen);

    // event handler that scrolls the user to section selected
    const handleClick = (e, sectionId) => {
        e.preventDefault();

        // get section
        const section = document.getElementById(sectionId);

        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        // close hamburger menu
        setIsOpen(false);
    };

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const handleScroll = () => {
            let current = 'home';
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 80) {
                    current = section.getAttribute("id");
                }
            });

            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItemClass = (id) => {
        activeSection === id
            ? 'text-blue-600 font-semibold underline underline-offset-4'
            : 'hover:text-blue-500 hover:underline hover:underline-offset-4 transition-colors duration-300';
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
                        onClick={toggleMenu}
                        className="text-blue-800 focus:outline-none transform transition-transform duration-200 hover:scale-110"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
                <ul className="hidden md:flex gap-6 text-lg">
                    <li>
                        <a href="#home" onClick={(e) => handleClick(e, 'home')} className={navItemClass('home')}>Home</a>
                    </li>
                    <li>
                        <a href="#projects" onClick={(e) => handleClick(e, 'projects')} className={navItemClass('projects')}>Projects</a>
                    </li>
                    <li>
                        <a href="#contact" onClick={(e) => handleClick(e, 'contact')} className={navItemClass('contact')}>Contact</a>
                    </li>
                </ul>
            </div>
            {isOpen && (
                <div className="md:hidden px-6 pb-4">
                    <ul className="flex flex-col gap-4 text-lg">
                        <li>
                            <a href="#home" onClick={(e) => handleClick(e, 'home')} className={navItemClass('home')}>Home</a>
                        </li>
                        <li>
                            <a href="#projects" onClick={(e) => handleClick(e, 'projects')} className={navItemClass('projects')}>Projects</a>
                        </li>
                        <li>
                            <a href="#contact" onClick={(e) => handleClick(e, 'contact')} className={navItemClass('contact')}>Contact</a>
                        </li>
                    </ul>
                </div>
            )}
        </motion.nav>
    );
};

export default Navbar;
