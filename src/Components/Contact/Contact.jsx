import Lottie from 'lottie-react';
import email from '../../email.json';
import { MapPin } from 'lucide-react';
import { FaWhatsapp, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";

const Contact = () => {
    return (
        <section id="contact" className="relative py-20  text-white overflow-hidden">

            {/* Section Header */}
            <div className="text-center mb-12 relative z-10">
                <p className="text-gray-400">|| Contact</p>
                <h2 className="bg-gradient-to-l from-sky-400 to-cyan-300 bg-clip-text text-transparent text-3xl font-bold drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]">
                    Get in Touch
                </h2>
            </div>

            {/* Main Layout */}
            <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center gap-16 relative z-10">

                {/* Left: Lottie + Contact Info */}
                <div className="  items-center text-center space-y-8">
                    {/* Lottie Animation */}
                    <Lottie
                        className="w-72 md:w-96 drop-shadow-[0_0_20px_rgba(56,189,248,0.3)]"
                        animationData={email}
                        loop={true}
                    />

                    {/* Contact Info */}
                    <div className="flex flex-col items-center text-center mt-6">
                        {/* Location, Phone, Email */}
                        <div className="flex flex-wrap justify-center gap-6 text-gray-300 text-sm md:text-base mb-6">
                            <p className="flex items-center gap-2">
                                <MapPin className="text-cyan-400" /> Dhaka, Bangladesh
                            </p>
                            <p className="flex items-center gap-2">
                                <FaWhatsapp className="text-green-400" /> +8801993628220
                            </p>
                            <p className="flex items-center gap-2">
                                <MdEmail className="text-sky-400" /> mdsharia4613@gmail.com
                            </p>
                        </div>

                        {/* Find Me Online */}
                        <div className="mt-4">
                            <h2 className="text-lg font-semibold mb-3  bg-linear-to-r from-rose-500 to-sky-400 bg-clip-text text-transparent">
                                Find Me Online
                            </h2>
                            <div className="flex justify-center gap-8 text-2xl">
                                <a href="#" className="hover:text-sky-400 transition-all duration-300">
                                    <FaGithub />
                                </a>
                                <a href="#" className="hover:text-sky-400 transition-all duration-300">
                                    <CiFacebook />
                                </a>
                                <a href="#" className="hover:text-sky-400 transition-all duration-300">
                                    <FaLinkedinIn />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Right: Contact Form */}
                <form className="bg-gray-900/50 backdrop-blur-xl border border-cyan-500/40 rounded-2xl p-8 w-full max-w-lg shadow-[0_0_25px_rgba(56,189,248,0.15)] hover:shadow-[0_0_40px_rgba(56,189,248,0.4)] transition-all duration-500">
                    <div className="grid grid-cols-2 gap-5">
                        <input
                            className="bg-gray-800 text-white border border-cyan-400/60 focus:border-cyan-300 focus:ring-1 focus:ring-cyan-300 px-5 py-2 rounded-full outline-none transition-all duration-300"
                            type="text"
                            placeholder="Enter your name"
                            required
                        />
                        <input
                            className="bg-gray-800 text-white border border-cyan-400/60 focus:border-cyan-300 focus:ring-1 focus:ring-cyan-300 px-5 py-2 rounded-full outline-none transition-all duration-300"
                            type="email"
                            placeholder="Enter your email"
                            required
                        />
                        <input
                            className="col-span-2 bg-gray-800 text-white border border-cyan-400/60 focus:border-cyan-300 focus:ring-1 focus:ring-cyan-300 px-5 py-2 rounded-full outline-none transition-all duration-300"
                            type="text"
                            placeholder="Subject"
                        />
                        <textarea
                            className="col-span-2 bg-gray-800 text-white border border-cyan-400/60 focus:border-cyan-300 focus:ring-1 focus:ring-cyan-300 px-5 py-3 rounded-xl outline-none transition-all duration-300 resize-none"
                            rows="6"
                            placeholder="Write your message..."
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="col-span-2 py-2 rounded-full font-semibold tracking-wide border border-cyan-400/70 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300 hover:shadow-[0_0_15px_rgba(56,189,248,0.7)] transition-all duration-500 hover:scale-105"
                        >
                            Send Message 🚀
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
