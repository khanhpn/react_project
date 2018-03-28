import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

const menus = [
  {
    name: "Home",
    to: "/",
    exact: true
  },
  {
    name: "About",
    to: "/about",
    exact: false
  },
  {
    name: "Contact",
    to: "/contact",
    exact: false
  }
];

const MenuLink = ({label, to, activeOnlyWhenExac}) => {
  return (
    <Route path={to} exact={activeOnlyWhenExac} children={({match}) => {
      var active = match ? "active" : "";
      return (
        <li className={active}>
          <Link to={to}>{label}</Link>
        </li>
      );
    }} />
  );
}

class App extends Component {
  showMenu(menus) {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink label={menu.name} key={index} to={menu.to} activeOnlyWhenExac={menu.exact} />
        );
      });
    }
    return result;
  }

  render() {
    return (
      <Router>
        <div className="App">
          <nav className="navbar navbar-default">
            <ul className="nav navbar-nav">
              {this.showMenu(menus)}
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
