import React from "react";
import Grid from '@mui/material/Grid';
import { Box } from "@mui/material";

const Effect=()=>
{
    return(
        <>
            <section className="section_title">
        <div className="container contentstory ">
           
            <Box sx={{width:'100%'}}>
            <Grid container rowSpacing={2} columnSpacing={{ sm:2,md: 3 }}  columnGap={{md:2 , sm:2}} display="flex" justifyContent="center" alignItems="center" >
            <Grid item xs={10} sm={10} md={5}>
             <div>
             <div className="page_title wireless_gadget">Radifix™ radiation protection solutions</div>
  	     	<div className="description"><p>
                        are designed to protect <br></br>
                        <b>you and your families</b> from<br></br>
                         carcinogenic electromagnetic radiation<br></br><br></br>

                       Our lives are dependent on countless wireless devices, which emit electromagnetic radiation (EMR). Cellphones, WiFi routers, laptops, and microwave ovens are a few common sources of EMR in our homes. Sustained exposure to EMR may cause health risks such as headaches, depression, anxiety, chronic fatigue, neck pain, tremors, nausea, and lowered immunity. In extreme cases, this may lead to autism spectrum disorder in kids, increased risk of Alzheimer’s and Parkinson’s in ageing people, sleep disorders, cancers, and many more.
                      <b> At LiveSAFE, we believe there is no better place than a safe and radiation-free home where you and your loved ones can unwind every day. </b> We want to help people who want to consciously live healthier and happier lives by making the right lifestyle choices. As a part of this ongoing commitment, we have conducted EMR audits in over 2000 homes across the country. We take pride in our achievement of being able to reduce health risks and aforementioned symptoms considerably through our holistic approach of extensive radiation study and effective proprietary EMR solutions.
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

export default Effect;