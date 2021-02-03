import React,{useState} from "react"
import {Link,Redirect} from "react-router-dom"
import Menu from "../components/Menu/menu"
import axios from "axios";

import "./page.css"
function Login(props){
    const [alert,setAlert]=useState({})

    const loginCheck=async(e)=>{
        e.preventDefault()
        let info={
            email:e.target.email.value,
            password:e.target.password.value
        }
        const userCreation = await axios.post("/v1/users/login",info)
        console.log(userCreation.data)
        
        if(userCreation.data.status===0){
            setAlert({message:userCreation.data.message,className:"danger"})
        }else{
            // setAlert({message:"Your account has been created.",className:"sucess"})
            localStorage.setItem("userIdUnievent",userCreation.data.user._id)
            localStorage.setItem("uniEventAuthenticated","true")

            setTimeout(()=>{
                props.history.push('/dashboard')
            },1000)
        }

    }

    if(localStorage.getItem("uniEventAuthenticated")==="true"){
        // props.history.push('/dashboard')
        return(
            <Redirect to="/dashboard"/>
        )
    }else{
        return(
            <form className="RegistrationFrom" onSubmit={loginCheck}>
                <h1>Let's get started</h1>
                <p className={alert.className}>{alert.message}</p>
    
                <input type="email" name="email" placeholder="Email Address" required/>
                <input type="password" name="password" placeholder="Password" required/>
                <input type="submit" value="Sign In"/>
                
            </form>
        )
    }
   
}

export default Login;