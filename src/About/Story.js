import React from "react";
import Grid from '@mui/material/Grid';
import { Box } from "@mui/material";

const Story=()=>
{
    return(
        <>
             <section className="section_title">
        <div className="container contentstory ">
           
            <Box sx={{width:'100%'}}>
            <Grid container rowSpacing={2} columnSpacing={{ sm:2,md: 3 }}  columnGap={{md:2 , sm:2}} display="flex" justifyContent="center" alignItems="center" >
            <Grid item xs={10} sm={10} md={5}>
             <div>
             <div className="page_title wireless_gadget">The Radifix™ Story</div>
  	     	<div className="description"><p>The idea for LiveSafe was conceptualized when one of our founders was visiting his friend living in a densely populated area in Bangalore. During a discussion, the friend conveyed that his whole family has been suffering from different health issues for a while. His grandmother was suffering from cancer. The symptoms like headache, short attention span, panic attacks were observed among children. <b>While analyzing different reasons for the health issues, they concluded that electromagnetic radiation produced by the cell tower on their roof may be one of the probable reasons for this health scare. The friend was keen on learning about wireless radiation measurement and proven techniques for radiation management.
              </b> Thus, began the search for a radiation measurement device that met this requirement. During the research, the founder realised that although there were several devices in the market, high price points and long wait times made them highly inaccessible.
                The founder and his team sourced a radiation reader and customised it with a powerful sensor and calibrated it against the calibrated instrument at a reputed laboratory. This customised and newly-developed device was used to measure radiation at the friend’s house and the team found that the radiation levels were extremely high in grandmother’s room and rooms where the kids spent most of their time. Next, the team was disappointed that there were no effective radiation protection solutions available in the market. This is when the team with the help of a reputed laboratory developed a EMR protection coating, which was installed at the friend’s home to curb radiation impact. The radiation levels were checked again after the installation using the same meter. <b>Almost 95% reduction in radiation was achieved, and this gave birth to the concept of LiveSafe – Your Trusted Radiation Protection Partner!</b></p><p>&nbsp;</p></div>					
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
export default Story;

/* 

       

        */