import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const TimelineCard = ({ entry, index }) => {


    // destructure entry
    const {
        institution,
        title,
        location,
        date,
        description,
        skills = [],
    } = entry;

    const isLeft = index % 2 === 0;
    const controls = useAnimation();
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) controls.start("visible");
          },
          { threshold: 0.2 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => ref.current && observer.unobserve(ref.current);
    }, [controls]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
            }}
            className={`relative mb-12 w-full sm:w-[45%]  ${
                isLeft ? "sm:ml-auto sm:mr-[calc(50%+1rem)]" : "sm:mr-auto sm:ml-[calc(50%+1rem)]"
            } flex flex-col`}
        >
            {/* Timeline Dot */}
            <div
                className={`hidden sm:block absolute top-4 ${
                    isLeft ? "-right-[1.6rem]" : "-left-[1.6rem]"
                    } z-10 w-5 h-5 border-3 border-blue-400 bg-white rounded-full`}
            >
            </div>

            {/* card */}

            <div className={`relative bg-white border border-blue-100 rounded-lg shadow-md px-5 py-4 text-blue-900 ${ isLeft ? "sm:mr-4" : "sm:ml-4"} ml-4`}>
                {/* arrow */}
                {isLeft ? (
                    <div className="hidden sm:block absolute top-4 -right-3 w-0 h-0
                        border-t-[12px] border-b-[12px] border-l-6
                        border-t-transparent border-b-transparent border-l-blue-300"
                    />
                ) : (
                    <div className="hidden sm:block absolute top-4 -left-3 w-0 h-0
                        border-t-[12px] border-b-[12px] border-r-6
                        border-t-transparent border-b-transparent border-r-blue-300"
                    />
                )}

                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-sm text-gray-600">{institution} • {location}</p>
                <p className="text-sm text-gray-500 italic">{date}</p>

                {/* description */}
                <ul className="mt-2 list-disc list-inside text-sm text-gray-700 space-y-1">
                    {description.map((bullet, i) => <li key={i}>{bullet}</li>)}
                </ul>

                {/* display featured skills */}
                <div className="flex flex-wrap gap-2 mt-3">
                    {skills.map((tag, i) => (
                        <span key={i} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>

            </div>
        </motion.div>
    );
};

export default TimelineCard;
