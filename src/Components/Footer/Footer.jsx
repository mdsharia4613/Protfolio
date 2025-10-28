import React from 'react';

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
                        <h6 className="footer-title bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">Sharia</h6>
                        <a className="link link-hover">mdsharia4613@gmail.com</a>
                    </div>
                </nav>
                <nav>
                    <h6 className="footer-title bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">Quick Links</h6>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Skills</a>
                    <a className="link link-hover">Experience</a>
                    <a className="link link-hover">Project</a>
                </nav>
                <nav>
                    <h6 className="footer-title bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">Social</h6>
                    <a className="link link-hover">Facebook</a>
                    <a className="link link-hover">Linkdine</a>
                    <a className="link link-hover">Github</a>
                </nav>
            </footer>
        </section>
    );
};

export default Footer;