import React from "react";
import Content from "./Content";
import Header from "../Header/Header";
import Help from "../Home/Help";
import Footer from "../Footer/Footer";


const Blog=()=>
{
    return (
        <>
           <div className="containers">
            <Header/>
            <div className="content">
            
            <Content/>
            <Footer/>
             </div>
            </div>
        </>
    )
}

export default Blog;