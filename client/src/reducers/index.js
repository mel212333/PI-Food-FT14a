//importo las acciones

import{
    GET_RECIPES,
} from "../action/index.js";

//seteamos el estado global 

const initialState ={
    recipes: [],
}

//setear los reducers

function rootReducer(state = initialState, action){
    if( action.type === GET_RECIPES){
        return{
            ...state,
            recipes: action.payload
        }
    }
}

export default rootReducer;