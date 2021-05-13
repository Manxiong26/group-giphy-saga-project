import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getSearch(){
    try{
        const response = yield axios.get('/api/category')
        yield put({type: 'SET_SEARCH', payload: response.data})
    } catch (error) {
        alert('Sorry could not get giphy at the moment', error)
    }
}


const getSearch = (state = {}, action) => {
    if(action.type === 'SET_SEARCH') {
        return action.payload;
    }
    return state;
}

sagaMiddleware.run(rootSaga)

function* rootSaga(){
    yield takeEvery('GET_SEARCH', getSearch)
}

const storeInstance = createStore(
    combineReducers({
        rootSaga,
    }),
    applyMiddleware(logger, sagaMiddleware),
)


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
