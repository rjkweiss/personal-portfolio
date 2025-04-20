import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const TimelineCard = ({ entry, index }) => {


    // destructure entry
    const {
        institution,
        title,
        location,
        date,
        description,
        skills = [],
        side
    } = entry;

    const isLeft = index % 2 === 0;

    return (
        <div className="relative w-full flex justify-between items-center mb-16">
            {isLeft ? (
                <>
                    <div className="w-5/12 bg-white shadow-lg p-6 rounded-lg z-10">
                        <h3 className="text-lg font-bold text-blue-800">{title}</h3>
                        <p className="text-sm text-gray-600">{institution} • {location}</p>
                        <p className="text-sm text-gray-500 mb-2">{date}</p>
                        <ul className="text-sm list-disc pl-5 mb-2">
                        {description.map((desc, i) => (
                            <li key={i}>{desc}</li>
                        ))}
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {skills.map((skill, i) => (
                                <span key={i} className="bg-blue-100 text-blue-800 px-2 py-1 text-xs rounded-full">
                                {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="w-1/12 flex justify-center">
                        <div className="w-4 h-4 bg-blue-600 rounded-full z-20"></div>
                    </div>
                    {/* <div className="absolute left-[1500px] top-6 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-white"></div> */}
                    <div className="w-5/12"></div>

                </>
            ) : (
                <>
                    <div className="w-5/12"></div>
                    <div className="w-1/12 flex justify-center">
                        <div className="w-4 h-4 bg-blue-600 rounded-full z-20"></div>
                    </div>
                    <div className="w-5/12 bg-white shadow-lg p-6 rounded-lg z-10">
                        <h3 className="text-lg font-bold text-blue-800">{title}</h3>
                        <p className="text-sm text-gray-600">{institution} • {location}</p>
                        <p className="text-sm text-gray-500 mb-2">{date}</p>
                        <ul className="text-sm list-disc pl-5 mb-2">
                        {description.map((desc, i) => (
                            <li key={i}>{desc}</li>
                        ))}
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-2">
                        {skills.map((skill, i) => (
                            <span key={i} className="bg-blue-100 text-blue-800 px-2 py-1 text-xs rounded-full">
                            {skill}
                            </span>
                        ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default TimelineCard;
