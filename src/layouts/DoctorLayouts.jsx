import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function DoctorLayouts () {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    )
};

export default DoctorLayouts;