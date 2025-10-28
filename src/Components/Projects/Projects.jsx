import './Project.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { SquareArrowOutUpRight } from 'lucide-react';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/projectData.json')
            .then((res) => res.json())
            .then((data) => setProjects(data));
    }, []);

    return (
        <div className="py-20 bg-black text-white">
            <h2 className="text-center text-4xl font-bold mb-12 text-rose-500 drop-shadow-[0_0_15px_rgba(255,0,0,0.7)]">
                || My Projects ||
            </h2>

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                spaceBetween={0}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {projects.map((project) => (
                    <SwiperSlide key={project.id}>
                        <div className="relative bg-gray-900 rounded-2xl border border-rose-500/40 shadow-[0_0_25px_rgba(255,0,0,0.4)] hover:shadow-[0_0_40px_rgba(255,0,0,0.8)] transition-all duration-500 overflow-hidden w-[320px] h-[420px] mx-auto hover:scale-105 group">
                            <img
                                src={project.img}
                                alt=""
                                className="w-full h-48 object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                            />

                            {/* Red glow border line (top) */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500 via-red-600 to-rose-500 animate-pulse" />

                            <div className="p-5 space-y-3">
                                <h2 className="text-xl font-semibold text-rose-400 drop-shadow-[0_0_10px_rgba(255,0,0,0.6)]">
                                    {project.title}
                                </h2>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t, i) => (
                                        <span
                                            key={i}
                                            className="bg-rose-600/20 border border-rose-500/50 text-rose-300 text-xs px-3 py-1 rounded-full shadow-[0_0_10px_rgba(255,0,0,0.4)]"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between mt-5 text-sm">
                                    <a
                                        href={project.live}
                                        className="flex items-center gap-1 text-rose-400 hover:text-rose-300 hover:underline transition-colors"
                                    >
                                        <SquareArrowOutUpRight size={14} />
                                        <span>View Project</span>
                                    </a>
                                    <a
                                        href="#"
                                        className="text-rose-500 hover:text-rose-300 hover:underline transition-colors"
                                    >
                                        Details
                                    </a>
                                </div>
                            </div>

                            {/* Neon glow bottom edge */}
                            <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-rose-500 via-red-600 to-rose-500 blur-sm" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Projects;
