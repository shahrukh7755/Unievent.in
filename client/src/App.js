import React from 'react';
import './App.css';
import Home from "./pages/home";
import { BrowserRouter as Router, Route, Link,Switch} from "react-router-dom";
import Footer from "./components/Footer/footer"

import Dashboard from "./components/dashboard/dashboard"

function App() {
  return (
    <div>
        <Router>
          <Switch>
          <Route  path="/" component={Home}/>

          </Switch>
          
          </Router>
          {/* <Footer/> */}
      
    </div>
  );
}

export default App;
