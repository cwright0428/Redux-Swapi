import React, { Component } from "react";
// import { getChars } from "./actions";
import { CharacterListView } from "./views";
import "./styles/App.css";

class App extends Component {

  // componentDidMount() {
  //   this.props.getChars()
  // }
  render() {
    return <CharacterListView />;
  }
}

export default App;
