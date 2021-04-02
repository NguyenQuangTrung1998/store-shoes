import React, { Component } from 'react';
import Cart from './Cart';
export const dataContext = React.createContext();
 export class ContextProvider extends Component{
     constructor(props){
         super(props);
         this.state={
             Man:[
                {
                    "_id":"1",
                    "title": "Nike shoes 01",
                    "src":"https://picsum.photos/200/300",
                    "description":"this is the product made in USA",
                    "price":23,
                    "colors":["red","black","white","yellow"],
                    "count":1
                  },
                  {
                    "_id":"2",
                    "title": "Nike shoes 02",
                    "src":"https://picsum.photos/200/300",
                    "description":"this is the product made in USA",
                    "price":20,
                    "colors":["red","black","white","yellow"],
                    "count":1
                  },
                  {
                    "_id":"3",
                    "title": "Nike shoes 03",
                    "src":"https://picsum.photos/200/300",
                    "description":"this is the product made in USA",
                    "price":19,
                    "colors":["red","black","white","yellow"],
                    "count":1
                  },
                  {
                    "_id":"4",
                    "title": "Nike shoes 04",
                    "src":"https://picsum.photos/200/300",
                    "description":"this is the product made in USA",
                    "price":23,
                    "colors":["red","black","white","yellow"],
                    "count":1
                  },
             ],
             Women:[
              {
                "_id":"1",
                "title": "Nike shoes 01",
                "src":"https://picsum.photos/200/300",
                "description":"this is the product made in USA",
                "price":23,
                "colors":["red","black","white","yellow"],
                "count":1
              },
              {
                "_id":"2",
                "title": "Nike shoes 02",
                "src":"https://picsum.photos/200/300",
                "description":"this is the product made in USA",
                "price":20,
                "colors":["red","black","white","yellow"],
                "count":1
              },
              {
                "_id":"3",
                "title": "Nike shoes 03",
                "src":"https://picsum.photos/200/300",
                "description":"this is the product made in USA",
                "price":19,
                "colors":["red","black","white","yellow"],
                "count":1
              },
              {
                "_id":"4",
                "title": "Nike shoes 04",
                "src":"https://picsum.photos/200/300",
                "description":"this is the product made in USA",
                "price":23,
                "colors":["red","black","white","yellow"],
                "count":1
              },
             ],
             Cart:[]
         }  
         this.addToCartMan = this.addToCartMan.bind(this);
         this.addToCartWomen = this.addToCartWomen.bind(this);
     }
     addToCartMan(id){
       var man = this.state.Man.filter(item=>{
         return item._id===id;
       });
      
       this.setState({
         Cart:[...this.state.Cart,...man]
       })
       console.log(this.state.Cart);
     }
     addToCartWomen(id){
      var women = this.state.Women.filter(item=>{
        return item._id===id;
      });
      this.setState({
        Cart:[...this.state.Cart,...women]
      })
      console.log(this.state.Cart);
     }
    render(){
        const {Man,Women,Cart}=this.state;
        const {addToCartMan,addToCartWomen}=this;
        return(
            <dataContext.Provider value={{Man,Women,addToCartMan,addToCartWomen,Cart}}>
                {this.props.children}
            </dataContext.Provider>
        )
    }
}