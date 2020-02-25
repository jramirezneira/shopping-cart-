import React from 'react'


const Summary  = ({ product, total, onDeleteClicked }) => (

    <div className="row">
        <div className="col-4">{product.titulo}</div>
        <div className="col-3">{product.valor_oferta}</div>
        <div className="col-2"><strong> x {product.quantity}</strong></div>
        <div className="col-3"><button onClick={onDeleteClicked}> Eliminar </button></div>
    </div>



)

export default Summary
