

import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Lottie from "lottie-react";
import coding from "../../cosing.json"


const About = () => {
    return (



        <section id="about-section" className="py-28 text-white">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-32 items-center">

                {/* Left: Image */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    whileHover={{
                        scale: 1.05,
                        rotate: 1,
                        boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
                    }}
                    className="relative group cursor-pointer "
                >
                    <div className="absolute inset-0    rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>

                    <Lottie className="relative rounded-3xl  h-auto object-cover  shadow-xl transition-all duration-500" animationData={coding}></Lottie>
                </motion.div>

                {/* Right: Text */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-6"
                >
                    <h2 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]">About Me</h2>
                    <p className="text-gray-400 text-lg">Passion • Objective • Progress</p>

                    <p className="text-gray-300 leading-relaxed text-[16px]">
                        I'm <span className="font-semibold text-white">Sharia Haque</span>,
                        an enthusiastic and innovative web developer who loves solving problems
                        and creating clean, user-friendly interfaces. Developing technology to
                        make life simpler and more meaningful defines who I am.
                    </p>

                    <p className="text-gray-300 leading-relaxed text-[16px]">
                        I enjoy a challenge. I love pushing boundaries and exploring new ideas.
                    </p>

                    <p className="text-gray-300 leading-relaxed text-[16px]">
                        Whether it’s through creating projects, exploring new frameworks, or
                        connecting with developer communities — I’m deeply passionate about lifelong learning.
                        I also have a strong love for design and animation.
                    </p>

                    <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={700}
                            offset={-70}
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-linear-to-r f-rom-blue-500 to-cyan-500 hover:from-cyan-500 hover:to-blue-500 hover:text-white px-10 py-3 rounded-full font-semibold shadow-md transition-all cursor-pointer"
                        >
                            Let's Me
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;