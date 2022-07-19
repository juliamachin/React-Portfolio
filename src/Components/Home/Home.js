import "./Home.scss";
import TextAnimation from "../animations/TextAnimation";

const Home = () => {
  return (
    <div className="home-page">
      <p className="flashlight">Julia <br /> Machin</p>
      <TextAnimation />
    </div>
  );
};

export default Home;
