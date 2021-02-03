import React from "react"
import {Link} from "react-router-dom"
import "./menu.css";

function Menu(){
    if(localStorage.getItem("uniEventAuthenticated")==="true"){
        return(
            <div className="MainHeader">
                <div className="container">
                    <div className="header">
                            <div className="logoContainer">
                              <Link to="/"> <h1>unievent</h1></Link> 
                            </div>
                            {/* <div className="searchBar">
                                <i class="fa fa-search" aria-hidden="true"></i>
                                <input type="text" name="search" placeholder="Find Events"/>
                            </div> */}
                            
                            <div className="Menu">
                                <ul>
                                    <li><Link to="/dashboard">Dashboard</Link></li>
                                    <li><Link to="/">Home</Link></li>


                                </ul>
                            </div>
        
                    </div>
                    
                </div>
            </div>)
    }else{
        return(
    <div className="MainHeader">
        <div className="container">
            <div className="header">
                    <div className="logoContainer">
                      <Link to="/"> <h1>unievent</h1></Link> 
                    </div>
                    <div className="searchBar">
                       
                    </div>
                    
                    <div className="Menu">
                        <ul>
                            <li><Link to="/">Browse Events</Link></li>
                          
                        </ul>
                    </div>

            </div>
            
        </div>
    </div>)
        
    }
    
}

export default Menu;