import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Posts from './pages/Posts';
import Detail from './pages/Detail';
import Login from './pages/Login';
import Register from './pages/Register';
import NoMatch from './pages/NoMatch';
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
    <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/posts/:id" component={Detail} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
