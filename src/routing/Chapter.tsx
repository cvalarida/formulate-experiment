import React from "react";
import { Route, Switch } from "react-router-dom";

import { ChapterType } from "./types";
import { wrapChildrenInRoutes } from "./utilities";

interface Props {
  children: React.Component;
}

export const Chapter = ({ path, title, children }) => {
  const routedChildren = wrapChildrenInRoutes(children, path);
  return (
    <Route path={path}>
      <h2>{title}</h2>
      <Switch>{routedChildren}</Switch>
    </Route>
  );
};
