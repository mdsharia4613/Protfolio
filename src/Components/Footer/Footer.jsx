import { Link } from 'react-scroll';


const Footer = () => {
    return (
        <section>
            <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
                <aside>
                    <div className="flex  items-center w-96 ">
                        <p className="text-sm text-gray-300 leading-relaxed">
                            Sharia
                        </p>
                    </div>

                    <p className="w-96 mt-3 text-gray-400">
                        Hello, I'm Sharia, a web developer that focuses on creating elegant,
                        responsive, and user-friendly websites. "Excited about executing your ideas!"
                    </p>
                </aside>
                <nav className='space-y-4'>
                    <div>
                        <h6 className="footer-title bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">Sharia</h6>
                        <a className="link link-hover">mdsharia4613@gmail.com</a>
                    </div>
                    <div>
                        <h6 className="footer-title bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">Call</h6>
                        <a className="link link-hover">+8801993628220</a>
                    </div>
                </nav>
                <nav>
                    <h6 className="footer-title bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">Quick Links</h6>
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
                        className="cursor-pointer  transition underline-effect bg-linear-to-l from-sky-400 to-cyan-300 bg-clip-text text-transparent hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]"
                    >
                        Project
                    </Link>
                </nav>
                <nav>
                    <h6 className="footer-title bg-linear-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">Social</h6>
                    <a className="link link-hover">Facebook</a>
                    <a className="link link-hover">Linkdine</a>
                    <a className="link link-hover">Github</a>
                </nav>
            </footer>
        </section>
    );
};

export default Footer;