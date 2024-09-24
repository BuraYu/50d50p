import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import PageOne from "./Pages/Page1/PageOne";
import PageTwo from "./Pages/Page2/PageTwo";

const routes = [
  { path: "/", component: <Home /> },
  { path: "/pageone", component: <PageOne /> },
  { path: "/pagetwo", component: <PageTwo /> },
  // { path: "/pagethree", component: <PageThree /> },
  // { path: "/pagefour", component: <PageFour /> },
  // { path: "/pagefive", component: <PageFive /> },
  // { path: "/pagesix", component: <PageSix /> },
  // { path: "/pageseven", component: <PageSeven /> },
  // { path: "/pageeight", component: <PageEight /> },
  // { path: "/pagenine", component: <PageNine /> },
  // { path: "/pageten", component: <PageTen /> },
];

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
        </Routes>
      </Router>{" "}
    </div>
  );
}

export default App;
