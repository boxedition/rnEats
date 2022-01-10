import { createStore } from "redux";
import reducer from './reducers/index';

//Adicionar isto pora debugger no RND
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState){
    const store = createStore(reducer, initialState,composeEnhancers());
    return store;
}