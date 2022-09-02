import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Header from './Header.js';
import Home from './Home.js';
import Checkout from './Checkout';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <h1>Login page</h1>
          </Route>
          <Route path="/">
            <Header />
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
