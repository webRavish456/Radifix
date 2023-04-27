import React from "react";
import Grid from '@mui/material/Grid';
import { Box } from "@mui/material";

const Electro=()=>
{
    return(
        <>

          <section className="section_title">
          <div className="container">
        
           <Box sx={{width:"100%"}}>
           <Grid container rowSpacing={2} columnSpacing={{ sm:0,md: 2 }}  columnGap={{md:2 , sm:2}} display="flex" justifyContent="center" alignItems="center" >
            <Grid item xs={10} sm={10} md={5}>
            <div className="fade-right">
                <div>
                <h1 className="hero_title">Wireless has changed how we learn</h1>
                <p className="desc_title">Radifix makes your Office space safe</p>
                </div>
              
                <Box sx={{width:"100%"}}>
                <Grid container spacing={1} rowGap={{sm:2 ,xs:2}} columnGap={{md:0 , sm:2}} >
                 <Grid item xs={10} sm={10} md={5}>
                   <button className="primary_button">Get Started</button>
                </Grid>
                <Grid item xs={10} sm={10} md={7}>
                 <div className="concern">
                    <div className="contact">Call us (0123) 456 - 789</div>
                    <div className="query">For any query or concern</div>
                    </div>
                 </Grid>
                </Grid>
                </Box>
                </div>
            
               

            </Grid>

            <Grid item xs={10} sm={10} md={5} >
                <div className="fade-left">
                    <img className="image_develop" src="https://www.wethink.co.in/public/assets/images/Wordpress%20Website%20Development%20Services.png" alt="logo"/>
                </div>
            </Grid>

           </Grid>

           </Box>
           </div>
           </section>
        </>
    )
}

export default Electro;