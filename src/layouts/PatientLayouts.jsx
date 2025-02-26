import { Outlet } from "react-router";
import PatientNavbar from "../components/patient-header/PatientNavbar";
import PatientFooter from "../components/patient-header/PatientFooter";

function PatientLayouts () {
    return (
        <>
            <PatientNavbar/>
            <Outlet/>
            <PatientFooter/>
        </>
    )
};

export default PatientLayouts;