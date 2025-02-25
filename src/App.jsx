import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import About from "../src/pages/about/About.jsx";
import Contact from "../src/pages/contact/Contact.jsx";
import Home from "../src/pages/home/Home.jsx";
import PatientHome from "./pages/paient-pages/home/PatientHome.jsx";

import BecomeADoctor from "../src/pages/doctor/BecomeADoctor.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer.jsx";
import HowItWork from "./pages/paient-pages/work/HowItWork.jsx";
import AboutUs from "./pages/paient-pages/about/AboutUs.jsx";
import OurExperts from "./pages/paient-pages/experts/OurExperts.jsx";
import PatientNavbar from "./components/patient-header/PatientNavbar.jsx";
import PatientFooter from "./components/patient-header/PatientFooter.jsx";

function App() {
  const DoctorNavlinks = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/become-a-doctor",
      element: <BecomeADoctor />,
    },
  ];

  const PatientNavlinks = [
    {
      path: "patient/",
      element: <PatientHome />,
    },
    {
      path: "patient/how-it-work",
      element: <HowItWork />,
    },
    {
      path: "patient/about",
      element: <AboutUs />,
    },
    {
      path: "patient/our-experts",
      element: <OurExperts />,
    },
  ];

  return (
    <BrowserRouter>
      {/* <Navbar/> */}
      <PatientNavbar/>
      <Routes>
        {DoctorNavlinks.map((link) => (
          <Route path={link.path} element={link.element} />
        ))}
      </Routes>
      <Routes path='/patient'>
        {PatientNavlinks.map((link) => (
          <Route path={link.path} element={link.element} />
        ))}
      </Routes>
      <PatientFooter/>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
