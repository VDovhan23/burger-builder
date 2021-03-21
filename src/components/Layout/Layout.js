import React from 'react';

import Wrapper from '../../hoc/Wrapper'
import classes from './Layout.css'

const layout = (props) =>(
    <Wrapper>
        <div>toolbar...</div>

        <main className={classes.Content}>
            {props.children}
        </main>
    </Wrapper>

);

export default layout;