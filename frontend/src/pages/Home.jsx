import { motion } from "framer-motion";
import headshot from '../assets/logo.png';

const Home = () => {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen text-center pt-32 px-4 transition-all duration-700 ease-in-out overflow-hidden">

            {/* fancy bubbles */}
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>

            <motion.div
                className="absolute w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"
                animate={{ x: [0, 20, -20, 0], y: [0, 20, -10, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
                style={{ top: '20%', left: 'calc(50% - 12rem)', zIndex: 0 , border: '2px solid red'}}
            />

            <motion.img
                src={headshot}
                alt="Joyce Resian Kimojino-Weiss headshot"
                className="w-40 h-40 object-cover rounded-full shadow-[0_4px_20px_rgba(59,130,246,0.3)] border-4 border-blue-400 hover:scale-105 transition-transform duration-500 z-10"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 90, damping: 12, delay: 0.2 }}
            />

            <motion.h1
                className="mt-6 text-4xl font-extrabold tracking-tight leading-tight text-blue-900 z-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: 'easeInOut' }}
            >
                <span className="bg-gradient-to-r from-blue-700 via-blue-500 to-indigo-400 bg-clip-text text-transparent">Hi, I'm Joyce Kimojino-Weiss</span>
            </motion.h1>

            <motion.p
                className="mt-4 max-w-xl text-lg text-blue-700 z-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8, ease: 'easeInOut' }}
            >
                I build beautiful full-stack web applications and craft elegant digital experiences with React, Node and magic
            </motion.p>

            <motion.div
                className="mt-8 animate-bounce text-blue-600 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
            >
            ↓ Scroll
            </motion.div>
        </div>
    );
};

export default Home
