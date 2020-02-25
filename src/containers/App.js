import React, {Component, Fragment} from "react";
import Products from './ProductsContainer'
//import Cart from './CartContainer'
import Summary from './SummaryContainer'
import SelectContainer from './SelectContainer'
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import { addToCart } from '../actions'
//import ProductItem from '../components/ProductItem'



//const App = () => (
class App extends Component {
    render() {
        return (
            <Fragment>
                <div className="row ml-3">
                    <div className="col-lg-12">
                        <div className="col-lg-8 col-12">
                            <h2 className="text-center">Carro de compras</h2>
                            <SelectContainer   />
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-8 col-12">
                                <Products />
                            </div>
                            <div className="col-lg-4 col-12">
                                 <Summary />
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
            )
        }
}

export default App
