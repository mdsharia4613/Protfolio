import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import MyTech from "../MyTeach/MyTech";




const Home = () => {
    return (
      <div className=" pt-16">
            <Banner></Banner>
            <About></About>
            <MyTech></MyTech>
            <Education></Education>
            <Contact></Contact>
             
            
            
      </div>
    );
};

export default Home;