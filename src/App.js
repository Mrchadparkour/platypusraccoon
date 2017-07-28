import React, { Component } from 'react';
import WebDevPanel from "./components/WebDev";


class App extends Component {
  render() {
    return (
      <div className="Container">
        <WebDevPanel />
      </div>
    );
  }
}

export default App;
