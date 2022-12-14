import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css'
import { Home, About, BookShelf, SignIn } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import { firebaseConfig } from './firebaseConfig';
import 'firebase/auth';


ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={true}>
    <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home title="Welcome to BookWorm!"/>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route> 
        <Route path='/bookshelf'>
          <BookShelf></BookShelf>
        </Route>
        <Route path='/signin'>
          <SignIn></SignIn>
        </Route>
      </Switch>
    </Router>
    </Provider>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
);



