import React from "react";
import {ReactComponent as Aboutus} from "../assests/about.svg"
import "./About.css";
import Header from "../Header/Header";
import Story from "./Story";
import Protection from "./Protection";
import HealthRisk from "./Health";
import Teammember from "./Team";
import Footer from "../Footer/Footer";
import Help from "../Home/Help";

const About=()=>
{
   
    return (
        <>
            <div className="containers">
            <Header/>
            <div className="content">
             <div className="hero_title  commitment">Radixfix commitment
             <div className="aboutus"><Aboutus/></div>
            </div>
              <Story/>
              <Protection/>
              <HealthRisk/>
              <Teammember/>
              <Footer/>
            </div>

            </div>
        </>
    )
}
export default About;