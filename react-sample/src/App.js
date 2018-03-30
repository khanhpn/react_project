import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      txtName: '',
      txtPassword: '',
      txtDescription: '',
      txtGender: 1,
      txtRadio: "en",
      txtCheckbox: false,
      txtCountry: "vn",
      txtPrice: "1000",
      txtProfile: "this is sample",
      txtSmartPhone: 'ip',
      txtPrefecture: "hue"
    };
  }

  onHandleChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    })
  }

  onHandleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <form className="form-inline" onSubmit={this.onHandleSubmit}>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label className="sr-only">UserName</label>
                <input type="text" className="form-control"
                  name="txtName" id="1" placeholder="Input field"
                  onChange={this.onHandleChange}
                />
              </div>
            </div>
            <hr />
            <div className="col-md-12">
              <div className="form-group">
                <label className="sr-only">Password</label>
                <input type="password" className="form-control"
                  name="txtPassword" id="2" placeholder="Input field"
                  onChange={this.onHandleChange}
                />
              </div>
            </div>
            <hr />
            <div className="col-md-12">
              <div className="form-group">
                <label className="sr-only">Description</label>
                <textarea className="form-control"
                  name="txtDescription" placeholder="Input field"
                  onChange={this.onHandleChange}
                />
              </div>
            </div>
            <hr />
            <div className="col-md-12">
              <div className="form-group">
                <select name="txtGender" className="form-control" required="required"
                  value={this.state.txtGender} onChange={this.onHandleChange}>
                  <option value={0}>Male</option>
                  <option value={1}>Female</option>
                </select>
              </div>
            </div>
            <hr />

            <div className="radio">
              <label>
                <input type="radio" name="txtRadio" value="en" onChange={this.onHandleChange} checked={this.state.txtRadio === 'en'}/>
                En
              </label>
              <br />
              <label>
                <input type="radio" name="txtRadio" value="jp" onChange={this.onHandleChange} checked={this.state.txtRadio === 'jp'}/>
                Jp
              </label>
            </div>

            <hr />

            <div className="checkbox">
              <label>
                <input type="checkbox" checked={this.state.txtCheckbox} value={this.state.txtCheckbox} name="txtCheckbox" onChange={this.onHandleChange}/>
                Status
              </label>
            </div>

            <hr />

            <select name="txtCountry" value={this.state.txtCountry} className="form-control" onChange={this.onHandleChange} required="required">
              <option value="jp">Japan</option>
              <option value="vn">Vietnam</option>
              <option value="ko">Korea</option>
              <option value="br">Bruney</option>
              <option value="sw">Swiss</option>
              <option value="fr">France</option>
            </select>

            <hr />

            <div className="radio">
              <label>
                <input type="radio" name="txtPrice" value="1000" checked={this.state.txtPrice === "1000"} onChange={this.onHandleChange} />
                1000$
              </label>
              <label>
                <input type="radio" name="txtPrice" value="2000" checked={this.state.txtPrice === "2000"} onChange={this.onHandleChange} />
                2000$
              </label>
              <label>
                <input type="radio" name="txtPrice" value="3000" checked={this.state.txtPrice === "3000"} onChange={this.onHandleChange} />
                3000$
              </label>
            </div>
            <hr/>

            <textarea name="txtProfile" id="input${1/(\w+)/\u\1/g}" className="form-control" rows="3" required="required" onChange={this.onHandleChange} value={this.state.txtProfile}></textarea>
            <hr />

            <div className="radio">
              <label>
                <input type="radio" name="txtSmartPhone" value="ip" checked={this.state.txtSmartPhone === 'ip'} onChange={this.onHandleChange} />
                iphone
              </label>
              <label>
                <input type="radio" name="txtSmartPhone" value="ss" checked={this.state.txtSmartPhone === 'ss'} onChange={this.onHandleChange} />
                samsung
              </label>
              <label>
                <input type="radio" name="txtSmartPhone" value="xm" checked={this.state.txtSmartPhone === 'xm'} onChange={this.onHandleChange} />
                xiaomi
              </label>
            </div>
            <hr />

            <select name="txtPrefecture" value={this.state.txtPrefecture} className="form-control" onChange={this.onHandleChange}>
              <option value="hn">Ha noi</option>
              <option value="qn">Quang Nam</option>
              <option value="dn">Da nang</option>
              <option value="hue">Hue</option>
              <option value="hoian">Hoi an</option>
              <option value="phanrang">Phan rang</option>
            </select>

            <div className="col-md-12">
              <button type="submit" className="btn btn-primary">Submit</button>
              <button type="submit" className="btn btn-warning">Reset</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default App;
