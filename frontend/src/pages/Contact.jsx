import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({ from_name: '', from_email: '', message: '' });
    const [sending, setSending] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    // handle form input field changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // handle form submission
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setSending(true);
        setSuccess(false);
        setError('');

        // validate form before submission
        const { from_name, from_email, message } = formData;

        if (!from_name || !from_email || !message) {
            setError('All fields are required');
            setSending(false);
            return;
        }

        // form submission
        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formData,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            setSuccess(true);
            setFormData({ from_name: '', from_email: '', message: '' });
        } catch(err) {
            console.log("error: ", err)
            setError('Something went wrong. Please try again later');
        } finally {
            setSending(false);
        }

        // for testing purposes only
        setTimeout(() => {
            setSending(false);
            setSuccess(true)
        }, 1500);
    };


    return (
        <section id="contact" className="relative py-24 px-6 sm:px-10 md:px-20 md:pt-36 shadow-inner">
            {/* fancy bubbles */}
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>

            <motion.h2
                className="text-3xl md:text-4xl font-bold text-blue-900 mb-10 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                // style={{ border: "2px solid magenta"}}
            >
                Let's Connect
            </motion.h2>

            <motion.div
                className="flex flex-col md:flex-row gap-12 md:gap-24 py-6 justify-between max-w-4xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                // style={{border: "2px solid red"}}
            >
                {/* contact form */}
                <form onSubmit={handleFormSubmit} className="flex-1 space-y-4 text-center">
                    <input
                        type="text"
                        name="from_name"
                        placeholder="Your Name"
                        value={formData.from_name}
                        onChange={handleChange}
                        className="w-full border border-blue-200 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                    <input
                        type="email"
                        name="from_email"
                        placeholder="Your Email"
                        value={formData.from_email}
                        onChange={handleChange}
                        className="w-full border border-blue-200 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                    <textarea
                        rows="5"
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full border border-blue-200 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                    ></textarea>
                    <button
                        type="submit"
                        disabled={sending}
                        className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
                    >
                        {sending ? 'Sending...' : 'Send'} <FaEnvelope />
                    </button>

                    {error && <p className="text-red-600 text-sm mt-3 animate-fade-in">{error}</p>}
                    {success && <p className="text-green-600 text-sm mt-3 animate-fade-in">Message sent successfully!</p>}

                </form>

                {/* contact info */}
                <div className="flex-1 space-y-6">
                    <div>
                        <p className="text-gray-700 text-sm mb-2">You can also reach me directly at:</p>
                        <a href="mailto:rjkimojino@gmail.com" className="text-blue-600 hover:underline">
                            <FaEnvelope className="inline-block mr-2" /> rjkimojino@gmail.com
                        </a>
                    </div>
                    <div>
                        <p className="text-gray-700 text-sm mb-2">Find me online:</p>
                        <div className="flex gap-4 text-xl">
                            <a
                                href="https://github.com/rjkweiss"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:text-black"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/joyce-kimojino-weiss/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-700 hover:text-blue-900"
                            >
                                <FaLinkedin />
                            </a>
                        </div>

                    </div>
                    <div></div>
                </div>
            </motion.div>

        </section>
    );
};

export default Contact;
