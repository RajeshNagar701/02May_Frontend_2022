import React, { useState, useEffect } from 'react'
import swal from 'sweetalert';
import axios from 'axios';
import { Outlet, Link , NavLink,useNavigate } from "react-router-dom";




function Signup() {
    
    const redirect=useNavigate();    
    useEffect(()=>{
       
        if(localStorage.getItem('email'))
        {
            redirect('/index');
        }
    },[]);



    const [formvalue, setformvalue] = useState({
        name: "",
        email: "",
        password: "",
        number: "",
        returnSecureToken:""
    })
    const onchangehandel = (e) => {
        setformvalue({ ...formvalue, [e.target.name]: e.target.value,returnSecureToken:true });
        console.log(formvalue);
    }

    /*
    // First method by jsonplaceholder
    const onsubmithandel = (e) => {
        
        
        e.preventDefault();
        fetch('https://vivek-8d814-default-rtdb.firebaseio.com/customer.json', {
            method: 'POST',
            body: JSON.stringify(formvalue),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                setformvalue({ name: "", email: "", password: "", number: "" });
                swal({
                    title: "Success",
                    text: "Registration Success",
                    icon: "success",
                    button: "Aww yiss!",
                });
            getdata();     
            });
           
    }
    */


    // Second method by axios
    const onsubmithandel = async (e) => {
        e.preventDefault();

        const res = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAoP6yWNgW7mwf5QOXYdSSFmM1sjv27zzc`, formvalue);
        if (res.status === 200) 
        {
            const res = await axios.post(`https://vivek-8d814-default-rtdb.firebaseio.com/customer.json`, formvalue);
            
            if (res.status === 200) {
                setformvalue({ name: "", email: "", password: "", number: "" });
                swal({
                    title: "Success",
                    text: "Registration Success",
                    icon: "success",
                    button: "Aww yiss!",
                });
                getdata();
            }
        }    




        
    }

    //=====================================================================

    const [data, setData] = useState([]);

    /*
    // first method
    const getdata = (e) => {

        fetch(`https://vivek-8d814-default-rtdb.firebaseio.com/customer.json`)
            .then((response) => response.json())
            .then((json) => {
                //console.log(json)
                setData(json);

            });
    }
    */

    // second method

    const getdata = async (e) => {
        const res = await axios.get(`https://vivek-8d814-default-rtdb.firebaseio.com/customer.json`);
        if (res.status === 200) {
            setData(res.data);
        }
    }

    useEffect(() => {
        getdata();
    }, [])
//=======================================================================

    const deleteHandel = async (id) => {

        {/*
       //method 1
        fetch(`https://vivek-8d814-default-rtdb.firebaseio.com/customer/${id}.json`, {
        method: 'DELETE',})
        .then((response) => response.json())
            .then((json) => {
                swal({
                        title: "Success",
                        text: "Delete Success",
                        icon: "success",
                        button: "Aww yiss!",
                    });
                    getdata();
            });     
        */}

        const res = await axios.delete(`https://vivek-8d814-default-rtdb.firebaseio.com/customer/${id}.json`);
        if (res.status === 200) {
            swal({
                title: "Success",
                text: "Delete Success",
                icon: "success",
                button: "Aww yiss!",
            });
            getdata();
        }
    }
//==================================================================================================
    const [formvalue1, setformvalue1] = useState({
        name: "",
        email: "",
        password: "",
        number: ""
    })

    const [userID,setuserID]=useState({});

    const editHandel = async (id) => {

        {/*}
        //method 1
        fetch(`https://vivek-8d814-default-rtdb.firebaseio.com/customer/${id}.json`)
            .then((response) => response.json())
            .then((json) => {
                setformvalue1(json);
                setuserID(id);
            });
        */}
        const res = await axios.get(`https://vivek-8d814-default-rtdb.firebaseio.com/customer/${id}.json`);
        if (res.status === 200) {
            setformvalue1(res.data);
            setuserID(id);
        }    

    }

//=============================================================================================

