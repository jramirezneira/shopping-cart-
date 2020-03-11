import * as types from '../constants/ActionTypes'

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products
})



export const  getAllProducts =  () => ( dispatch ) => {  
 
    //Recupera la localización del usuario
    navigator.geolocation.getCurrentPosition(function (p) {
      localStorage.setItem("latitude", p.coords.latitude);
      localStorage.setItem("longitude", p.coords.longitude)
    }, function () {
      // en caso de error informa ubicación por defecto
      localStorage.setItem("latitude", -33.45774340);
      localStorage.setItem("longitude",-70.65735780)
    
    }, {maximumAge:60000, timeout:5000, enableHighAccuracy:true});

    var lat = localStorage.latitude;
    var lon = localStorage.longitude; 


    fetch("https://ww4.cuponatic.com/get?c=Santiago&latitud="+lat+"&longitud="+lon+"&")
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
    dispatch(chooseTypeSearchUnsafe(type))
}

const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
})

export const addToCart = productId => (dispatch) => {
    dispatch(addToCartUnsafe(productId));
}

const deleteToCartUnsafe = productId => ({
  type: types.DELETE_TO_CART,
  productId
})

export const deleteToCart = productId => (dispatch) => {
  dispatch(deleteToCartUnsafe(productId))
}

export const checkout = products => (dispatch) => {
  dispatch({
    type: types.CHECKOUT_REQUEST
  })
 
}




