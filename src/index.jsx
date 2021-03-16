import React from 'react';
import ReactDOM from 'react-dom';
import { MainView } from './components/MainView/main-view';

// Import statement to indicate that you need to bundle `./index.scss`
import './index.scss';

// Main component (will eventrually use all the others)
class MyFlixApplication extends React.Component {
  render() {
    return (
      <div className="mid-div">
      <MainView />
          <section className="box">
            <span className="one"><h1>One</h1></span>
            <span className="two"><h1>Two</h1></span>
            <span className="three"><h1>Three</h1></span>
            <span className="four"><h1>Four</h1></span>
          </section>
      </div>
    )
  }
}

// Finds the root of your app
const container = document.getElementsByClassName('app-container')[0];

// Tells React to render your app in the rood DOM element
ReactDOM.render(React.createElement(MyFlixApplication), container);