import React from "react";
import {Link,Redirect} from "react-router-dom"
import CreateEvent from "../../pages/createEvent"
import "./dashboard.css"

function Dashboard(props){
    const logOut=()=>{
        localStorage.removeItem("userIdUnievent");
        localStorage.removeItem("uniEventAuthenticated")
    }
    if(localStorage.getItem("uniEventAuthenticated")==="true"){
        return(<div className="dahsbordGrid">
        <div className="DashboardMenu">
            <Link to ="/dashboard">Create Event</Link>
            <Link to ="/dashboard/allEvents">Your Events</Link>
            <Link onClick={logOut}>Logout</Link>
        </div>
        <CreateEvent/>

    </div>)
    }else{
        return(<Redirect to="/login"/>)
    }
}


export default Dashboard;