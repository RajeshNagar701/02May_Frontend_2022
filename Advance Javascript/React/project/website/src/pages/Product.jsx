import React from 'react'

function Product() {
    return (
        <>
            <div>
                {/* Products Start */}
                <div className="container-fluid py-5">
                    <div className="container">
                        <div className="mx-auto text-center mb-5" style={{ maxWidth: 500 }}>
                            <h6 className="text-primary text-uppercase">Products</h6>
                            <h1 className="display-5">Our Fresh &amp; Organic Products</h1>
                        </div>
                        <div className="owl-carousel product-carousel px-5">
                            <div className="pb-5">
                                <div className="product-item position-relative bg-white d-flex flex-column text-center">
                                    <img className="img-fluid mb-4" src="img/product-1.png" alt />
                                    <h6 className="mb-3">Organic Vegetable</h6>
                                    <h5 className="text-primary mb-0">$19.00</h5>
                                    <div className="btn-action d-flex justify-content-center">
                                        <a className="btn bg-primary py-2 px-3" href><i className="bi bi-cart text-white" /></a>
                                        <a className="btn bg-secondary py-2 px-3" href><i className="bi bi-eye text-white" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="pb-5">
                                <div className="product-item position-relative bg-white d-flex flex-column text-center">
                                    <img className="img-fluid mb-4" src="img/product-2.png" alt />
                                    <h6 className="mb-3">Organic Vegetable</h6>
                                    <h5 className="text-primary mb-0">$19.00</h5>
                                    <div className="btn-action d-flex justify-content-center">
                                        <a className="btn bg-primary py-2 px-3" href><i className="bi bi-cart text-white" /></a>
                                        <a className="btn bg-secondary py-2 px-3" href><i className="bi bi-eye text-white" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="pb-5">
                                <div className="product-item position-relative bg-white d-flex flex-column text-center">
                                    <img className="img-fluid mb-4" src="img/product-1.png" alt />
                                    <h6 className="mb-3">Organic Vegetable</h6>
                                    <h5 className="text-primary mb-0">$19.00</h5>
                                    <div className="btn-action d-flex justify-content-center">
                                        <a className="btn bg-primary py-2 px-3" href><i className="bi bi-cart text-white" /></a>
                                        <a className="btn bg-secondary py-2 px-3" href><i className="bi bi-eye text-white" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="pb-5">
                                <div className="product-item position-relative bg-white d-flex flex-column text-center">
                                    <img className="img-fluid mb-4" src="img/product-2.png" alt />
                                    <h6 className="mb-3">Organic Vegetable</h6>
                                    <h5 className="text-primary mb-0">$19.00</h5>
                                    <div className="btn-action d-flex justify-content-center">
                                        <a className="btn bg-primary py-2 px-3" href><i className="bi bi-cart text-white" /></a>
                                        <a className="btn bg-secondary py-2 px-3" href><i className="bi bi-eye text-white" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="pb-5">
                                <div className="product-item position-relative bg-white d-flex flex-column text-center">
                                    <img className="img-fluid mb-4" src="img/product-1.png" alt />
                                    <h6 className="mb-3">Organic Vegetable</h6>
                                    <h5 className="text-primary mb-0">$19.00</h5>
                                    <div className="btn-action d-flex justify-content-center">
                                        <a className="btn bg-primary py-2 px-3" href><i className="bi bi-cart text-white" /></a>
                                        <a className="btn bg-secondary py-2 px-3" href><i className="bi bi-eye text-white" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Products End */}
                {/* Features Start */}
                <div className="container-fluid bg-primary feature py-5 pb-lg-0 mt-5" style={{ marginBottom: 135 }}>
                    <div className="container py-5 pb-lg-0">
                        <div className="mx-auto text-center mb-3 pb-2" style={{ maxWidth: 500 }}>
                            <h6 className="text-uppercase text-secondary">Features</h6>
                            <h1 className="display-5 text-white">Why Choose Us!!!</h1>
                        </div>
                        <div className="row g-5">
                            <div className="col-lg-3">
                                <div className="text-white mb-5">
                                    <div className="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3" style={{ width: 60, height: 60 }}>
                                        <i className="fa fa-seedling fs-4 text-white" />
                                    </div>
                                    <h4 className="text-white">100% Organic</h4>
                                    <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita</p>
                                </div>
                                <div className="text-white">
                                    <div className="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3" style={{ width: 60, height: 60 }}>
                                        <i className="fa fa-award fs-4 text-white" />
                                    </div>
                                    <h4 className="text-white">Award Winning</h4>
                                    <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="d-block bg-white h-100 text-center p-5 pb-lg-0">
                                    <p>At et justo elitr amet sea at. Magna et sit vero at ipsum sit et dolores rebum. Magna sea eos sit dolor, ipsum amet no tempor ipsum eirmod lorem eirmod diam tempor dolor eos diam et et diam dolor ea. Clita est rebum amet dolore sit. Dolor stet dolor duo clita, vero dolor ipsum amet dolore magna lorem erat stet sed vero dolor</p>
                                    <img className="img-fluid" src="img/feature.png" alt />
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="text-white mb-5">
                                    <div className="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3" style={{ width: 60, height: 60 }}>
                                        <i className="fa fa-tractor fs-4 text-white" />
                                    </div>
                                    <h4 className="text-white">Modern Farming</h4>
                                    <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita</p>
                                </div>
                                <div className="text-white">
                                    <div className="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3" style={{ width: 60, height: 60 }}>
                                        <i className="fa fa-phone-alt fs-4 text-white" />
                                    </div>
                                    <h4 className="text-white">24/7 Support</h4>
                                    <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Features Start */}
            </div>

        </>
    )
}

export default Product