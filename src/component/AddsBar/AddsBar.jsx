import React, { Component } from "react";

import "./addStyle.css";
export default class AddsBar extends Component {
  render() {
    return (
      <div className="add-bar-container container-fluid">
        {" "}
        Free shipping for orders above USD 150{" "}
      </div>
    );
  }
}
