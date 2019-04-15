import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import ItemsList from './components/ItemsList';
import ItemDetail from './components/ItemDetail';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Header />
        <Route path="/" exact component={() => null} />
        <Route path="/items/:id" exact component={ItemDetail} />
        <Route path="/items/" exact component={ItemsList} />
      </div>
    </Router>
  );
  }
}

export default App;
