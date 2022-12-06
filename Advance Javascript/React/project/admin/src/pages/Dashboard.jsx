import React from 'react'
import Header from '../component/Header'
function Dashboard() {
    return (
        <section className="wrapper scrollable">
            <Header />
            <div className="main-grid">
                <div className="social grid">
                    <div className="grid-info">
                        <div className="col-md-3 top-comment-grid">
                            <div className="comments likes">
                                <div className="comments-icon">
                                    <i className="fa fa-facebook" />
                                </div>
                                <div className="comments-info likes-info">
                                    <h3>95K</h3>
                                    <a href="#">Likes</a>
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                        <div className="col-md-3 top-comment-grid">
                            <div className="comments">
                                <div className="comments-icon">
                                    <i className="fa fa-comments" />
                                </div>
                                <div className="comments-info">
                                    <h3>12K</h3>
                                    <a href="#">Comments</a>
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                        <div className="col-md-3 top-comment-grid">
                            <div className="comments tweets">
                                <div className="comments-icon">
                                    <i className="fa fa-twitter" />
                                </div>
                                <div className="comments-info tweets-info">
                                    <h3>27K</h3>
                                    <a href="#">Tweets</a>
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                        <div className="col-md-3 top-comment-grid">
                            <div className="comments views">
                                <div className="comments-icon">
                                    <i className="fa fa-eye" />
                                </div>
                                <div className="comments-info views-info">
                                    <h3>557K</h3>
                                    <a href="#">Views</a>
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                </div>
                <div className="agile-grids">
                    <div className="col-md-4 charts-right">
                        {/* area-chart */}
                        <div className="area-grids">
                            <div className="area-grids-heading">
                                <h3>Area charts</h3>
                            </div>
                            <div id="graph4" />
                        </div>
                        {/* //area-chart */}
                    </div>
                    <div className="col-md-8 chart-left">
                        {/* updating-data */}
                        <div className="agile-Updating-grids">
                            <div className="area-grids-heading">
                                <h3>Updating data</h3>
                            </div>
                            <div id="graph1" />
                        </div>
                        {/* //updating-data */}
                    </div>
                    <div className="clearfix"> </div>
                </div>
                <div className="agile-bottom-grids">
                    <div className="col-md-6 agile-bottom-right">
                        <div className="agile-bottom-grid">
                            <div className="area-grids-heading">
                                <h3>Stacked Bars chart</h3>
                            </div>
                            <div id="graph6" />
                        </div>
                    </div>
                    <div className="col-md-6 agile-bottom-left">
                        <div className="agile-bottom-grid">
                            <div className="area-grids-heading">
                                <h3>Stacked Bars chart</h3>
                            </div>
                            <div id="graph5" />
                        </div>
                    </div>
                    <div className="clearfix"> </div>
                </div>
                <div className="agile-last-grids">
                    <div className="col-md-4 agile-last-left">
                        <div className="agile-last-grid">
                            <div className="area-grids-heading">
                                <h3>Daylight savings time</h3>
                            </div>
                            <div id="graph7" />
                        </div>
                    </div>
                    <div className="col-md-4 agile-last-left agile-last-middle">
                        <div className="agile-last-grid">
                            <div className="area-grids-heading">
                                <h3>Daylight savings time</h3>
                            </div>
                            <div id="graph8" />
                        </div>
                    </div>
                    <div className="col-md-4 agile-last-left agile-last-right">
                        <div className="agile-last-grid">
                            <div className="area-grids-heading">
                                <h3>Daylight savings time</h3>
                            </div>
                            <div id="graph9" />
                        </div>
                    </div>
                    <div className="clearfix"> </div>
                </div>
                <div className="agile-two-grids">
                    <div className="col-md-6 count">
                        <div className="count-grid">
                            <h3 className="title">Countdown</h3>
                            <ul id="example">
                                <li><span className="hours">00</span><p className="hours_text">Hours</p></li>
                                <li className="seperator">:</li>
                                <li><span className="minutes">00</span><p className="minutes_text">Minutes</p></li>
                                <li className="seperator">:</li>
                                <li><span className="seconds">00</span><p className="seconds_text">Seconds</p></li>
                            </ul>
                            <div className="clearfix"> </div>
                        </div>
                    </div>
                    <div className="col-md-6 weather">
                        <div className="weather-right">
                            <div className="weather-heading">
                                <h3>Weather Report</h3>
                            </div>
                            <ul>
                                <li>
                                    <figure className="icons">
                                        <canvas id="partly-cloudy-day" width={60} height={60} />
                                    </figure>
                                    <h3>25 °C</h3>
                                    <div className="clearfix" />
                                </li>
                                <li>
                                    <figure className="icons">
                                        <canvas id="clear-day" width={40} height={40} />
                                    </figure>
                                    <div className="weather-text">
                                        <h4>WED</h4>
                                        <h5>27 °C</h5>
                                    </div>
                                    <div className="clearfix" />
                                </li>
                                <li>
                                    <figure className="icons">
                                        <canvas id="snow" width={40} height={40} />
                                    </figure>
                                    <div className="weather-text">
                                        <h4>THR</h4>
                                        <h5>13 °C</h5>
                                    </div>
                                    <div className="clearfix" />
                                </li>
                                <li>
                                    <figure className="icons">
                                        <canvas id="partly-cloudy-night" width={40} height={40} />
                                    </figure>
                                    <div className="weather-text">
                                        <h4>FRI</h4>
                                        <h5>18 °C</h5>
                                    </div>
                                    <div className="clearfix" />
                                </li>
                                <li>
                                    <figure className="icons">
                                        <canvas id="cloudy" width={40} height={40} />
                                    </figure>
                                    <div className="weather-text">
                                        <h4>SAT</h4>
                                        <h5>15 °C</h5>
                                    </div>
                                    <div className="clearfix" />
                                </li>
                                <li>
                                    <figure className="icons">
                                        <canvas id="fog" width={40} height={40} />
                                    </figure>
                                    <div className="weather-text">
                                        <h4>SUN</h4>
                                        <h5>11 °C</h5>
                                    </div>
                                    <div className="clearfix" />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="clearfix"> </div>
                </div>
            </div>
            {/* footer */}
            <div className="footer">
                <p>© 2016 Colored . All Rights Reserved . Design by <a href="http://w3layouts.com/">W3layouts</a></p>
            </div>
            {/* //footer */}
        </section>
    )
}

export default Dashboard