import React from 'react'
import { connect } from 'react-redux'
import { deleteToCart } from '../actions'
import { getTotal, getCartProducts } from '../reducers'
import Summary from '../components/Summary'
import { useHistory } from "react-router-dom";


const SummaryContainer = ({ products, total, deleteToCart }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
    <Summary
        product={product}
        total={total}
        onDeleteClicked={() => deleteToCart(product.id_descuento)} />
    )
  ) : (
    <em>Agregue productos al carro.</em>
  )
    const history = useHistory();
    function handleClick() {
        history.push("/carro");
      }

  return (
    <div>
      <div className="row">
            <div className="col-12 text-center">
                <h3 >Detalle carro</h3>
            </div>
        </div>
      <div className="row">
            <div className="col-4"><strong>Producto</strong></div>
            <div className="col-3"><strong>Valor</strong></div>
            <div className="col-2"><strong>Catidad</strong></div>
            <div className="col-3"></div>
        </div>
      <div>{nodes}</div>
      <div>
        <h4>Total: &#36;{total}</h4>
      </div>
      <div className="row" >
            <div className="col-12 text-center" ><button className="text-center" type="button" onClick={handleClick}>Pagar</button></div>
      </div>
    </div>
  )
}


const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state),
 // amuntByproduct:getQuantity(state, id)
})

export default connect(
  mapStateToProps,
  { deleteToCart }
)(SummaryContainer)
