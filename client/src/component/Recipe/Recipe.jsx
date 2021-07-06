import React from 'react';
import {Link} from 'react-router-dom';
import "./Recipe.css";

function Recipe({title, image, id, diets}){
    return(
        <div className="card">
            <h3>Nombre: {title} </h3>
            <div>
                <img className="bandera" src={image} alt=''/>
                <h3>Type de dieta: {diets} </h3>
            </div>
            <Link to={`/recipes/detalle/${id}`}>DETALLE</Link>
        </div>
    )
}
export default Recipe;