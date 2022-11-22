import React ,{useState} from 'react'

function Func_State() {
   
  const [name,setName]=useState('Rajesh') ;
  const [age,setAge]=useState(32) ; 
  const [qty,setQty]=useState(1) ; 
  const [image,setImage]=useState(true) ; 
  
  const [mystate,setMystate]=useState({
    email:"raj@gmail.com",
    mobile:"987521455"
  })


  return (
    <div>
         <button onClick={()=>{
            setName("Akash");
            setAge(35);
            }}>Change State</button>
            
            <h1>My name is {name} and my age is {age}</h1>
            <hr />
            <button onClick={()=>setQty(qty+1)}>+</button>
            <h1>{qty}</h1>
            <button onClick={()=>setQty(qty-1)}>-</button>
            <hr />
            <button onClick={()=>setImage(false)}>Hide</button>
            <button onClick={()=>setImage(true)}>Show</button>
            <button onClick={()=>setImage(!image)}>Hide/Show</button>
            <br/>
            <br/>
            {image? <img src="https://images.news18.com/ibnlive/uploads/2021/08/sachin-tendulkar-52-16287387964x3.jpg" alt="" width="100px" height="100px" /> : null}
            <br/>
            <br/>
            <hr />
            
            <button onClick={()=>{
            setMystate({email:"nagaer@gmail.com",mobile:"7777777777"});
            }}>Change State</button>
            
            <h1>My email is {mystate.email} and my mobile is {mystate.mobile}</h1>
    </div>
  )
}

export default Func_State