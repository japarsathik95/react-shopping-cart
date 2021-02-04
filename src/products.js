import React from "react";

export default class Products extends React.Component {
  renderProducts() {
    return this.props.products.map(product => {
      return (
        <div class="product-container" key={product.id}>
          <h1>{product.name}</h1>
          <p>
            <strong>{`${product.price} $`}</strong>
          </p>
          <br />
          <br />
          <React.Fragment>
            {!product.total || product.total === 0 ? (
              <div>
                <button onClick={() => this.props.addItems(product)}>
                  Add to Cart
                </button>
              </div>
            ) : (
              <div>
                <button
                  onClick={() =>
                    this.props.increDecreItems("REMOVE", product.id)
                  }
                >
                  -
                </button>
                <span>{product.total ? product.total : 0}</span>
                <button
                  onClick={() => this.props.increDecreItems("ADD", product.id)}
                >
                  +
                </button>
              </div>
            )}
          </React.Fragment>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h1>Products</h1>
        <div class="product">{this.renderProducts()}</div>
      </div>
    );
  }
}
