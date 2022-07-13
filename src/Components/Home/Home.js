import "./Home.scss";
import TextAnimation from "../animations/TextAnimation";

const Home = () => {
  return (
    <div className="home-page" id="box">
      <p id="flashlight">
        <span id="flash">Julia</span>
        <span id="light">Machin</span>
      </p>
      <TextAnimation />
    </div>
  );
};

export default Home;
