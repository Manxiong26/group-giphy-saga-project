import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './redux/reducers/_root_reducer';
import rootSaga from './redux/saga/_root_saga'



const sagaMiddleware = createSagaMiddleware();



const storeInstance = createStore(
    combineReducers({
        rootReducer,
    }),
    applyMiddleware(logger, sagaMiddleware),
)
sagaMiddleware.run(rootSaga)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
