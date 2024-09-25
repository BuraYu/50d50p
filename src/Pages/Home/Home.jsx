import { Link } from "react-router-dom";
import "./home.css";
import proj1 from "../../assets/proj1.png";

const Home = () => {
  return (
    <div>
      <h1 className="home-header">50 Projects</h1>
      <div className="home-container">
        <div className="element-container">
          <Link to="/pageone">
            <img src={proj1} alt="link to bmi calc" />
          </Link>
        </div>
        <div className="element-container">
          <Link to="/pageone">PageOne</Link>
        </div>
        <div className="element-container">
          <Link to="/pageone">PageOne</Link>
        </div>
        <div className="element-container">
          <Link to="/pageone">PageOne</Link>
        </div>
        <div className="element-container">
          <Link to="/pageone">PageOne</Link>
        </div>
        <div className="element-container">
          <Link to="/pageone">PageOne</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
