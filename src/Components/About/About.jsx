

import { motion } from "framer-motion";
 


const About = () => {
    return (

     

        <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

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
                    className="relative group cursor-pointer"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/30 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <img
                        src="https://i.ibb.co.com/3mkw6s9Y/IMG20230904143344-2.jpg"
                        alt="Profile"
                        className="relative rounded-3xl w-full h-auto object-cover border border-gray-700 shadow-xl transition-all duration-500"
                    />
                </motion.div>

                {/* Right: Text */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-6"
                >
                    <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
                    <p className="text-gray-400 text-lg">Passion • Objective • Progress</p>

                    <p className="text-gray-300 leading-relaxed">
                        I'm <span className="font-semibold text-white">Saide Bin Sabid</span>,
                        an enthusiastic and innovative web developer who loves solving problems
                        and creating clean, user-friendly interfaces. Developing technology to
                        make life simpler and more meaningful defines who I am.
                    </p>

                    <p className="text-gray-300 leading-relaxed">
                        I enjoy a challenge. I love pushing boundaries and exploring new ideas.
                    </p>

                    <p className="text-gray-300 leading-relaxed">
                        Whether it’s through creating projects, exploring new frameworks, or
                        connecting with developer communities — I’m deeply passionate about lifelong learning.
                        I also have a strong love for design and animation.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full font-medium shadow-lg"
                    >
                        Let’s Connect
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default About;