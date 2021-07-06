export const GET_RECIPES = "GET_RECIPES";





export function getRecipes(query){
    return function (dispatch){
        return fetch(`http://localhost:3001/recipes?name=${query}`)
          .then(response => response.json())
          .then(json => {
             dispatch({ type: GET_RECIPES, payload: json})
          })
    }    
}
