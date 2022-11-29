import React,{useState, useEffect} from 'react'
import Func_img from './Func_img';

function Main_Funct() {
  
  const [isshowing,setisshowing]=useState(false);
  const [number,setnumber]=useState(1);  

/*
  useEffect(()=>{
    console.log('didmount/updated');
  },[number]);    
*/


  return (
    <div className='container'>
        <br></br>
        <button onClick={()=>setisshowing(true)}>Show</button>
        <button onClick={()=>setisshowing(false)}>Hide</button>
        <button onClick={()=>setisshowing(!isshowing)}>Hide/show</button>
        
        {isshowing ? <Func_img/> : null}
        <br></br>
        <br></br>
        
        <button onClick={()=>setnumber(number+1)}>+</button>
        <h1>{number}</h1>
        <button onClick={()=>setnumber(number-1)}>-</button>
        
    </div>
  )
}

export default Main_Funct