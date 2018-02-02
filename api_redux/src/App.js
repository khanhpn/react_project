import React, { Component } from 'react';
import Menu from './components/Menu/Menu';
import './App.css';
import ProductList from './components/ProductList/ProductList';

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <button type="button" className="btn btn-default mg-10">Add product</button>
              <ProductList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
