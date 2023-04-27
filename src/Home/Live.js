import React from "react";
import Grid from '@mui/material/Grid';
import { Box } from "@mui/material";

const Livestrong=()=>
{
    return(
        <>
         
         <section className="section_title">
          <div className="container">
            <Box sx={{width:"100%", flexGrow:1}}>
            <Grid container spacing={2} columnGap={{sm:1}} display="flex" justifyContent="center">
                <Grid item xs={10} sm={5} md={3.4}  >
                <div className="live_image">
                  <div><img className="live_long" src="https://base-tailwind.preview.uideck.com/images/icon-06.svg" alt="logo" /></div>
                   <div className="live-well">
                    <div className="primary_title live_strong">Live Strong</div>
                    <div className="secend_title strive">We strive to give you the tools to live a happier life.</div>
                    </div>
                    </div>
                    </Grid>
                <Grid item xs={10} sm={5} md={3.3}>
                 <div className="live_image">
                   <div><img className="live_long" src="https://base-tailwind.preview.uideck.com/images/icon-07.svg" alt="logo" /></div>
                 <div className="live-well">
                    <div className="primary_title live_strong">Live Long</div>
                    <div  className="secend_title strive">We strive to give you the tools to live a happier life.</div>
                    </div>
                    </div>
                    </Grid>
                  <Grid item xs={10} sm={5} md={3.4}>
                  <div className="live_image">
                  <div><img  className="live_long" src="https://base-tailwind.preview.uideck.com/images/icon-05.svg" alt="logo"/> </div>
                  <div className="live-well">
                    <div className="primary_title live_strong">Live Well</div>
                    <div  className="secend_title strive">We strive to give you the tools to live a happier life.</div>
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
export default Livestrong;