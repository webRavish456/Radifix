import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
import { Box } from "@mui/material";

const Safety=({nowpage})=>
{

    let cancelpage=2;
    const cancel=()=>
    {
       nowpage(cancelpage);
    }
   return (
    <>
         <div className="safety-widget">
           <div className="closeicon"><CloseIcon className="close-icon" style={{fontSize:"37px", boxSizing:"border-box", padding:"5px"}} onClick={cancel}/></div>
            <Box sx={{width:'100%'}}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4 }} display="flex" justifyContent="center" alignItems="center">
                  <Grid item xs={10} sm={9} md={10}>
                  <div className="long-exposure">
                  <p className="electro-cell"><strong style={{color:"black"}}> Install Safety Products:</strong> LiveSAFE™ recommends installation of its products only if the radiation levels are found to exceed recommended levels. Trained LiveSAFE™ technicians will install appropriate solutions from our range of proprietary products to reduce the levels of radiation, in a professional and responsible manner, with no change in aesthetics or impact on connectivity.</p>
             <p className="electro-cell"><strong style={{color:"black"}}>Re-evaluate Radiation Levels:</strong> Another EMR audit is conducted post-installation to analyze their impact. It is conducted using the same meter, at the same location and you can see up to 80-100% reduction in radiation. LiveSAFE™ products safeguard your home and family from excessive radiation without affecting connectivity or the quality of cell reception.</p>
              </div> 
         </Grid>
         </Grid>
                </Box>
            </div>
    </>
   )

}
export default Safety;