import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

const Search = () => <h1>Search</h1>
const Result = () => <h1>Result</h1>
const Details = () => <h1>Details</h1>

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Header />
        <Route path="/" exact component={Search} />
        <Route path="/result/" component={Result} />
        <Route path="/details/" component={Details} />
      </div>
    </Router>
  );
  }
}

export default App;
