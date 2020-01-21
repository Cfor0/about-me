import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {
  Box,
  Image,
  Heading,
  Text,
  Flex,
  Link
} from 'rebass';
import Home from './components/Home'


class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path={'/'} component={Home} />
      </Router>
    );
  }
}

export default App;
