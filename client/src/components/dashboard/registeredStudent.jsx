import React,{useEffect,useState} from "react";
import axios from "axios"

function RegistreeStudent(props){
    const [event,setEvents]=useState([])
    
    const loadEvents=async()=>{
        const data = await axios.post("/v1/event/getRegisterInfo",{eventId:props.match.params.id})
        setEvents(data.data)
    }  
    const deletEvent=async()=>{
        const data = await axios.post("/v1/event/deleteEvent",{eventId:props.match.params.id})
        window.location.href="/dashboard/allEvents"
    }
    useEffect(()=>{
        loadEvents()
    },[]) 
    return(
        <div className="container">
            <br/>
            <a href="/dashboard/allEvents">back</a>
 
            <br/>

            <h4>{`${event.length} Students Register in this Event`}</h4>
            <hr/>
            <br/>
            {event.map((item,index)=>{
                return(
                    <div key={index}>
                    <p>{item.studentName}</p>
                    <p>{item.registrationNo}</p>
                    <p>{item.mobile}</p>
                    <p>{item.schoolName}</p>
                    <p>{item.email}</p>

                    <hr/>
                    </div>
                    
                )
            })}

            <button className="btn btn-danger" onClick={deletEvent}>Delete</button>
        </div>
    )
}
export default RegistreeStudent