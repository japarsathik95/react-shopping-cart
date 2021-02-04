import React from "react";
import Products from "./products";
import Cart from "./cart";
import _ from "lodash";
import "./style.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          id: 1,
          name: "shirt",
          price: 50,
          stock: 5
        },
        {
          id: 2,
          name: "Tshirt",
          price: 40,
          stock: 6
        },
        {
          id: 3,
          name: "bag",
          price: 20,
          stock: 6
        },
        {
          id: 4,
          name: "pants",
          price: 60,
          stock: 3
        },
        {
          id: 5,
          name: "collor Tshirt",
          price: 20,
          stock: 2
        },
        {
          id: 6,
          name: "Vneck Tshirt",
          price: 10,
          stock: 5
        }
      ],
      cart: {
        items: []
      }
    };
  }

  addItems(product) {
    const items = [...this.state.cart.items];
    const cart = {
      id: product.id,
      item: product.name,
      price: product.price,
      total: 1
    };
    if (!items.some(item => item.id === cart.id)) {
      items.push(cart);
    }
    this.setState({ cart: { items, ...this.state.cart.items } });
  }

  increDecreItems(type, id) {
    const items = [...this.state.cart.items];
    const index = items.findIndex(item => item.id === id);
    const isExist = items.find(item => item.id === id);
    if (isExist) {
      switch (type) {
        case "ADD":
          const totalcount = items[index].total;
          if (items[index].stock > totalcount) {
            items[index].total++;
          } else {
            alert("stock over");
          }
          break;
        default:
          const count = items[index].total;
          console.log(count);
          if (count < 2) {
            items.splice(index, 1);
          } else {
            items[index].total--;
          }
      }
      this.setState({ cart: { items, ...this.state.cart.items } });
    }
  }

  render() {
    const merged = _.merge(
      _.keyBy(this.state.cart.items, "id"),
      _.keyBy(this.state.products, "id")
    );
    var values = _.values(merged);
    return (
      <div>
        <Products
          products={values}
          addItems={data => this.addItems(data)}
          increDecreItems={(type, id) => this.increDecreItems(type, id)}
        />
        <Cart cart={this.state.cart} />
      </div>
    );
  }
}
