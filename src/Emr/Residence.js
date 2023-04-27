import React from "react";
import Grid from '@mui/material/Grid';
import { Box } from "@mui/material";

const Residence=()=>
{
    return(
        <>
              <section className="section_title">
           <div className="container">
           <Box sx={{width:"100%"}}>
           <Grid container rowSpacing={2} columnSpacing={{ sm:2,md: 3 }}  columnGap={{md:2 , sm:2}} display="flex" justifyContent="center">
         
            <Grid item  xs={10} sm={7} md={7}>
             <div className="element_radiation"> 
       
             <div className="radiation_emr">A safe and radiation-free home is a place where you and your loved ones can relax and retreat after a busy day. Our lives are dependent on various wireless devices, which emit high levels of EMR.</div>
             </div>
             </Grid>

             <Grid item xs={10} sm={3} md={3} display="flex" justifyContent="end">
                <div className="radifix_service">
                <div  className="element_residence" >
                  <div className="service_radifix">Radifix™ Service for</div>
                  <div className="service_work">Residence</div>
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

export default Residence;

/*      <div className="uploads"><img className="element_radiation" src="https://livesafe.in/wp-content/uploads/2021/07/Services-residence.png" alt="logo" />*/