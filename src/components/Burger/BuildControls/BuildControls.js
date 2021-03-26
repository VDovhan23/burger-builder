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
        {controls.map(item =>{
            return <BuildControlItem key={item.label} label={item.label}/>
        })}

    </div>
)

export default buildControls;
