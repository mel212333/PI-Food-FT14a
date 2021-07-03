import React from "react"
import {Route, BrowserRouter} from "react-router-dom"
import LandingPage from "./component/LandingPage/init.js";
import Home from "./component/Home/Home.jsx"

function App() {


  return (
         <BrowserRouter >     
             <Route exact path="/" component={LandingPage}/>  
             <Route path="/">
                <Route exact path="/home" component={Home}/>
             </Route>
    
     </BrowserRouter>
     
   
  ); 
}

export default App;
