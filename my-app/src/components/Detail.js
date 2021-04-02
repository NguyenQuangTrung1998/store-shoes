import React, { Component } from 'react';
import {dataContext} from './ContextAPI';
import {Row,Col,Container} from 'reactstrap';
import './css/Detail.css'
export class Detail extends Component{
    static contextType = dataContext;
    constructor(){
        super();
        this.state={
            Man:[],
            Women:[]
        }
        this.getProductMan = this.getProductMan.bind(this);
    }
    getProductMan(){
       if(this.props.match.params.id){
            const resWomen = this.context.Women;
            const resMan = this.context.Man;
            const dataWomen = resWomen.filter(x=>{
                return x._id===this.props.match.params.id;
            })
            const dataMan = resMan.filter(y=>{
                return y._id===this.props.match.params.id;
            })
            this.setState({
                Women:[].concat(dataWomen),
                Man:[].concat(dataMan)
            })
            
       }
    }
    componentDidMount(){
        this.getProductMan();
    }
    render(){
        var {Women,Man} = this.state
        var {addToCart}=this.context;
        return(
            <div className="detail">
                            {
                                Women.length?Women.map(item=>{
                                    return <div className="DetailItem" key={item._id}>
                                             <img src={item.src} alt={item.src} width={300}/>
                                            <h5>{item.title}</h5>
                                            <p>${item.price}</p>
                                            <p>{item.description}</p>
                                            <div className="DetailItem">
                                            <button className="addToCart"
                                            onClick={()=>addToCart(item._id)}
                                            >Add to cart</button>
                                            </div>
                                        </div>
                                }): Man.length?Man.map(item=>{
                                    return <div className="DetailItem" key={item._id}>
                                             <img src={item.src} alt={item.src} width={300}/>
                                            <h5>{item.title}</h5>
                                            <p>${item.price}</p>
                                            <p>{item.description}</p>
                                            <div className="DetailItem">
                                            <button className="addToCart"
                                            onClick={()=>addToCart(item._id)}
                                            >Add to cart</button>
                                            </div>
                                        </div>
                                }):''
                            } 
            </div>
        )
    }
}