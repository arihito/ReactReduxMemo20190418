import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteMemo } from './Store';

class DelForm extends Component {
  selectWrap = {
    overflow: 'hidden',
    float: 'left',
    border: '1px solid #ccc',
    borderRadius: '2px 0 0 2px',
    background: '#fff',
    padding : '8px 0 9px',
    marginRight: '-7px',
    width: '150px'
  }
  select = {
    fontSize: '16px',
    color: '#006',
    cursor: 'pointer',
    textOverflow: 'ellipsis',
    border: 'none',
    outline: 'none',
    background: 'transparent',
    backgroundImage: 'none',
    boxShadow: 'none',
    appearance: 'none'
  }
  btn = {
    fontSize: '16px',
    color: '#006',
    padding: '10px',
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
      number: 0
    }
    this.doChange = this.doChange.bind(this);
    this.doAction = this.doAction.bind(this);
  }

  doChange(e) {
    this.setState({
      number: e.target.value
    });
  }

  doAction(e) {
    e.preventDefault();
    let action = deleteMemo(this.state.number);
    this.props.dispatch(action);
    this.setState({
      number: 0
    });
  }

  render() {
    let n = 0;
    let items = this.props.data.map((value) => (
      <option key={n} value={n++}>{value.message.substring(0, 10)}</option>
    ))
    return (
      <td>
        <form onSubmit={this.doAction}>
          <div style={this.selectWrap}>
            <select onChange={this.doChange} defaultValue="-1" style={this.select}>{items}</select>
          </div>
          <input type="submit" style={this.btn} value="Del" />
      </form>
      </td>
    );
  }
}

export default connect((state) => state)(DelForm);