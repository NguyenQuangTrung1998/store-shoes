import React, { Component } from 'react';
import {dataContext} from './ContextAPI';
import {Row,Col,Container} from 'reactstrap';
import {Link} from 'react-router-dom';
import './css/Search.css';
class Man extends Component{
    static contextType = dataContext;
    constructor(props){
        super(props);
        this.state={
            men:[],
            item:''
        }
        this.inputSearchItem = React.createRef();
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    componentDidMount(){     
         this.inputSearchItem.current.focus()
    }
    onKeyDown(event){
        var text = event.target.value;
        if(event.keyCode===13){
            if(!text){
                return;
            }
            this.setState({
                item:'',
                men:[].concat(this.context.Man.filter(item=>{
                    return item.title.toLowerCase().indexOf(text.toLowerCase())!=-1;
                }))
            })
        }
    }
    onChange(event){
        this.setState({
            item:event.target.value
        })
    }
    render(){
        var {Man}=this.context;
        var {men} =this.state;
        return(
            <div className="searchItem">
                 <div className="search">
                    <input 
                    type="text" 
                    name="item" 
                    id="search"
                    ref={this.inputSearchItem}  
                    placeholder="Search here"
                    onKeyDown={this.onKeyDown}
                    value={this.state.item}
                    onChange={this.onChange}
                     />
                    </div>
            <h2>Man</h2>
                
                            <Container className="container">
                                <Row>
                                    {
                                        men.length?men.map(men=>{
                                            return <Col md={3} key={men._id} >
                                            <div className="product">
                                            <Link to={`/Detail/${men._id}`}>
                                            <img src={men.src} alt={men.src}/>
                                            </Link>
                                              <h5>{men.title}</h5>
                                              <p>${men.price}</p>
                                              <p>{men.description}</p>
                                                 <div>
                                                 <button 
                                                 className="addToCart"
                                                 onClick={()=>this.context.addToCartMan(men._id)}>
                                                     Add to cart
                                                     </button>
                                                 </div>
                                            </div>
                                          </Col>
                                        }):Man.map((men)=>{
                                            return <Col md={3} key={men._id} >
                                              <div className="product">
                                              <Link to={`/Detail/${men._id}`}>
                                              <img src={men.src} alt={men.src}/>
                                              </Link>
                                                <h5>{men.title}</h5>
                                                <p>${men.price}</p>
                                                <p>{men.description}</p>
                                                   <div>
                                                   <button 
                                                   className="addToCart"
                                                   onClick={()=>this.context.addToCartMan(men._id)}>
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
                        
                    
                
                 </div>
        )
    }
}
export default Man;