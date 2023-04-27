import React,{useState} from "react";
import Grid from '@mui/material/Grid';
import { Box } from "@mui/material";
import { accordian } from "./Accordian.js";
import Myaccordion from "./Myaccordian.js";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Offers=()=>
{
   
     const [data, setData] = useState(accordian);
    
     const [show1, setShow1] =  useState(true);
     const [show2, setShow2] =  useState(false);
     const [show3, setShow3] =  useState(false);
     const [show4, setShow4] =  useState(false);
     const [toggle1, setToggle1] = useState(false);
     const [toggle2, setToggle2] = useState(true);
     const [toggle3, setToggle3] = useState(true);
     const [toggle4, setToggle4] = useState(true);
 

   const add1=()=>
   {
      setShow1(true);
      setToggle1(false);
      setShow3(false);
      setShow4(false);
      setShow2(false)
      setToggle2(true);
      setToggle3(true);
      setToggle4(true);
   }
 
   const add2=()=>
   {
    setShow3(false);
    setShow4(false);
     setShow1(false)
    setShow2(true);
    setToggle2(false);
    setToggle1(true);
    setToggle3(true);
    setToggle4(true);
   }

   const add3=()=>
   {
    setShow2(false);
    setShow4(false);
     setShow1(false)
    setShow3(true);
    setToggle3(false);
    setToggle2(true);
    setToggle1(true);
    setToggle4(true);
   }
   const add4=()=>
   {
     setShow3(false);
     setShow2(false);
     setShow1(false)
    setShow4(true);
    setToggle4(false);
    setToggle2(true);
    setToggle3(true);
    setToggle1(true);
   }

   const remove1=()=>
   {
     setShow1(false);
     setToggle1(true);

   }

   const remove2=()=>
   {
       setShow2(false);
       setToggle2(true);
   }

   const remove3=()=>
   {
     setShow3(false);
     setToggle3(true);
   }

   const remove4=()=>
   {
     setShow4(false);
     setToggle4(true);
   }

    return (
        <>
  <section className="section_title">
      <div className="container">
           <div className="page_title  offers">What Radifix™ offers</div>
            <Box sx={{flexGrow:1, width:"100%"}}>
            <Grid container rowSpacing={2} columnSpacing={{ sm:0,md: 6 }}  columnGap={{md:2 , sm:2}} display="flex" justifyContent="center" alignItems="center" >
                    <Grid item xs={10} sm={10} md={5}>
                       <div className="curElem">
                    <div className="main">
                     <div className="title">{data[0].title}</div>
                         <div>
                         {toggle1 ?  <p onClick={add1}><AddIcon className="addicon"  style={{fontSize:"30px"}}/></p> : <p onClick={remove1}><RemoveIcon className="addicon" style={{fontSize:"30px"}} /></p>}
                    </div></div>
                       { show1 && <div className="desc">{data[0].desc}</div> }
                        </div>

                        <div className="curElem">
                    <div className="main">
                     <div className="title">{data[1].title}</div>
                         <div>
                         {toggle2 ?  <p onClick={add2}><AddIcon className="addicon"  style={{fontSize:"30px"}}/></p> : <p onClick={remove2}><RemoveIcon className="addicon" style={{fontSize:"30px"}} /></p>}
                    </div></div>
                       { show2 && <div className="desc">{data[1].desc}</div> }
                        </div>
                  
                        <div className="curElem">
                    <div className="main">
                     <div className="title">{data[2].title}</div>
                         <div>
                         {toggle3 ?  <p onClick={add3}><AddIcon className="addicon"  style={{fontSize:"30px"}}/></p> : <p onClick={remove3}><RemoveIcon className="addicon" style={{fontSize:"30px"}} /></p>}
                    </div></div>
                       { show3 && <div className="desc">{data[2].desc}</div> }
                        </div>

                        <div className="curElem">
                    <div className="main">
                     <div className="title">{data[3].title}</div>
                         <div>
                         {toggle4 ?  <p onClick={add4}><AddIcon className="addicon"  style={{fontSize:"30px"}}/></p> : <p onClick={remove4}><RemoveIcon className="addicon" style={{fontSize:"30px"}} /></p>}
                    </div></div>
                       { show4 && <div className="desc">{data[3].desc}</div> }
                        </div>
                
             
                    </Grid>

                    <Grid item xs={10} sm={10} md={5}>
                    <div className="fade-left">
                    <img className="image_develop" src="https://www.wethink.co.in/public/assets/images/Why%20Should%20you%20choose%201.png" alt="logo"/>
                </div>
                    </Grid>
                </Grid>
            </Box>
          </div>
          </section>
         

        </>
    )
}
export default Offers;
