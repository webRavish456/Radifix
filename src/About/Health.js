import React from "react";
import Grid from '@mui/material/Grid';
import { Box } from "@mui/material";

const HealthRisk=()=>
{
    return(
        <>
      
      <section className="section_title">
        <div className="container">
        <Box sx={{width:'100%'}}>
        <div className="page_title offers_health">Radifix™ and Its Understanding </div>
         <div className="page_title offers"> of Health Risks Associated with Radiation </div>  
         <Grid container rowSpacing={2} columnSpacing={{ sm:2,md: 3 }}  columnGap={{md:2 , sm:2}}  display="flex" justifyContent="center"  >
          <Grid item xs={10} sm={3.3} md={3.3}>
            <div className="desc_back">
                <div className="desc desc_title">We had partnered with a leading educational institution in Bangalore to study the effect of electromagnetic radiation on kids for a year. A group of 70 kids in different age groups were chosen for the study and their parents and teachers were also part of this study. </div>
            </div>
          </Grid>

           <Grid item xs={10} sm={3} md={3}>
         <div className="desc_back">
            <div className="desc  desc_title">Another study was conducted on kids with special needs and it was found that they displayed erratic and aggressive behaviour when exposed to electromagnetic radiation sources. When cared for in an insulated environment, the instances of violent episodes reduced considerably.</div>
         </div>
             
           </Grid>

           <Grid item xs={10} sm={3.3} md={3}>
           <div className="desc_back">
             <div className="desc  desc_title">We have also helped several clients with electro-hypersensitivity (EHS) to minimize the symptoms and lead healthy lives.</div>
           </div>

           </Grid>

            </Grid>
            </Box>
        </div>
        </section>
        </>
    )
}

export default HealthRisk;