import { Facebook, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-scroll';
import { useState } from 'react';
import './Navber.css'
import { motion } from "framer-motion";
const Navbr = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-[#0f172a]/90 backdrop-blur-md text-gray-200 fixed w-full top-0 z-50 shadow-md">
            <div className="container mx-auto">
                <div className="flex justify-between items-center py-4 px-4 md:px-8">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.1, textShadow: "0px 0px 8px rgb(56,189,248)" }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Link
                            to="home"
                            smooth={true}
                            duration={700}
                            offset={-70}
                            className="text-3xl font-bold bg-linear-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent cursor-pointer drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]"
                        >
                            Sharia
                        </Link>
                    </motion.div>
                    
                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex gap-8 text-sm font-medium">
                        <Link to="home" smooth={true}
                            duration={700}
                            offset={-70} className=" transition underline-effect  cursor-pointer hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]">Home</Link>
                        <Link
                            to="about-section"
                            smooth={true}
                            duration={700}
                            offset={-70}
                            className="cursor-pointer  transition underline-effect bg-linear-to-l from-sky-400 to-cyan-300 bg-clip-text text-transparent hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]"
                        >
                            About
                        </Link>
                        <Link to='skills' smooth={true} duration={700} offset={-70} className=" transition cursor-pointer underline-effect hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]">Skills</Link>
                        <Link to='education' smooth={true} duration={700} offset={-70} className="hover:text-sky-400 transition cursor-pointer underline-effect hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]">Education</Link>
                        <Link className="hover:text-sky-400 transition cursor-pointer underline-effect hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]">Experience</Link>
                        <Link to='project' smooth={true} duration={700} offset={-70} className="hover:text-sky-400 transition cursor-pointer underline-effect hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]">Project</Link>
                        <Link to='contact' smooth={true} duration={700} offset={-70} className="hover:text-sky-400 transition cursor-pointer underline-effect hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]">Contact</Link>
                    </ul>

                    {/* Social Icons */}
                    <div className="hidden lg:flex gap-5 text-gray-300">
                        <a href="#"><Facebook className="hover:text-sky-400 transition duration-700 hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]" /></a>
                        <a href="#"><Github className="hover:text-sky-400 transition duration-700 hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]" /></a>
                        <a href="#"><Linkedin className="hover:text-sky-400 transition duration-700 hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]" /></a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden focus:outline-none text-cyan-300 transition-transform duration-300"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 cursor-pointer"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={
                                    isOpen
                                        ? "M6 18L18 6M6 6l12 12"
                                        : "M4 6h16M4 12h16M4 18h16"
                                }
                            />
                        </svg>
                    </button>
                </div>

                {/* ✅ Mobile Menu (Smooth Animation) */}
                <div
                    className={`lg:hidden flex flex-col items-center gap-4 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
                        }`}
                >
                    <Link
                        to="home"
                        onClick={() => setIsOpen(false)}
                        className="hover:text-sky-400 transition cursor-pointer underline-effect hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]"
                    >
                        Home
                    </Link>
                    <Link
                        to="about-section"
                        smooth={true}
                        duration={700}
                        offset={-70}
                        onClick={() => setIsOpen(false)}
                        className="hover:text-sky-400 transition cursor-pointer underline-effect hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]"
                    >
                        About
                    </Link>
                    <Link to='skills' className="hover:text-sky-400 transition cursor-pointer underline-effect hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]r">Skills</Link>
                    <Link to='education' className="hover:text-sky-400 transition cursor-pointer underline-effect hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]">Education</Link>
                    <Link to='contact' className="hover:text-sky-400 transition cursor-pointer underline-effect hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]">Experience</Link>
                    <Link className="hover:text-sky-400 transition cursor-pointer underline-effect hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]">Project</Link>
                    <Link className="hover:text-sky-400 transition cursor-pointer underline-effect hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]">Contact</Link>

                    <div className="flex gap-4 mt-3">
                        <a href="#"><Facebook className="hover:text-sky-400 transition hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]" /></a>
                        <a href="#"><Github className="hover:text-sky-400 transition hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]" /></a>
                        <a href="#"><Linkedin className="hover:text-sky-400 transition hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbr;
