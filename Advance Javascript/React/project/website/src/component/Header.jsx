import React from 'react'
import {Link,NavLink,useNavigate} from 'react-router-dom';
import swal from 'sweetalert';
function Header() {

    const redirect=useNavigate(); 
    function logout()
    {
        localStorage.removeItem('email');
        swal("Success", "Logout Success", "success");
        redirect('/index')
    }  
    
    return (
        <>



            <div>
                <div className="container-fluid px-5 d-none d-lg-block">
                    <div className="row gx-5 py-3 align-items-center">
                        <div className="col-lg-3">
                            <div className="d-flex align-items-center justify-content-start">
                                <i className="bi bi-phone-vibrate fs-1 text-primary me-2" />
                                <h2 className="mb-0">+012 345 6789</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center justify-content-center">
                                <NavLink to="index" className="navbar-brand ms-lg-5">
                                    <h1 className="m-0 display-4 text-primary"><span className="text-secondary">Farm</span>Fresh</h1>
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="d-flex align-items-center justify-content-end">
                                <a className="btn btn-primary btn-square rounded-circle me-2" href="#"><i className="fab fa-twitter" /></a>
                                <a className="btn btn-primary btn-square rounded-circle me-2" href="#"><i className="fab fa-facebook-f" /></a>
                                <a className="btn btn-primary btn-square rounded-circle me-2" href="#"><i className="fab fa-linkedin-in" /></a>
                                <a className="btn btn-primary btn-square rounded-circle" href="#"><i className="fab fa-instagram" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg bg-primary navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-5">
                    <NavLink to="/index" className="navbar-brand d-flex d-lg-none">
                        <h1 className="m-0 display-4 text-secondary"><span className="text-white">Farm</span>Fresh</h1>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav mx-auto py-0">
                            <NavLink to="/index" className="nav-item nav-link">Home</NavLink>
                            <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                            <NavLink to="/service" className="nav-item nav-link">Service</NavLink>
                            <NavLink to="/product" className="nav-item nav-link">Product</NavLink>
                          
                            <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
                           
                               {(() => {
                                    if(localStorage.getItem('email'))
                                    {
                                        return(
                                        <>   
                                            <NavLink to="#" onClick={logout} className="nav-item nav-link">Logout</NavLink>
                                            <NavLink to="/profile" className="nav-item nav-link">Profile</NavLink>   
                                            <p className='text-white pt-4'>Hi .. {localStorage.getItem('email')}</p> 
                                        </>
                                        )
                                    }
                                    else
                                    {
                                        return(
                                        <NavLink to="/login" className="nav-item nav-link">Login</NavLink>
                                        )
                                    }
                                })
                                ()
                                }
                            
                        </div>
                    </div>
                </nav>
            </div>

        </>
    )
}

export default Header