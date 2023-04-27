import React from "react";
import Grid from '@mui/material/Grid';
import { Box } from "@mui/material";

const Powerful=()=>
{
    return(
        <>
            <section className="section_title">
        <div className="container contentstory ">
           
            <Box sx={{width:'100%'}}>
            <Grid container rowSpacing={2} columnSpacing={{ sm:2,md: 3 }}  columnGap={{md:2 , sm:2}} display="flex" justifyContent="center" alignItems="center" >
            <Grid item xs={10} sm={10} md={5}>
             <div>
             <div className="page_title wireless_gadget">Radifix™  protection solutions to protect</div>
  	     	<div className="description"><p>
             <p className="workforce"> <b> your workforce</b> from harmful wireless radiation exposure <br></br></p>

                          Every office and growing business organisation is a minefield of wireless radiation, your office is no different. Cell phones, Wi-Fi routers, IoT devices, cellular repeaters, and countless wireless devices used in the office are the most common sources of wireless radiation, they expose your workforce to symptoms like headaches, fatigue, anxiety, brain fog, weak immunity, high stress, depression, nausea, irritability, and many more. In extreme cases, it can also cause cancer. In 2011, the World Health Organisation (WHO) and the International Agency of Research on Cancer (IARC) has declared EMR as a carcinogen.<br></br> <br></br>
                        <b>  Radifix™ conducts an extensive audit in your premises to identify internal and external sources of radiation and their impact on your workforce.</b> Based on the studies, we offer unique electromagnetic radiation protection solutions that safeguard you and your employees from the ill effects of wireless radiation, while enhancing connectivity. These EMR protection solutions have been successfully implemented by several organisations across the country. These solutions are designed to help you optimize the value of your technology investments while minimizing wireless radiation impact on your workforce! <br></br><br></br>

                            <b>We offer ongoing assessment and protection for offices, which makes us a leading choice for all your radiation protection needs.</b>
                    
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

export default Powerful;