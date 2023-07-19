import './Reducer.css';
import {useReducer} from "react";
import Context from "../Context/Context"
const Reducer =()=> {
    const newReducer = (state, action) => {
        switch (action.type) {
            case "INCREMENT":
                return { count: state.count + 1, showText: state.showText };
            case "toggleShowText":
                return {count:state.count ,showText: !state.showText };
            default:
                return state;
        }
    };
    const [state, dispatch] = useReducer(newReducer, { count: 0, showText: true });
    return (
        <div className="App">
            Hi!
            <h2>{state.count}</h2>
            <button
                onClick={() => {
                    dispatch({ type: "INCREMENT" });
                    dispatch({ type: "toggleShowText"})
                }}
            >
                Button
            </button>
            {state.showText && <p>text shown</p>}
            <Context />
        </div>
    );
}

export default Reducer;
