import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="navbar navbar-default">
          <a className="navbar-brand">Call api</a>
          <ul className="nav navbar-nav">
            <li className="active">
              <a>Home</a>
            </li>
            <li>
              <a>Manage products</a>
            </li>
          </ul>
        </div>

        <div className="container">

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <button type="button" className="btn btn-default mg-10">Add product</button>

              <div className="panel panel-danger">
                  <div className="panel-heading">
                    <h3 className="panel-title">List products</h3>
                  </div>
                  <div className="panel-body">

                    <table className="table table-bordered table-hover">
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>Code</th>
                          <th>Name</th>
                          <th>Price</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>1</td>
                          <td>iphone 6</td>
                          <td>1000</td>
                          <td>
                            <span className="label label-danger">InStock</span>
                          </td>
                          <td>
                            <button type="button" className="btn btn-danger mgr-10">Edit</button>
                            <button type="button" className="btn btn-warning">Delete</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                  </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
