import "./Home.scss";
import TextAnimation from "../animations/TextAnimation";

const Home = () => {
  return (
    <div className="home-page">
      <h1>Julia Machin</h1>
      <div className="animation">
      <TextAnimation />
      </div>
    </div>
  );
};

export default Home;
