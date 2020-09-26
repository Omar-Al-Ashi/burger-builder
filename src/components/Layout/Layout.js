import React from "react";
import Aux from "../../hoc/Aux";
import classes from "./Layout.css";

/* eslint-disable jsx-a11y/href-no-hash */
const layout = (props) => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.content}>{props.children}</main>
  </Aux>
);

export default layout;
