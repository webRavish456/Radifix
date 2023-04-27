import React,{useState} from "react";
import Grid from '@mui/material/Grid';
import { Box } from "@mui/material";
import { Studies } from "./Studies";

const Reading=()=>
{
         const[item, setItem]=useState(Studies);

    return(
        <>
             <section className="section_title">
           <div className="container">
           <div className="page_title gadget">Case Studies & Readings</div>
           <Box sx={{width:"100%"}}>
           <Grid container rowSpacing={2} columnSpacing={{ sm:0,md: 3 }}  columnGap={{md:2 , sm:0}}  display="flex" justifyContent={{xs:"center",sm:"space-between",md:"center"}} padding={{sm:"0px 8.5%", md:"0px"}}  >
            
             {
                item.map((cur)=>
                {
                    return (
                        <>
                        <Grid item  xs={10} sm={5} md={3.3}>
                          <div className="studies">
                            <div className="sar">
                            <div className="title">{cur.percentage}</div>
                                <div className="title">{cur.name}</div>
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

export default Reading;