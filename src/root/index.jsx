import React, { Component } from "react";
import Controlled from "../components/Controlled";
import UnControlled from "../components/UnControlled";

export default class Root extends Component {
  render() {
    return (
      <div>
        <Controlled />
        <UnControlled /> 
      </div>
    );
  }
}
