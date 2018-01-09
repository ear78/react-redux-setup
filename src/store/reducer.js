import * as actionTypes from './actions';

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.INCREMENT:
            //can use object.assign method to create a copy of the object for immutability as one option
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
        case actionTypes.DECREMENT:
        return {
            //es6 spread operator makes a copy in shorter syntax, we want to do this in our state so we aren't mutating the original state
            ...state,
            counter: state.counter - 1
        }
        case actionTypes.ADD:
        return {
            ...state,
            counter: state.counter + action.val
        }
        case actionTypes.SUBTRACT:
        return {
            ...state,
            counter: state.counter - action.val
        }
        case actionTypes.STORE_RESULT:
        return {
            //concat creates a copy of the array, best practice to use concat instead of push('some value')
            ...state,
            results: state.results.concat({id: new Date(), value: state.counter})
        }
        case actionTypes.DELETE_RESULT:
            //create copy of array
            // const id = 2;
            // const newArray = [...state.results],
            // newArray.splice(id, 1);
            const updatedArray = state.results.filter(result => result.id !== action.resultElId);
            return {
                ...state,
                results: updatedArray
            }
    }
    return state;

}

export default reducer;
