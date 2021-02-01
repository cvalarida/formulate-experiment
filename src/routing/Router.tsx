import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { RouterType, PageType, ChapterType } from "./types";
import { wrapChildrenInRoutes } from "./utilities";

interface Props {
  children: Array<PageType | ChapterType>;
  navigation: React.Component; // Only for temporary use in our experiment here
}

export class Router extends React.Component implements RouterType {
  props: Props;

  // TODO: Construct a list of routes

  render() {
    const routedChildren = wrapChildrenInRoutes(this.props.children);
    return (
      <BrowserRouter>
        {this.props.navigation}
        <Switch>{routedChildren}</Switch>
      </BrowserRouter>
    );
  }
}
