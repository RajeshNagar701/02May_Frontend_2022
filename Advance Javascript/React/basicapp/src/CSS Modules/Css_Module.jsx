import React from 'react'
import mystyle from './style.module.css'

function Css_Module() {
  return (
    <div>
         {/* external component module.css style in jsx */}
       <h1 className={mystyle.bigblue}>Hello module.css style </h1>
       <h1 className="bigblue">Hello</h1> 
    </div>
  )
}

export default Css_Module