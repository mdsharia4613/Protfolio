import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
    // CV download function
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/cv.pdf"; 
        link.download = "My_CV.pdf"; // ডাউনলোড নাম
        link.click();
    };

    return (
        <div className="bg-white flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 rounded-2xl shadow-md ">
            {/* Left Side Text */}
            <div className="text-center md:text-left space-y-4 md:w-1/2">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
                    Hi, I'm <span className="text-blue-600">Sharia</span>
                </h1>

                <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
                    I’m a{" "}
                    <span className="text-blue-500">
                        <Typewriter
                            words={[
                                "Frontend Developer",
                                "React Enthusiast",
                                "Liftlong Learner",
                            ]}
                            loop={true}
                            cursor
                            cursorStyle="|"
                            typeSpeed={500}
                            deleteSpeed={70}
                            delaySpeed={1500}
                        />
                    </span>
                </h2>

                <p className="text-gray-600 max-w-md ">
                    I love building clean, modern and responsive websites using React and
                    TailwindCSS.
                </p>

                <button
                    onClick={handleDownload}
                    className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition duration-300"
                >
                    Download CV
                </button>
            </div>

            {/* Right Side Image */}
            <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
                <img
                    src="https://i.ibb.co.com/3mkw6s9Y/IMG20230904143344-2.jpg"
                    alt="Profile"
                    className="w-64 md:w-72 max-w-full h-72 object-cover rounded-full shadow-lg border-4 border-blue-500"
                />
            </div>
        </div>
    );
};

export default Banner;
