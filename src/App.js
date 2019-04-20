import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Memo from './memo/Memo';
import AddForm from './memo/AddForm';
import FindForm from './memo/FindForm';
import DelForm from './memo/DelForm';

class App extends Component {
  table = {
    width: '80vw',
    margin: 'auto'
  }
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            <code>Memo App</code> in React & Redux.
          </h1>
        </header>
        <table style={this.table}><tbody><tr>
          <AddForm />
          <td><FindForm /></td>
          <td><DelForm /></td>
        </tr></tbody></table>
        <Memo />
      </div>
    );
  }
}

export default connect() (App);
