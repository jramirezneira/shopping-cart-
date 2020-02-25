import { combineReducers } from 'redux'
import { RECEIVE_PRODUCTS, ADD_TO_CART, CHOOSE_TYPE_SEARCH } from '../constants/ActionTypes'




const products = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        inventory: state.inventory - 1
      }
    default:
      return state
  }
}


const byTypes = (state = {}, action) => {
    switch (action.type) {
        case CHOOSE_TYPE_SEARCH:
        return {
            ...state,
             type:action.typechoose
        }
        default:
            return state
    }
}


const byId = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        ...action.products.reduce((obj, product) => {
          obj[product.id_descuento] = product
          return obj
        }, {})
      }
    default:
      const { productId } = action
      if (productId) {
        return {
          ...state,
          [productId]: products(state[productId], action)
        }
      }
      return state
  }
}

const visibleIds = (state = [], action) => {

  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.products.map(product => product.id_descuento)
    default:
      return state
  }
}

export default combineReducers({
  byId,
  visibleIds,
  byTypes
})

export const getProduct = (state, id) =>
  state.byId[id]

export const getType = (state) => state.products.byTypes.type !== undefined ? state.products.byTypes.type:null

export const getVisibleProducts = state =>
  state.visibleIds.map(id => getProduct(state, id))
