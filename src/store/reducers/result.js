import * as actionTypes from '../actions/actionTypes';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){

        case actionTypes.STORE_RESULT:
        return {
            //concat creates a copy of the array, best practice to use concat instead of push('some value')
            ...state,
            results: state.results.concat({id: new Date(), value: action.result})
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
