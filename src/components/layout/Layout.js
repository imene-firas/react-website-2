import React from "react";
import classes from "./Layout.module.css";
import MainNavigationBar from "./MainNavigationBar";
function Layout(props) {
  return (
    <div>
      <MainNavigationBar />
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
