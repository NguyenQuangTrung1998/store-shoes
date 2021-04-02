import React, { Component } from 'react';
import {dataContext} from './ContextAPI';
class Cart extends Component{
    render(){
        return(
            <div>
               <dataContext.Consumer>
               {
                   ({Cart})=>{
                       return Cart.map(item=>{
                        return  <div className="itemInCart" key={item._id}>                      
                        <img src={item.src} alt={item.src}/>
                          <h5>{item.title}</h5>
                          <p>${item.price}</p>
                          <p>{item.description}</p> 
                        </div>
                    })
                   }
                }
               </dataContext.Consumer>
            </div>
        )
    }
}
export default Cart;