import React from "react";
import Grid from '@mui/material/Grid';
import { Box } from "@mui/material";

const Serviceinstitute=()=>
{
    return(
        <>
              <section className="section_title">
           <div className="container">
           <Box sx={{width:"100%"}}>
           <Grid container rowSpacing={2} columnSpacing={{ sm:2,md: 3 }}  columnGap={{md:2 , sm:2}} display="flex" justifyContent="center">
         
            <Grid item  xs={10} sm={7} md={7}>
             <div className="element_radiation_institute"> 
       
             <div className="radiation_emr">Virtually connected classrooms are transforming our education system. WiFi-enabled classrooms, meeting rooms, and laboratories promise to make education a memorable experience.</div>
             </div>
             </Grid>

             <Grid item xs={10} sm={3} md={3} display="flex" justifyContent="end">
                <div className="radifix_service">
                <div  className="element_residence" >
                  <div className="service_radifix">Radifix™ Service for</div>
                  <div  className="service_work">Institutions</div>
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

export default Serviceinstitute;