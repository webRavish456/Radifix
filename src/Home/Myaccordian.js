import React , {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


const Myaccordion=({title, desc})=>
{

    const [show, setShow] =  useState(false);
    const [toggle, setToggle] = useState(true);

  const add=()=>
  {
     setShow(true);
     setToggle(false);
  }

  const remove=()=>
  {
    setShow(false);
    setToggle(true);
  }

    return(
        <>
           <div className="curElem">
            <div className="main">
                <div className="title">{title}</div>
                <div>
              {toggle ?  <p onClick={add}><AddIcon className="addicon"  style={{fontSize:"30px"}}/></p> : <p onClick={remove}><RemoveIcon className="addicon" style={{fontSize:"30px"}} /></p>}
            </div></div>
            { show && <div className="desc">{desc}</div> }
            </div>
        </>
    )
}

export default Myaccordion;