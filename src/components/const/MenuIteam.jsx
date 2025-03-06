import icon1 from "../../../src/assets/icon/appointment.svg";
import icon2 from "../../../src/assets/icon/Chat-Patient.svg";
import icon3 from "../../../src/assets/icon/dashboard.svg";
import icon4 from "../../../src/assets/icon/earning.svg";
import icon5 from "../../../src/assets/icon/patient.svg";
import icon6 from "../../../src/assets/icon/prescription.svg";
import iconProfile from "../../assets/images/createprofile.png";
import iconDoctorList from "../../assets/images/doctorlist.png";
import iconPayment from "../../assets/images/paymentmehod.png";
import iconAppointment from "../../assets/images/appointment.png";
import iconChat from "../../assets/images/chatscreen.png";
import iconUpload from "../../assets/images/uploadreport.png";
import iconPrescription from "../../assets/images/precription.png";


export const DoctorMenuItems = [
  { name: "Dashboard", icon: icon3, path: "/dashboard" },
  { name: "Patient List", icon: icon5, path: "/patients" },
  { name: "Appointment", icon: icon1, path: "/appointments" },
  { name: "Prescription", icon: icon6, path: "/prescriptions" },
  { name: "Chat Patient", icon: icon2, path: "/chat" },
  { name: "Earning", icon: icon4, path: "/earning" } ,
];

export const PatientMenuItems = [
  { name: "Dashboard", icon: icon3, path: "/patient-dashboard" },
  { name: "Create Profile", icon: iconProfile, path: "/create-profile" },
  { name: "Doctor List", icon: iconDoctorList, path: "/doctor-list" },
  { name: "Payment Method", icon: iconPayment, path: "/payment-method" },
  {
    name: "Upcoming Appointment",
    icon: iconAppointment,
    path: "/upcoming-appointment",
  },
  { name: "Chat Screen", icon: iconChat, path: "/chat-screen" },
  { name: "Upload Report", icon: iconUpload, path: "/upload-report" },
  {
    name: "Add Prescription",
    icon: iconPrescription,
    path: "/add-prescription",
  },
 
];
