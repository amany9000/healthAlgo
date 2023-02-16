import React, {useEffect, useState} from 'react';
import { useDispatch } from "react-redux";
import { getAllPatient } from '../../../actions/patients';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min';
import 'admin-lte/dist/css/adminlte.css';
import 'admin-lte/dist/js/adminlte';
import 'bootstrap/dist/js/bootstrap.bundle';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import 'chart.js/dist/Chart';
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import PatientList from "../Content/PatientList";

function Patients() {

    // track currentId

    // const [currentId, setCurrentId] = useState(null); // null bcs we don't have the id selected
    // const dispatch = useDispatch();
    //
    // useEffect(() => {
    //     dispatch(getAllPatient());
    // }, [currentId, dispatch]);

    useEffect(() => {
        document.body.classList.add('hold-transition', 'sidebar-mini', 'layout-fixed');
        return function cleanup() {
            document.body.classList.remove('hold-transition', 'sidebar-mini', 'layout-fixed');
        };
    }, []);

    return (
        <div>
            <Sidebar />
            <Navbar />
            <PatientList />
            <Footer />
        </div>
    );
}

export default Patients;