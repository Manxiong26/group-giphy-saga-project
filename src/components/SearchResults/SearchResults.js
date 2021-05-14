import results from './SampleQuery';
import GiphyFrame from '../GiphyFrame/GiphyFrame';
import './SearchResults.css';
import SearchForm from '../searchForm/SearchForm';
import { useSelector } from 'react-redux';

function SearchResults() {

  const searchResults = useSelector(store => store.rootReducer.search);

  console.log(searchResults);
  


  return(
    <>
      <SearchForm />
      {searchResults ? (searchResults.map( (giphy, i) => 
        <div key={i}>
          <GiphyFrame giphy={giphy}/>
        </div>
      ) ) : (
        'pp'
      ) }
    </>
  )
}

export default SearchResults;