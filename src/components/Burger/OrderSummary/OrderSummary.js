import React from 'react';
import Wrapper from '../../../hoc/Wrapper'

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
            <p>Continue ?</p>
        </Wrapper>
    )

}

export default orderSummary;
