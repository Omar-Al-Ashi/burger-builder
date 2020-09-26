import BuildControls from "../BuildControls";
import classes from "./BuildControl.css";
import PropTypes from "prop-types";

import React from "react";

const buildControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.More}>+</button>
            <button className={classes.Less}>-</button>
        </div>
    );
};

export default buildControl;

buildControl.propTypes = {
    label: PropTypes.string.isRequired,
};
