import * as actionTypes from './actionTypes';

//async function
export const saveResult = (result) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: result
    };
}

export const storeResult = (result) => {
    /*using the thunk Middleware like express allows async functionality like below. must return a function like dispatch and pass on result to saveResult callback
    */
    return (dispatch, getState) => {
        setTimeout(() => {
            //getState used to get previous state and information
            // const oldCounter = getState().ctr.counter;
            // console.log(oldCounter)
            dispatch(saveResult(result))
        }, 2000);
    }
};

export const deleteResult = (resElId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: resElId
    };
};
