import Lottie from 'lottie-react';
import email from '../../email.json';

const Contact = () => {
    return (
        <section id="contact" className="relative py-20 bg-gradient-to-b from-[#0a192f] to-[#020617] text-white overflow-hidden">

            <div className="text-center mb-12 relative z-10">
                <p className="text-gray-400">|| Contact</p>
                <h2 className="bg-gradient-to-l from-sky-400 to-cyan-300 bg-clip-text text-transparent text-3xl font-bold drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]">
                    Get in Touch
                </h2>
            </div>

            <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center gap-16 relative z-10">

                {/* Lottie Animation */}
                <div className="flex justify-center">
                    <Lottie className="w-80 md:w-96 drop-shadow-[0_0_20px_rgba(56,189,248,0.3)]" animationData={email}></Lottie>
                </div>

                {/* Contact Form */}
                <form className="bg-gray-900/50 backdrop-blur-xl border border-cyan-500/40 rounded-2xl p-8 w-full max-w-lg shadow-[0_0_25px_rgba(56,189,248,0.15)] hover:shadow-[0_0_40px_rgba(56,189,248,0.4)] transition-all duration-500">

                    <div className="grid grid-cols-2 gap-5">
                        <input
                            className="bg-gray-800 text-white border border-cyan-400/60 focus:border-cyan-300 focus:ring-1 focus:ring-cyan-300 px-5 py-2 rounded-full outline-none transition-all duration-300"
                            type="text"
                            placeholder="Enter your name"
                            required
                        />

                        <input
                            className="bg-gray-800 text-white border border-cyan-400/60 focus:border-cyan-300 focus:ring-1 focus:ring-cyan-300 px-5 py-2 rounded-full outline-none transition-all duration-300"
                            type="email"
                            placeholder="Enter your email"
                            required
                        />

                        <input
                            className="col-span-2 bg-gray-800 text-white border border-cyan-400/60 focus:border-cyan-300 focus:ring-1 focus:ring-cyan-300 px-5 py-2 rounded-full outline-none transition-all duration-300"
                            type="text"
                            placeholder="Subject"
                        />

                        <textarea
                            className="col-span-2 bg-gray-800 text-white border border-cyan-400/60 focus:border-cyan-300 focus:ring-1 focus:ring-cyan-300 px-5 py-3 rounded-xl outline-none transition-all duration-300 resize-none"
                            rows="6"
                            placeholder="Write your message..."
                            required
                        ></textarea>

                        <button
                            type="submit"
                            className="col-span-2 py-2 rounded-full font-semibold tracking-wide border border-cyan-400/70 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300 hover:shadow-[0_0_15px_rgba(56,189,248,0.7)] transition-all duration-500 hover:scale-105"
                        >
                            Send Message 🚀
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
