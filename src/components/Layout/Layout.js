import React from "react";
import Aux from "../../hoc/Aux";

/* eslint-disable jsx-a11y/href-no-hash */
const layout = (props) => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main>{props.children}</main>
  </Aux>
);

export default layout;
