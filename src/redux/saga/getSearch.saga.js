import { put } from 'redux-saga/effects';
import axios from 'axios'


function* getSearch(){
    try{
        const response = yield axios.get('/api/category')
        yield put({type: 'SET_SEARCH', payload: response.data})
    } catch (error) {
        alert('Sorry could not get giphy at the moment', error)
    }
}

export default getSearch;