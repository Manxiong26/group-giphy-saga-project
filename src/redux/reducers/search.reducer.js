const search = (state = [], action) => {
    if(action.type === 'SET_SEARCH') {
        return action.payload;
    }
    return state;
}

export default search;