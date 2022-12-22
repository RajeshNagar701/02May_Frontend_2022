import React from 'react'
import swal from 'sweetalert'
import {Link , NavLink, useNavigate } from "react-router-dom";


function Header() {

  const redirect=useNavigate();
  function logout()
  {
    localStorage.removeItem('auth_id');
    localStorage.removeItem('email');
    swal("Success", "Logout Success", "success");
    redirect('/index')
  }  

    return (
        <>
            <div>
                <div className="container-fluid border-bottom d-none d-lg-block">
                    <div className="row gx-0">
                        <div className="col-lg-4 text-center py-2">
                            <div className="d-inline-flex align-items-center">
                                <i className="bi bi-geo-alt fs-1 text-primary me-3" />
                                <div className="text-start">
                                    <h6 className="text-uppercase mb-1">Our Office</h6>
                                    <span>123 Street, New York, USA</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center border-start border-end py-2">
                            <div className="d-inline-flex align-items-center">
                                <i className="bi bi-envelope-open fs-1 text-primary me-3" />
                                <div className="text-start">
                                    <h6 className="text-uppercase mb-1">Email Us</h6>
                                    <span>info@example.com</span>
                                   
                                    {(() => {
                                    
                                    if(localStorage.getItem('email'))
                                    {
                                        return (
                                               <p>Hi .. {localStorage.getItem('email')}</p> 
                                             )  
                                    }
                                  
                                 })()}
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center py-2">
                            <div className="d-inline-flex align-items-center">
                                <i className="bi bi-phone-vibrate fs-1 text-primary me-3" />
                                <div className="text-start">
                                    <h6 className="text-uppercase mb-1">Call Us</h6>
                                    <span>+012 345 6789</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0">
                    <Link to="index" className="navbar-brand ms-lg-5">
                        <h1 className="m-0 text-uppercase text-dark"><i className="bi bi-shop fs-1 text-primary me-3" />Pet Shop</h1>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">
                            <NavLink to="/index" className="nav-item nav-link       ">Home</NavLink>
                            <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                            <NavLink to="/service" className="nav-item nav-link">Service</NavLink>
                            <NavLink to="/product" className="nav-item nav-link">Product</NavLink>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu m-0">
                                    <NavLink to="/price" className="dropdown-item">Pricing Plan</NavLink>
                                    <NavLink to="/team" className="dropdown-item">The Team</NavLink>
                                    <NavLink to="/testimonial" className="dropdown-item">Testimonial</NavLink>
                                    <NavLink to="/blog" className="dropdown-item">Blog Grid</NavLink>
                                    <NavLink to="/detail" className="dropdown-item">Blog Detail</NavLink>
                                </div>
                            </div>
                            
                           
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Crud</a>
                                <div className="dropdown-menu m-0">
                                    <NavLink to="/basic" className="dropdown-item">Basic</NavLink>
                                </div>
                            </div>

                            {(() => {
                                    
                                    if(localStorage.getItem('auth_id'))
                                    {
                                        return (
                                            <NavLink to="/index" onClick={logout} className="nav-item nav-link nav-contact bg-primary text-white px-5 ms-lg-5">Logout <i className="bi bi-arrow-right" /></NavLink>
                                             )  
                                    }
                                    else 
                                    {
                                        return (<><NavLink to="/signup" className="nav-item nav-link nav-contact bg-primary text-white px-5 ms-lg-5">Signup <i className="bi bi-arrow-right" /></NavLink></>)
                                    }
                                 })()}

                          
                        </div>  
                    </div>
                </nav>
            </div>


        </>
    )
}

export default Header