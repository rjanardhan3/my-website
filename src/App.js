import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/contact';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
     <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/aboutme' exact component={About} />
      <Route path='/contact-me' exact component={Contact} />
    </Switch>
    </Router>
    </>
  );
}

export default App;
