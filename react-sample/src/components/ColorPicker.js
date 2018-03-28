import React, { Component } from 'react'

export default class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ['red', 'green', 'blue', 'gray']
    };
  }
  showColor(color) {
    return {
      backgroundColor: color,
      padding: "10px",
      marginRight: "10px"
    };
  }
  onSetActiveColor(color) {
    this.props.onReceiveColor(color);
  }
  render() {
    var elmColors = this.state.colors.map((color, index) => {
      return <span key={index} style={this.showColor(color)} className={this.props.color === color ? 'active' : ''} onClick={() => this.onSetActiveColor(color)}>
        {color}
      </span>;
    });
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-danger">
          <div className="panel-heading">
            <h3 className="panel-title">Color picker</h3>
          </div>
          <div className="panel-body">
            {elmColors}
            <hr/>
          </div>
        </div>
      </div>
    )
  }
}
