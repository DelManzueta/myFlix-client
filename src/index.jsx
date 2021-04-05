import React        from "react";
import ReactDOM     from "react-dom"; 


import { MainView } from './components/MainView/main-view';

import "./index.scss";

class myFlix extends React.Component {
  render() {
    return <MainView />;

  }
}

const container = document.getElementsByClassName("app-container")[0];

ReactDOM.render(React.createElement(myFlix), container);