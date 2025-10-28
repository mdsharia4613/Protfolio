import './Project.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';



const Projects = () => {

     const [projects , setProjects] = useState([]);

     useEffect(() => {
        fetch('/projectData.json')
        .then(res => res.json())
        .then(data => setProjects(data))
     } ,[])
   
    return (
        <div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {
                    projects.map(project => (
                        <SwiperSlide key={project.id}>
                            <div className="bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center space-y-4 hover:scale-105 transition-transform duration-300">
                                <img src={project.img} alt={project.title} className="rounded-xl object-cover h-64 w-50" />

                                <div className="flex flex-wrap gap-2 justify-center">
                                    {project.tech.map((t, i) => (
                                        <span className="bg-rose-400 text-white px-3 py-1 rounded-full text-sm" key={i}>{t}</span>
                                    ))}
                                </div>

                                <div className="flex gap-4 mt-2">
                                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="bg-rose-500 text-white px-4 py-2 rounded-lg hover:bg-rose-600 transition-colors">Live Demo</a>
                                    <button className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">Details</button>
                                </div>
                            </div>
                        </SwiperSlide>

                    ))
                }
            </Swiper>
        </div>

    );
};

export default Projects;