import React from "react";
import { Container, Typography,  Box, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';
import {NavLink} from "react-router-dom";
import Grid from '@mui/material/Grid';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import "./Footer.css";

const  Footer=() => {
    return (
      <footer>
        <Box sx={{ bgcolor: '#f5f5f5', py: 5, width:"100%", flexGrow:1,  mt: 2}}>
            <Grid container spacing={2} columnGap={{sm:1, md:2}} display="flex" justifyContent="center"  >
            <Grid item xs={10} sm={3.4} md={3.4}>
                <div className="primary_title live_strong">NAVIGATE</div>
                <NavLink to="/" className="footer_title"><div className="footer_pagargraph">Home</div></NavLink>
                <NavLink to="/about" className="footer_title"><div className="footer_pagargraph">About us</div></NavLink>
                <NavLink to="/emrSafety" className="footer_title"><div className="footer_pagargraph">Emr Safety</div></NavLink>
                <NavLink to="/blogs" className="footer_title"><div className="footer_pagargraph">Blogs</div></NavLink>
                <NavLink to="/contact" className="footer_title"><div className="footer_pagargraph">Contact us</div></NavLink>
                <NavLink to="/" className="footer_title"><div className="footer_pagargraph">Privacy policy</div></NavLink>
            </Grid>

            <Grid item xs={10} sm={3.3} md={3.3}   >
                <div className="primary_title live_strong" >BLOG</div>
                <NavLink to="/emrSafety" className="footer_title"><div className="footer_pagargraph">EMR Safety Service for Residence</div></NavLink>
                <NavLink to="/workplace" className="footer_title"><div className="footer_pagargraph">EMR Safety Services for Work Places</div></NavLink>
                <NavLink to="/institute" className="footer_title"><div className="footer_pagargraph">Emr Safety Service for Institutions</div></NavLink>
                <NavLink className="footer_title"><div className="footer_pagargraph">Case Studies</div></NavLink>
            </Grid>

            <Grid item xs={10} sm={3.4} md={3.4} >
                <div className="primary_title live_strong">Radifix</div>
                 <address className="footer_address">Nanorama Technologies Pvt Ltd
                     <br></br>   447/A, 9th Cross,
                       <br></br>  2nd Phase, JP Nagar,
                     <br></br>    Bangalore 560078, India</address>
                     <NavLink className="footer_title">
                      <div className="phone_icon">
                        <PhoneIcon/>
                        <div>+91 9876543210</div>
                        </div>
                     </NavLink>

                     <NavLink className="footer_title">
                      <div className="phone_icon">
                        <EmailIcon/>
                        <div>contact@radifix.co.in</div>
                        </div>
                     </NavLink>

            </Grid>
            </Grid>
         
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, paddingTop:"2%" }}>
              <IconButton aria-label="Facebook" sx={{ mr: 1 }}>
                <Facebook />
              </IconButton>
              <IconButton aria-label="Twitter" sx={{ mr: 1 }}>
                <Twitter />
              </IconButton>
              <IconButton aria-label="LinkedIn" sx={{ mr: 1 }}>
                <LinkedIn />
              </IconButton>
              <IconButton aria-label="Instagram">
                <Instagram />
              </IconButton>
            </Box>
            <Typography variant="body1" color="#2d2d2d" align="center">
              &copy; {new Date().getFullYear()} Example Company. All rights reserved.
            </Typography>
            </Box>
          
       
      </footer>
    );
  }
  
  export default Footer;

  /*

            */
  
