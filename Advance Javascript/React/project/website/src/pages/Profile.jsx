import React,{useState, useEffect} from 'react'

function Profile() {

    useEffect(()=>{
        getData();
    },[]);
    const [data,setData]=useState({});

    function getData(){
        fetch(`https://miralreact-default-rtdb.firebaseio.com/users/-NIksxh1D7a_MiqOmSkP.json`)
        .then((response) => response.json())
        .then((json) =>{
            setData(json);
            console.log()
        });
    }

    

    function editHandel()
    {

    }

  return (
    <div>
        <div>
              
              {/* Carousel Start */}
              <div className="container-fluid bg-primary py-5 bg-hero mb-5">
                    <div className="container py-5">
                        <div className="row justify-content-start">
                            <div className="col-lg-8 text-center text-lg-start">
                                <h1 className="display-1 text-white mb-md-4">Blog Detail</h1>
                                <a href className="btn btn-primary py-md-3 px-md-5 me-3">Home</a>
                                <a href className="btn btn-secondary py-md-3 px-md-5">Blog Detail</a>
                            </div>
                        </div>
                    </div>
                </div>
             
      
             
              <div className="container-fluid py-5">
                  <div className="container">
                      
                      <div className="row g-5">

                    
                                        <div className="col-lg-4 col-md-6 mx-auto d-block">
                                        <h3 className='text-center'>My Profile</h3>  
                                        <div className="row g-0">
                                            <div className="col-10">
                                                <div className="position-relative">
                                                    <img className="img-fluid w-100" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt />
                                                    <div className="position-absolute start-0 bottom-0 w-100 py-3 px-4" style={{ background: 'rgba(52, 173, 84, .85)' }}>
                                                        <h4 className="text-white">{data.name}</h4>
                                                        <span className="text-white">{data.email}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-2">
                                                <div className="h-100 d-flex flex-column align-items-center justify-content-around bg-secondary py-5">
                                                    <a className="btn btn-square rounded-circle bg-white" href="#" onClick={()=>editHandel()}><i className="fa fa-edit text-secondary" />Edit</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>    



                               
                      </div>
                  </div>
              </div>
             
          </div>
    </div>
  )
}

export default Profile