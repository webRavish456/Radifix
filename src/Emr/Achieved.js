import React from "react";
import Grid from '@mui/material/Grid';
import { Box } from "@mui/material";

const Achieved=()=>
{
    return (
        <>
             <section className="section_title">
                <div>
                <Box sx={{width:'100%'}}>
            <Grid container rowSpacing={2} columnSpacing={{ sm:2,md: 3 }}  columnGap={{md:2 , sm:2, xs:2}} display="flex" justifyContent="start"  paddingLeft={{md:"8%", sm:"8.4%", xs:"7.6%"}} >
            <Grid item xs={11} sm={8} md={8}>
             <div className="achieved">
             <div className="audits">
                 <div className="number">2,000+</div>
                 <div className="describe_title">Residential audits conducted</div>
             </div>

             <div className="audits">
                 <div  className="number">1,000+</div>
                 <div className="describe_title">Home secured</div>
             </div>

                    <div className="audits">
                 <div  className="number">99.9%</div>
                 <div className="describe_title">Reduction in EMR achieved!</div>
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

export default Achieved;