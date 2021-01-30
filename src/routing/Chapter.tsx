import React from "react";
import { Route, Switch } from "react-router-dom";

import { ChapterType } from "./types";

interface Props {
  children: React.Component;
}

export const Chapter = ({ path, title, children }) => (
  <Route path={path}>
    <h2>{title}</h2>
    <Switch>{children}</Switch>
  </Route>
);
