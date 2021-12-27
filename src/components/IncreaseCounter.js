import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import {increaseCounter} from '../redux/actions/counterActions'
function IncreaseCounter(props) {
    
    return (
        <div>
            <button onClick={e=>{
                props.dispatch(increaseCounter());
            }}> 1 arttır</button>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(increaseCounter,dispatch)}
    
}

export default  connect(mapDispatchToProps)(IncreaseCounter);
