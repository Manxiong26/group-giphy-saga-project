import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import createSagaMiddleware from 'redux-saga';

function* getSearch(){
    try{
        const response = yield axios.get('/api/category')
        yield put({type: 'SET_SEARCH', payload: response.data})
    } catch (error) {
        alert('Sorry could not get giphy at the moment', error)
    }
}


const search = (state = {}, action) => {
    if(action.type === 'SET_SEARCH') {
        return action.payload;
    }
    return state;
}

const sagaMiddleware = createSagaMiddleware();



function* rootSaga(){
    yield takeEvery('GET_SEARCH', search)
}


const storeInstance = createStore(
    combineReducers({
        getSearch,
    }),
    applyMiddleware(logger, sagaMiddleware),
)
sagaMiddleware.run(rootSaga)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
