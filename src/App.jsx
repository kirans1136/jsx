import React, { Component } from 'react'
import School from './States/School.jsx';
import JSON from "./States/School.json"
export default class App extends Component {
  constructor(){
    super()
    this.state={
      json:JSON
    }
  }
  render() 
   {
    return (
      <div>
       <School data={this.state.json}/>
      </div>
    )
  }
}