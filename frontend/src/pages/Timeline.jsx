// import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
// import 'react-vertical-timeline-component/style.min.css';
// import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import TimelineCard from "../components/Timeline/TimelineCard";

// test-data only -- will dynamically add data from DB
const timelineData = [
    {
        title: 'Frontend Engineer',
        institution: 'TechNova Inc.',
        location: 'Remote',
        date: '2023 – Present',
        description: [
            'Built and maintained reusable component library using React and TailwindCSS.',
            'Collaborated with backend teams to integrate RESTful APIs.',
        ],
        skills: ['React', 'TailwindCSS', 'TypeScript', 'REST APIs'],
        type: 'work',
    },
    {
        title: 'Full Stack Developer Intern',
        institution: 'CodeCrafters Lab',
        location: 'New York, NY',
        date: 'Summer 2022',
        description: [
            'Developed internal tools using Node.js and React.',
            'Implemented user authentication with JWT and OAuth2.',
        ],
        skills: ['Node.js', 'React', 'OAuth2', 'MongoDB'],
        type: 'work',
    },
    {
        title: 'B.S. in Computer Science',
        institution: 'University of Nairobi',
        location: 'Nairobi, Kenya',
        date: '2018 – 2022',
        description: [
            'Graduated with First Class Honors.',
            'Specialized in software engineering and data structures.',
        ],
        skills: ['Python', 'Data Structures', 'Algorithms'],
        type: 'education',
    },
    {
        title: 'Freelance Developer',
        institution: 'Self-Employed',
        location: 'Remote',
        date: '2021 – 2023',
        description: [
            'Delivered custom websites and dashboards to small businesses.',
            'Worked directly with clients to refine UI/UX and improve SEO.',
        ],
        skills: ['HTML', 'CSS', 'JavaScript', 'SEO'],
        type: 'work',
    },
    {
        title: 'Frontend Mentor Projects',
        institution: 'Self-Paced',
        location: 'Online',
        date: 'Ongoing',
        description: [
            'Built responsive landing pages and forms from challenge briefs.',
            'Focused on accessibility and semantic HTML.',
        ],
        skills: ['Accessibility', 'Responsive Design', 'GitHub'],
        type: 'education',
    },
];

const Timeline = () => {
    return (
        <section id="experiences" className="relative py-16 px-6 sm:px-8 md:pt-36">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12 text-center">
                Experience & Education
            </h2>
            <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-[95%] sm:h-full w-[2px] bg-blue-300 z-0" />
                <div className="flex flex-col">
                    {timelineData.map((exp, index) => (
                        <TimelineCard key={index} entry={exp} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
