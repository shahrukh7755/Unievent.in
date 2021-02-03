import React,{useReducer,useState} from "react";
import axios from "axios";
import EventContent from "./eventContext";
import EventReducer from "./EventReducer"

const EventState=(props)=>{

    const initialState={
        events=[],
        loading:false
    }
    // Get All Events;
    const getAllEvents=()=>dispatch({type:"GET_ALL_EVENTS"})

    const [state,dispatch]=useReducer(EventReducer,initialState);

    return <EventContent.Provider
    events={events}>

        {props.children}
    </EventContent.Provider>
}