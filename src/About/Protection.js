import React from "react";
import Grid from '@mui/material/Grid';
import { Box } from "@mui/material";

const Protection=()=>
{
    return (
        <>
                  <section className="section_title">
            <div className="container protection">
            <Box sx={{width:'100%'}}>
            <Grid container rowSpacing={2} columnSpacing={{ sm:2,md: 3 }}  columnGap={{md:2 , sm:2}} display="flex" justifyContent="center" alignItems="center" >
                <Grid item xs={10} sm={10} md={10}>
                <div>
                <div className="page_title offers"> Radifix Protection from Radiation</div>
                <img className="radifix_image" src="	https://livesafe.in/wp-content/uploads/2021/06/aboutus-radiation-copy.png" alt="logo"/>

                </div>
                </Grid>
            </Grid>
            </Box>
            </div>
           </section>
        </>
    )
}

export default Protection;