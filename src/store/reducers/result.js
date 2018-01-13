import * as actionTypes from '../actions/actionTypes';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){

        case actionTypes.STORE_RESULT:
        return {
            //Transforming data can be handled in either the reducer or action creator, however be consistent whichever method you choose
            //concat creates a copy of the array, best practice to use concat instead of push('some value').
            ...state,
            results: state.results.concat({id: new Date(), value: action.result})
            // ...state,
            // results: state.results.concat({id: new Date(), value: action.result * 2}) //transformed value example
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
