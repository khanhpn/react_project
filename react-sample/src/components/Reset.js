import React, { Component } from 'react'

export default class Reset extends Component {
  onHandleReset = () => {
    this.props.onReset();
  }
  render() {
    return (
      <div>
        <button type="button" className="btn btn-warning" onClick={this.onHandleReset}>Reset</button>
      </div>
    )
  }
}
