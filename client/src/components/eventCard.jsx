import React from "react";
import {Link} from "react-router-dom"
import "./event.css"
import EventImage from "./event.jpeg"

function EventCard(props){

    return(
  
            <div className="EventCardContent">
                <div className="EventImage">
                    <div className="registrationFess">
                        <p>₹{props.eventInfo.price}</p>
                    </div>
                    <img src={props.eventInfo.thumnailsURL}/>
                </div>
                <div className="card-content">
                <span className="EventTime">{props.eventInfo.time}</span>
                <span class="card-title">{props.eventInfo.title}</span>
                <i class="fas fa-map-marker-alt"></i><span className="Eventlocation">{props.eventInfo.venu}</span>
                </div>
            </div>
    )
}


export default EventCard;