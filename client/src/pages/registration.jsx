import React,{useState} from "react"
import {Link,Redirect} from "react-router-dom"
import axios from "axios"
import "./page.css"
function Registration(props){
    const [alert,setAlert]=useState({})
    const createUser = async (e)=>{
        e.preventDefault()
        let firstName=e.target.firstName.value;
        let lastName=e.target.lastName.value;
        let email=e.target.email.value;
        let nameOfOrganization=e.target.nameOfOrganization.value;
        let aboutOrganization=e.target.aboutOrganization.value;
        let password=e.target.password.value;
        
        let user = {
            firstName,
            lastName,
            email,
            nameOfOrganization,
            aboutOrganization,
            password
        }
        const userCreation = await axios.post("/v1/users/signup",user)
        console.log(userCreation.data)
        
        if(userCreation.data.status===0){
            setAlert({message:userCreation.data.message,className:"danger"})
        }else{
            setAlert({message:"Your account has been created.",className:"sucess"})
            setTimeout(()=>{
                props.history.push('/login')
            },1000)
        }
    }

    return(

        <form className="RegistrationFrom" onSubmit={createUser}>
            <i class="far fa-user-circle"></i>
            <h1>Welcome</h1>
            <p>Create an Acccount to get started</p>
            <p className={alert.className}>{alert.message}</p>
            <div className="grid-2">
                <input type="text" name="firstName" placeholder="First Name" required/>
                <input type="text" name="lastName" placeholder="Last Name" required/>
            </div>
            <input type="email" name="email" placeholder="Email Address" required/>
            <input type="text" name="nameOfOrganization" placeholder="Name of the Organization" required/>
            {/* <input type="text" name="aboutOrganization" placeholder="About the Organizaton"/> */}
            <textarea name="aboutOrganization" placeholder="About Organization" required></textarea>


            <input type="password" name="password" placeholder="Password" required/>
            <input type="submit" value="Sign Up" required/>
           <Link to="/login"><p>Log In instead</p></Link> 
            
        </form>)
}

export default Registration;