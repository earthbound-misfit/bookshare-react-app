import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css'
import { Home, About, BookShelf, Dashboard, Favorites, Profile } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home title="Book Sharing App"/>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route> 
        <Route path='/dashboard'>
          <Dashboard></Dashboard>
        </Route>
        <Route path='/profile'>
          <Profile></Profile>
        </Route>
        <Route path='/bookshelf'>
          <BookShelf></BookShelf>
        </Route>
        <Route path='/favorites'>
          <Favorites></Favorites>
        </Route>
      </Switch>
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
);



