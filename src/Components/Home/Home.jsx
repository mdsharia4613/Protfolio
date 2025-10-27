import About from "../About/About";
import Banner from "../Banner/Banner";
import MyTech from "../MyTeach/MyTech";



const Home = () => {
    return (
      <div className=" pt-16">
            <Banner></Banner>
            <About></About>
            <MyTech></MyTech>
            
      </div>
    );
};

export default Home;