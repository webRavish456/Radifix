import React from "react";
import "./Home.css";
import Grid from '@mui/material/Grid';
import { Box } from "@mui/material";


const Radiation=()=>
{
   
 

    return(
        <>
    <section className="section_title">
      <div className="container">
           
            <Box sx={{width:'100%'}}>
            <Grid container rowSpacing={0} columnSpacing={{ sm:0,md: 2 }} display="flex" justifyContent={{md:"center", sm:"center", xs:"center"}} alignItems="center">
             
            <Grid item sm={5.2}  md={5.4} >
       
         <div className="faderight">
         <Box sx={{width:"100%"}}>
         <Grid container rowSpacing={0} columnSpacing={{sm:2,md:4 }}display="flex" justifyContent="center" alignItems="center" >
         <Grid item sm={5.5} md={5.7}>
          <img className="about1" src="https://base-tailwind.preview.uideck.com/images/about-01.png"  alt="logo1" />
          <img className="about2" src="https://base-tailwind.preview.uideck.com/images/about-02.png"  alt="logo2" />
          </Grid>
         
         <Grid item  sm={5.5} md={5.7}>
          <img className="about3" src="https://base-tailwind.preview.uideck.com/images/about-03.png" alt="logo3" />
          </Grid>
          
          </Grid>
          </Box>
          </div>
          </Grid>

            <Grid item xs={10} sm={5.2} md={5}>
             <div className="fadeleft" >
             <div className="choose">Why Choose us</div>
             <div className="page_title wireless_gadget">Your Wireless Gadgets and Radiation</div>
  	     	<div className="description"><p>Mobile phones, over the years, have changed the way the world functions. The usage of cell phones now rules every aspect of our life. Communication, information, shopping, travel, entertainment are now easily accessible and available at our fingertips.</p><p>Mobile phone technology has definitely improved our lifestyle but it has exposed us to high levels of microwave radiation everywhere all the time. Microwave radiation or electromagnetic radiation refers to radiation in the frequency range of 300 MHz to 300 GHz.</p><p>&nbsp;</p></div>					
          </div> 
          </Grid>
                </Grid>
                </Box>
            </div>
     </section>
           

        </>
    )
}

export default Radiation;

/* 
            <div><button className="read-more" onClick={read}>Read more</button></div>

 {model &&   <div >   {currentPage===1 &&   <Modal open={open}>
                            <Exposure nowpage={nowpage}/>
                        </Modal>}
                        </div>}

<div>
                
        <h2 className="electro">Long term exposure to electromagnetic radiation is proven to be hazardous for humans.</h2>
   
         <div className="electro-cell"><p>Are mobile phones the only source of microwave radiation? No, there are several others. Our lives are guided by several devices including TVs, inverters, microwave ovens, power distribution equipment, electric shavers to a wide range of wireless WiFi-enabled gadgets. According to a study by the Biological Institute of Germany, most Indian homes stand at a higher risk of electromagnetic radiation. This is further compounded by the advent of the IoT revolution that focuses on 24*7 connectivity.</p><p>Symptoms like headaches, sleep disturbances, chronic fatigue, to ailments like cardiovascular problems, fertility problems can be attributed to exposure to high levels of microwave radiation. Pregnant women and children are at especially higher risk.</p><p>At LiveSAFE™, we are committed to minimise your exposure to destructive electromagnetic radiation and help you lead a healthy and happy life.</p><p><strong>&nbsp;</strong></p></div>						
   
        <h2 className="depth">Our in-depth understanding of various EMR sources coupled with our interdisciplinary approach makes us your go-to partner for radiation protection.</h2>		
      </div>
      */