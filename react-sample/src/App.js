import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Result from './components/Result';
import Reset from './components/Reset';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      fontSize: 15
    };
  }
  onSetColor = (params) => {
    this.setState({
      color: params
    })
  }

  onChangeFontSize = (params) => {
    this.setState({
      fontSize: this.state.fontSize + params
    });
  }

  onReset = () => {
    this.setState({
      color: "red",
      fontSize: 15
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor}/>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <SizeSetting font={this.state.fontSize} changeFontSize={this.onChangeFontSize}/>
            <Reset onReset={this.onReset} />
          </div>
          <Result color={this.state.color} font={this.state.fontSize}/>
        </div>
      </div>
    )
  }
}

export default App;
