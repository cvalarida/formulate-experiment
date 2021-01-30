import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import { RouterType } from "./types";

interface Props {
  children: React.Component | Array<React.Component>;
}

export class Router extends React.Component implements RouterType {
  props: Props;

  // TODO: Construct a list of routes

  render() {
    return (
      <BrowserRouter>
        <Switch>{this.props.children}</Switch>
      </BrowserRouter>
    );
  }
}
