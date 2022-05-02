import React from "react"

export default class Fetch extends React.Component{

  constructor(){
    super();
    this.state={
      user:[]
    }
  }
  componentDidMount(){
    fetch("https://reqres.in/api/users?page=2")
    .then((response)=>(response.json()))
    .then((result)=>{
      console.log(result.data)
      this.setState({
        user:result.data
      })
    })
  }
  render(){
    return(
     <div>
       <h1>Fetch Function</h1>

       {this.state.user.map((u,i)=>{
         return(
           <div key={i}>
             <h1>email:{u.email}</h1>
           </div>
         )
       })}
     </div>
    )
  }
}
