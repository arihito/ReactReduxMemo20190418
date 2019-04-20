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
    color: 'darkblue',
    padding: '11px 10px',
    border: '1px solid #eee',
    width: '80px'
  }
  render() {
    let d = this.props.value.created;
    let f = ("0" + d.getHours()).slice(-2) + ':' + ("0" + d.getMinutes()).slice(-2) + ':' + ("0" + d.getSeconds()).slice(-2);
    return (
      <tr>
        <th style={this.th}>No: {this.props.index}</th>
        <td style={this.td}>{this.props.value.message}</td>
        <td style={this.data}>{f}</td>
      </tr>
    );
  }
}
export default connect()(Item);