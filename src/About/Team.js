import React from "react";
import Grid from '@mui/material/Grid';
import { Box } from "@mui/material";


const Teammember=()=>
{
    return (
        <>
               <section className="section_title">
               <div className="container ">
               <div className="page_title offers">Radifix Team</div>
               <Box sx={{width:'100%'}}>
               <Grid container rowSpacing={2} columnSpacing={{ sm:2,md: 3 }}  columnGap={{md:2 , sm:2}} display="flex" justifyContent="center"  >
               <Grid item xs={10} sm={10}  md={5}>
                   <div className="technology">
                  <div>
                    <img className="member_image" src="https://livesafe.in/wp-content/uploads/2021/07/Neehar.png" alt="logo"/>
                    <div className="image_name">
                        <div style={{color: "var(--primary)"}}>Neehar S Rao</div>
                        <div style={{color: "var(--primary)"}}>Founder,</div>
                        <div style={{color: "var(--primary)", width:"14vw"}}>Nanorama Technologies</div>
                    </div>
                    </div>
                    <div className="describe paragraph " style={{left:"-10px", position:"relative"}}>Neehar Rao is a serial entrepreneur with three successful business ventures to his credit.
                          As an MS, EE specializing in Optics and DSP from Fairleigh Dickinson University in the US, he has worked extensively to design and deliver innovative solutions for mobile platforms, financial inclusion, education monitoring, and biometric solutions across the country.
                          As a CEO of Nanorama Technologies, offering LiveSAFE, Neehar educates and assists people to protect themselves from EMR threats posed by cell phone towers and wireless devices. He has driven the development of proprietary, 100% cost-effective solutions that have, in over 1000 installations, reduced the EM Radiation by up to 99.6%.</div>
                          </div>        

              </Grid>
              
              <Grid item xs={10} sm={10} md={5}>
              <div className="technology">
                 <div>
                    <img  className="member_image" src="https://livesafe.in/wp-content/uploads/2021/07/Manoj.png" alt="logo"/>
               
                   <div  className="image_name">
                     <div style={{color: "var(--primary)"}}>Manoj Mandira,</div>
                     <div style={{color: "var(--primary)"}}>Head BD</div>
                   </div>
                   </div>
                   <div className="describe paragraph ">Manoj M.S is a seasoned professional with over fifteen years of experience in sales, marketing, and customer relations.
                        He has played a key role in expanding the company’s market footprint through strategic sales initiatives and various creative marketing campaigns. Currently, he is handling business development for the retail and consumer segment.
                        Being a goal-oriented specialist dedicated to high levels of customer satisfaction, Manoj has also helped the team at Nanorama Technologies to build strong customer relationships with its clients.</div>
                       </div> 
              </Grid>

              </Grid>
              </Box>
               </div>
               </section>
        </>
    )
}

export default Teammember;