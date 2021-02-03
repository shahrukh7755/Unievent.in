import React,{useState,useEffect} from "react"
import EventCard from "../components/eventCard";
import {Link} from 'react-router-dom';
import axios from "axios";




const data =[
    {
        price:20,
        time:"Sat, Dec 14",
        title:"NEW IELTS BATCH & FREE IELTS TRAIL CLASS for LPU Students by ‘The Study Desk’",
        eventLocation:'Block 34, Room-15',
        eventPic:"https://www.repairkaki.com/static/media/step_3.1e69a4b9.png"
    }

]

function HomePage(){
    const [events,setEvents]=useState([])
    const [viewCatagory,setViewCatagory]=useState([])
    const [activeClass,setActiveClass]=useState("")

    const selectCataogry=async(catagory)=>{
        const getAllEvents=await axios.post("/v1/event/getAllEvents/",{catagory:catagory});
        setEvents(getAllEvents.data)
        setActiveClass(catagory)
    }
    const getAllEvents=async()=>{
        const getAllEvents=await axios.post("/v1/event/getAllEvents/");
        setEvents(getAllEvents.data)
        setActiveClass("All")
    }
    useEffect(()=>{
        getAllEvents()
    },[])
    return(
    <div className="EventsPages">
        <div className="container">
        <img  className="mainCover" alt="unievet" src="https://www.newstatesman.com/sites/all/themes/creative-responsive-theme/images/new_statesman_events.jpg"/>
        <h1>Popular Events at <span className="MainColor">Lovely Professional University</span></h1>
        <ul className="searchBy">
            <li><Link to="/"  onClick={()=>{getAllEvents()}} className={(activeClass=="All"?"active":null)}>All</Link></li>
            <li><Link to="/" onClick={()=>{selectCataogry("Music & Art")}} className={(activeClass=="Music & Art"?"active":null)} >Music & Art</Link></li>
            <li><Link to="/" onClick={()=>{selectCataogry("Sports")}} className={(activeClass=="Sports"?"active":null)} >Sports</Link></li>
            <li><Link to="/" onClick={()=>{selectCataogry("Professional enhancement")}} className={(activeClass=="Professional enhancement"?"active":null)}>Professional enhancement</Link></li>
            <li><Link to="/" onClick={()=>{selectCataogry("Workshop")}} className={(activeClass=="Workshop"?"active":null)}>Workshop</Link></li>
            <li><Link to="/" onClick={()=>{selectCataogry("Dance")}} className={(activeClass=="Dance"?"active":null)}>Dance</Link></li>


        </ul>
        <div className="listOfAllevents"> 

            {(events.length!=0?events.map((item,index)=>{
                return(
                   <Link to={`eventDetails/${item._id}`}> <EventCard key={index} eventInfo={item}/></Link>
                )
            }):
            <h1>No event available</h1>
            )}
           
           
        </div>
        <button className="viewMore">View More</button>


        </div>
    </div>
    
    )
}

export default HomePage;