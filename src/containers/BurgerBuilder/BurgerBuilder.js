import React, {Component} from "react";
import Wrapper from "../../hoc/Wrapper";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";


class BurgerBuilder extends Component {

    state = {
        ingredients : {
            salad: 0,
            bacon:0,
            meat:0,
            cheese: 0
        }
    }


    addIngredientHandler = (type) => {

    }

    removeIngredientHandler = (type) => {

    }

    render() {
        return(
            <Wrapper>
                <div>
                    <Burger ingredients={this.state.ingredients}/>
                </div>
                <div>
                    <BuildControls/>
                </div>
            </Wrapper>
        );
    }
}

export default BurgerBuilder;
