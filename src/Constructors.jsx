import React,{Component} from 'react'
class App extends Component
{
  constructor()
  {
    super()
    this.state={
      topic:"React  js",
      skills:["HTML","CSS","JAVA SCRIPT"]
    }
  }

  render(){
    return(
      <>
    <h1>{this.state.topic}</h1>
    <ul>
    {this.state.skills.map((x)=>{
      return <li>{x}</li>
    })}
    </ul>
      </>
    )
  }
}

export default App