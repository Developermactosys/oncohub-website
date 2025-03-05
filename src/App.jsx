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
import DoctorDashboard from "./pages/doctor-dashboard/DoctorDashboard.jsx";
import Patients from "./pages/doctor-dashboard/Patients.jsx";
import Appointments from "./pages/doctor-dashboard/Appointments.jsx";
import Prescriptions from "./pages/doctor-dashboard/Prescriptions.jsx";
import Chat from "./pages/doctor-dashboard/Chat.jsx";
import Earning from "./pages/doctor-dashboard/Earning.jsx";
import Logout from "./pages/doctor-dashboard/Logout.jsx";
import DoctorLayout from "./doctor-layout/DoctorLayout.jsx";
import { SidebarProvider } from "./context/SidebarContext.jsx";

function App() {
  const doctorRoutes = [
    { path: "/dashboard", element: <DoctorDashboard />, name: "Dashboard" },
    { path: "/patients", element: <Patients />, name: "Patient List" },
    { path: "/appointments", element: <Appointments />, name: "Appointments" },
    {
      path: "/prescriptions",
      element: <Prescriptions />,
      name: "Prescriptions",
    },
    { path: "/chat", element: <Chat />, name: "Chat Patient" },
    { path: "/earning", element: <Earning />, name: "Earnings" },
    { path: "/logout", element: <Logout />, name: "Logout" },
  ];

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

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
        </SidebarProvider>
    </BrowserRouter>
  );
}

export default App;
