import { Facebook, Github, Linkedin } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Navbr = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Education", path: "/education" },
        { name: "Experience", path: "/experience" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <div className="bg-[#0f172a]/90 backdrop-blur-md text-gray-200 fixed w-full top-0 z-50 shadow-md">
            <div className="container mx-auto px-10">
                <div className="flex justify-between items-center py-4">

                    {/* Logo */}
                    <NavLink to="/" className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                        Sharia
                    </NavLink>

                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex gap-8 text-sm font-medium">
                        {links.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>
                                    `transition-all duration-500 hover:text-sky-400 ${isActive ? "text-sky-400 underline underline-offset-4" : ""}`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
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
                        className="lg:hidden focus:outline-none text-gray-300"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <ul className="lg:hidden flex flex-col items-center gap-4 pb-4 animate-fadeIn">
                        {links.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className="hover:text-sky-400 transition-all duration-300"
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <div className="flex gap-4 mt-3">
                            <a href="#"><Facebook className="hover:text-sky-400" /></a>
                            <a href="#"><Github className="hover:text-sky-400" /></a>
                            <a href="#"><Linkedin className="hover:text-sky-400" /></a>
                        </div>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Navbr;
