import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Importerar alla functioner i våra komponenter
import Landing from './components/landing/landing';
import Menu from './components/menu/menu';
import Nav from './components/nav/nav';
import About from './components/about/about';
import Cart from './components/cart/cart';
import Status from './components/status/status';

// Lägger på en route path på varje komponent för att kunna hoppa mellan sidor
function App() {
  return (
    <Switch>
      <Route path="/" component={ Landing } exact /> {/* Exact behövs när man har flera route, eventuellt om det har liknande namn. */}
      <Route path="/menu" component={ Menu } />
      <Route path="/nav" component={ Nav } />
      <Route path="/about" component={ About } />
      <Route path="/cart" component={ Cart } />
      <Route path="/status" component={ Status } /> 
    </Switch>
  );
}

export default App;
