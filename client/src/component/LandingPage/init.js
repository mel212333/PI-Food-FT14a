import React from "react";
import "./init.css";
import{Link} from "react-router-dom";
function init(){
    return(
        <div>
        <div  className="bienvenido">
      
        <h1>BIENVENIDO</h1>
         <Link to='/home'>
            <button className="btnp">INICIO</button>
         </Link>
        	
 
    </div>
    </div>
    )
}

export default (init);