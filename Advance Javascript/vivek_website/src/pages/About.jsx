import React from 'react'

function About() {
    return (
        <div>
            {/* About Start */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row gx-5">
                        <div className="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: 500 }}>
                            <div className="position-relative h-100">
                                <img className="position-absolute w-100 h-100 rounded" src="img/about.jpg" style={{ objectFit: 'cover' }} />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="border-start border-5 border-primary ps-5 mb-5">
                                <h6 className="text-primary text-uppercase">About Us</h6>
                                <h1 className="display-5 text-uppercase mb-0">We Keep Your Pets Happy All Time</h1>
                            </div>
                            <h4 className="text-body mb-4">Diam dolor diam ipsum tempor sit. Clita erat ipsum et lorem stet no labore lorem sit clita duo justo magna dolore</h4>
                            <div className="bg-light p-4">
                                <ul className="nav nav-pills justify-content-between mb-3" id="pills-tab" role="tablist">
                                    <li className="nav-item w-50" role="presentation">
                                        <button className="nav-link text-uppercase w-100 active" id="pills-1-tab" data-bs-toggle="pill" data-bs-target="#pills-1" type="button" role="tab" aria-controls="pills-1" aria-selected="true">Our Mission</button>
                                    </li>
                                    <li className="nav-item w-50" role="presentation">
                                        <button className="nav-link text-uppercase w-100" id="pills-2-tab" data-bs-toggle="pill" data-bs-target="#pills-2" type="button" role="tab" aria-controls="pills-2" aria-selected="false">Our Vission</button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pills-1" role="tabpanel" aria-labelledby="pills-1-tab">
                                        <p className="mb-0">Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna</p>
                                    </div>
                                    <div className="tab-pane fade" id="pills-2" role="tabpanel" aria-labelledby="pills-2-tab">
                                        <p className="mb-0">Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}
            {/* Offer Start */}
            <div className="container-fluid bg-offer my-5 py-5">
                <div className="container py-5">
                    <div className="row gx-5 justify-content-start">
                        <div className="col-lg-7">
                            <div className="border-start border-5 border-dark ps-5 mb-5">
                                <h6 className="text-dark text-uppercase">Special Offer</h6>
                                <h1 className="display-5 text-uppercase text-white mb-0">Save 50% on all items your first order</h1>
                            </div>
                            <p className="text-white mb-4">Eirmod sed tempor lorem ut dolores sit kasd ipsum. Dolor ea et dolore et at sea ea at dolor justo ipsum duo rebum sea. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo lorem. Elitr ut dolores magna sit. Sea dolore sed et.</p>
                            <a href className="btn btn-light py-md-3 px-md-5 me-3">Shop Now</a>
                            <a href className="btn btn-outline-light py-md-3 px-md-5">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Offer End */}
            {/* Team Start */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="border-start border-5 border-primary ps-5 mb-5" style={{ maxWidth: 600 }}>
                        <h6 className="text-primary text-uppercase">Team Members</h6>
                        <h1 className="display-5 text-uppercase mb-0">Qualified Pets Care Professionals</h1>
                    </div>
                    <div className="owl-carousel team-carousel position-relative" style={{ paddingRight: 25 }}>
                        <div className="team-item">
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="img/team-1.jpg" alt />
                                <div className="team-overlay">
                                    <div className="d-flex align-items-center justify-content-start">
                                        <a className="btn btn-light btn-square mx-1" href="#"><i className="bi bi-twitter" /></a>
                                        <a className="btn btn-light btn-square mx-1" href="#"><i className="bi bi-facebook" /></a>
                                        <a className="btn btn-light btn-square mx-1" href="#"><i className="bi bi-linkedin" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-light text-center p-4">
                                <h5 className="text-uppercase">Full Name</h5>
                                <p className="m-0">Designation</p>
                            </div>
                        </div>
                        <div className="team-item">
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="img/team-2.jpg" alt />
                                <div className="team-overlay">
                                    <div className="d-flex align-items-center justify-content-start">
                                        <a className="btn btn-light btn-square mx-1" href="#"><i className="bi bi-twitter" /></a>
                                        <a className="btn btn-light btn-square mx-1" href="#"><i className="bi bi-facebook" /></a>
                                        <a className="btn btn-light btn-square mx-1" href="#"><i className="bi bi-linkedin" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-light text-center p-4">
                                <h5 className="text-uppercase">Full Name</h5>
                                <p className="m-0">Designation</p>
                            </div>
                        </div>
                        <div className="team-item">
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="img/team-3.jpg" alt />
                                <div className="team-overlay">
                                    <div className="d-flex align-items-center justify-content-start">
                                        <a className="btn btn-light btn-square mx-1" href="#"><i className="bi bi-twitter" /></a>
                                        <a className="btn btn-light btn-square mx-1" href="#"><i className="bi bi-facebook" /></a>
                                        <a className="btn btn-light btn-square mx-1" href="#"><i className="bi bi-linkedin" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-light text-center p-4">
                                <h5 className="text-uppercase">Full Name</h5>
                                <p className="m-0">Designation</p>
                            </div>
                        </div>
                        <div className="team-item">
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="img/team-4.jpg" alt />
                                <div className="team-overlay">
                                    <div className="d-flex align-items-center justify-content-start">
                                        <a className="btn btn-light btn-square mx-1" href="#"><i className="bi bi-twitter" /></a>
                                        <a className="btn btn-light btn-square mx-1" href="#"><i className="bi bi-facebook" /></a>
                                        <a className="btn btn-light btn-square mx-1" href="#"><i className="bi bi-linkedin" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-light text-center p-4">
                                <h5 className="text-uppercase">Full Name</h5>
                                <p className="m-0">Designation</p>
                            </div>
                        </div>
                        <div className="team-item">
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="img/team-5.jpg" alt />
                                <div className="team-overlay">
                                    <div className="d-flex align-items-center justify-content-start">
                                        <a className="btn btn-light btn-square mx-1" href="#"><i className="bi bi-twitter" /></a>
                                        <a className="btn btn-light btn-square mx-1" href="#"><i className="bi bi-facebook" /></a>
                                        <a className="btn btn-light btn-square mx-1" href="#"><i className="bi bi-linkedin" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-light text-center p-4">
                                <h5 className="text-uppercase">Full Name</h5>
                                <p className="m-0">Designation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Team End */}
        </div>

    )
}

export default About