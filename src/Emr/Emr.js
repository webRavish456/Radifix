import React from "react";
import Header from "../Header/Header";
import Place from "./Place";
import "./Emr.css";
import Residence from "./Residence";
import Effect from "./Effect";
import Achieved from "./Achieved";
import Review from "./Review";
import Emf from "./Emf";
import Reading from "./Reading";
import Help from "../Home/Help";
import Footer from "../Footer/Footer";

const EmrSafety=()=>
{
    return (
        <>
           <div className="containers">
            <Header/>
            <div className="content">
          
             <Place/>
             <Residence/>
             <Effect/>
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

export default EmrSafety;