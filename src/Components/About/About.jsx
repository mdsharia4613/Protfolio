import Lottie from 'lottie-react';
import Coding from "../../cosing.json"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const About = () => {
    return (

        <div className='py-20 container mx-auto'>
            <div className='text-center'>
                <h2 className='text-xl font-semibold'>|| About Me</h2>
                <h2 className='text-3xl font-bold'>Passing . Purpose . Progress</h2>
            </div>

            <div data-aos-duration="1000" data-aos="zoom-in-up" className='flex flex-col md:flex-row justify-between mt-16 gap-10'>
                <div className='text-xl font-semibold space-y-5 leading-10'>
                    <h2>Hi! I’m <span className='font-bold'>Sharia Haque</span>, a passionate and creative Web Developer who loves transforming ideas into elegant and functional digital experiences.</h2>
                    <p>My goal is to craft clean, user-friendly interfaces and build solutions that simplify life, enhance usability, and add meaning to technology.</p>
                    <p>I enjoy challenges — from designing complex layouts to integrating APIs or optimizing performance — I find joy in turning complexity into simplicity.</p>
                    <p>To me, great software and web applications are born from empathy — understanding users’ real needs and creating solutions that are both useful and delightful to use.</p>
                    <p className='text-red-600'>What Drives Me</p>
                    <ul>
                        <li>Solving real-world problems through code</li>
                        <li>Designing clean and intuitive interfaces</li>
                        <li>Learning modern technologies and patterns</li>
                        <li>Building digital experiences that make an impact</li>
                    </ul>
                    <p className='text-red-600'>My Philosophy</p>
                    <p>“I create modern, human-centered solutions that are impactful, meaningful, and simple.<br></br>
                        Every line of code I write aims to be readable, reusable, and truly helpful.”</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2   gap-5 md:w-2/2'>
                    <div className='p-10 shadow-2xl shadow-gray-500 space-y-3 mb-10 h-36 rounded-2xl '>
                        <h2 className='text-xl font-semibold'>Favorite Tech</h2>
                        <p className='text-gray-700'>React, Tailwind CSS, Node.js, Express.js, MongoDB, JWT</p>
                    </div>
                    <div className='p-10 h-36 shadow-2xl shadow-gray-500 space-y-3 rounded-2xl '>
                        <h2 className='text-xl font-semibold'>Currently Exploring</h2>
                        <p className='text-gray-700'>Next.js, TypeScript, Framer Motion, Docker, REST APIs</p>
                    </div>
                    <div className='p-10 h-48 shadow-2xl shadow-gray-500 space-y-3 col-span-1 md:col-span-2 rounded-2xl  '>
                        <h2 className='text-xl font-semibold'>More About Me</h2>
                        <p className='text-gray-700'>Whether it’s through building projects, exploring new frameworks, or engaging with developer communities, I’m deeply passionate about lifelong learning. <br />
                            I also have a keen interest in design and animation, as they allow me to bring creativity and motion to my work.</p>
                    </div>
                    <div className='flex justify-center items-center col-span-1 md:col-span-2'>
                        <Lottie animationData={Coding} loop:true className="h-[550px]"></Lottie>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;