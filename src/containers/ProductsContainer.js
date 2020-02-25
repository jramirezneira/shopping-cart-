import React from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../actions'
import { getVisibleProducts, getType } from '../reducers/products'
import ProductItem from '../components/ProductItem'


function dynamicSort(property) {

    if(property===null || property==="Título")
        return function (a,b) {
                return a["titulo"].localeCompare(b["titulo"]);
        }
    if(property==="Menor Precio")
        return function (a,b) {
                return parseFloat(a.valor_oferta.replace("$","")) - parseFloat(b.valor_oferta.replace("$",""));

        }
    if(property==="Mayor Precio")
        return function (a,b) {
                return parseFloat(b.valor_oferta.replace("$","")) - parseFloat(a.valor_oferta.replace("$",""));

        }
    if(property==="Mejor Calificación")
        return function (a,b) {
                return parseFloat(b.calificaciones_numerica.replace("$","")) - parseFloat(a.calificaciones_numerica.replace("$",""));

        }
    if(property==="Menor distancia")
        return function (a,b) {

                return parseFloat(a.distancia - parseFloat(b.distancia));

        }
        //calificaciones_numerica
}


const ProductsContainer = ({ products, addToCart, type }) => (
  products=  products.sort(dynamicSort(type)),
  <div className="row flex-row">
    {products.map(product =>

      <ProductItem
        key={product.id_descuento}
        product={product}
        onAddToCartClicked={() => addToCart(product.id_descuento)} />,
    )}
  </div>
)



const mapStateToProps = state => ({
  products: getVisibleProducts(state.products),
  type: getType(state)
})


export default connect(
  mapStateToProps,
  { addToCart }
)(ProductsContainer)
