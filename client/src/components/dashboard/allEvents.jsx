import React,{useEffect,useState} from "react";
import {Link,Redirect} from "react-router-dom"
import "./dashboard.css"
import axios from "axios"
import EventCard from "../eventCard"

function AllEvents(props){
    const [event,setEvents]=useState([])

    const logOut=()=>{
        localStorage.removeItem("userIdUnievent");
        localStorage.removeItem("uniEventAuthenticated")
    }
    const loadEvents=async()=>{
        const data = await axios.post("/v1/event/user_event",{organizerId:localStorage.getItem("userIdUnievent")})
        setEvents(data.data)
        console.log(data.data)
    }   
    

    useEffect(()=>{
        loadEvents()
    },[])
    return(
        <div className="dahsbordGrid">
        <div className="DashboardMenu">
            <Link to ="/dashboard">Create Event</Link>
            <Link to ="/dashboard/allEvents">Your Events</Link>
            <Link onClick={logOut}>Logout</Link>
        </div>

        <div className="grid-4">
            {
                (event.length!=0? event.map((item,index)=>{
                    return(<Link to={`/dashboard/registeredStudent/${item._id}`}><EventCard key={index} eventInfo={item}/></Link>)
                }):<h1 className="noEvent">Opps, you don't have any event</h1>)
               
            }
        </div>
        

    </div>
    )
}

export default AllEvents