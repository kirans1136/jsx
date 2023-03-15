import React, { Component } from 'react'

export default class App extends Component {

  constructor(){
    super()
    this.state={
      username:"Name",
      count:0
    }
  }
  handleChange=()=>{
    this.setState({username:"kiran"})
  }
  handleNumberChange=()=>{
    this.setState({count:1})

  }
  render() {
    return (
      <div>
        <h1>{this.state.username}</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleChange}>click to change</button>
        <button onClick={this.handleNumberChange}>change the Number</button>
      </div>
    )
  }
}
