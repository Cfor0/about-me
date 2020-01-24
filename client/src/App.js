import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Projects from './components/Projects';


class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={'/'} component={Home}>
            {/* <Route path={'home'} /> */}
          </Route>
          <Route exact path={'/projects'} component={Projects}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
