import React from "react";
import Header from "../Header/Header";
import Place from "./Place";
import "./Emr.css";
import Achieved from "./Achieved";
import Review from "./Review";
import Emf from "./Emf";
import Reading from "./Reading";
import Footer from "../Footer/Footer";
import Powerful from "./Powerful";
import Workplacehealth from "./Workplacehealth";

const Workplace=()=>
{
    return (
        <>
           <div className="containers">
            <Header/>
            <div className="content">
          
             <Place/>
             <Workplacehealth/>
             <Powerful/>
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

export default Workplace;