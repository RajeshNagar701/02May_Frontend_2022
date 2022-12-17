import React, { useState, useEffect  } from 'react'
import { useNavigate,useParams } from 'react-router-dom';
import Header from '../component/Header'
import swal from 'sweetalert';

function Edit_user() {
   
    const [formvalue, setFormvalue] = useState({
        name: "",
        email: "",
        password: "",
        mobile: ""
    })

    useEffect(() => {
        editData();
    }, []);

    const {id}=useParams();
    function editData() { 
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

    const redirect=useNavigate();

    const updateHandel = (e) => {
        e.preventDefault();
        fetch(`https://miralreact-default-rtdb.firebaseio.com/users/${id}.json`, {
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
            return redirect('/manage_user');           
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

                        </div>
                        {/* //tables */}
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

export default Edit_user