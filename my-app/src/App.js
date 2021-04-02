import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import LoginRegister from './components/LoginRegister';
import Cart from './components/Cart';
import {ContextProvider} from './components/ContextAPI';
import Slide from './components/Slide';
import {Detail} from './components/Detail';
import Footer from './components/Footer';
import Man from './components/Man';
import Women from './components/Women';
class App extends Component {
 render(){
  return (
      <ContextProvider>
        <div className="App">
       <Router>
       <Header />
        <Slide />
       <Route path='/' exact component={Home}/>
       <Route path='/Product' exact component={Product}/> 
       <Route path='/Contact' exact component={Contact}/>
       <Route path='/About' exact component={About}/>
       <Route path='/LoginRegister' exact component={LoginRegister}/>
       <Route path='/Cart' exact component={Cart}/>
       <Route path='/Detail/:id' exact component={Detail}/>
       <Route path='/man/' exact component={Man}/>
       <Route path='/Women/' exact component={Women}/>
       </Router>
       <Footer />
    </div>
      </ContextProvider>
      
  );
 }
}

export default App;
