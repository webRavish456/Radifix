import React from "react";
import Grid from '@mui/material/Grid';
import { Box } from "@mui/material";

const Join=()=>
{
    return(
        <>
             <section className="section_title">
        <div className="container contentstory contact_us ">
           
            <Box sx={{width:'100%'}}>
            <Grid container rowSpacing={2} columnSpacing={{ sm:2,md: 3 }}  columnGap={{md:2 , sm:2}} display="flex" justifyContent="center" alignItems="center" >
            <Grid item xs={10} sm={10} md={5}>
             <div>
             <div className="hero_title wireless_gadget join_us ">Contact us</div>
  	     	<div className="description"><p>Get in touch with us for all your business requirements and hire our optimal services for getting the project done with your budget estimates. We believe in building business partnerships that go long-term.</p></div>					
          </div> 
          </Grid>
           
       
          <Grid item xs ={10} sm={10} md={5} display="flex" justifyContent="center" >
        <img className="about_image" src="https://www.wethink.co.in/public/assets/images/contact-us.png"  alt="logo1" />

        </Grid>
       
                </Grid>
                </Box>
            </div>
     </section>
        </>
    )
}
export default Join;