import React, { Component } from 'react';
import {dataContext} from './ContextAPI';
import {Row,Col,Container} from 'reactstrap';
import {Link} from 'react-router-dom';
import './css/Search.css';
class Women extends Component{

    constructor(props){
        super(props);
        this.state={
            women:[],
            item:''
        }
        this.inputSearch = React.createRef();
        this.onChange = this.onChange.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }
    componentDidMount(){
            this.inputSearch.current.focus();
    }
    onKeyDown(event){
        var text = event.target.value;
        text=text.trim();
        if(event.keyCode ===13){
            if(!text){
                return;
            }
            this.setState({
                women:[].concat(this.context.Women.filter(item=>{
                    return item.title.toLowerCase().indexOf(text.toLowerCase())!=-1;
                })),
                item:''
            })
        }


    }
    onChange(event){
        this.setState({
            item:event.target.value
        })
    }
    render(){
        const women =this.state;
        return(
            <div className="Women">
                 <div className="search">
                    <input 
                    type="text" 
                    name="item" 
                    id="search"
                    ref={this.inputSearch}  
                    placeholder="Search here"
                    onKeyDown={this.onKeyDown}
                    value={this.state.item}
                    onChange={this.onChange}
                     />
                    </div>
            <h2>Women</h2>
            <dataContext.Consumer>
                {({Women,addToCartWomen})=>{
                    return <Container>
                        <Row>
                            {
                                women.length? women.map(item=>{
                                        return <Col md={3} key={item._id}>
                                             <div className="product">
                                                 <Link to={`/Detail/${item._id}`}>
                                                 <img src={item.src} alt={item.src}/>
                                                 </Link>
                                            <h5>{item.title}</h5>
                                            <p>${item.price}</p>
                                            <p>{item.description}</p>
                                               <div>
                                               <button 
                                               className="addToCart"
                                               onClick={()=>addToCartWomen(item._id)}
                                               >
                                                   Add to cart
                                                   </button>
                                               </div>
                                          </div>
                                        </Col>
                                    
                                }): Women.map(item=>{
                                    return <Col md={3} key={item._id}>
                                         <div className="product">
                                             <Link to={`/Detail/${item._id}`}>
                                             <img src={item.src} alt={item.src}/>
                                             </Link>
                                        <h5>{item.title}</h5>
                                        <p>${item.price}</p>
                                        <p>{item.description}</p>
                                           <div>
                                           <button 
                                           className="addToCart"
                                           onClick={()=>addToCartWomen(item._id)}
                                           >
                                               Add to cart
                                               </button>
                                           </div>
                                      </div>
                                    </Col>
                                })
                            }
                            
                        </Row>
                        <button className="ShowMore">Show more</button>
                    </Container>
                }}
            </dataContext.Consumer>
           
        </div>
        
        )
    }
}
export default Women;