const onchangehandel1 = (e) => {
    setformvalue1({ ...formvalue1, [e.target.name]: e.target.value });
    //console.log(formvalue1);
}

    const onupdatehandel1 = async (e) => {
        {/*
        //method 1
        fetch(`https://vivek-8d814-default-rtdb.firebaseio.com/customer/${userID}.json`, {
            method: 'PATCH',
            body: JSON.stringify(formvalue1),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                setformvalue1({ name: "", email: "", password: "", number: "" });
                getdata(); 
                swal({
                    title: "Success",
                    text: "Update Success",
                    icon: "success",
                    button: "Aww yiss!",
                });
                 
            });
        */}
        const res = await axios.patch(`https://vivek-8d814-default-rtdb.firebaseio.com/customer/${userID}.json`, formvalue1);
        if (res.status === 200) {
            setformvalue1({ name: "", email: "", password: "", number: "" });
            getdata();
            swal({
                title: "Success",
                text: "Update Success",
                icon: "success",
                button: "Aww yiss!",
            });
        }

    }

    
    return (
        <div>
            {/* Contact Start */}
            <div className="container-fluid pt-5">
                <div className="container">
                    <div className="border-start border-5 border-primary ps-5 mb-5" style={{ maxWidth: 600 }}>
                        <h6 className="text-primary text-uppercase">Signup Us</h6>
                        <h1 className="display-5 text-uppercase mb-0">Please Feel Free To Signup Us</h1>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-7">
                            <form method="post" >
                                <div className="row g-3">
                                    <div className="col-12">
                                        <input type="text" value={formvalue.name} name="name" onChange={onchangehandel} className="form-control bg-light border-0 px-4" placeholder="Your Name" style={{ height: 55 }} />
                                    </div>
                                    <div className="col-12">
                                        <input type="email" value={formvalue.email} name="email" onChange={onchangehandel} className="form-control bg-light border-0 px-4" placeholder="Your Email" style={{ height: 55 }} />
                                    </div>
                                    <div className="col-12">
                                        <input type="password" value={formvalue.password} name="password" onChange={onchangehandel} className="form-control bg-light border-0 px-4" placeholder="Password" style={{ height: 55 }} />
                                    </div>
                                    <div className="col-12">
                                        <input type="number" value={formvalue.number} name="number" onChange={onchangehandel} className="form-control bg-light border-0 px-4" placeholder="Your number" style={{ height: 55 }} />
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" onClick={onsubmithandel} type="submit">Signup</button>
                                        <Link to="/login" className="btn btn-primary w-100 py-3 mt-3">Login <i className="bi bi-arrow-right" /></Link>
                                    </div>
                                    
                                </div>

                            </form>
                            
                        </div>
                        


                        <div className="col-lg-5">
                            <div className="bg-light mb-5 p-5">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Mobile</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                           data && Object.keys(data).map((item, index) => {
                                                // distructuring
                                                const { name, email, number } = data[item]
                                                return (
                                                    <tr>
                                                        <td>{item}</td>
                                                        <td>{name}</td>
                                                        <td>{email}</td>
                                                        <td>{number}</td>
                                                        <td>
                                                            <button className='btn btn-danger m-1' onClick={() => deleteHandel(item)}>Delete</button>
                                                            <button className='btn btn-danger m-1' data-bs-toggle="modal" data-bs-target="#myModal" onClick={() => editHandel(item)}>Edit</button>
                                                        </td>
                                                    </tr>
                                                )
                                            })

                                        }
                                    </tbody>
                                </table>

                            </div>

                            <div className="modal" id="myModal">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        {/* Modal Header */}
                                        <div className="modal-header">
                                            <h4 className="modal-title">Edit Form</h4>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" />
                                        </div>
                                        {/* Modal body */}
                                        <div className="modal-body">
                                        <form method="post" >
                                            <div className="row g-3">
                                                <div className="col-12">
                                                    <input type="text" value={formvalue1.name} name="name" onChange={onchangehandel1} className="form-control bg-light border-0 px-4" placeholder="Your Name" style={{ height: 55 }} />
                                                </div>
                                                <div className="col-12">
                                                    <input type="email" value={formvalue1.email} name="email" onChange={onchangehandel1} className="form-control bg-light border-0 px-4" placeholder="Your Email" style={{ height: 55 }} />
                                                </div>
                                                <div className="col-12">
                                                    <input type="password" value={formvalue1.password} name="password" onChange={onchangehandel1} className="form-control bg-light border-0 px-4" placeholder="Password" style={{ height: 55 }} />
                                                </div>
                                                <div className="col-12">
                                                    <input type="number" value={formvalue1.number} name="number" onChange={onchangehandel1} className="form-control bg-light border-0 px-4" placeholder="Your number" style={{ height: 55 }} />
                                                </div>
                                                <div className="col-12">
                                                    <button className="btn btn-primary w-100 py-3" data-bs-dismiss="modal" onClick={onupdatehandel1} type="submit">Save</button>
                                                </div>
                                            </div>
                                        </form>
                                        </div>
                                        {/* Modal footer */}
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>




                        </div>
                    </div>
                </div>
            </div>
            {/* Contact End */}
        </div>

    )
}

export default Signup