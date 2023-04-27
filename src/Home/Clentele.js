import React, { useState } from "react";
import { Addvertisement } from "./Addvertisement";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Grid from '@mui/material/Grid';
import { Box } from "@mui/material";

const Clientele=()=>
{
  const [item, setItem] =useState(Addvertisement);
 

  const responsive = {
    superdesktop: {
      breakpoint: { max: 3000, min: 1400 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1400, min: 1200 },
      items: 4,
    },
   minidesktop: {
       breakpoint: { max: 1200, min: 1100 },
       items: 3,
    },

    tablet: {
      breakpoint: { max: 1100, min: 767 },
      items: 3,
      
    },
    mobile: {
      breakpoint: { max: 767, min: 480 },
      items: 2,
     
    },
    smallmobile:
    {
      breakpoint: {max:480, min: 0},
      items:1
    }
  };

    return (
        <>
          <section className="section_title">
            <div className="container element">
            <div className=" page_title clientele">Clientele</div>
            <Box sx={{width:"100%", flexGrow:1}}>
            <Grid container rowSpacing={2} columnSpacing={{ sm:0,md: 2 }}  columnGap={{md:2 , sm:2}} display="flex" justifyContent="center" alignItems="center" >
            <Grid item  xs={11} sm={11} md={11}>
            <Carousel responsive={responsive} 
              autoPlay={true}  
              rewind={true}
               >
            {item.map((val)=>
            {
                return (
                    <>
                        <div className="reddish">
                        <img  className="radiation-institute" src={val.image} alt="image"/>
                        </div>
                    </>
                )
            })}


            </Carousel>
            </Grid>
            </Grid>
</Box>
            </div>
            </section> 
        </>
    )
}

export default Clientele;