import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findMemo } from './Store';

class FindForm extends Component {
  input = {
    fontSize: '16px',
    color: '#006',
    padding: '10px 10px',
    margin: '15px 0',
    borderRadius: '3px 0 0 3px',
    border: '1px solid #ccc'
  }
  btn = {
    fontSize: '16px',
    color: '#006',
    padding: '10px 10px',
    margin: '15px 0 0 0',
    borderRadius: ' 0 3px 3px 0',
    border: '1px solid #ccc',
    borderLeft: 'transparent'
  }
  message = {
    fontSize: '18px',
    fontWeight: 'bold',
    width: '30vw',
    textAlign: 'right'
  }

  constructor(props) {
    super(props);
    this.state = {
      find: ''
    }
    this.doChange = this.doChange.bind(this);
    this.doAction = this.doAction.bind(this);
  }

  doChange(e) {
    this.setState({
      find: e.target.value
    });
  }

  doAction(e) {
    e.preventDefault();
    let action = findMemo(this.state.find);
    this.props.dispatch(action);
  }

  render() {
    return (
      <form onSubmit={this.doAction}>
        <input type="text" size="20" onChange={this.doChange} style={this.input} value={this.state.message} />
        <input type="submit" style={this.btn} value="Find" />
      </form>
    );
  }
}

export default connect((state) => state)(FindForm);