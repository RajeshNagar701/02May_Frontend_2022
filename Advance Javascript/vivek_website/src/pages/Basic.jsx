import React,{useState} from 'react'

function Basic() {

    const[formvalue,setformvalue]=useState({
        id:"",
        name:"",
        email:"",
        subject:"",
        message:""
    })
    
    const [data,setData]=useState([]);
  
    const onchangehandel=(e)=>{

        setformvalue({...formvalue,[e.target.name]:e.target.value, id:new Date().getTime().toString()});
        //console.log(formvalue);
    }

    const onsubmithandel=(e)=>{

        e.preventDefault();
        setData([...data,formvalue]);
        setformvalue({name:"",email:"",subject:"",message:""});
        //console.log(data);
    }

    const deleteHandel=(id)=>{

        const afterdata=data.filter((item) => item.id !== id)
        setData(afterdata);
        
    }


    return (

        <div>
            {/* Contact Start */}
            <div className="container-fluid pt-5">
                <div className="container">
                    <div className="border-start border-5 border-primary ps-5 mb-5" style={{ maxWidth: 600 }}>
                        <h6 className="text-primary text-uppercase">Contact Us</h6>
                        <h1 className="display-5 text-uppercase mb-0">Please Feel Free To Contact Us</h1>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-7">
                            <form method="post">
                                <div className="row g-3">
                                    <div className="col-12">
                                        <input type="text" name="name" value={formvalue.name} onChange={onchangehandel}   className="form-control bg-light border-0 px-4" placeholder="Your Name" style={{ height: 55 }} />
                                    </div>
                                    <div className="col-12">
                                        <input type="email" name="email" value={formvalue.email} onChange={onchangehandel} className="form-control bg-light border-0 px-4" placeholder="Your Email" style={{ height: 55 }} />
                                    </div>
                                    <div className="col-12">
                                        <input type="text" name="subject" value={formvalue.subject} onChange={onchangehandel} className="form-control bg-light border-0 px-4" placeholder="Subject" style={{ height: 55 }} />
                                    </div>
                                    <div className="col-12">
                                        <textarea name="message" value={formvalue.message} onChange={onchangehandel} className="form-control bg-light border-0 px-4 py-3" rows={8} placeholder="Message" defaultValue={formvalue.message} />
                                    </div>
                                    <div className="col-12">
                                        <button onClick={onsubmithandel} className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
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
                                            <th>Subject</th>
                                            <th>Massege</th>
                                            <th>Delete</th>
                                        </tr>
                                        {
                                            data.map((item,index)=>{

                                                return(
                                                    <tr key={index}>
                                                        <td>{item.id}</td>    
                                                        <td>{item.name}</td>
                                                        <td>{item.email}</td>
                                                        <td>{item.subject}</td>
                                                        <td>{item.message}</td>
                                                        <td><button onClick={()=>deleteHandel(item.id)}>Delete</button></td>
                                                    </tr>
                                                )
                                            })
                                        }

                                    </thead>
                                    <tbody>
                                       
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact End */}
        </div>
    )
}

export default Basic