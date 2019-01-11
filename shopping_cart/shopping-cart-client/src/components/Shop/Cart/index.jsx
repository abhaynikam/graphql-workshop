import React from 'react';

const Cart = (props) => {
  return(
    <div className="jumbotron col-sm-3 ml-2">
      <h4>Cart</h4>
      <ul className="list-group">
        {props.selectedProducts.map((selectedProduct) => {
          return(
            <li className="list-group-item d-flex justify-content-between align-items-center" key={selectedProduct.id}>
              {selectedProduct.name}
              <div className="">
                <span class="badge badge-primary badge-pill">{selectedProduct.quantity}</span>
                <span class="badge badge-error badge-pill">${selectedProduct.price}</span>
                <span class="badge badge-error badge-pill" onClick={() => props.handleRemoveProduct(selectedProduct)}>x</span>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="mt-3"><strong>Total:</strong> ${props.total}</div>
    </div>
  );
}

export default Cart;
