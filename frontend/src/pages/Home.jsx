import { motion } from "framer-motion";

import Projects from "./Projects";
import Contact from "./Contact";
import Hero from "./Hero";
import Timeline from "./Timeline";

const Home = () => {

    return (
        <>
            <Hero />

            {/* projects section */}
            <Projects />

            <Timeline />

            {/* contacts section */}
            <Contact />
        </>
    );
};

export default Home
