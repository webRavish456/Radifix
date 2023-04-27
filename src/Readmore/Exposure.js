import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
import { Box } from "@mui/material";
import "./Exposure.css";

const Exposure=({nowpage})=>
{

    let cancelpage=2;
    const cancel=()=>
    {
       nowpage(cancelpage);
    }
    return(
        <>

           <div className="long-widget">
           <div className="closeicon"><CloseIcon className="close-icon" style={{fontSize:"37px", boxSizing:"border-box", padding:"5px"}} onClick={cancel}/></div>
            <Box sx={{width:'100%'}}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4 }} display="flex" justifyContent="center" alignItems="center">
                  <Grid item xs={10} sm={7} md={8}>
                  <div className="long-exposure">
                <h2 class="electro">ABSTRACT</h2>
                 <div class="electro-cell"><p> In modern society people are frequently exposed to different types of radiations and this exposure comes from different sources. It could be related to everyday life (televisions, mobile phones, computer devices, occupational equipment). SAR is a measure of the rate at which energy is absorbed per unit mass by a human body when exposed to a radio frequency
                 India has adopted one of the most stringent electromagnetic field (emf) exposure norms in the world. Unlike previous technologies, the current 5G in the 3.5 GHz band requires the phone to use two networks simultaneously, the 4G network and the 5G network.
                 </p></div>	
                 <h2 class="electro">What is SAR?</h2>
                   <div class="electro-cell"><p> In modern society people are frequently exposed to different types of radiations and this exposure comes from different sources. It could be related to everyday life (televisions, mobile phones, computer devices, occupational equipment). SAR is a measure of the rate at which energy is absorbed per unit mass by a human body when exposed to a radio frequency
                   India has adopted one of the most stringent electromagnetic field (emf) exposure norms in the world. Unlike previous technologies, the current 5G in the 3.5 GHz band requires the phone to use two networks simultaneously, the 4G network and the 5G network. <br></br><br></br> Check Radiation level (SAR) of your Smartphone by USSD code *#07#.
                 </p></div>							
              </div> 
         </Grid>
         <Grid item xs={5} sm={4}  md={3} >
       
         <div className="hazard"> <img  src="https://livesafe.in/wp-content/uploads/2022/07/pwrau-1.png"  alt="hazard" style={{width:"100%"}}/>
          </div>
          </Grid>
                </Grid>
                </Box>
            </div>

        </>
    )
}
export default Exposure;