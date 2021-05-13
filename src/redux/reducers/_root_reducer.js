import {combineReducers} from 'redux';
import search from './search.reducer';

const rootReducer = combineReducers({
    search
      //You would add more reducer here....
});

export default rootReducer;