import React from "react";
import Join from "./Join";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Contact.css";
import Help from "../Home/Help";

const Contact=()=>
{
    return (
        <>
           <div className="containers">
            <Header/>
            <div className="content">
               <Join/>
               <Help/>
               <Footer/>
             </div>
            </div>
        </>
    )
}
export default Contact;