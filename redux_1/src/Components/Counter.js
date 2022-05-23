import {useDispatch, useSelector} from "react-redux";

export default function Counter() {
    const counter = useSelector((state => state.counter))
    const dispatch = useDispatch()

    const increment = () => {
        dispatch({type: "INC"})
    }
    const decrement = () => {
        dispatch({type: "DEC"})
    }
    const increment100 = () => {
        dispatch({type: "INC100"})
    }
    const decrement100 = () => {
        dispatch({type: "DEC100"})
    }
    const reset = () => {
        dispatch({type: "RESET"})
    }
    return (
        <div>
            <h1>Counter is {counter}</h1>
            <button onClick={decrement}>-1</button>
            <button onClick={decrement100}>-100</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment100}>+100</button>
            <button onClick={increment}>+1</button>
        </div>
    )
}
