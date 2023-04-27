import React, {useState} from "react";
import Grid from '@mui/material/Grid';
import { Box } from "@mui/material";
import {Store} from "./Store";

const Emf=()=>
{
    const [item, setItem]=useState(Store);

    return (
        <>
               <section className="section_title">
           <div className="container">
           <div className="page_title gadget">Radifix™ EMF Protection Products</div>
           <Box sx={{width:"100%"}}>
           <Grid container rowSpacing={2} columnSpacing={{ sm:2,md: 3 }}  columnGap={{md:2 , sm:2}}  display="flex" justifyContent={{xs:"center",sm:"space-between",md:"center"}} padding={{sm:"0px 8.5%", md:"0px"}}  >
            
             {
                item.map((cur)=>
                {
                    return (
                        <>
                        <Grid item  xs={10} sm={5} md={3.3}>
                          <div className="coating">
                            <div className="sar">
                                <div style={{textAlign:"center"}}><img className="emf_image" src={cur.image} alt="logo"/> </div>
                                <div className="name_title" style={{textAlign:"center", paddingTop:"14px"}} >{cur.name}</div>
                                <div className="descript">{cur.emr}</div>
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
export default Emf;

