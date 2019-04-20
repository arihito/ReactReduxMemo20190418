import React, { Component } from 'react';
import { connect } from 'react-redux';

class Item extends Component {
  th = {
    fontSize: '12px',
    backgroundColor: '#666',
    color: 'white',
    padding: '10px 10px',
    width: '50px'
  }
  td = {
    fontSize: '18px',
    color: '#333',
    textAlign: 'left',
    padding: '7px 20px',
    borderTop : '1px dotted #ccc',
    borderBottom : '1px dotted #ccc',
    minWidth : '330px'
  }
  data = {
    fontSize: '10px',
    backgroundColor: 'white',
    color: '#333',
    padding: '11px 10px',
    border: '1px solid #eee',
    width: '80px'
  }
  render() {
    return (
      <tr>
        <th style={this.th}>No: {this.props.index}</th>
        <td style={this.td}>{this.props.value.message}</td>
        <td style={this.data}>{this.props.value.created}</td>
      </tr>
    );
  }
}
export default connect()(Item);