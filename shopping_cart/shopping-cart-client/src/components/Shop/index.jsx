import * as R from "ramda";
import React, { Component } from 'react';
import { Mutation } from 'react-apollo';

import Cart from './Cart';
import ProductList from './Product/Index';

import { CREATE_ORDER } from './mutations';

class Shop extends Component {
  state = {
    total: 0,
    user_id: 1,
    lineItems: [],
    selectedProducts: []
  };

  handlAddToCart = (product) => {
    const { lineItems, total, selectedProducts } = this.state;
    const newTotal = total + product.price;

    let productInCart = R.find(R.propEq('name', product.name))(selectedProducts);
    let lineItemInCart = R.find(R.propEq('product_id', product.id))(lineItems);

    if(productInCart) {
      productInCart["quantity"] += 1;
      lineItemInCart["quantity"] += 1;
    } else {
      selectedProducts.push({ ...product, quantity: 1 });
      lineItems.push({ product_id: product.id, quantity: 1 });
    }

    this.setState({ total: newTotal, lineItems, selectedProducts });
  }

  handleRemoveProduct = (removeProduct) => {
    const { selectedProducts, lineItems } = this.state;

    let newSelectedProductList = R.filter((selectedProduct) => selectedProduct.name != removeProduct.name, selectedProducts)
    let newLineItems = R.filter((lineItem) => lineItem.product_id != removeProduct.id, lineItems)
    this.setState({ selectedProducts: newSelectedProductList, lineItems: newLineItems });
  }


  render() {
    return(
      <Mutation mutation={CREATE_ORDER}>
        {(createOrder) => {

          const handleCheckout = () => {
            const orderInput = R.pick(['total', 'user_id', 'lineItems'], this.state);
            if(R.isEmpty(orderInput.lineItems)) {
              alert('Please select items before checkout!!');
            }
            debugger;

            createOrder({ variables: { orderInput }}).then(({ data: success }) => {
              alert('success');
            })
          }

          return(
            <div className="container">
              <div className="row mb-3">
                <button className="btn btn-primary pull-right" onClick={handleCheckout}>Checkout</button>
              </div>
              <div className="row">
                <div className="jumbotron col-sm-8">
                  <h4>All Products</h4>
                  <ProductList handlAddToCart={this.handlAddToCart} />
                </div>
                <Cart selectedProducts={this.state.selectedProducts} total={this.state.total} handleRemoveProduct={this.handleRemoveProduct} />
              </div>
              <div className="row">
                <button className="btn btn-primary pull-right" onClick={handleCheckout}>Checkout</button>
              </div>
            </div>
          );
        }}
      </Mutation>
    );
  }
}

export default Shop;
