
import DoctorDashboard from "../pages/doctor-dashboard/DoctorDashboard.jsx"
import Patients from "../pages/doctor-dashboard/Patients.jsx";
import Appointments from "../pages/doctor-dashboard/Appointments.jsx";
import Prescriptions from "../pages/doctor-dashboard/Prescriptions.jsx";
import Chat from "../pages/doctor-dashboard/Chat.jsx";
import Earning from "../pages/doctor-dashboard/Earning.jsx";
import Logout from "../pages/doctor-dashboard/Logout.jsx";
 
  import PatientDashboard from "../pages/patient-dashboard/PatientDashboard.jsx";
import Profile from "../pages/patient-dashboard/Profile.jsx";
import DoctorList from "../pages/patient-dashboard/DoctorList.jsx";
import PaymentMethods from "../pages/patient-dashboard/PaymentMethods.jsx";
import UpcomingAppointment from "../pages/patient-dashboard/UppcomingAppointment.jsx";
import ChatScreen from "../pages/patient-dashboard/ChatScreen.jsx";
import UploadReport from "../pages/patient-dashboard/UploadReport.jsx";
import AddPrescription from "../pages/patient-dashboard/AddPrescription.jsx";



export const doctorRoutes = [
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

 export  const patientRoutes = [
    { path: "/patient-dashboard", element: <PatientDashboard /> },
    { path: "/create-profile", element: <Profile/> },
    { path: "/doctor-list", element: <DoctorList /> },
    { path: "/payment-method", element: <PaymentMethods /> },
    { path: "/upcoming-appointment", element: <UpcomingAppointment /> },
    { path: "/chat-screen", element: <ChatScreen /> },
    { path: "/upload-report", element: <UploadReport /> },
    { path: "/add-prescription", element: <AddPrescription /> },
    
  ];
