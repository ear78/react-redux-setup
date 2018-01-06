const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'INCREMENT':
            //can use object.assign method to create a copy of the object for immutability as one option
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
        case 'DECREMENT':
        return {
            //es6 spread operator makes a copy in shorter syntax, we want to do this in our state so we aren't mutating the original state
            ...state,
            counter: state.counter - 1
        }
        case 'ADD':
        return {
            ...state,
            counter: state.counter + action.val
        }
        case 'SUBTRACT':
        return {
            ...state,
            counter: state.counter - action.val
        }
        case 'STORE_RESULT':
        return {
            //concat creates a copy of the array, best practice to use concat instead of push('some value')
            ...state,
            results: state.results.concat({id: new Date(), value: state.counter})
        }
        case 'DELETE_RESULT':
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
