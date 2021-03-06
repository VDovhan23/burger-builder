import React, {Component} from 'react';

import Wrapper from '../../hoc/Wrapper'
import classes from './Layout.css'
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {
                showSideDrawer: !prevState.showSideDrawer
            }
        })
    }

    render() {
        return (
            <Wrapper>
                <Toolbar drawerToggleClicked ={this.sideDrawerToggleHandler}/>
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}
                />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Wrapper>
        )
    }

}

export default Layout;
