import React from 'react'
import './style.css'


function Main_JSX() {
  var name="Rajesh";

  var html=<h1>Hi i am html in jsx</h1>;
  const myelement = (
    <ul>
      <li>Apples</li>
      <li>Bananas</li>
      <li>Cherries</li>
    </ul>
  );
  const myelement1 = (
    <div>
      <h1>I am a Header.</h1>
      <h1>I am a Header too.</h1>
    </div>
  );

  const myinput = <input type="text" />;
  
  const mystyle={fontSize:"20px", color:"red"}


    return (
    <div>
        {name}
        {html}
        {10+10}
        {myelement}
        {myelement1}
        {myinput}
        {myinput}
        {myinput}

        {/* style in jsx */}
        <h1 style={{color: 'red'}}>Hi i am inline css</h1>
        <h1 style={mystyle}>Hi i am inline css</h1>

        {/* external component style in jsx */}
       <h1 className="bigblue">Hello</h1>

         {/* external style from Public index.html style in jsx */}
       <h1 className="pulicstyle">Public Style Hello</h1>
    </div>
  ) 
}

export default Main_JSX