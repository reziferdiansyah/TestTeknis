import React, { Component } from "react";
import ShoppingCartList from "../containers/ShoppingCartList";

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container d-flex flex-column">
          <br/>
          <div className="card bg-light">
            <h1 className="text-center card-header">Shopping cart</h1>
          </div>
          <br/>
        <ShoppingCartList />
      </div>
    );
  }
}
