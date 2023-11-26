import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Contact from './components/Contact';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Navigation from './components/Navigation';

import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Home from './components/Home';
import Footer from './components/Footer';
// import Header from './components/Header';

function App() {
  return (
    <>
    <div style={{backgroundColor:"#FCF6F5"}}>
      
    <Navigation/>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={About} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/contacts' component={Contact} />
      <Route exact path='/projects' component={Projects} />
      <Route exact path='/project' component={Projects} />
      <Route exact path='/skill' component={Skills} />
      <Route exact path='/skills' component={Skills} />
    </Switch>
    </div>
    <Footer/>
    </>
  )
}

export default App



