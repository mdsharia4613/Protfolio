
import { motion } from "framer-motion";

const Education = () => {
    return (
        <section id="education" className=" py-20 text-white relative">
            <div className="text-center mb-16">
                <p className="text-sky-400 tracking-widest">|| Education</p>
                <h2 className="text-3xl md:text-4xl font-bold inline-block border-b-4 border-rose-500 pb-2 bg-linear-to-r from-rose-500 to-sky-400 bg-clip-text text-transparent">
                    My Academic Journey
                </h2>
            </div>

            <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
                {/* Vertical divider line */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-rose-500 via-gray-400 to-sky-500 animate-pulse"></div>

                {/* Diploma Card (Left Side) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gray-900 border border-gray-700 rounded-3xl p-8 text-right hover:shadow-[0_0_25px_#f43f5e] transition-shadow duration-500 relative"
                >
                    <div className="absolute hidden md:block -right-2 top-10 w-4 h-4 bg-rose-500 rounded-full shadow-[0_0_15px_#f43f5e]"></div>
                    <h2 className="text-xl font-bold text-rose-400">Diploma in Computer Science & Technology</h2>
                    <p className="text-gray-300 mt-2">Shariatpur Polytechnic Institute</p>
                    <p className="text-gray-400">2021 - 2025</p>
                </motion.div>

                {/* SSC Card (Right Side) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gray-900 border border-gray-700 rounded-3xl p-8 text-left hover:shadow-[0_0_25px_#38bdf8] transition-shadow duration-500 relative"
                >
                    <div className="absolute hidden md:block -left-2 top-10 w-4 h-4 bg-sky-400 rounded-full shadow-[0_0_15px_#38bdf8]"></div>
                    <h2 className="text-xl font-bold text-sky-400">Secondary School Certificate (SSC)</h2>
                    <p className="text-gray-300 mt-2">BEPZA Public School & College, Savar</p>
                    <p className="text-gray-400">2019 - 2021</p>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
