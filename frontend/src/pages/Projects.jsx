import { motion } from "framer-motion";

import ProjectCard from "../components/ProjectCard/ProjectCard";

// dummy data
const projectData = [
    {
        image: 'src/assets/logo.png',
        title: 'Project One',
        description: 'Example Project One description here',
        link: '#',
        github: "https://github.com/yourname/etsy-clone",
        tech: ['NodeJS', 'React', 'Express', 'PostgreSQL']
    },
    {
        image: 'src/assets/logo.png',
        title: 'Project Two',
        description: 'Example Project Two description here',
        link: '#',
        github: "https://github.com/yourname/etsy-clone",
        tech: ['Python', 'Flask', 'SQLAlchemy', 'Javascript']
    },
    {
        image: 'src/assets/logo.png',
        title: 'Project Three',
        description: 'Example Project One description here',
        link: '#',
        github: "https://github.com/yourname/etsy-clone",
        tech: ['NodeJS', 'NextJs', 'Javascript', 'MongoDB']
    },
];

const Projects = () => {

    return (
        <section id="projects" className="relative py-24 px-6 sm:px-10 md:px-20 bg-white bg-opacity-70 shadow-inner">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-10 text-center">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectData.map((project, index) => (
                    <ProjectCard key={project.title} {...project} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Projects;


// backdrop-blur-sm shadow-inner rounded-t-3xl
