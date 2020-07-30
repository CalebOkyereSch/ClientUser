import React, { Component } from "react";
import style from "./scroller.css";

export default class Scroller extends Component {
  render() {
    return (
      <div
        className="container"
        style={{ marginBottom: "50px", marginTop: "50px" }}
      >
        <nav className={style.navBar}>
          <div className={style.container}>
            <ul className={style.nav}>{this.props.children}</ul>
          </div>
        </nav>
      </div>
    );
  }
}
