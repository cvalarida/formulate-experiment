import React from "react";
import { Route } from "react-router-dom";

import { PageType, ChapterType } from "./types";

export const wrapChildrenInRoutes = (
  children: Array<PageType | ChapterType>,
  basePath: string = ""
) =>
  React.Children.map(children, child => {
    const { path, exact } = child.props;
    return (
      <Route path={basePath + path} exact={exact}>
        {child}
      </Route>
    );
  });
