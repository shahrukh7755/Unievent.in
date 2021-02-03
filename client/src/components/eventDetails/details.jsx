import React,{useState,useEffect} from "react";
import axios from "axios"
import "./eventDetails.css"
import {Link} from "react-router-dom"
import EventCard from "../eventCard"
import { Dropdown } from 'react-bootstrap';
import moment from "moment"




function EventDetails(props){
    const [eventData,setEventData]=useState({})
    const [org,setOrg]=useState({})
    const [alert,setAlert]=useState("")


    const getEventDetails = async()=>{
        const eventInfo = await axios.post("/v1/event/viewEvent/",{eventId:props.match.params.eventId})
        setEventData(eventInfo.data)
        setOrg(eventInfo.data.organizer)
    }
    const Register=async(e)=>{
        e.preventDefault()
        let studentName=e.target.studentName.value;
        let email=e.target.email.value;
        let registrationNo=e.target.registrationNo.value;
        let mobile=e.target.mobile.value;
        let schoolName=e.target.schoolName.value;
        let eventId=e.target.eventId.value
        
        let data ={
            studentName,
            email,
            registrationNo,
            mobile,
            schoolName,
            eventId
        }

        console.log(data)

        let output=await axios.post("/v1/event/eventRegister",data)
        console.log(output)
        if(output.data.status===0){
            setAlert(output.data.message)
        }
        if(output.data.status===1){
            setAlert(output.data.message)
        }



    }
    useEffect(()=>{
        getEventDetails()
    },[])

    
    return(<div className="eventDetails">
        <div className="eventContenter container">

            <div className="eventBannerContent ">
                <img src={eventData.thumnailsURL} />
            </div>
            <div className="eventInfo">
                <div>
                <i class="fas fa-user-alt"></i>
                    <p className="eventInfoTitile">Organzied By</p>
                    <p className="">{org.nameOfOrganization}</p>
                </div>
                <div>
                    <i class="fas fa-calendar-alt"></i>
                    <p className="eventInfoTitile">Time and Date</p>
                    <p>{moment(eventData.date).format("YYYY-MM-DD")}<br/>
                    {eventData.time}</p>
                </div>
                <div>
                <i class="fas fa-map-marked-alt"></i>
                    <p className="eventInfoTitile">Venu</p>
                    <p>{eventData.venu}</p>
                
                </div>
                <div class="register">
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic" className="registerBtn" >
                            Register
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <form className="registerForm" onSubmit={Register}>
                                <h4>Fill the form for Registartion</h4>
                                <input type="text" placeholder="Enter name" name="studentName"/>
                                <input type="email" placeholder="Enter Email" name="email"/>
                                <input type="text" placeholder="Enter Registration Number" name="registrationNo"/>
                                <input type="text" placeholder="Enter Mobile Number " name="mobile"/>
                                <input type="text" placeholder="Enter School Name " name="schoolName"/>
                                <input type="hidden" name="eventId" value={props.match.params.eventId}/>
                                <input type="submit" className="registerBtn" value="Sumbit"/>
                                {alert?<p>{alert}</p>:null}


                            </form>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

            </div>

            <div className="eventContent">
                <h1>Description</h1>
                <p>{eventData.description}</p>
            </div>

            <div className="eventContent">
                <h1>About Organizer</h1>
                {org.aboutOrganization}
            </div>

            {/* <div className="eventContent">
                <h1>Other Events by the Organizer</h1>
                <div className="otherEvents">
                {data.map((item,index)=>{
                return(
                    <Link to="/eventDetails"> <EventCard key={index} eventInfo={item}/></Link>
                )
            })}  
                </div>
            </div> */}
       
       
           

        </div>
    
    </div>)
}

export default EventDetails;