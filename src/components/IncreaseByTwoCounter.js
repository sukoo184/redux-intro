import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { increaseByTwoCounter } from "../redux/actions/counterActions";

function IncreaseByTwoCounter(props) {
    
    return (
        <div>
             <button onClick={e=>{
                props.dispatch(increaseByTwoCounter());
            }}> 2 arttır</button>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(increaseByTwoCounter,dispatch)}
    
}

export default  connect(mapDispatchToProps)(IncreaseByTwoCounter);
