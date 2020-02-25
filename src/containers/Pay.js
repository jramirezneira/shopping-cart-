import React, {Component, Fragment} from "react";
//import Products from './ProductsContainer'
import Cart from './CartContainer'
//import SelectContainer from './SelectContainer'
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import { addToCart } from '../actions'
//import ProductItem from '../components/ProductItem'



//const App = () => (
class Pay extends Component {
    render() {
        return (
             <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                             <Cart />
                        </div>
                    </div>
                 </div>
              </Fragment>
            )
        }
}

export default Pay
