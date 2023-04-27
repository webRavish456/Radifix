import React from "react";
import Header from "../Header/Header";
import Place from "./Place";
import "./Emr.css";
import Achieved from "./Achieved";
import Review from "./Review";
import Emf from "./Emf";
import Reading from "./Reading";
import Footer from "../Footer/Footer";
import Serviceinstitute from "./Service_institute";
import Wireless from "./Wireless";


const Institutions=()=>
{
    return (
        <>
           <div className="containers">
            <Header/>
            <div className="content">
          
             <Place/>
           <Serviceinstitute/>
           <Wireless/>
             <Achieved/>
             <Review/>
             <Emf/>
             <Reading/>
             <Footer/>
             </div>
            </div>
        </>
    )
}

export default Institutions;