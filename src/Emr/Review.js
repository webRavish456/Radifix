import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import { Box } from "@mui/material";
import { Speak } from "./Speak";

const Review=()=>
{
     const [data, setData] = useState(Speak);

    return (
        <>
          <section className="section_title">
           <div className="container">
           <div className="page_title  gadget">Our clients speak about us</div>
           <Box sx={{width:"100%"}}>
           <Grid container rowSpacing={2} columnSpacing={{ sm:0,md: 3 }}  columnGap={{md:2 , sm:0}}  display="flex" justifyContent={{xs:"center",sm:"space-between",md:"center"}} padding={{sm:"0px 8.5%", md:"0px"}} boxSizing={{sm:"border-box"}}>
            
             {
                data.map((cur)=>
                {
                    return (
                        <>
                        <Grid item  xs={10} sm={5} md={3.37}>
                          <div className="desination">
                            <div className="sar">
                                <div style={{textAlign:"center"}}><img className="client_image" src={cur.image} alt="logo"/> </div>
                                <div className="title" style={{textAlign:"center", paddingTop:"14px"}} >{cur.name}</div>
                                <div className="title  designation">{cur.designation}</div>
                                <div className="descript">{cur.description}</div>
                            </div>
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

export default Review;