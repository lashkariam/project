import { takeEvery, call, put} from "redux-saga/effects";
import { getResultsFromServer } from "../../api.js/api";
import { GET_RESULTS,} from "./actions";
import {setErrorMessage , setLoading , addSearchResults} from "./searchSlice";
import {defaultPage, increamentPage} from "../page/pageSlice"


function* handleGetResults(action){
    try{
        yield put(setLoading());
        const response = yield call(getResultsFromServer,action.payload);
        yield put(setLoading());
        yield put(addSearchResults(response))
        yield put(defaultPage())
    }catch(e){
        yield put(setLoading());
        yield put(setErrorMessage(e.message))
    }
}

function* searchSaga(){
    yield takeEvery(GET_RESULTS, handleGetResults)
}

export default searchSaga;