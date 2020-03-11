import { combineReducers } from 'redux'
import cart  from './cart'
import products, * as fromProducts from './products'
import { getLocalStorageCart } from '../localStore'

export default combineReducers({ cart, products})
const getProduct = (state, id) => fromProducts.getProduct(state.products, id)

export const getTotal = state => 
{
  let total=0;
  getCartProducts(state).map (( product) =>   
      product.valor_oferta !== undefined ? total=parseInt(total + product.valor_oferta.replace("$","").replace(".","") * product.quantity) :0   
  )
  return total
}

export const getCartProducts = state =>(
  Object.entries(getLocalStorageCart()).map(([id, cantidad]) => ({      
    ...getProduct(state, id),
    quantity: cantidad//getQuantity(state, id)
  })));


