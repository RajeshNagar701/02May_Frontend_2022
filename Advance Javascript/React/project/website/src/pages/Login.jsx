import React,{useState} from 'react'
import {Link,NavLink,useNavigate} from 'react-router-dom';
import swal from 'sweetalert';
function Login() {


    const redirect=useNavigate();
    const [formvalue,setFormvalue]=useState({
        
        email:"",
        password:"",
        returnSecureToken:true  // login with authentication
    })

    const onchangeHandel=(e)=>{

        setFormvalue({...formvalue,[e.target.name]:e.target.value});
        console.log(formvalue);
    }
    // login with auth https://firebase.google.com/docs/reference/rest/auth#section-sign-in-email-password
    const onLogin=(e)=>{
        e.preventDefault();
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDo-M5C6kcZIZA6PxInOL77lOJYZz9VuF4', {
            method: 'POST',
            body: JSON.stringify(formvalue),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((json) => {
                //console.log(json)
                if(json.registered==true)
                {  
                    localStorage.setItem('email',json.email);
                    swal({
                        title: "Success!",
                        text: "You Login Success!",
                        icon: "success",
                    });
                    return redirect('/index');
                }
                else
                {
                    swal({
                        title: "error!",
                        text: "You Login Failed due wrong email or password!",
                        icon: "error",
                    });
                    return redirect('/login');
                }
                 

            });

    }    



    return (
        <>
            <div>
                {/* Hero Start */}
                <div className="container-fluid bg-primary py-5 bg-hero mb-5">
                    <div className="container py-5">
                        <div className="row justify-content-start">
                            <div className="col-lg-8 text-center text-lg-start">
                                <h1 className="display-1 text-white mb-md-4">Contact Us</h1>
                                <a href className="btn btn-primary py-md-3 px-md-5 me-3">Home</a>
                                <a href className="btn btn-secondary py-md-3 px-md-5">Login Us</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Hero End */}
                {/* Contact Start */}
                <div className="container-fluid py-5">
                    <div className="container">
                        <div className="mx-auto text-center mb-5" style={{ maxWidth: 500 }}>
                            <h6 className="text-primary text-uppercase">Login Us</h6>
                            <h1 className="display-5">Please Feel Free To Login Us</h1>
                        </div>
                        <div className="row g-0">
                            <div className="col-lg-12">
                                <div className="bg-primary h-100 p-5">
                                    <form>
                                        <div className="row g-3">
                                            
                                            <div className="col-6">
                                                <input type="email" name='email' value={formvalue.email} onChange={onchangeHandel} className="form-control bg-light border-0 px-4" placeholder="Your Email" style={{ height: 55 }} />
                                            </div>
                                            <div className="col-6">
                                                <input type="password" name='password' value={formvalue.password} onChange={onchangeHandel} className="form-control bg-light border-0 px-4" placeholder="Your password" style={{ height: 55 }} />
                                            </div>
                                          
                                            <div className="col-12">
                                                <button className="btn btn-secondary w-100 py-3" onClick={onLogin} type="submit">Login</button>
                                                <NavLink to="/signup" style={{color:"white"}}>If You are not rgister  Register Here</NavLink>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                         
                        </div>
                    </div>
                </div>
                {/* Contact End */}
            </div>

        </>
    )
}

export default Login