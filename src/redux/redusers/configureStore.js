
import {createStore } from "redux";
import reducers from "./index";

// store magazasını oluşturduk .
export default function configureStore(){
    return createStore(reducers)  //Storeları index.js deki reduserdan çekecegiz.
}