import React, { Component } from "react";
import 'react-table-6/react-table.css';
import TableProduits from './components/TableProduits';
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TableProduits />
      </div>
    );
  }
}
export default App;

