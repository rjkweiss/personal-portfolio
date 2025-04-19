import { motion } from "framer-motion";

import Projects from "./Projects";
import Contact from "./Contact";
import Hero from "./Hero";

const Home = () => {

    return (
        <>
            <Hero />

            {/* projects section */}
            <Projects />

            {/* contacts section */}
            <Contact />
        </>
    );
};

export default Home
