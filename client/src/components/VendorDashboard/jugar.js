import React from 'react';
import Dashboard from './pages/index';
import Navbar from '../layout/Navbar';
import { BrowserRouter } from 'react-router-dom';
const jugar = () =>{

    return(
        <BrowserRouter>
            <Navbar></Navbar>
            <Dashboard></Dashboard>
        </BrowserRouter>

    )

}

export default jugar;