import React from "react";
import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import PropTypes from "prop-types";

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((ingredientsKey) => {
      return [...Array(props.ingredients[ingredientsKey])].map((_, index) => {
        return (
          <BurgerIngredient
            key={ingredientsKey + index}
            type={ingredientsKey}
          />
        );
      });
    })
    .reduce((array, element) => {
      return array.concat(element);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }
  return (
    <div className={classes.burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;

burger.propTypes = {
  ingredients: PropTypes.object.isRequired,
};
