import React, { Component } from 'react';
import { Query } from 'react-apollo';

import { FETCH_ALL_PRODUCTS } from '../queries';

class ProductList extends Component {

  render() {
    return(
      <Query query={FETCH_ALL_PRODUCTS}>
        {({ data, loading, error }) => {
          if(loading) return <p>loading...</p>;

          return(
            <div className="products-wrapper row">
              {data.products.map((product) => {
                return(
                  <div className="col-sm-4 product-item mt-3">
                    <img className="product-image"  />
                    <div className="col-sm-12 text-center">
                      <h4>{product.name}</h4>
                    </div>
                    <div className="col-sm-12 text-center">
                      <strong>${product.price}</strong>
                    </div>
                    <div className="col-sm-12 text-center">
                      <button className="btn btn-primary" onClick={() => this.props.handlAddToCart(product)}>Add to cart</button>
                    </div>
                  </div>
                )
              })}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default ProductList;
