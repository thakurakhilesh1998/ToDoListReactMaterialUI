import React,{useState} from 'react';
import './App.css';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {ListItem} from './ListItem';


function App() {

  const [item,setItem]=useState('');
  const [list,setList]=useState([]);
  const OnButtonClicked=()=>
  {
    setList((list)=>{
      return(

          [...list,item]
      );
    });
    setItem('');
  }

  const OnTyped=(event)=>
  {
    setItem(event.target.value);
  }
  
  return (
    <>
      <div className="container">
        <div className="card">
          <br/>
            <h1>To Do List Item</h1>
            <br/>
            <div className="input">
            <input type="text" placeholder="Add A Item" onChange={OnTyped} value={item}></input>
            <Fab className="fab_btn" onClick={OnButtonClicked}>
              <AddIcon/>
            </Fab>
            </div>
            <div className="list">
                <ul>
                {
                  list.map((val,index)=>{
                      return (<ListItem val={val} key={index} id={index}/>)
                  })
                }      
                </ul>
            </div>
        </div>
      </div>
    </>
  );
}
export default App;
