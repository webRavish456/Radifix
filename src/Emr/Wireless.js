import React from "react";
import Grid from '@mui/material/Grid';
import { Box } from "@mui/material";

const Wireless=()=>
{
    return(
        <>
            <section className="section_title">
        <div className="container contentstory ">
           
            <Box sx={{width:'100%'}}>
            <Grid container rowSpacing={2} columnSpacing={{ sm:2,md: 3 }}  columnGap={{md:2 , sm:2}} display="flex" justifyContent="center" alignItems="center" >
            <Grid item xs={10} sm={10} md={5}>
             <div>
             <div className="page_title wireless_gadget">Radifix™ wireless protection </div>
  	     	<div className="description"><p>
             <p className="workforce">   for institutions promise to foster productive and radiation-free <b> classrooms</b>  <br></br></p>

             Digital technologies have ushered us into a new era of education. Today, various digital learning tools such as laptops, projectors, computers, and handheld tools are used by educational institutions to augment learning experiences of students. These tools have indeed helped increase learning engagement in children, however, they also expose students to a higher risk of electromagnetic radiation (EMR). <b>Wi-Fi routers, cell phone towers, and mobile phones are few well-known sources of EMR. Thus, it becomes important to secure an environment where kids spend 8-10 hours a day.</b> Wireless radiation and its risks for kids have been a concern for educators, policymakers, and researchers across the world. As a result, many countries in Europe have taken proactive steps to limit the exposure of EMR in classrooms.<br></br> <br></br>
             In India, digital education has gained traction in recent years. Considering this trend is here to stay, it is important for educators to address the radiation exposure of students in their campuses. LiveSAFE helps educational institutions understand the radiation exposure on kids and minimize their impact, thereby helping them to study better and learn faster.<b> Many studies have proven that kids tend to have less anxiety, learn better and exhibit better social skills in a radiation-safe environment.</b> <br></br><br></br>

             
                    
            </p></div>					
          </div> 
          </Grid>
           
       
                 <Grid item xs ={10} sm={10} md={5} display="flex" justifyContent="center" >
                  <img className="about_image" src="https://www.wethink.co.in/public/assets/images/we-think-about-us.png"  alt="logo1" />

        </Grid>
       
                </Grid>
                </Box>
            </div>
     </section>
        </>
    )
}

export default Wireless;