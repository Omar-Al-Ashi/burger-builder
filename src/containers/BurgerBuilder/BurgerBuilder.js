import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Layout/Burger/Burger";
import BuildControls from "../../components/Layout/Burger/BuildControls/BuildControls";

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            meat: 0,
            cheese: 0,
        },
    };

    render(props) {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls />
            </Aux>
        );
    }
}

export default BurgerBuilder;
