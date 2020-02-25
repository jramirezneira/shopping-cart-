import React from 'react'
import { useHistory } from "react-router-dom";
//import PropTypes from 'prop-types'


const Cart  = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
    <div className="row">
        <div className="col-6">{product.titulo}</div>
        <div className="col-4">{product.valor_oferta}</div>
        <div className="col-2">x {product.quantity}</div>
    </div>
    )
  ) : (
    <em>No hay productos en el carro.</em>
  )

  const history = useHistory();
  function handleClick() {
        history.push("/");
  }


  return (
    <div>
        <div className="row">
            <div className="col-12 text-center">
                <h3 >Detalle carro</h3>
            </div>
        </div>
        <div className="row">
            <div className="col-6"><strong>Producto</strong></div>
            <div className="col-4"><strong>Valor</strong></div>
            <div className="col-2"><strong>Catidad</strong></div>
        </div>
        <div>{nodes}</div>
        <h4>Total: &#36;{total}</h4>
        <button onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}>
        Pagar
        </button>
        <button onClick={handleClick}>
        Volver al carro
        </button>
    </div>
  )
}

export default Cart
