import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Projects from './components/Projects';


class App extends React.Component {
  state = {
    message: "",
    error: "",
    eee: "",
    text: ""
  };
  
  componentDidMount = () => this.fetchAPIMessage();

  fetchAPIMessage = async () => {
    try {
      const res = await fetch(`/api/message`);
      const { message } = await res.json();
      this.setState({ message });
    } catch (err) {
      console.error(err);
    }
  };
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path={'/'} component={Home}></Route>
            <Route path={'/projects'} component={Projects}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
