import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import PageOne from "./Pages/Page1/PageOne";
import PageTwo from "./Pages/Page2/PageTwo";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pageone" element={<PageOne />} />
          <Route path="/pagetwo" element={<PageTwo />} />
        </Routes>
      </Router>{" "}
    </div>
  );
}

export default App;
