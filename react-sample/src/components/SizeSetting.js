import React, { Component } from 'react'

export default class SizeSetting extends Component {
  render() {
    return (
      <div className="panel panel-danger">
        <div className="panel-heading">
          <h3 className="panel-title">Size: 15px</h3>
        </div>
        <div className="panel-body">
          <button type="button" className="btn btn-warning">Down</button>
          <button type="button" className="btn btn-warning">Up</button>
        </div>
      </div>
    )
  }
}
