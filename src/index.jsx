// client/src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom';

import {MainView} from './components/MainView/main-view';
import Container from 'react-bootstrap/Container';

import './index.scss';

 
class MyFlixApplication extends React.Component {
  render() {
    return(
      <Container>
        <MainView />
      </Container>
    );
  }
}


const container = document.getElementsByClassName('app-container')[0];


ReactDOM.render(React.createElement(MyFlixApplication), container);


