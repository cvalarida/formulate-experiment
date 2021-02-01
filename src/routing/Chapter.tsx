import React from "react";
import { Route, Switch } from "react-router-dom";

import { ChapterType } from "./types";
import { wrapChildrenInRoutes } from "./utilities";

// Not sure how to type this...
export class Chapter extends React.Component implements ChapterType {
  readonly routeGroup = false;
  props: ChapterType["props"];

  render() {
    const { path, title, children } = this.props;
    const routedChildren = wrapChildrenInRoutes(children, path);
    return (
      <Route path={path}>
        <h2>{title}</h2>
        <Switch>{routedChildren}</Switch>
      </Route>
    );
  }
}
