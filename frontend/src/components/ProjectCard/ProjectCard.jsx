import { useEffect, useState, useRef } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({image, title, description, link, github, tech, index}) => {

    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useRef();

    useEffect(() => {
        if (isOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = '';
        return () => (document.body.style.overflow = '');
    }, [isOpen]);

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (isOpen && modalRef.current && !modalRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        return () => document.removeEventListener('mousedown', handleOutsideClick);
    }, [isOpen]);

    return (
        <>
            <motion.div
                onClick={() => setIsOpen(true)}
                className="cursor-pointer group bg-white rounded-xl shadow-lg p-4 sm:p-6 text-left border border-blue-100 hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
            >
                {image && (
                    <div className="w-full h-48 overflow-hidden rounded-lg mb-4">
                        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
                    </div>
                )}
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm mb-3">{description}</p>
                <div className="flex flex-wrap gap-2 text-xs mb-2">
                    {tech?.map((t) => (
                        <span key={t} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">{t}</span>
                    ))}
                </div>
                <span className="text-sm text-blue-500 group-hover:underline">View Project →</span>
            </motion.div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-white/60 backdrop-blur-sm p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{border: "2px solid red"}}
                    >
                        <motion.div
                            ref={modalRef}
                            className="bg-white max-w-lg w-full rounded-lg shadow-xl p-6 relative text-left"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            style={{border: "2px solid lightskyblue"}}
                        >
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-3 right-3 text-lg text-gray-500 hover:text-red-500 focus:outline-none"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                x
                            </button>
                            {image && (
                                <img src={image} alt={title} className="w-full h-48 object-cover rounded mb-4" />
                            )}
                            <h3 className="text-xl font-bold text-blue-800 mb-2">{title}</h3>
                            <p className="text-gray-700 text-sm mb-4">{description}</p>
                            <div className="flex flex-wrap gap-2 text-xs mb-4">
                                {tech?.map((t) => (
                                    <span key={t} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">{t}</span>
                                ))}
                            </div>
                            <div className="flex gap-6 mt-6 text-sm items-center">
                                {/* className="flex flex-wrap justify-between gap-3 mt-4 */}
                                <a
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline flex items-center gap-2"
                                >
                                    <FaExternalLinkAlt /> Live Demo
                                </a>
                                {github && (
                                    <a
                                        href={github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-indigo-600 hover:underline flex items-center gap-2"
                                    >
                                        <FaGithub /> Github Repo
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ProjectCard;
