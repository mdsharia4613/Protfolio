import { Link } from 'react-scroll';
import { Facebook, Github, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <section className='bg-linear-to-b from-[#0a192f] to-[#020617]'>
            <footer className="footer sm:footer-horizontal text-base-content p-10 container mx-auto">
                <aside>
                    <div className="flex  items-center w-96 ">
                        <Link
                            to="home"
                            smooth={true}
                            duration={700}
                            offset={-70}
                            className="text-4xl font-bold bg-linear-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent cursor-pointer drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]"
                        >
                            Sharia
                        </Link>
                    </div>

                    <p className="w-80 md:w-96 mt-3 bg-linear-to-l from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                        Hello, I'm Sharia, a web developer that focuses on creating elegant,
                        responsive, and user-friendly websites. "Excited about executing your ideas!"
                    </p>
                </aside>
                <nav className='space-y-4'>
                    <div>
                        <h6 className="footer-title text-red-500 ">Say Hello</h6>
                        <a className="link link-hover  cursor-pointer  transition underline-effect bg-linear-to-l from-sky-400 to-cyan-300 bg-clip-text text-transparent ">mdsharia4613@gmail.com</a>
                    </div>
                    <div>
                        <h6 className=" cursor-pointer  transition underline-effect bg-linear-to-l from-sky-400 to-cyan-300 bg-clip-text text-transparent ">Call <a className="">+8801993628220</a></h6>
                        
                    </div>
                </nav>
                <nav>
                    <h6 className="footer-title text-red-500">Quick Links</h6>
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
                    <Link
                        to="about-section"
                        smooth={true}
                        duration={700}
                        offset={-70}
                        className="cursor-pointer  transition underline-effect bg-linear-to-l from-sky-400 to-cyan-300 bg-clip-text text-transparent hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]"
                    >
                        Skills
                    </Link>
                    <Link
                        to="about-section"
                        smooth={true}
                        duration={700}
                        offset={-70}
                        className="cursor-pointer  transition underline-effect bg-linear-to-l from-sky-400 to-cyan-300 bg-clip-text text-transparent hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]"
                    >
                        Education
                    </Link>
                    <Link
                        to="about-section"
                        smooth={true}
                        duration={700}
                        offset={-70}
                        className="cursor-pointer  transition underline-effect bg-linear-to-l from-sky-500 to-cyan-400 bg-clip-text text-transparent hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]"
                    >
                        Project
                    </Link>
                </nav>
                <nav className="flex flex-col items-center justify-center text-center">
                    <h6 className="footer-title text-red-500 mb-3">
                        Social
                    </h6>

                    <div className="flex items-center justify-center gap-5">
                        <a href="https://www.facebook.com/md.sharia.368567/" target="_blank" rel="noopener noreferrer">
                            <Facebook className="hover:text-sky-400 transition duration-700 hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.6)] cursor-pointer" />
                        </a>
                        <a href="https://github.com/mdsharia4613" target="_blank" rel="noopener noreferrer">
                            <Github className="hover:text-sky-400 transition duration-700 hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.6)] cursor-pointer" />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="hover:text-sky-400 transition duration-700 hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.6)] cursor-pointer" />
                        </a>
                    </div>
                </nav>

            </footer>
            {/* Copyright Section */}
           <div className='bg-gray-900'>
                <div className=" mt-6 pt-4 pb-2 text-center text-sm text-gray-400">
                    © 2025 <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent font-semibold">Sharia</span> — All Rights Reserved
                </div>
           </div>
        </section>
    );
};

export default Footer;