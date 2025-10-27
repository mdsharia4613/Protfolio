import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const MyTech = () => {
    return (
        <div id='skills' className='container mx-auto'>
            <div className=''>
                <div className='text-center'>
                    <p>|| Skill I have</p>
                    <h2 className='text-3xl font-bold inline-block border-b-4 border-rose-600 pb-1'> My Tech Stack</h2>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-0.5 mt-10">

                    {/* divider */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-400 mx-auto"></div>


                    {/* Languages */}
                    <div data-aos="zoom-in" className="shadow-2xl shadow-gray-400 bg-gray-300  py-5 space-y-5 rounded-3xl hover:shadow-4xl hover:shadow-red-800 transition-all duration-500 ease-in-out transform hover:scale-105 hover:-translate-y-2 hover:rotate-1 h-72 bg-gradient-to-br from-gray-200 to-gray-300">
                        <div className='mt-8 space-y-6'>
                            <h2 className="text-center font-bold text-xl">Languages</h2>
                            <div className="flex flex-col md:flex-row gap-4 items-center justify-center 
">
                                <p className="gap-4 bg-gray-500 py-2 px-20 flex flex-col items-center rounded-2xl transition-transform duration-500 hover:scale-110"><img className="w-13" src="/public/js.png" alt="" /><span className="font-semibold">JavaScript</span></p>
                                <p className="gap-4 bg-gray-500 py-2 px-20 flex flex-col items-center rounded-2xl transition-transform duration-500 hover:scale-110"><img className="w-13 object-cover" src="/public/html.png" alt="" /><span className="font-semibold">HTML</span></p>
                                <p className="gap-4 bg-gray-500 py-2 px-20 flex flex-col items-center rounded-2xl transition-transform duration-500 hover:scale-110"><img className="w-13 h-13 object-cover" src="/public/css.png" alt="" /><span className="font-semibold">CSS</span></p>
                            </div>
                        </div>
                    </div>


                    {/* Fronted */}
                    <div data-aos="fade-up-left" className="shadow-2xl shadow-gray-400 bg-gray-300 gap-1 p-6 space-y-5 rounded-3xl hover:shadow-4xl   md:mt-24  hover:shadow-red-800 transition-all duration-500 ease-in-out transform hover:scale-105 hover:-translate-y-2 hover:rotate-1">
                        <h2 className="text-center font-bold text-xl">Fronted</h2>
                        <div className="gap-4  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                            <p className="gap-4 bg-gray-500   flex flex-col items-center justify-center rounded-2xl transition-transform duration-500 hover:scale-110"><img className="w-13 h-12 object-cover" src="/public/react.png" alt="" /><span className="font-semibold">React</span></p>
                            <p className="gap-4 bg-gray-500 justify-center px-20 flex flex-col items-center rounded-2xl transition-transform duration-500 hover:scale-110"><img className="w-13 h-12 object-cover" src="/public/tailwind.png" alt="" /><span className="font-semibold">Tailwind</span></p>
                            <p className="gap-4 bg-gray-500 justify-center px-20 flex flex-col items-center rounded-2xl transition-transform duration-500 hover:scale-110"><img className="w-13 h-13 object-cover mt-3" src="/public/farmer-mition.jpeg" alt="" /><span className="font-semibold">Framer Motion</span></p>
                            <p className="gap-4 bg-gray-500 justify-center px-20 flex flex-col items-center rounded-2xl transition-transform duration-500 hover:scale-110"><img className="w-13 h-12 object-cover mt-3" src="/public/meUi.png" alt="" /><span className="font-semibold">Material UI</span></p>
                            <p className="gap-4 bg-gray-500 justify-center px-20 flex flex-col items-center rounded-2xl transition-transform duration-500 hover:scale-110"><img className="w-13 h-13 object-cover" src="/public/daisyui-logo.png" alt="" /><span className="font-semibold">DaisyUI</span></p>
                        </div>
                    </div>

                    {/* tools */}

                    <div data-aos="fade-up-right" className="shadow-2xl shadow-gray-400 bg-gray-300  p-8 space-y-5 rounded-3xl hover:shadow-4xl hover:shadow-red-800  bg-gradient-to-br from-gray-200 to-gray-300   transition duration-500 ease-in-out transform hover:scale-105 hover:-translate-y-2 hover:rotate-1" >
                        <h2 className="text-center font-bold text-xl">Tools</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center ">
                            <p className="gap-4 bg-gray-500 py-2 px-20 flex flex-col items-center rounded-2xl transition-transform duration-500 hover:scale-110"><img className="w-13" src="/public/github.png" alt="" /><span className="font-semibold">GitHub</span></p>
                            <p className="gap-4 bg-gray-500 py-2 px-20 flex flex-col items-center rounded-2xl transition-transform duration-500 hover:scale-110"><img className="w-13 object-cover" src="/public/netlify.png" alt="" /><span className="font-semibold">Netlify</span></p>
                            <p className="gap-4 bg-gray-500 py-2 px-20 flex flex-col items-center rounded-2xl transition-transform duration-500 hover:scale-110"><img className="w-13 h-13 object-cover" src="/public/figma.png" alt="" /><span className="font-semibold">Figma</span></p>
                            <p className="gap-4 bg-gray-500 py-2 px-20 flex flex-col items-center rounded-2xl transition-transform duration-500 hover:scale-110"><img className="w-13 h-13 object-cover" src="/public/surge.png" alt="" /><span className="font-semibold">Surge</span></p>
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default MyTech;