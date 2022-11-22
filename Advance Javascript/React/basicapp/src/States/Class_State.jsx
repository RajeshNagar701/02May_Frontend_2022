import React, { Component } from 'react'

export default class Class_State extends Component {

    constructor()
    {
        super();
        this.state={
            name:"Rajesh",
            age:33,
            qty:1,
            image:true
        }
    }


  render() {
    return (
      <div>
            <button onClick={()=>{this.setState({name:"Akash",age:34})}}>Change State</button>
            <h1>My name is {this.state.name} and my age is {this.state.age}</h1>
            <hr />
            <button onClick={()=>{this.setState({qty:this.state.qty+1})}}>+</button>
            <h1>{this.state.qty}</h1>
            <button onClick={()=>{this.setState({qty:this.state.qty-1})}}>-</button>
            <hr />
            <button onClick={()=>{this.setState({image:false})}}>Hide</button>
            <button onClick={()=>{this.setState({image:true})}}>Show</button>
            <button onClick={()=>{this.setState({image:!this.state.image})}}>Hide/Show</button>
            <br/>
            <br/>
            {this.state.image? <img src="https://images.news18.com/ibnlive/uploads/2021/08/sachin-tendulkar-52-16287387964x3.jpg" alt="" width="100px" height="100px" /> : null}
            
            
      </div>
    )
  }
}
