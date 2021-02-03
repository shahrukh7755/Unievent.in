import React from "react"
import Menu from "../components/Menu/menu"
import "./page.css"
import RegistrationForm from "../pages/registration";
import {Route,Switch} from "react-router-dom"
import LoginForm from "../pages/login"
import HomePage from "./HomePage";
import EventView from "../components/EventView"
import EventDetails from "../components/eventDetails/details"
import createEvent from "./createEvent"
import Dashboard from "../components/dashboard/dashboard"
import allEvents from "../components/dashboard/allEvents"
import EventRegistree from "../components/dashboard/registeredStudent"
function Home(){
    return(
    <div className="home">
        <Menu/>
        <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/register"  component={RegistrationForm}/>
            <Route path="/login" component={LoginForm}/>
            <Route path="/event" component={EventView}/>
            <Route path="/eventDetails/:eventId" component={EventDetails}/>
            <Route path="/CreateEvent" component={createEvent}/>
            <Route path="/dashboard" exact component={Dashboard}/>
            <Route path="/dashboard/allEvents" component={allEvents}/>
            <Route path="/dashboard/registeredStudent/:id" component={EventRegistree}/>

        </Switch>
  








    </div>)
}

export default Home;