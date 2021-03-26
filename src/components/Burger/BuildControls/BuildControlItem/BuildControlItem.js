import React from 'react';

import classes from './BuildControlItem.css'

const buildControlItem = (props) => (

    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <div className={classes.Less}>Les</div>
        <div className={classes.More}>More</div>
    </div>
)

export default buildControlItem;
