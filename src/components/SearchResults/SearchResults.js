import results from './SampleQuery';
import GiphyFrame from '../GiphyFrame/GiphyFrame'

function SearchResults() {
  return(
    <>
        {console.log(results)}
        
      {results.data.map( (giphy, i) => 
        <div key={i}>
          <GiphyFrame giphy={giphy}/>
        </div>
      )}
    </>
  )
}

export default SearchResults;