import React, { Component } from 'react'; 
import './css/Header.css';
import {dataContext} from './ContextAPI';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import menu from './icon/bars-solid.svg';
import shoppingCart from './icon/shopping-cart-solid.svg';
import close from './icon/times-solid.svg';
 class Headers extends Component{
     static contextType=dataContext;
     constructor(){
         super();
         this.state={
             toggle: false
         }
         this.setToggle = this.setToggle.bind(this);
     }
     setToggle(){
         this.setState({
             toggle:!this.state.toggle
         })
     }
    render(){
        var {toggle}= this.state;
        var {Cart}=this.context;
        return(
              <header className="header">
              <div className="menu">
                  <img src={menu} alt="" width={20} onClick={this.setToggle}/>
              </div>
          <div className="logo">
            <Link to=''>shoes viet nam</Link>
          </div>
              <nav className="nav">
                    <ul className={toggle?"toggle":""}>
                        <li>
                        <Link to='/' >home</Link>
                        </li>
                        <li>
                            <Link to='/Product'>product</Link>
                        </li>
                        <li>
                            <Link to='/Contact'>contact</Link>
                        </li>
                        <li>
                            <Link to='/About'>about</Link>
                        </li>
                        <li>
                            <Link to='/LoginRegister/'>login/register</Link>
                        </li>
                        <li className="close" onClick={this.setToggle}>
                            <img src={close} alt="" width={20}/>
                        </li>
                        
                    </ul> 
                    <div className="nav-cart">
                        <span>{Cart.length}</span>
                        <Link to='/Cart'>
                        <img src={shoppingCart} alt="" width={20}/>
                        </Link>
                    </div>
              </nav>
          </header>
        )
    }
}
export default Headers