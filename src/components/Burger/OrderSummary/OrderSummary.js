import React from 'react';
import Wrapper from '../../../hoc/Wrapper'
import Button from "../../UI/Button/Button";

const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        return <li><span key={igKey} style={{
            textTransform: 'capitalize'
        }}>{igKey}</span>:{props.ingredients[igKey]}</li>
    });

    return (
        <Wrapper>
            <h3> Your order</h3>
            <p> Ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Total Price: <strong> {props.price.toFixed(2)}</strong></p>

            <Button
                btnType="Danger"
                clicked={props.cancel}
            >CANCEL</Button>
            <Button
                btnType="Success"
                clicked={props.success}
            >CONTINUE</Button>
        </Wrapper>
    )

}

export default orderSummary;
