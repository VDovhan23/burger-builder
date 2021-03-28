import React from 'react';
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngridient/BurgerIngredient'

const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients)
        .map(ingKey => {
            return [...Array(props.ingredients[ingKey])]
                .map((_, i) => {
                    return <BurgerIngredient key={ingKey + i} type={ingKey}/>
                })
        })
        .reduce((prev, current)=>{
            return prev.concat(current)
        }, [])

    if (transformedIngredients.length === 0){
        transformedIngredients = <p> Start Build you burger</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );

}

export default burger;
