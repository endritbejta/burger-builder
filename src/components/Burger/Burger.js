import React from "react";

import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
  let transformedIng = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((cur, el) => {
      return cur.concat(el);
    }, []);
  //   console.log(transformedIng);

  if (transformedIng.length === 0)
    transformedIng = <p>Please start adding ingredients!</p>;

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIng}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
