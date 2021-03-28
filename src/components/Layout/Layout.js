import React from 'react';

import Wrapper from '../../hoc/Wrapper'
import classes from './Layout.css'
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SiteDrawer from "../Navigation/SiteDrawer/SiteDrawer";

const layout = (props) =>(
    <Wrapper>
        <Toolbar/>
        <SiteDrawer/>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Wrapper>

);

export default layout;
