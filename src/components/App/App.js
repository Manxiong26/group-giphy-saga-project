import React from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

import SearchResults from '../SearchResults/SearchResults';
import FavoritesResults from '../FavoritesResults/FavoritesResults';
import Header from '../Header/Header';
import './App.css';

function App(props) {
  return (
    <>
      <Header />
      <Router>
        <div className="nav">
          <ul>
            <li><Link className="link" to="/">Search</Link></li>
            <li><Link className="link" to="/favorites">Favorites</Link></li>
          </ul>
        </div>
        <Route path="/" exact><SearchResults /></Route>
        <Route path="/favorites"><FavoritesResults /></Route>
      </Router>
    </>
  )
}

export default App;
