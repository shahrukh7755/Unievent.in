import React,{useState} from "react";
import "./home.css"
import axios from "axios"
import Loading from "../components/loading.gif"

function createEvent(props){

    const createEventData= async(e)=>{
        e.preventDefault();
        // setLoading(true)
        var formData = new FormData();
        formData.append("thumnailsURL", e.target.thumnailsURL.files[0]);
        formData.set('title', e.target.title.value);
        formData.set('venu', e.target.venu.value);
        formData.set('price', e.target.price.value);
        formData.set('time', e.target.time.value);
        formData.set('date', e.target.date.value);
        formData.set('description', e.target.description.value);
        formData.set('catagory', e.target.catagory.value);

        formData.set('organizer', localStorage.getItem("userIdUnievent"));

        
        console.log(e.target.catagory.value)
        var output=await axios.post('/v1/event/createEvent', formData, {
            headers: {
            'Content-Type': 'multipart/form-data'
            }      
        });

        window.location.href="dashboard/allEvents"

        
    }

    return(
        <div className="container">
           
            <form className="createEventForm" onSubmit={createEventData}>
                 <h3>Create an Event</h3>
                <input type="text" name="title" placeholder="Title" required/>
                <input type="text" name="venu" placeholder="Venu" required/>
                <input type="number" name="price" placeholder="Fees" required/>
                <input type="text" name="time" placeholder="Time" required/>
                <input type="date" name="date" placeholder="date" required/>
                <select name="catagory">
                    <option disabled>Select Catagory</option>
                    <option value="Music & Art">Music & Art</option>
                    <option value="Sports">Sports</option>
                    <option value="Professional enhancement">Professional enhancement</option>
                    <option value="Workshop">Workshop</option>
                    <option value="Dance">Dance</option>

                </select>
                <textarea name="description" placeholder="description" required></textarea>
                <input type="file" name="thumnailsURL" required/>
                <input type="submit" value="Create Event"/>
                
            </form>
        </div>
    )
}

export default createEvent;