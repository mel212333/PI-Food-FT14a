import React from "react";
import "./Home.css"
import logo from "../../component/image/logo.png"
import Ordenamiento from "../Ordenamiento/Ordenamiento"
import Recipes from "../Recipes/Recipes";
import Search from "../Search/Search"
import Puntuacion from "../Puntuacion/Puntuacion";

function Home(){
    return(
        <div className="homecont">
        <ul className="home">
            <div className="cnttitulo">
                 <img src={logo} alt="logo" className="imgl"/>
                <h1 className="titulo">Food App</h1>
            </div>
            <div className="padre">
                <div className="filts">
                   <Ordenamiento/>
                   <Search/> 
                   <Puntuacion/>
                </div>
            </div>
            <Recipes/>
        </ul>
    </div>
    )
}

export default (Home);