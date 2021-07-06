import React, {useState, useEffect} from "react";
import {getRecipes} from "../../action"
import { connect } from 'react-redux';

function Search(props){

    const [query, setQuery] = useState('');

    useEffect(() => {
        async function fetchData(query){
            await props.getRecipes(query)
        }
        fetchData(query)
    },[query])

    const handleChange = (q) => {
        setQuery(q);
      }
      const handleSubmit = (event) => {
        event.preventDefault();
      }
    
    return(
        <div>
            
              <section>
                   <form onSubmit={(e)=>handleSubmit(e)}>
                  <input type="search" placeholder="Buscar Receta"  onChange={(e)=>handleChange(e.target.value)}/>                        
                   </form>
                  </section>
        </div>
    )
}

function mapStateToProps(state){
	return {
		...state
	}
}

function mapDispatchToProps(dispatch){
	return{
  
		getRecipes:(query) => dispatch(getRecipes(query))
	}
}


export default connect(mapStateToProps, mapDispatchToProps) (Search);