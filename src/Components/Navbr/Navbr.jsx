import { Facebook, Github, Linkedin } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import { useState } from 'react';

const Navbr = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-[#0f172a]/90 backdrop-blur-md text-gray-200 fixed w-full top-0 z-50 shadow-md">
            <div className="container mx-auto">
                <div className="flex justify-between items-center py-4 px-4 md:px-8">
                    {/* Logo */}
                    <NavLink
                        to="/"
                        className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent"
                    >
                        Sharia
                    </NavLink>

                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex gap-8 text-sm font-medium">
                        <Link to="/" className="hover:text-sky-400 transition">Home</Link>
                        <Link
                            to="about-section"
                            smooth={true}
                            duration={700}
                            offset={-70}
                            className="cursor-pointer hover:text-sky-400 transition"
                        >
                            About
                        </Link>
                        <Link to='skills' smooth={true} duration={700} offset={-70} className="hover:text-sky-400 transition cursor-pointer">Skills</Link>
                        <Link to='education' className="hover:text-sky-400 transition cursor-pointer">Education</Link>
                        <Link className="hover:text-sky-400 transition cursor-pointer">Experience</Link>
                        <Link className="hover:text-sky-400 transition cursor-pointer">Project</Link>
                        <Link className="hover:text-sky-400 transition cursor-pointer">Contact</Link>
                    </ul>

                    {/* Social Icons */}
                    <div className="hidden lg:flex gap-5 text-gray-300">
                        <a href="#"><Facebook className="hover:text-sky-400 transition" /></a>
                        <a href="#"><Github className="hover:text-sky-400 transition" /></a>
                        <a href="#"><Linkedin className="hover:text-sky-400 transition" /></a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden focus:outline-none text-gray-300 transition-transform duration-300"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
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
                        to="/"
                        onClick={() => setIsOpen(false)}
                        className="hover:text-sky-400 transition cursor-pointer"
                    >
                        Home
                    </Link>
                    <Link
                        to="about-section"
                        smooth={true}
                        duration={700}
                        offset={-70}
                        onClick={() => setIsOpen(false)}
                        className="cursor-pointer hover:text-sky-400 transition"
                    >
                        About
                    </Link>
                    <Link to='skills' className="hover:text-sky-400 transition cursor-pointer">Skills</Link>
                    <Link to='education' className="hover:text-sky-400 transition cursor-pointer">Education</Link>
                    <Link to='contact' className="hover:text-sky-400 transition cursor-pointer">Experience</Link>
                    <Link className="hover:text-sky-400 transition cursor-pointer">Project</Link>
                    <Link className="hover:text-sky-400 transition cursor-pointer">Contact</Link>

                    <div className="flex gap-4 mt-3">
                        <a href="#"><Facebook className="hover:text-sky-400 transition" /></a>
                        <a href="#"><Github className="hover:text-sky-400 transition" /></a>
                        <a href="#"><Linkedin className="hover:text-sky-400 transition" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbr;
