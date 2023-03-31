import React, { Component } from 'react'
export default class App extends Component {
  constructor(){
    super()
    this.state={
      username:"name"
    }
  }
  componentDidMount()
  {
  let btn = document.querySelector("button")
btn.addEventListener('click',()=>{
  this.setState({username:this.state.username="kiran"})
})
}
  render() {
    return (
      <>
      <div>{this.state.username}</div>
      <button>Submit</button>
      </>
    )
  }
}
