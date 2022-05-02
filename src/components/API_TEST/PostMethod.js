import React,{useState} from "react"

export default function PostMethod(){
  const[user,setUser]=useState({email:"",password:""})

  const handleEmail=(event)=>{
    setUser({
      ...user,
      email:event.target.value
    })
  } //email:"suprava@gmail.com", password:""
  const handlePassword=(event)=>{
    setUser({
      ...user,
      password:event.target.value
    })
  } //email:"suprava@gmail.com", password:"asdf"

  const handleClick=()=>{
    fetch("https://reqres.in/api/login",{
      method:"POST",
      headers:{
        "Accept":"application/json",
        "Content-type":"application/json"
      },
      body:JSON.stringify({
        email:user.email,
        password:user.password
      })
    })
    .then((response)=>(response.json()))
    .then((result)=>{
      console.log(result)
    })
  }
  return(
    <div>
      <input type="text" onChange={handleEmail}/>
      <input type="text" onChange={handlePassword}/>
      <button onClick={handleClick}>LOGIN</button>
      <h1>Email:{user.email}</h1>
      <h1>Password:{user.password}</h1>
    </div>
  )
}