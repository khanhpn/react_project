import React, { Component } from 'react'

export default class Result extends Component {
  setStyle() {
    return {
      color: this.props.color,
      fontSize: this.props.font
    };
  }

  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <p>Color: {this.props.color} - Fontsize: {this.props.font}px</p>
        <div id="content" style={this.setStyle()}>Setting</div>
      </div>
    )
  }
}
