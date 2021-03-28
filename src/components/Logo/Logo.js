import React from 'react'
import logoPath from "../../assets/burger-logo.png"
import classes from "./Logo.css"
const logo = (props) => {
    return (
        <div className={classes.Logo}>
            <img src={logoPath} alt="logo"/>
        </div>
    )
}

export default logo;
