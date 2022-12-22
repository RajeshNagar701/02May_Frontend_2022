import React from 'react'

function Testimonial() {
    return (
        <div>
            {/* Testimonial Start */}
            <div className="container-fluid bg-testimonial py-5" style={{ margin: '90px 0' }}>
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
        </div>

    )
}

export default Testimonial