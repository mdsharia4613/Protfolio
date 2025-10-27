import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
    // CV download function
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/cv.pdf";
        link.download = "My_CV.pdf";
        link.click();
    };

    return (
        <section
            id="banner"
            className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-20 px-6 md:px-16 rounded-3xl shadow-lg container mx-auto mt-12"
        >
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
                {/* ==== LEFT SIDE ==== */}
                <motion.div
                    className="text-center md:text-left space-y-6 md:w-1/2"
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <p className="text-blue-500 font-semibold text-lg">👋 Hello There!</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                        I'm <span className="text-blue-600">Sharia</span>
                    </h1>

                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
                        A passionate{" "}
                        <span className="text-blue-500">
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

                    <p className="text-gray-600 max-w-md mx-auto md:mx-0">
                        I love crafting interactive, responsive and visually appealing
                        websites with React & TailwindCSS. Let's make the web more
                        beautiful!
                    </p>

                    <div className="flex items-center justify-center md:justify-start gap-4">
                        <motion.button
                            onClick={handleDownload}
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-md transition-all"
                        >
                            Download CV
                        </motion.button>

                        <motion.a 
                            href="#contact"
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
                            src="https://i.ibb.co.com/3mkw6s9Y/IMG20230904143344-2.jpg"
                            alt="Profile"
                            className="w-64 md:w-80 h-64 md:h-80 object-cover rounded-full border-4 border-blue-500 shadow-2xl"
                        />
                        <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-blue-500 rounded-full animate-pulse"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Banner;
