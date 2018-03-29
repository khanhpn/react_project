import React, { Component } from 'react'

export default class SizeSetting extends Component {
  constructor(props, context) {
    super(props, context);
  }
  onHandleSize = (params) => {
    // this.props.font = this.props.font + params;
    // console.log(this.props.font);
    // this.props.font += params
    this.props.changeFontSize(params);
  }

  render() {
    return (
      <div className="panel panel-danger">
        <div className="panel-heading">
          <h3 className="panel-title">Size: {this.props.font}px</h3>
        </div>
        <div className="panel-body">
          <button type="button" className="btn btn-warning" onClick={() => this.onHandleSize(1)}>Down</button>
          <button type="button" className="btn btn-warning" onClick={() => this.onHandleSize(-1)}>Up</button>
        </div>
      </div>
    )
  }
}
