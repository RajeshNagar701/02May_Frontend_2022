import React from 'react'

function Service() {
    return (
        <div>
            {/* Services Start */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="border-start border-5 border-primary ps-5 mb-5" style={{ maxWidth: 600 }}>
                        <h6 className="text-primary text-uppercase">Services</h6>
                        <h1 className="display-5 text-uppercase mb-0">Our Excellent Pet Care Services</h1>
                    </div>
                    <div className="row g-5">
                        <div className="col-md-6">
                            <div className="service-item bg-light d-flex p-4">
                                <i className="flaticon-house display-1 text-primary me-4" />
                                <div>
                                    <h5 className="text-uppercase mb-3">Pet Boarding</h5>
                                    <p>Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit</p>
                                    <a className="text-primary text-uppercase" href>Read More<i className="bi bi-chevron-right" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="service-item bg-light d-flex p-4">
                                <i className="flaticon-food display-1 text-primary me-4" />
                                <div>
                                    <h5 className="text-uppercase mb-3">Pet Feeding</h5>
                                    <p>Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit</p>
                                    <a className="text-primary text-uppercase" href>Read More<i className="bi bi-chevron-right" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="service-item bg-light d-flex p-4">
                                <i className="flaticon-grooming display-1 text-primary me-4" />
                                <div>
                                    <h5 className="text-uppercase mb-3">Pet Grooming</h5>
                                    <p>Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit</p>
                                    <a className="text-primary text-uppercase" href>Read More<i className="bi bi-chevron-right" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="service-item bg-light d-flex p-4">
                                <i className="flaticon-cat display-1 text-primary me-4" />
                                <div>
                                    <h5 className="text-uppercase mb-3">Pet Training</h5>
                                    <p>Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit</p>
                                    <a className="text-primary text-uppercase" href>Read More<i className="bi bi-chevron-right" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="service-item bg-light d-flex p-4">
                                <i className="flaticon-dog display-1 text-primary me-4" />
                                <div>
                                    <h5 className="text-uppercase mb-3">Pet Exercise</h5>
                                    <p>Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit</p>
                                    <a className="text-primary text-uppercase" href>Read More<i className="bi bi-chevron-right" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="service-item bg-light d-flex p-4">
                                <i className="flaticon-vaccine display-1 text-primary me-4" />
                                <div>
                                    <h5 className="text-uppercase mb-3">Pet Treatment</h5>
                                    <p>Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit</p>
                                    <a className="text-primary text-uppercase" href>Read More<i className="bi bi-chevron-right" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Services End */}
            {/* Testimonial Start */}
            <div className="container-fluid bg-testimonial py-5" style={{ margin: '45px 0' }}>
                <div className="container py-5">
                    <div className="row justify-content-end">
                        <div className="col-lg-7">
                            <div className="owl-carousel testimonial-carousel bg-white p-5">
                                <div className="testimonial-item text-center">
                                    <div className="position-relative mb-4">
                                        <img className="img-fluid mx-auto" src="img/testimonial-1.jpg" alt />
                                        <div className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white" style={{ width: 45, height: 45 }}>
                                            <i className="bi bi-chat-square-quote text-primary" />
                                        </div>
                                    </div>
                                    <p>Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat. Erat dolor rebum sit ipsum.</p>
                                    <hr className="w-25 mx-auto" />
                                    <h5 className="text-uppercase">Client Name</h5>
                                    <span>Profession</span>
                                </div>
                                <div className="testimonial-item text-center">
                                    <div className="position-relative mb-4">
                                        <img className="img-fluid mx-auto" src="img/testimonial-2.jpg" alt />
                                        <div className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white" style={{ width: 45, height: 45 }}>
                                            <i className="bi bi-chat-square-quote text-primary" />
                                        </div>
                                    </div>
                                    <p>Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat. Erat dolor rebum sit ipsum.</p>
                                    <hr className="w-25 mx-auto" />
                                    <h5 className="text-uppercase">Client Name</h5>
                                    <span>Profession</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Testimonial End */}
            {/* Pricing Plan Start */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="border-start border-5 border-primary ps-5 mb-5" style={{ maxWidth: 600 }}>
                        <h6 className="text-primary text-uppercase">Pricing Plan</h6>
                        <h1 className="display-5 text-uppercase mb-0">Competitive Pricing For Pet Services</h1>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-4">
                            <div className="bg-light text-center pt-5 mt-lg-5">
                                <h2 className="text-uppercase">Basic</h2>
                                <h6 className="text-body mb-5">The Best Choice</h6>
                                <div className="text-center bg-primary p-4 mb-2">
                                    <h1 className="display-4 text-white mb-0">
                                        <small className="align-top" style={{ fontSize: 22, lineHeight: 45 }}>$</small>49<small className="align-bottom" style={{ fontSize: 16, lineHeight: 40 }}>/
                                            Mo</small>
                                    </h1>
                                </div>
                                <div className="text-center p-4">
                                    <div className="d-flex align-items-center justify-content-between mb-1">
                                        <span>HTML5 &amp; CSS3</span>
                                        <i className="bi bi-check2 fs-4 text-primary" />
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mb-1">
                                        <span>Bootstrap v5</span>
                                        <i className="bi bi-check2 fs-4 text-primary" />
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mb-1">
                                        <span>Responsive Layout</span>
                                        <i className="bi bi-x fs-4 text-danger" />
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mb-1">
                                        <span>Browsers Compatibility</span>
                                        <i className="bi bi-x fs-4 text-danger" />
                                    </div>
                                    <a href className="btn btn-primary text-uppercase py-2 px-4 my-3">Order Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="bg-light text-center pt-5">
                                <h2 className="text-uppercase">Standard</h2>
                                <h6 className="text-body mb-5">The Best Choice</h6>
                                <div className="text-center bg-dark p-4 mb-2">
                                    <h1 className="display-4 text-white mb-0">
                                        <small className="align-top" style={{ fontSize: 22, lineHeight: 45 }}>$</small>99<small className="align-bottom" style={{ fontSize: 16, lineHeight: 40 }}>/
                                            Mo</small>
                                    </h1>
                                </div>
                                <div className="text-center p-4">
                                    <div className="d-flex align-items-center justify-content-between mb-1">
                                        <span>HTML5 &amp; CSS3</span>
                                        <i className="bi bi-check2 fs-4 text-primary" />
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mb-1">
                                        <span>Bootstrap v5</span>
                                        <i className="bi bi-check2 fs-4 text-primary" />
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mb-1">
                                        <span>Responsive Layout</span>
                                        <i className="bi bi-check2 fs-4 text-primary" />
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mb-1">
                                        <span>Browsers Compatibility</span>
                                        <i className="bi bi-x fs-4 text-danger" />
                                    </div>
                                    <a href className="btn btn-primary text-uppercase py-2 px-4 my-3">Order Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="bg-light text-center pt-5 mt-lg-5">
                                <h2 className="text-uppercase">Extended</h2>
                                <h6 className="text-body mb-5">The Best Choice</h6>
                                <div className="text-center bg-primary p-4 mb-2">
                                    <h1 className="display-4 text-white mb-0">
                                        <small className="align-top" style={{ fontSize: 22, lineHeight: 45 }}>$</small>149<small className="align-bottom" style={{ fontSize: 16, lineHeight: 40 }}>/
                                            Mo</small>
                                    </h1>
                                </div>
                                <div className="text-center p-4">
                                    <div className="d-flex align-items-center justify-content-between mb-1">
                                        <span>HTML5 &amp; CSS3</span>
                                        <i className="bi bi-check2 fs-4 text-primary" />
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mb-1">
                                        <span>Bootstrap v5</span>
                                        <i className="bi bi-check2 fs-4 text-primary" />
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mb-1">
                                        <span>Responsive Layout</span>
                                        <i className="bi bi-check2 fs-4 text-primary" />
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mb-1">
                                        <span>Browsers Compatibility</span>
                                        <i className="bi bi-check2 fs-4 text-primary" />
                                    </div>
                                    <a href className="btn btn-primary text-uppercase py-2 px-4 my-3">Order Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Pricing Plan End */}
        </div>

    )
}

export default Service