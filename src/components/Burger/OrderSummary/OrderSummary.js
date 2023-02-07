import React, { Component } from "react";

import Button from "../../UI/Button/Button";
import Aux from "../../../hoc/Auxiliary/Auxiliary";

class OrderSummary extends Component {
  // this can remain a functional component because the modal that we just changed wraps ordersummary and doesnt let order summary to update unlerr the oorder button is clicked, so we dont need componentDidUpdate
  // componentDidUpdate() {
  //   console.log("[OrderSummary] didUpdate");
  // }
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span>{igKey}</span>: {this.props.ingredients[igKey]}
          </li>
        );
      }
    );
    return (
      <Aux>
        <h3>Your order</h3>
        <p>A delicious burger with the following ingredients: </p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: {this.props.price.toFixed(2)} $</strong>
        </p>
        <p>Continue to Checkout</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancel}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinue}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
