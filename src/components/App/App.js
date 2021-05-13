import React from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

import SearchResults from '../SearchResults/SearchResults';
import FavoritesResults from '../FavoritesResults/FavoritesResults'


function App(props) {
  return (
    <>
      <header>
      <h1>Giphy Search!</h1>
      <Router>
        <div className="nav">
          <ul>
            <li><Link to="/">Search</Link></li>
            <li><Link to="/favorites">Favorites</Link></li>
          </ul>
        </div>
        <Route path="/" exact><SearchResults /></Route>
        <Route path="/favorites"><FavoritesResults /></Route>
      </Router>
    </header>
    </>
  )
}

export default App;
