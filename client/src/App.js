import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Projects from './components/Projects';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path={'`/'} component={Home}></Route>
            <Route path={'~/projects'} component={Projects}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
