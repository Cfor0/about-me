import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/Home'
import Projects from './components/Projects';


class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path={'/'} component={Home}>
          {/* <Route path={'home'} /> */}
        </Route>     
        <Route exact path={'/projects'} component={Projects}></Route>   
      </Router>
    );
  }
}

export default App;
