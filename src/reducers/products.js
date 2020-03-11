import { combineReducers } from 'redux'
import { RECEIVE_PRODUCTS, CHOOSE_TYPE_SEARCH, GET_LOCATION } from '../constants/ActionTypes'


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

const byLoocation= (state = {}, action) => {
  switch (action.type) {
      case GET_LOCATION:
        return {
            ...state,
             locate:action.position
        }
      default:
          return state
  }
}


//type: types.GET_LOCATION,
//payload: position

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

export default combineReducers({byId, visibleIds,  byTypes, byLoocation})

export const getProduct = (state, id) => state.byId[id]

export const getLocation = (state) => state.products.byLoocation !== undefined ? state.products.byLoocation:null

export const getType = (state) => state.products.byTypes.type !== undefined ? state.products.byTypes.type:null

export const getVisibleProducts = state => state.visibleIds.map(id => getProduct(state, id))


