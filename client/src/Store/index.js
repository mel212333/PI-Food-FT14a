import { createStore, applyMiddleware, compose } from "redux"; 
//import rootReducer from "../reducers"; 
import thunk from "redux-thunk";


const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose; 
export const store = createStore(composeEnhancer(applyMiddleware(thunk)) );
//Linea 7: lo que hace es permitirte ver las cosas por Crhomer, siempre es igual esta linea


export default store;