import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {getRecipes} from "../../action"
import Spinner from "../Spinner/Spinner"
import Recipe from "../Recipe/Recipe";

function Recipes(props){

    const [query, setQuery] = useState('');

    useEffect(() => {
        async function fetchData(query){
            await props.getRecipes(query)
        }
        fetchData(query)
    },[query])



return(
    <div >
        <div className="contenedor">
           {props.recipes?
           props.recipes.map((r) =>
          
               <Recipe
                  title = {r.title}
                    image = {r.image}
                   diets = {r.diets}
               />
            
         
           )
        :<Spinner/>
        }
        </div>
    </div>
)}

function mapStateToProps(state){
	return {
		...state
	}
}

function mapDispatchToProps(dispatch){
	return {
	
		getRecipes: (query) => dispatch(getRecipes(query))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Recipes)