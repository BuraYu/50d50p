import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/pageone">PageOne</Link>
      <Link to="/pagetwo">PageTwo</Link>
    </div>
  );
};

export default Home;
