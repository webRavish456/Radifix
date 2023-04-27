import React, {useState} from "react";
import Grid from '@mui/material/Grid';
import { Flow } from "./Flow";
import { Box } from "@mui/material";

const Service=()=>
{
   const [item, setItem] = useState(Flow)

    return (
        <>
             <section className="section_title">
                <div className="container">
                <div className="page_title  offers">Radifix™ Service Flow</div>
                 <Box sx={{flowGrow:1, width:"100%"}}>
                 <Grid container rowSpacing={2} columnSpacing={{ sm:0,md: 6 }}  columnGap={{md:2 , sm:2}} display="flex" justifyContent="center">
                    {
                        item.map((cur)=>
                        {
                            return (
                                <>
                                    <Grid item xs={10} sm={5} md={5}>
                                      <div className="service_flow">
                                      <div><img className="report" src={cur.image} alt="logo" /></div>
                                        <div className="primary_title live_strong">{cur.title}</div>
                                        <div className="describe">{cur.describe}</div>
                                      </div>

                                    </Grid>
                                </>
                            )
                        })
                    }

                 </Grid> 

                 </Box>

                </div>
             </section>

        </>
    )
}
export default Service;

/*
    <div className="service">
            
              </div>  

<Grid container display="flex" justifyContent="center">
              <Grid item xs={10} sm={6} md={8}>
              <div  className="liveService">LiveSAFE™ Service Flow</div>
              </Grid>
              </Grid>
              <div >
         <img decoding="async" style={{width:"800", height:"116"}} src="https://livesafe.in/wp-content/uploads/2021/05/work-flow-1024x148.png"  alt="logo" srcset="https://livesafe.in/wp-content/uploads/2021/05/work-flow-200x29.png 200w, https://livesafe.in/wp-content/uploads/2021/05/work-flow-300x43.png 300w, https://livesafe.in/wp-content/uploads/2021/05/work-flow-400x58.png 400w, https://livesafe.in/wp-content/uploads/2021/05/work-flow-600x87.png 600w, https://livesafe.in/wp-content/uploads/2021/05/work-flow-768x111.png 768w, https://livesafe.in/wp-content/uploads/2021/05/work-flow-800x115.png 800w, https://livesafe.in/wp-content/uploads/2021/05/work-flow-1024x148.png 1024w, https://livesafe.in/wp-content/uploads/2021/05/work-flow.png 1158w" sizes="(max-width: 800px) 100vw, 800px"/>															
        </div>

         <div className="electromagnetic">
         <Grid container spacing={2} display="flex" justifyContent="center">
         <Grid item xs={10} sm={2.8} md={2.3}>
         <div>
         <h2><center>EMR AUDIT</center></h2>		
         <p>An expert-led assessment of your space to identify the source and evaluate areas of high and low EMR Exposure.</p>						
         </div>
         </Grid>

          <Grid item xs={10} sm={2.8} md={2.3}>
         <div>
          <h2><center>RECOMMEND</center></h2>		
          <p>A detailed report comprising electromagnetic radiation readings and analysis is offered for your consideration along with effective solutions.</p>						
          </div>
          </Grid>

          <Grid item  xs={10} sm={2.8} md={2.3}>
          <div>
           <h2><center>INSTALL</center></h2>		
          <p>The recommended installations are made by trained LiveSAFE™ technicians, without affecting aesthetics or connectivity.</p>						
           </div>
           </Grid>
           <Grid item xs={10} sm={2.8}  md={2.3}>
           <div>
          <h2><center>PROTECT</center></h2>		
          <p>An EMR evaluation is done by the experts to check the radiation levels post-installation.</p>						
          </div>
          </Grid>
          </Grid>
              </div> 
              */