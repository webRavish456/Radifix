import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import Grid from '@mui/material/Grid';
import { Box } from "@mui/material";

const Place=()=>
{
    return (
        <>
           <section className="section_title">
           <div className="contain ">
           <Box sx={{width:'100%'}}>
            <Grid container rowSpacing={2}  columnSpacing={{ sm:2,md: 0 }}  columnGap={{md:2 , sm:2}} display="flex" justifyContent="center" alignItems="center" >
            <Grid item  xs={10} sm={10} md={10}>
            <div className="work_place">
            <div className="home_icon">
                <div className="institute"><HomeIcon style={{color:"var(--primary)"}}/></div>
                <div className="residence">For Residences</div>
            </div>
            <div className="home_icon">
                <div className="institute"><BusinessIcon style={{color:"var(--primary)"}}/> </div>
                <div  className="residence">For Work Places</div>
            </div>
            <div className="home_icon">
                <div className="institute"><LocationCityIcon style={{color:"var(--primary)"}}/></div>
                <div  className="residence">For Institutions</div>
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

export default Place;