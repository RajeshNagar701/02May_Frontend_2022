import React,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import shortid from 'shortid';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../feature/user/action';


function Adduser() {

let dispatch=useDispatch();
let navigate=useNavigate();

const [formvalue, setformvalue] = useState({
    name:"",
    email:"",
    password:"",
    mobile:"",
    profile:""  
})
    
const [error, seterror] = useState("") 

 function changehandle(e){
    setformvalue({...formvalue,[e.target.name]:e.target.value});
    console.log(formvalue);
 }  

 function submithandle(e){
    e.preventDefault();
    if(!formvalue.name || !formvalue.email || !formvalue.password || !formvalue.mobile || !formvalue.profile)
    {
        seterror("All field is required");
    }
    else{
        dispatch(addUser(formvalue))
        navigate('/');
    }
    
 }
  return (
      <div className="container mt-5">
          <h2>Add user form <Link to="/" className='btn btn-primary float-end'>Go Back</Link></h2>
            
          <form action="post" onSubmit={submithandle}>
          {
            error && <h5 align="center" className='text-danger'>{error}</h5>
          }  
          <div className="mb-3 mt-3">
                  <label htmlFor="name">Name:</label>
                  <input type="text"className="form-control" value={formvalue.name} onChange={changehandle} id="name" placeholder="Enter name" name="name" />
              </div>
              
              <div className="mb-3 mt-3">
                  <label htmlFor="email">Email:</label>
                  <input type="email" className="form-control" value={formvalue.email} onChange={changehandle} id="email" placeholder="Enter email" name="email" />
              </div>
              <div className="mb-3 mt-3">
                  <label htmlFor="email">Password:</label>
                  <input type="password"  className="form-control" value={formvalue.password} onChange={changehandle} id="username" placeholder="Enter password" name="password" />
              </div>
           
              <div className="mb-3">
                  <label htmlFor="pwd">Phone:</label>
                  <input type="number"  className="form-control" value={formvalue.mobile} onChange={changehandle} id="mobile" placeholder="Enter mobile" name="mobile" />
              </div>
              <div className="mb-3">
                  <label htmlFor="pwd">Profile url  :</label>
                  <input type="text"  className="form-control" value={formvalue.profile} onChange={changehandle} id="profile" placeholder="Enter profile" name="profile" />
              </div>
              <button type="submit" onClick={submithandle} className="btn btn-primary">Submit</button>
          </form>
      </div>

  )
}

export default Adduser