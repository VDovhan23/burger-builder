import React from 'react';
import BuildControlItem from "./BuildControlItem/BuildControlItem";
import classes from './BuildControls.css'

const controls = [
    {label: "Salad", type: "salad"},
    {label: "Meat", type: "meat"},
    {label: "Bacon", type: "bacon"},
    {label: "Cheese", type: "cheese"},
];

const buildControls = (props) => (

    <div className={classes.BuildControls}>
        <p>Current Price: <strong> {props.price.toFixed(2)} </strong></p>
        {controls.map(item => {
            return <BuildControlItem
                key={item.label}
                label={item.label}
                added={() => props.ingredientAdded(item.type)}
                removed={() => props.ingredientRemoved(item.type)}
                disabled={props.disabled[item.type]}
            />
        })}

    </div>
)

export default buildControls;
