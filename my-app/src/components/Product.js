import React, { Component } from 'react';
import './css/Product.css';
import {dataContext} from './ContextAPI';
import {Row,Col,Container} from 'reactstrap';
import {Link} from 'react-router-dom';
import Man from './Man';
import Women from './Women';
class Product extends Component{
    static contextType = dataContext;
    constructor(props){
        super(props);
        this.state={
            products:[],
            item:''
        }
    }
    render(){
        return(
               <div>
                <div className="gender" id="man">
                    <div className='choseGenderMan'>                        
                        <Link to='/Man/'>Man</Link>   
                    </div>
                    <div className='choseGenderWomen' id="women">
                        <Link to='/Women/'>Women</Link>
                    </div>
                </div>
           </div>
        )
    }
}
export default Product;