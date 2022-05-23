import {createStore} from "redux";

const initialState = {
    counter: 0
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INC":
            return {
                ...state,
                counter: state.counter + 1
            }
        case "DEC":
            return {
                ...state,
                counter: state.counter - 1
            }
        case "INC100":
            return {
                ...state,
                counter: state.counter + 100
            }
        case "DEC100":
            return {
                ...state,
                counter: state.counter - 100
            }
        case "RESET":
            return {
                ...state,
                counter: 0
            }
        default :{
            return state
        }
    }

}
const store = createStore(reducer)

export default store
