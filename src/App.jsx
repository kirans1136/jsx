import React, { Component } from 'react'
import "./Counterapplication/count.css"

export default class App extends Component {
  constructor(){
    super()
    this.state={
      count:0
    }
  }
  handleIncrement=()=>{
    this.setState({count:this.state.count+1})
  }
  handleDecrement=()=>{
    this.setState({count:this.state.count-1})
  }
  handleReset=()=>{
    this.setState({count:0})
   }
  render() {
    return (
      <div className='num'>
        <h2><u>COUNTER   APPLICATION</u></h2>
        <h1>{this.state.count}</h1>
        <div className='btn'>
          <button onClick={this.handleIncrement}>+ Increment</button>
          <button onClick={this.handleDecrement}>- Decrement</button>
          <button onClick={this.handleReset}>RESET</button>
        </div>
      </div>
    )
  }
}
