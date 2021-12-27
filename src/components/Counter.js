import React from 'react';
import {connect} from"react-redux";

function Counter(props) {
    return (
        <div>
            <h1>{props.counter}</h1>
            
        </div>
    )
}

function mapStateToProps(state) {
    return {counter:state.counterReducer} //State bilgisini counterReducer dan çek.
    
}

export default connect(mapStateToProps) (Counter);  //Counter'ın State lerine propları bagla.




