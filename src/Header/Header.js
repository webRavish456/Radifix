import React, {useState} from "react";
import Grid from '@mui/material/Grid';
import "./Header.css";
import logo from "../assests/Radifixlogo.png";
import { Box } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

import Drawer from '@mui/material/Drawer';

import List from '@mui/material/List';
import CloseIcon from '@mui/icons-material/Close';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import { NavLink } from "react-router-dom";

const Header=()=>
{

    
  const [showMediaIcons,setShowMediaIcons] = useState(true);

  const [state, setState] = useState({
    left: false,
  });


 const [close, setClose]=useState(true);



  const show=()=>
  {
    setShowMediaIcons(!showMediaIcons)
  }
const Close=()=>
{
  setClose(false);
}


  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const menuLink=()=>
  {
    setClose(true);
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : '100vw' }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>

          <ListItem  disablePadding >
            <ListItemButton>
            <div className="nav_bar">
            <NavLink to ="/" className="home"> <div className="list_item"  style={{cursor:"pointer"}}>Home</div> </NavLink> 
                       <NavLink to="/about" className="home"><div className="list_item" style={{cursor:"pointer"}}>About</div></NavLink> 
                       <NavLink to="/emrSafety" className="home"> <div className="list_item"   style={{cursor:"pointer"}}>Emr</div></NavLink> 
                       <NavLink to="/blogs" className="home">  <div className="list_item"  style={{cursor:"pointer"}}>Blogs</div></NavLink> 
                       <NavLink to="/contact" className="home"><div className="list_item"   style={{cursor:"pointer"}}>Contact</div></NavLink> 
                       </div>
            </ListItemButton>
          </ListItem>
      
      </List>
    </Box>
  );

    return (
        <>
          <div className="header">
           <Box sx={{width:"100%"}}>
           <Grid container rowSpacing={2} columnSpacing={{ sm:0,md: 1 }}  columnGap={{md:2 , sm:0}} display="flex" justifyContent="center" alignItems="center" >
               <Grid item xs={5} sm={5} md={5} display="flex" alignItems="center" >
                    <div><img className="icons" src={logo} alt="icon"/></div>
                    </Grid>
                    <Grid item xs={5} sm={5} md={5}  display="flex" justifyContent="center" alignItems="center" >
                  <div className="ul">
                       <NavLink to ="/" className="home"> <div style={{cursor:"pointer"}}>Home</div> </NavLink> 
                       <NavLink to="/about" className="home"><div  style={{cursor:"pointer"}}>About</div></NavLink> 
                       <NavLink to="/emrSafety" className="home"> <div  style={{cursor:"pointer"}}>Emr</div></NavLink> 
                       <NavLink to="/blogs" className="home">  <div  style={{cursor:"pointer"}}>Blogs</div></NavLink> 
                       <NavLink to="/contact" className="home"><div  style={{cursor:"pointer"}}>Contact</div></NavLink> 
                 </div>
                 </Grid>
                </Grid>
                </Box>  

                 {['left'].map((anchor) => (
        <div key={anchor}>
         <div className="hamburger"> <button className="mobile_link" onClick={toggleDrawer(anchor, true)}><MenuIcon className="menu-icon" onClick={menuLink}/></button></div>
        {close &&  <Drawer
            anchor={anchor}
            open={state[anchor]}
            className="drawer"
          >
           <div className="closeicon" onClick={Close}><CloseIcon className="close-icon" style={{fontSize:"37px", boxSizing:"border-box", padding:"5px"}} /></div>
            {list(anchor)}
          </Drawer>}
        </div>
  
      ))}
   
    
   
          </div>
        

   
        </>
    )
}

export default Header;

/*  
      <button className="mobile_link" onClick={show}>
                  <MenuIcon />
                  </button>

















          */