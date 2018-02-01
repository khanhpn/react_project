import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav className="navbar navbar-inverse">
            <ul className="nav navbar-nav">
              <li className="active">
                <NavLink activeClassName="active" exact to="/">Home</NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/about">About</NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
