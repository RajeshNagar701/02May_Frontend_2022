import React,{useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { getuserdata, deleteUser } from '../feature/user/action';


const Viewuser = () => {
    
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getuserdata());
    },[])

    const {users}=useSelector((state)=>state.usersss)
 
  return (
      <div className="container mt-4">
          <h2>View User</h2>
         <Link to="/add_user" className='btn btn-primary float-end'>Add User</Link>
          <table className="table">
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>Profile</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Password</th>
                      <th>Mobile</th>
                      <th>Action</th>
                  </tr>
              </thead>
              <tbody>
                {
              users && users.map((item)=>(
                    <tr key={item.id}>
                      <th>{item.id}</th>
                      <th><img src={item.profile} width="50px" height="50px" /></th>
                      <th>{item.name}</th>
                      <th>{item.email}</th>
                      <th>{item.password}</th>
                      <th>{item.mobile}</th>
                     
                      <th>
                        <button className='btn btn-danger m-1' onClick={()=> {dispatch(deleteUser(item.id))}}>Delete</button>
                        <button className='btn btn-primary m-1' onClick={()=> {}} data-toggle="modal" data-target="#myModal">Edit</button>
                      </th>
                    </tr>  
                ))}
              </tbody>
          </table>
      </div>

    )
}

export default Viewuser