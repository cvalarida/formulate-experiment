import React from "react";
import { Route } from "react-router-dom";

import { PageType } from "./types";

interface Props {
  children: React.Component;
  route: string;
}

export const Page = ({ path, title, children }) => (
  <Route path={path}>
    <h3>{title}</h3>
    {children}
  </Route>
);
