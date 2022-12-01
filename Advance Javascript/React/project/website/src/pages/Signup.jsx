import React,{useState} from 'react'
import {Link,NavLink} from 'react-router-dom';
import swal from 'sweetalert';
function Signup() {



    const [formvalue,setFormvalue]=useState({
        name:"",
        email:"",
        password:"",
        mobile:""
    })

    const onchangeHandel=(e)=>{

        setFormvalue({...formvalue,[e.target.name]:e.target.value});
        console.log(formvalue);
    }

    const onsubmitHandel=(e)=>{
        e.preventDefault();
        fetch('https://miralreact-default-rtdb.firebaseio.com/users.json', {
            method: 'POST',
            body: JSON.stringify(formvalue),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((json) => {
                swal({
                    title: "Success!",
                    text: "You Registered Success!",
                    icon: "success",
                  });
                  setFormvalue({...formvalue,name:"",email:"",password:"",mobile:""}); 
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
                                <h1 className="display-1 text-white mb-md-4">Signup Us</h1>
                                <a href className="btn btn-primary py-md-3 px-md-5 me-3">Home</a>
                                <a href className="btn btn-secondary py-md-3 px-md-5">Signup Us</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Hero End */}
                {/* Contact Start */}
                <div className="container-fluid py-5">
                    <div className="container">
                        <div className="mx-auto text-center mb-5" style={{ maxWidth: 500 }}>
                            <h6 className="text-primary text-uppercase">Signup Us</h6>
                            <h1 className="display-5">Please Feel Free To Signup Us</h1>
                        </div>
                        <div className="row g-0">
                            <div className="col-lg-12">
                                <div className="bg-primary h-100 p-5">
                                    <form>
                                        <div className="row g-3">
                                            <div className="col-6">
                                                <input type="text" name='name' value={formvalue.name} onChange={onchangeHandel} className="form-control bg-light border-0 px-4" placeholder="Your Name" style={{ height: 55 }} />
                                            </div>
                                            <div className="col-6">
                                                <input type="email" name='email' value={formvalue.email} onChange={onchangeHandel} className="form-control bg-light border-0 px-4" placeholder="Your Email" style={{ height: 55 }} />
                                            </div>
                                            <div className="col-6">
                                                <input type="password" name='password' value={formvalue.password} onChange={onchangeHandel} className="form-control bg-light border-0 px-4" placeholder="Your password" style={{ height: 55 }} />
                                            </div>
                                            <div className="col-6">
                                                <input type="number" name='mobile' value={formvalue.mobile} onChange={onchangeHandel} className="form-control bg-light border-0 px-4" placeholder="Your mobile" style={{ height: 55 }} />
                                            </div>
                                            
                                            <div className="col-12">
                                                <button onClick={onsubmitHandel} className="btn btn-secondary w-100 py-3" type="submit">Send Message</button>
                                                <NavLink to="/login" style={{color:"white"}}>If You are rgistered then Login Here</NavLink>
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

export default Signup