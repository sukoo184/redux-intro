import * as actionTypes from "./actionTypes"

export const  increaseCounter=()=>({     // fonksiyonu return etmek ()=>()
    type: actionTypes.INCREASE_COUNTER,  // eventimizin datası
    payload:1   // event türünün gönderilen datası

})

export const decreaseCounter=()=>({
    type: actionTypes.DECREASE_COUNTER,
    payload:1
})

export const increaseByTwoCounter =()=>({
    type: actionTypes.INCREASE_BY_TWO_COUNTER,
    payload:2
})