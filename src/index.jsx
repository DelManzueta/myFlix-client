import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';

import { MainView } from './components/MainView/main-view';
// import moviesApp from './reducers/reducers';

// Import statement to indicate that you need to bundle `./index.scss`
import './index.scss';

// const store = createStore(moviesApp);

// Main component (will eventually use all the others)
class MyFlixApplication extends React.Component {
  render() {
    return (
      <div className="main-view">
=======
import Container from 'react-bootstrap/Container';

import { MainView } from './components/MainView/main-view'

// Import statement to indicate that you need to bundle `./index.scss`
import './index.scss';

// Main component (will eventrually use all the others)
class MyFlixApplication extends React.Component {
  render() {
    return (
      <Container>
>>>>>>> 3.4
        <MainView />
      </div>
    );
  }
}

// Finds the root of your app
const container = document.getElementsByClassName('app-container')[0];

// Tells React to render your app in the rood DOM element
ReactDOM.render(React.createElement(MyFlixApplication), container);