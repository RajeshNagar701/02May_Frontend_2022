import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';




function Login() {

    const redirect=useNavigate();    
    useEffect(()=>{
        if(localStorage.getItem('email'))
        {
            redirect('/index');
        }
    },[]);
   
    const [formvalue, setformvalue] = useState({
        email: "",
        password: "",
        returnSecureToken: ""
    })
    const onchangehandel = (e) => {
        setformvalue({ ...formvalue, [e.target.name]: e.target.value,returnSecureToken:true });
        console.log(formvalue);
    }

    


    // Second method by axios
    const onsubmithandel = async (e) => {
        e.preventDefault();
        const res = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAoP6yWNgW7mwf5QOXYdSSFmM1sjv27zzc`, formvalue)
        .then((response) => {
            if (response.status===200) 
            {
                 // store data in local store
                localStorage.setItem('auth_id',response.data.localId);
                localStorage.setItem('email',response.data.email);
                
                swal({
                    title: "Success",
                    text: "Login Success",
                    icon: "success",
                    button: "Aww yiss!",
                });
                redirect('/index')
            }
        })
        .catch((error) => {
            // Error
            if (error.response) {
                swal({
                    title: "No",
                    text: "Login Failed",
                    icon: "error",
                    button: "Aww No!",
                });
                redirect('/login')
            }
        
         })
        }
    
    
    return (
        <div>
            {/* Contact Start */}
            <div className="container-fluid pt-5">
                <div className="container">
                    <div className="border-start border-5 border-primary ps-5 mb-5" style={{ maxWidth: 600 }}>
                        <h6 className="text-primary text-uppercase">Login Us</h6>
                        <h1 className="display-5 text-uppercase mb-0">Please Feel Free To Signup Us</h1>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-12">
                            <form method="post" >
                                <div className="row g-3">
                                    
                                    <div className="col-12">
                                        <input type="email" value={formvalue.email} name="email" onChange={onchangehandel} className="form-control bg-light border-0 px-4" placeholder="Your Email" style={{ height: 55 }} />
                                    </div>
                                    <div className="col-12">
                                        <input type="password" value={formvalue.password} name="password" onChange={onchangehandel} className="form-control bg-light border-0 px-4" placeholder="Password" style={{ height: 55 }} />
                                    </div>
                                    
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" onClick={onsubmithandel} type="submit">Login</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
            {/* Contact End */}
        </div>

    )
}

export default Login