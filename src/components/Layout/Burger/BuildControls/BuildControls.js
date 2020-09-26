import React from "react";
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    { label: "Salad", type: "salad" },
    { label: "Meat", type: "meat" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
];

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            {controls.map((control, index) => {
                return <BuildControl key={index} label={control.label} />;
            })}
        </div>
    );
};

export default buildControls;
