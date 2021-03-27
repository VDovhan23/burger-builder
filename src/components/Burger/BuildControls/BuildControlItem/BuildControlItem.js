import React from 'react';

import classes from './BuildControlItem.css'

const buildControlItem = (props) => (

    <div className={classes.BuildControlItem}>
        <div className={classes.Label}>{props.label}</div>
        <div className={classes.Less}
             onClick={props.removed}
             disabled={props.disabled}
        >Les</div>
        <div className={classes.More} onClick={props.added}>More</div>
    </div>
)

export default buildControlItem;
