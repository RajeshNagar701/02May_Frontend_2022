import React from 'react'
import Header from './Comp/Header'
import Footer from './Comp/Footer';

function Index() {
  return (
    <div class="container-fluid">
        <Header/>
            <div className="row">
                <div className="col-md-4 side">
                    <h2>About Me</h2>
                    <h5>Photo of me:</h5>
                    <div className="fakeimg"><img src="img/img1.jpg" width="100%" /></div>
                    <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
                    <h3>More Text</h3>
                    <p>Lorem ipsum dolor sit ame.</p>
                    <div className="fakeimg"><img src="img/img2.jpg" width="100%" /></div><br />
                    <div className="fakeimg"><img src="img/img3.jpg" width="100%" /></div><br />
                    <div className="fakeimg"><img src="img/img4.jpg" width="100%" /></div>
                </div>
                <div className="col-md-8 main">
                    <h2>TITLE HEADING</h2>
                    <h5>Title description, Dec 7, 2017</h5>
                    <div className="fakeimg"><img src="img/img5.jpg" width="100%" /></div>
                    <p>Some text..</p>
                    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    <br />
                    <h2>TITLE HEADING</h2>
                    <h5>Title description, Sep 2, 2017</h5>
                    <div className="fakeimg"><img src="img/img1.jpg" width="100%" /></div>
                    <p>Some text..</p>
                    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>
            </div>
        <Footer/>    
    </div>
  )
}

export default Index