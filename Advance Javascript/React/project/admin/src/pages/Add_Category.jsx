import React from 'react'
import Header from '../component/Header'

function Add_Category() {
    return (
        <div>
            <section className="wrapper scrollable">
                <Header/>
                <div className="main-grid">
                    <div className="agile-grids">
                        {/* validation */}
                        <div className="grids">
                            <div className="progressbar-heading grids-heading">
                                <h2>Validation Forms</h2>
                            </div>
                            <div className="forms-grids">
                                <div className="w3agile-validation">
                                    <div className="panel panel-widget agile-validation">
                                        <div className="my-div">
                                            <form method="post" action="#" className="valida" autoComplete="off" noValidate="novalidate">
                                                <div className="input-info">
                                                    <h3>Input Texts:</h3>
                                                </div>
                                                <label htmlFor="field-1">Field 1.1: (required)&nbsp;<span className="at-required-highlight">*</span></label>
                                                <div className="form-group">
                                                    <input type="text" name="field-1" id="field-1" required="true" className="form-control" />
                                                </div>
                                                <label htmlFor="field-1-2">Field 1.2: (not required, filter: date)</label>
                                                <div className="form-group">
                                                    <input type="text" name="field-1-2" id="field-1-2" filter="date" className="form-control" data-invalid="Given value must be a valid date formated as 0000-00-00" />
                                                </div>
                                                <label htmlFor="field-1-3">Field 1.3: (required, filter: greater_than:10|less_than:15)&nbsp;<span className="at-required-highlight">*</span></label>
                                                <div className="form-group">
                                                    <input type="text" name="field-1-3" id="field-1-3" required="true" filter="greater_than:10|less_than:15" className="form-control" data-required="Given value must be between 10 and 15" />
                                                </div>
                                                <div className="row">
                                                    <div className="col-xs-12 col-sm-5">
                                                        <label htmlFor="field-1-2">Field 1.4.1: (required, filter: email)</label>
                                                        <div className="form-group">
                                                            <input type="text" name="field-1-4-1" id="field-1-4-1" filter="email" className="form-control" required="true" data-invalid="Must be a valid email address" />
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-12 col-sm-7">
                                                        <label htmlFor="field-1-2">Field 1.4.2: (required, filter: email|matches:field-1-4-1)</label>
                                                        <div className="form-group">
                                                            <input type="text" name="field-1-4-2" id="field-1-4-2" filter="email|matches:field-1-4-1" className="form-control" required="true" data-invalid="Must be a valid email address and match field 1.4.1's value" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr />
                                                <h4>SELECTS:</h4>
                                                <label htmlFor="field-2">Field 2: (required)&nbsp;<span className="at-required-highlight">*</span></label>
                                                <div className="form-group">
                                                    <select name="field-2" id="field-2" required="true" className="form-control">
                                                        <option value />
                                                        <option value="val-1">Value 1</option>
                                                        <option value="val-2">Value 2</option>
                                                    </select>
                                                </div>
                                                <hr />
                                                <h4>TEXTAREAS:</h4>
                                                <label htmlFor="field-4">Field 4.1: (required)&nbsp;<span className="at-required-highlight">*</span></label>
                                                <div className="form-group">
                                                    <textarea name="field-4" id="field-4" required="true" className="form-control" defaultValue={""} />
                                                </div>
                                                <label htmlFor="field-4-2">Field 4.2: (required, maxlength: 10)&nbsp;<span className="at-required-highlight">*</span></label>
                                                <div className="form-group">
                                                    <textarea name="field-4-2" id="field-4-2" required="true" maxLength={10} className="form-control" defaultValue={""} /><div className="help-block at-description">Typed <span className="at-counter">0</span> of 10</div>
                                                </div>
                                                <hr />
                                                <p>
                                                    <input type="submit" name="sub-1" defaultValue="Submit" className="btn btn-primary" />
                                                    <input type="reset" name="res-1" id="res-1" defaultValue="Reset" className="btn btn-danger" />
                                                    <input type="button" name="but-1" defaultValue="Button 1" className="btn btn-default" />
                                                </p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="w3agile-validation w3ls-validation">
                                    <div className="panel panel-widget agile-validation">
                                        <div className="validation-grids widget-shadow" data-example-id="basic-forms">
                                            <div className="input-info">
                                                <h3>Register Form :</h3>
                                            </div>
                                            <div className="form-body form-body-info">
                                                <form data-toggle="validator" noValidate="true" action="#" method="post">
                                                    <div className="form-group valid-form">
                                                        <input type="text" className="form-control" id="inputName" placeholder="Username" required />
                                                    </div>
                                                    <div className="form-group has-feedback">
                                                        <input type="email" className="form-control" id="inputEmail" placeholder="Email" data-error="Bruh, that email address is invalid" required />
                                                        <span className="glyphicon form-control-feedback" aria-hidden="true" />
                                                        <span className="help-block with-errors">Please enter a valid email address</span>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="password" data-toggle="validator" data-minlength={6} className="form-control" id="inputPassword" placeholder="Password" required />
                                                        <span className="help-block">Minimum of 6 characters</span>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="password" className="form-control" id="inputPasswordConfirm" data-match="#inputPassword" data-match-error="Whoops, these don't match" placeholder="Confirm password" required />
                                                        <div className="help-block with-errors" />
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="radio">
                                                            <label>
                                                                <input type="radio" name="gender" required />
                                                                Female
                                                            </label>
                                                        </div>
                                                        <div className="radio">
                                                            <label>
                                                                <input type="radio" name="gender" required />
                                                                Male
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="checkbox">
                                                            <label>
                                                                <input type="checkbox" id="terms" data-error="Before you wreck yourself" required />
                                                                I have read and accept terms of use.
                                                            </label>
                                                            <div className="help-block with-errors" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <button type="submit" className="btn btn-primary disabled">Submit</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-widget agile-validation">
                                        <div className="validation-grids validation-grids-right">
                                            <div className="widget-shadow login-form-shadow" data-example-id="basic-forms">
                                                <div className="input-info">
                                                    <h3>Login form :</h3>
                                                </div>
                                                <div className="form-body form-body-info">
                                                    <form data-toggle="validator" noValidate="true" action="#" method="post">
                                                        <div className="form-group has-feedback">
                                                            <input type="email" className="form-control" id="inputEmail" placeholder="Enter Your Email" data-error="Bruh, that email address is invalid" required />
                                                            <span className="glyphicon form-control-feedback" aria-hidden="true" />
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="password" data-toggle="validator" data-minlength={6} className="form-control" id="inputPassword" placeholder="Password" required />
                                                        </div>
                                                        <div className="bottom">
                                                            <div className="form-group">
                                                                <div className="checkbox">
                                                                    <label>
                                                                        <input type="checkbox" id="terms" data-error="Before you wreck yourself" required />
                                                                        Remember me
                                                                    </label>
                                                                    <div className="help-block with-errors" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <button type="submit" className="btn btn-primary disabled">Login</button>
                                                            </div>
                                                            <div className="clearfix"> </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-widget agile-validation w3ls-validate">
                                        <div className="inline-form widget-shadow agile-widget-shadow">
                                            <div className="input-info">
                                                <h3>Recover form :</h3>
                                            </div>
                                            <div className="form-body form-body-info">
                                                <form data-toggle="validator" noValidate="true" action="#" method="post">
                                                    <div className="form-group has-feedback">
                                                        <input type="email" className="form-control" id="inputEmail" placeholder="Email" data-error="Bruh, that email address is invalid" required />
                                                        <span className="glyphicon form-control-feedback" aria-hidden="true" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" data-toggle="validator" data-minlength={6} className="form-control" id="inputPassword" placeholder="Enter your phone number" required />
                                                    </div>
                                                    <div className="bottom">
                                                        <div className="form-group recover-button">
                                                            <button type="submit" className="btn btn-primary disabled">Login</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                        {/* //validation */}
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

export default Add_Category