import React from 'react'


const ProductItem = ({ product, onAddToCartClicked }) => (
  <div style={{ marginBottom: 20 }}  className="col-lg-4 col-6 card">
     <div className="row">
         <div className="col-lg-12">
            <img src={product.imagen_url} alt={product.titulo} class="img-thumbnail" />
        </div>
     </div>


     <div className="row">
         <div className="col-lg-6">
            <strong>Producto: </strong> {product.titulo}
         </div>
         <div className="col-lg-6">
            <strong>Calificación: </strong> {product.calificaciones}
        </div>
     </div>
     <div className="row">
         <div className="col-lg-6">
            <strong>Precio: </strong>{product.valor_oferta}
         </div>
         <div className="col-lg-6">
            <strong>Distancia: </strong>{product.distancia_format}
        </div>
     </div>
     <div className="row">
         <div className="col-lg-12 text-center">
            <button className="btn btn-outline-secondary" onClick={onAddToCartClicked}>Agregar</button>
         </div>
      </div>
  </div>
)

export default ProductItem
