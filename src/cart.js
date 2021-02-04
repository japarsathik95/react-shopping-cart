import React from "react";

export default class Cart extends React.Component {
  renderCart() {
    return this.props.cart.items.map(item => {
      return (
        <tr id={item.id}>
          <td>{item.item}</td>
          <td>{item.total}</td>
          <td>{`${item.total * item.price} $`}</td>
        </tr>
      );
    });
  }

  returnTotal() {
    const totalItems = this.props.cart.items.reduce(
      (accumulator, currentValue) => {
        return accumulator + currentValue.total;
      }
    );
    const totalPrice = this.props.cart.items.reduce(
      (accumulator, currentValue) => {
        return accumulator + currentValue.total * currentValue.price;
      }
    );
    return (
      <tr>
        <td />
        <td>{totalItems}</td>
        <td>{totalPrice}</td>
      </tr>
    );
  }

  render() {
    return (
      <div>
        <h1>Cart</h1>
        {this.props.cart.items.length > 0 ? (
          <div class="cart-container">
            <table>
              <tr>
                <th>Product</th>
                <th>No of Product</th>
                <th>Price</th>
              </tr>
              {this.renderCart()}
            </table>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
