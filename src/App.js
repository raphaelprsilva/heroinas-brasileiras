import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { DeckPage, Home, NotFound, Game } from './pages';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/deck" component={ DeckPage } />
          <Route exact path="/play" component={ Game } />
          <Route exact path="/" component={ Home } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
