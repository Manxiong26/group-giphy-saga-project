import results from './SampleQuery';
import GiphyFrame from '../GiphyFrame/GiphyFrame'
import './SearchResults.css'
import searchForm from '../searchForm/searchForm'

function SearchResults() {
  return(
    <>
      <searchForm />
      {results.data.map( (giphy, i) => 
        <div key={i}>
          <GiphyFrame giphy={giphy}/>
        </div>
      )}
    </>
  )
}

export default SearchResults;