import AOS from 'aos';
import 'aos/dist/aos.css'; 
import React, { useEffect } from 'react';
AOS.init();

const MyTech = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, }); 
    }, []);
    return (


        <section
            id="skills"
            className=" py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white relative"
        >
            {/* Section Header */}
            <div className="text-center mb-16">
                <p className="text-sky-400 tracking-widest">|| Skills I Have</p>
                <h2 className="text-3xl md:text-4xl font-bold inline-block border-b-4 border-rose-500 pb-2">
                    My Tech Stack
                </h2>
            </div>

            {/* Timeline-like Grid */}
            <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 px-6">

                {/* Vertical Divider */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-rose-500 via-gray-400 to-sky-500 animate-pulse"></div>

                {/* Left Card: Languages */}
                <div
                    data-aos="fade-right"
                    className="bg-gray-900 border border-gray-700 rounded-3xl p-8 text-center hover:shadow-[0_0_25px_#f43f5e] transition-all duration-500 ease-in-out relative"
                >
                    <div className="absolute hidden md:block -right-2 top-10 w-4 h-4 bg-rose-500 rounded-full shadow-[0_0_15px_#f43f5e]"></div>
                    <h2 className="text-xl font-bold text-rose-400 mb-6">Languages</h2>
                    <div className="flex flex-wrap justify-center  gap-4">
                        {[
                            { img: '/js.png', name: 'JavaScript' },
                            { img: '/html.png', name: 'HTML' },
                            { img: '/css.png', name: 'CSS' },
                        ].map((item) => (
                            <div
                                key={item.name}
                                className="bg-gray-800 px-6 py-3 rounded-2xl flex flex-col items-center hover:scale-110 transition-transform duration-500"
                            >
                                <img src={item.img} alt={item.name} className="w-12 h-12 object-contain mb-2" />
                                <span className="font-semibold">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Card: Frontend */}
                <div
                    data-aos="fade-left"
                    className="bg-gray-900 border border-gray-700 rounded-3xl p-8 text-center hover:shadow-[0_0_25px_#38bdf8] transition-all duration-500 ease-in-out relative md:mt-24"
                >
                    <div className="absolute hidden md:block -left-2 top-10 w-4 h-4 bg-sky-400 rounded-full shadow-[0_0_15px_#38bdf8]"></div>
                    <h2 className="text-xl font-bold text-sky-400 mb-6">Frontend</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-center">
                        {[
                            { img: '/react.png', name: 'React' },
                            { img: '/tailwind.png', name: 'Tailwind' },
                            { img: '/farmer-mition.jpeg', name: 'Framer Motion' },
                            { img: '/meUi.png', name: 'Material UI' },
                            { img: '/daisyui-logo.png', name: 'DaisyUI' },
                        ].map((item) => (
                            <div
                                key={item.name}
                                className="bg-gray-800 px-4 py-3 rounded-2xl flex flex-col items-center hover:scale-110 transition-transform duration-500"
                            >
                                <img src={item.img} alt={item.name} className="w-12 h-12 object-contain mb-2" />
                                <span className="font-semibold">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Left Card: Tools */}
                <div
                    data-aos="fade-up-right"
                    className="bg-gray-900 border border-gray-700 rounded-3xl p-8 text-center hover:shadow-[0_0_25px_#f43f5e] transition-all duration-500 ease-in-out relative"
                >
                    <div className="absolute hidden md:block -right-2 top-10 w-4 h-4 bg-rose-500 rounded-full shadow-[0_0_15px_#f43f5e]"></div>
                    <h2 className="text-xl font-bold text-rose-400 mb-6">Tools</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-center">
                        {[
                            { img: '/github.png', name: 'GitHub' },
                            { img: '/netlify.png', name: 'Netlify' },
                            { img: '/figma.png', name: 'Figma' },
                            { img: '/surge.png', name: 'Surge' },
                        ].map((item) => (
                            <div
                                key={item.name}
                                className="bg-gray-800 px-4 py-3 rounded-2xl flex flex-col items-center hover:scale-110 transition-transform duration-500"
                            >
                                <img src={item.img} alt={item.name} className="w-12 h-12 object-contain mb-2" />
                                <span className="font-semibold">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyTech;