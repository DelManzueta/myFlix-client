// client/src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom';

import { MainView } from './components/MainView/mainView';
import './index.scss';

class MyFlixApplication extends React.Component {
    render() {
        return (
            <div className="my-flix">
                <MainView />
            </div>
        )
    }
}

const container = document.getElementsByClassName('app-container')[0];
ReactDOM.render(React.createElement(MyFlixApplication), container);