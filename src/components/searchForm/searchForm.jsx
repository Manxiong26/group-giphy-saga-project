import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux'
function searchForm() {

  let [giphySearch, setGiphySearch] = useState('');
  const dispatch = useDispatch();


  const handleSubmit = event => {
    event.preventDefault();

    console.log(`Adding giphySearch`, { giphySearch });
    // SEND THIS DATA TO AXIOS.GET IN 
    axios.get('/api/search', {
      queryString: giphySearch
    })
      .then(response => {
        console.log('added giphySearch successfully');
        dispatch({ type: 'SET_SEARCH', payload: response.data })
        setGiphySearch('');
      })
      .catch(error => {
        alert(' sorry things are not working at the moment. Try again later');
        console.log('error adding giphySearch', error);
      })

  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={giphySearch} onChange={(event) => setGiphySearch(event.target.value)} />
        <button>Search Results</button>
      </form>
    </>
  )
}

export default searchForm;