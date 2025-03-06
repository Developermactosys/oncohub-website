import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import About from "../src/pages/about/About.jsx";
import Contact from "../src/pages/contact/Contact.jsx";
import Home from "../src/pages/home/Home.jsx";
import PatientHome from "./pages/paient-pages/home/PatientHome.jsx";
import BecomeADoctor from "../src/pages/doctor/BecomeADoctor.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HowItWork from "./pages/paient-pages/work/HowItWork.jsx";
import AboutUs from "./pages/paient-pages/about/AboutUs.jsx";
import OurExperts from "./pages/paient-pages/experts/OurExperts.jsx";
import DoctorLayouts from "./layouts/DoctorLayouts.jsx";
import PatientLayouts from "./layouts/PatientLayouts.jsx";
import CancerFighter from "./pages/paient-pages/work/CancerFighter.jsx";
import CancerFood from "./pages/paient-pages/work/CancerFood.jsx";
import Doctors from "./pages/paient-pages/doctors/Doctors.jsx";

import DoctorLayout from "./doctor-layout/DoctorLayout.jsx";
import { SidebarProvider } from "./context/SidebarContext.jsx";
import { patientRoutes , doctorRoutes } from "./routes/DashboardRoute.jsx";
import PatientLayout from "./patient-layout/PatientLayout.jsx";

function App() {

  return (
    <BrowserRouter>
        <SidebarProvider>
      <Routes>
        <Route path="/" element={<DoctorLayouts />}>
          <Route index path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="become-a-doctor" element={<BecomeADoctor />} />
        </Route>

        <Route path="/patient" element={<PatientLayouts />}>
          <Route path="home" element={<PatientHome />} />
          <Route path="cancer-support" element={<HowItWork />} />
          <Route path="cancer-fighter" element={<CancerFighter />} />
          <Route path="cancer-food" element={<CancerFood />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="our-experts" element={<OurExperts />} />
        </Route>

        <Route path="/" element={<DoctorLayout/>}>
          {doctorRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Route>

        <Route path="/" element={<PatientLayout/>}>
          {patientRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
        </SidebarProvider>
    </BrowserRouter>
  );
}

export default App;
