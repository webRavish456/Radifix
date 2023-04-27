
import { Box, Grid } from "@mui/material";
import React, {useState} from "react";

const Help=()=>
{
  const [user, setuser] = useState(
    {
        username:"",
        phone:"",
        email:"",
        about:"",
        message:""
    }
  )

  const [error1, setError1]=useState(false);
  const [error2, setError2]=useState(false);
  const [error3, setError3]=useState(false);
  const [error4, setError4]=useState(false);
  const [error5, setError5]=useState(false);

  const handleinput=(e)=>
  {
      const name= e.target.name;
      const value=e.target.value;

      setuser({...user, [name]:value})
  }

  const handlesubmit=(e)=>
  {
     e.preventDefault();
    if(user.username.length===0)
    {
        setError1(true);
    }
    else if(user.phone.length===0)
    {
        setError2(true);
    }
   else if(user.email.length===0)
    {
        setError3(true);
    }
   else if(user.about.length===0)
    {
        setError4(true);
    }
 else if (user.message.length==0)
 {
    setError5(true)
 }
    else
    {
     
        setuser({username:"", phone:"", email:"", about:"",
      })
        alert("File Submitted Successfully");
    }
 
  }

    return(
        <>

           <section className="section">
             <div className="container">
               <div className="page_title  offers">How can we help you?</div>
               
               <form onSubmit={handlesubmit} className="form">
              <Box sx={{width:"100%"}}>

              <Grid container rowSpacing={2} columnSpacing={{xs:2,sm:3, md:4}} columnGap={{xs:2, sm:0, md:0}} display="flex" justifyContent="center" >
            
              <Grid item xs={12} sm={6} md={5} >
            
             <div className="form_title">
              <label className="label-form" htmlFor="username">Full name <span style={{color:"red"}}>*</span></label>
                {error1 && <label className="error">This field is required</label>}
                <input className="input-form" type="text" value={user.username} name="username" onChange={handleinput} placeholder="Devid Wonder" />
                </div>
                </Grid>
                <Grid item  xs={12} sm={6} md={5}>
                <div className="form_title">
                <label className="label-form" htmlFor="phone">Phone number <span style={{color:"red"}}>*</span></label>
                {error2 && <label className="error">This field is required</label>}
                <input className="input-form" type="text" value={user.phone} name="phone" onChange={handleinput} placeholder="+91 9876543210" />
                </div>
                </Grid>
                <Grid item  xs={12} sm={6} md={5}>
                <div className="form_title">
                <label className="label-form" htmlFor="email">Email address <span style={{color:"red"}}>*</span></label>
                {error3 && <label className="error">This field is required</label>}
                <input className="input-form" type="text" value={user.email} name="email" onChange={handleinput} placeholder="example@gmail.com" />
                </div>
                </Grid>
                <Grid item  xs={12} sm={6} md={5}>
                <div className="form_title">
                <label className="label-form" htmlFor="about">Subject <span style={{color:"red"}}>*</span></label>
                {error4 && <label className="error">This field is required</label>}
                <input className="input-form" type="text" value={user.about} name="about" onChange={handleinput} placeholder="Type your subject" />
                </div>
              </Grid>
              <Grid item  xs={12} sm={12} md={10}>
                <div className="form_title">
                <label className="label-form" htmlFor="message">Message <span style={{color:"red"}}>*</span></label>
                {error5 && <label className="error">This field is required</label>}
                <textarea className="textarea"  id="message" name="message" value={user.message} rows={4} onChange={handleinput} placeholder="Message"  />
                </div>
              </Grid>
              </Grid>
             
              </Box>
              <div className="submit-button"><button className="primary_button" >Submit</button></div>
              </form>
            
             </div>
             </section>
        </>
    )
}

export default Help;







                