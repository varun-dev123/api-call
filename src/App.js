import React, { Component } from "react";

import AppHeader from "./header";
import AppContent from "./mainContent";
import AppFooter from "./footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <AppHeader />
        <AppContent />
        <AppFooter />
      </div>
    );
  }
}

export default App;
