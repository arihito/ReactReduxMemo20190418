import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMemo } from './Store';

class AddForm extends Component {
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
    margin : '15px 0 0 0',
    borderRadius : ' 0 3px 3px 0',
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
      message: ''
    }
    this.doChange = this.doChange.bind(this);
    this.doAction = this.doAction.bind(this);
  }

  doChange(e) {
    this.setState({
      message: e.target.value
    });
  }

  doAction(e) {
    e.preventDefault();
    let action = addMemo(this.state.message);
    this.props.dispatch(action);
    this.setState({
      message: ''
    });
  }

  render() {
    return (
      <td><span style={this.message}></span>
        <form onSubmit={this.doAction}>
          <input type="text" size="40" onChange={this.doChange} style={this.input} value={this.state.message} placeholder={this.props.message} required />
          <input type="submit" style={this.btn} value="Add" />
        </form>
      </td>
    );
  }
}
export default connect((state) => state)(AddForm);