import * as types from '../constants/ActionTypes'
//import _products from './../api/products.json'

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products
})


export const  getAllProducts =  () => dispatch => {



    fetch("https://ww4.cuponatic.com/get?c=Santiago&latitud=-33.45774340&longitud=-70.65735780&")
     .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
     .then(json =>
          dispatch(receiveProducts(json))
     )
}

const chooseTypeSearchUnsafe = typechoose => ({
  type: types.CHOOSE_TYPE_SEARCH,
  typechoose
})

export const chooseTypeSearch = type => (dispatch) => {

 // if (getState().products.byId[productId].inventory > 0) {
    dispatch(chooseTypeSearchUnsafe(type))
 // }
}

const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
})

export const addToCart = productId => (dispatch, getState) => {
 // if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId))
 // }
}



const deleteToCartUnsafe = productId => ({
  type: types.DELETE_TO_CART,
  productId
})



export const deleteToCart = productId => (dispatch, getState) => {
  dispatch(deleteToCartUnsafe(productId))
}


export const checkout = products => (dispatch, getState) => {

  dispatch({
    type: types.CHECKOUT_REQUEST
  })
  /*shop.buyProducts(products, () => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      cart
    })
    // Replace the line above with line below to rollback on failure:
    // dispatch({ type: types.CHECKOUT_FAILURE, cart })
  })*/
}
