import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Banner = () => {
    // CV download function
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/cv.pdf";
        link.download = "My_CV.pdf";
        link.click();
    };
   
    // Firefly Particles init
    const particlesInit = async (main) => {
        await loadFull(main);
    };
    
    return (
        <section
            id="home"
            className="relative overflow-hidden bg-linear-to-b from-gray-900 to-gray-800 py-20 px-6 md:px-16   "
        >
            <div className="container mx-auto">
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    canvasClassName="absolute inset-0 z[-1]"
                    options={{
                        fullScreen: { enable: false },
                        background: { color: "transparent" },
                        fpsLimit: 60,
                        particles: {
                            number: { value: 40 },
                            color: { value: ["#38bdf8", "#3b82f6", "#67e8f9"] },
                            shape: { type: "circle" },
                            opacity: {
                                value: 0.7,
                                random: true,
                                animation: {
                                    enable: true,
                                    speed: 0.4,
                                    minimumValue: 0.2,
                                },
                            },

                            size: {
                                value: { min: 1, max: 4 },
                                random: true,
                            },
                            move: {
                                enable: true,
                                speed: 0.6,
                                direction: "none",
                                random: true,
                                straight: false,
                                outModes: { default: "bounce" },
                            },
                            shadow: {
                                enable: true,
                                color: "#38bdf8",
                                blur: 5,
                            },
                        },
                        detectRetina: true,
                    }}
                />
                {/* ==== Floating Gradient Glow ==== */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(56,189,248,0.15),_transparent_60%)] blur-3xl"></div>

                <div className="relative overflow-visible flex flex-col-reverse md:flex-row items-center justify-between gap-10">
                    {/* ==== LEFT SIDE ==== */}
                    <motion.div
                        className="text-center md:text-left space-y-6 md:w-1/2"
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <p className=" font-semibold text-lg">👋 <span className="bg-linear-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">Hello there</span>!</p>
                        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            I'm <span className="bg-linear-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">Sharia</span>
                        </h1>

                        <h2 className="text-2xl md:text-3xl font-semibold text-white">
                            A passionate{" "}
                            <span className="bg-linear-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                                <Typewriter
                                    words={[
                                        "Frontend Developer",
                                        "React Enthusiast",
                                        "Lifelong Learner",
                                    ]}
                                    loop
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1500}
                                />
                            </span>
                        </h2>

                        <p className="bg-linear-to-l from-sky-400 to-cyan-300 bg-clip-text text-transparent max-w-md mx-auto md:mx-0">
                            I love crafting interactive, responsive and visually appealing
                            websites with React & TailwindCSS. Let's make the web more
                            beautiful!
                        </p>

                        <div className="flex items-center justify-center md:justify-start gap-4">
                            <motion.button
                                onClick={() => handleDownload()}
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-md transition-all"
                            >
                                Download CV
                            </motion.button>

                            <motion.a

                                href="#contact"
                                smooth={true}
                                duration={700}
                                offset={-70}
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.95 }}
                                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-full font-semibold shadow-md transition-all"
                            >
                                Contact Me
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* ==== RIGHT SIDE IMAGE ==== */}
                    <motion.div
                        className="flex justify-center md:w-1/2"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <div className="relative">
                            <img
                                src="https://i.ibb.co.com/jkChYj8J/my-bg-remove.png"
                                alt="Profile"
                                className="w-64 md:w-80 h-64 md:h-80 object-cover rounded-full border-4 border-blue-500 shadow-2xl"
                            />
                            <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-blue-500 rounded-full animate-pulse"></div>
                        </div>
                    </motion.div>
                </div>
           </div>
           
        </section>
    );
};

export default Banner;
