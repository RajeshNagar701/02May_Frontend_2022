import React, { useState, useEffect } from 'react'
import Header from '../component/Header'
import swal from 'sweetalert';
function Manage_user() {

// get data
    useEffect(() => {
        getdata();
    }, []);

    const [alldata, setalldata] = useState([]);
    function getdata() {
        fetch('https://miralreact-default-rtdb.firebaseio.com/users.json')
            .then(response => response.json())
            .then(json => {
                //console.log(json);
                setalldata(json);
            })
    }


// Delete data
    function deleteHandel(id) {
        fetch(`https://miralreact-default-rtdb.firebaseio.com/users/${id}.json`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(json => {

                swal({
                    title: "Success!",
                    text: "You Delete Success!",
                    icon: "success",
                });
                getdata();
            })
    }

// Edit data
    const [formvalue, setFormvalue] = useState({
        name: "",
        email: "",
        password: "",
        mobile: ""
    })
    const [userid,setUserid]=useState("");

    const editHandel = (id) => {
        setUserid(id);
        fetch(`https://miralreact-default-rtdb.firebaseio.com/users/${id}.json`)
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            setFormvalue(json);
        });
    }

// Update data
    const onchangeHandel = (e) => {

        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    const updateHandel = (e) => {
        e.preventDefault();
        fetch(`https://miralreact-default-rtdb.firebaseio.com/users/${userid}.json`, {
        method: 'PUT',
        body: JSON.stringify(formvalue),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((json) => {
            swal({
                title: "Success!",
                text: "You Update Success!",
                icon: "success",
            });
            setFormvalue({ ...formvalue, name: "", email: "", password: "", mobile: "" });
            getdata();
        });
    }



    return (
        <div>

            <section className="wrapper scrollable">
                <Header />
                <div className="main-grid">
                    <div className="agile-grids">
                        {/* tables */}
                        <div className="table-heading">
                            <h2>Basic Tables</h2>
                        </div>
                        <div className="agile-tables">
                            <div className="w3l-table-info">
                                <h3>Basic Implementation</h3>
                                <table id="table">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Password</th>
                                            <th>Mobile</th>
                                            <th>Edit</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            Object.keys(alldata).map((item, index) => {

                                                return (
                                                    <tr key={item}>
                                                        <td>{item}</td>
                                                        <td>{alldata[item].name}</td>
                                                        <td>{alldata[item].email}</td>
                                                        <td>{alldata[item].password}</td>
                                                        <td>{alldata[item].mobile}</td>
                                                        <td><button className='btn btn-primary' onClick={() => editHandel(item)} data-bs-toggle="modal" data-bs-target="#myModal">Edit</button></td>
                                                        <td><button className='btn btn-danger' onClick={() => deleteHandel(item)}>Delete</button></td>
                                                    </tr>
                                                )
                                            }
                                            )}

                                    </tbody>
                                </table>
                            </div>

                        </div>
                        {/* //tables */}
                    </div>
                </div>

                {/* The Modal */}
                <div className="modal" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {/* Modal Header */}
                            <div className="modal-header">
                                <h4 className="modal-title">Edit User</h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" />
                            </div>
                            {/* Modal body */}
                            <div className="modal-body">
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
                                                        <button onClick={updateHandel} data-bs-dismiss="modal" className="btn btn-secondary w-100 py-3" type="submit">Save</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/* Modal footer */}
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>





                {/* footer */}
                <div className="footer">
                    <p>© 2016 Colored . All Rights Reserved . Design by <a href="http://w3layouts.com/">W3layouts</a></p>
                </div>
                {/* //footer */}
            </section>
        </div>

    )
}

export default Manage_user