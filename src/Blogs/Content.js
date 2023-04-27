import React, { useState } from "react";
import { Description } from "../Home/Description";
import { Box, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";

const Content=()=>
{
    const [desc, setDesc] =useState(Description)

    return(
        <>
        <section className="section_title">
          <div className="container communication">
          <div className="page_title offers ">Latest Blogs</div>
        <Box sx={{width:"100%"}}>
          <Grid container rowSpacing={4} columnSpacing={{xs:2, sm:3, md:4}} display="flex" justifyContent="center" >
       
                {desc.map((cur)=>
                {
                    return(
                        <>
                        <Grid item xs={10} sm={5}  md={3.37}>
                            <div className="transportation">
                          
                                <div><img src={cur.image} alt="image" className="abstract"/></div>
                                <div className="sar">
                                <div className="title">{cur.heading}</div>
                                <div className="describe">{cur.description}</div>
                                </div>
                            </div>
                            </Grid>
                        </>
                    )
                })}
               
             </Grid>
             </Box>
            
             </div>
             </section>
        </>
    )
}
export default Content;

/* <div>
             <NavLink to="/addblog"><button className="page_title gadget primary_button">Add New Blog</button></NavLink>
             </div>
             */