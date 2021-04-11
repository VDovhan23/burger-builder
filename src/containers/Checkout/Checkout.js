import React, {Component} from 'react';
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

class Checkout extends Component {

    state = {
        ingredients: {
            salad: 1,
            cheese: 1,
            meat: 0,
            bacon: 0
        }
    }

    checkoutCancelledHandler = () =>{
        this.props.history.goBack()
    }
    checkoutContinuedHandler = () =>{
        this.props.history.replace('/checkout/success')
    }

    render() {
        return (
            <CheckoutSummary
                ingredients={this.state.ingredients}
                checkoutCanceled={this.checkoutCancelledHandler}
                checkoutContinued={this.checkoutContinuedHandler}/>
        )
    }
}

export default Checkout;
