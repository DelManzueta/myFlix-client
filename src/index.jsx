import React           from 'react';

import ReactDOM        from 'react-dom';

import { Provider }    from 'react-redux';

import MainView        from './components/MainView/main-view';
import moviesApp       from './reducers/reducers'; 

import './index.scss';

const store = createStore(moviesApp);

class MyFlixApplication extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainView />
      </Provider>
    );
  }
}

const container = document.getElementsByClassName('app-container')[0];

ReactDOM.render(React.createElement(MyFlixApplication), container);