import React from 'react'

function Index() {
    return (

        <div className="agile-signup">
            <div className="content2">
                <div className="grids-heading gallery-heading signup-heading">
                    <h2>Admin Login</h2>
                </div>
                <form action="." method="post">
                    <input type="text" name="Username" defaultValue="Username" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Username';}" />
                    <input type="password" name="Password" defaultValue="Password" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Password';}" />
                    <input type="submit" className="register" defaultValue="Login" />
                </form>
                <div className="signin-text">
                    <div className="text-left">
                        <p><a href="#"> Forgot Password? </a></p>
                    </div>
                    <div className="text-right">
                        <p><a href="signup.html"> Create New Account</a></p>
                    </div>
                    <div className="clearfix"> </div>
                </div>
                <h5>- OR -</h5>
                <div className="footer-icons">
                    <ul>
                        <li><a href="#" className="twitter"><i className="fa fa-twitter" /></a></li>
                        <li><a href="#" className="twitter facebook"><i className="fa fa-facebook" /></a></li>
                        <li><a href="#" className="twitter chrome"><i className="fa fa-google-plus" /></a></li>
                        <li><a href="#" className="twitter dribbble"><i className="fa fa-dribbble" aria-hidden="true" /></a></li>
                    </ul>
                </div>
                <a href="index.html">Back To Home</a>
            </div>
            {/* footer */}
            <div className="copyright">
                <p>© 2016 Colored . All Rights Reserved . Design by <a href="http://w3layouts.com/">W3layouts</a></p>
            </div>
            {/* //footer */}
        </div>


    )
}

export default Index