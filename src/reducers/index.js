import { combineReducers } from 'redux'
import cart, * as fromCart from './cart'
import products, * as fromProducts from './products'

export default combineReducers({
  cart,
  products
})

const getAddedIds = state => fromCart.getAddedIds(state.cart)
export const getQuantity = (state, id) => fromCart.getQuantity(state.cart, id)
const getProduct = (state, id) => fromProducts.getProduct(state.products, id)
//export const getType = (state) => fromProducts.getType(state)

export const getTotal = state =>
  getAddedIds(state)
    .reduce((total, id) =>
      parseInt(total + getProduct(state, id).valor_oferta.replace("$","").replace(".","") * getQuantity(state, id)) ,
      0
    )
    .toFixed(2)

export const getCartProducts = state =>
  getAddedIds(state).map(id => ({
    ...getProduct(state, id),
    quantity: getQuantity(state, id)
  }))
