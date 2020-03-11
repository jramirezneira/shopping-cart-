import {
  ADD_TO_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE,
  DELETE_TO_CART
} from '../constants/ActionTypes'
import { addToLocalStorageCart, removeItemLocalStorageCart, removeLocalStorageCart } from '../localStore'

const initialState = {
  addedIds: [],
  quantityById: {},
  deleteById: {}
}

const addedIds = (state = initialState.addedIds, action) => {
   // const dr= state.filter(( id }) => id != action.productId);
   
  switch (action.type) {
    case ADD_TO_CART:
      if (state.indexOf(action.productId) !== -1) {
        return state
      }
      addToLocalStorageCart(action.productId);
      return [ ...state/*, action.productId*/ ]
    case DELETE_TO_CART:
      removeItemLocalStorageCart(action.productId);
      return state//.filter( id  => id !== action.productId)
    default:
      return state
  }
}

const quantityById = (state = initialState.quantityById, action) => {

     const { productId } = action
  switch (action.type) {
    case ADD_TO_CART:

      return { ...state,
        //[productId]: (state[productId] || 0) + 1
      }
    case DELETE_TO_CART:
     
      return { ...state,
            [productId]: 0
         }
    default:
      return state
  }
}


export const getQuantity = (state, productId) =>  state.quantityById[productId] || 0

export const getAddedIds = state => state.addedIds

const cart = (state = initialState, action) => {

  switch (action.type) {
    case CHECKOUT_REQUEST:
      removeLocalStorageCart();
      return initialState
    case CHECKOUT_FAILURE:
      return action.cart
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action)
      }
  }
}

export default cart
