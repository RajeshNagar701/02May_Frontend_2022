import React, { Component } from 'react'

export class Class_Props extends Component {

constructor(props){
    super(props);
    this.props=props;
}
    

  render() {
    return (
      <div><h1>My name is {this.props.name} and my age is {this.props.age}</h1></div>
    )
  }
}

export default Class_Props