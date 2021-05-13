import { takeEvery } from 'redux-saga/effects';
import getSearch from './getSearch.saga';

function* rootSaga(){
    yield takeEvery('GET_SEARCH', getSearch)
}

export default rootSaga;