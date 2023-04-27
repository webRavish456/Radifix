import React from "react";
import Grid from '@mui/material/Grid';
import { Box } from "@mui/material";

const Workplacehealth=()=>
{
    return(
        <>
              <section className="section_title">
           <div className="container">
           <Box sx={{width:"100%"}}>
           <Grid container rowSpacing={2} columnSpacing={{ sm:2,md: 3 }}  columnGap={{md:2 , sm:2}} display="flex" justifyContent="center">
         
            <Grid item  xs={10} sm={7} md={7}>
             <div className="element_radiation_work"> 
       
             <div className="radiation_emr">According to a study, we spend one-third of our lives at work. Every day we spend a large amount of our time at work and rely on different wireless devices to get our work done. Being a source of electromagnetic radiation, these devices expose us to various health risks, which may have direct impact on our productivity and motivation at large.</div>
             </div>
             </Grid>

             <Grid item xs={10} sm={3} md={3} display="flex" justifyContent="end">
                <div className="radifix_service">
                <div  className="element_residence" >
                  <div className="service_radifix">Radifix™ Service for</div>
                  <div  className="service_work">Work Places</div>
                  </div>
                </div>
             </Grid>
             </Grid>
             </Box>
             </div>
           </section>
        </>
    )
}

export default Workplacehealth;