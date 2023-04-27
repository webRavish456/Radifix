import React from "react";
import Header from "./Header/Header";
import Radiation from "./Home/Radiation";
import Offers from "./Home/Offer";
import Service from "./Home/Service";
import Clientele from "./Home/Clentele";
import Help from "./Home/Help";
import "./App.css";
import Electro from "./Home/Electro";
import Livestrong from "./Home/Live";
import Footer from "./Footer/Footer";


function App() {
  return (
  
    <>
     <div className="containers">
       <Header/>
       <div className="content">
       <Electro/>
       <Livestrong/>
       <Radiation/>
       <Offers/>
       <Service/>
       <Clientele/>
       <Footer/>
       </div>
       </div>
      
    </>
  )
}

export default App;

