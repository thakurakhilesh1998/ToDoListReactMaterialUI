import React,{useState} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
const ListItem=(prop)=>{

    const [line,setLine]=useState(false);
    const CutThrough=()=>{
        setLine(true);
    }

   return(
       <>
       <div className="list_item">
       <DeleteIcon className="del" onClick={CutThrough}/>
       <li style={{textDecoration:line ? "line-through" : "none"}}>{prop.val}</li>
        </div>
  </>
  )
}

export {ListItem};