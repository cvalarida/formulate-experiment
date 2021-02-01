import React from "react";
import { flattenDeep } from "lodash";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { RouterType, Routable } from "./types";
import RouteManagerContext, { manager } from "./route-manager";
import { wrapChildrenInRoutes } from "./utilities";
import { Page } from "./Page";

interface Props {
  children: Array<Routable>;
  navigation: React.Component; // Only for temporary use in our experiment here
}

// Could use some refactoring...
const getRoutes = (
  component: Routable,
  basePath: string = ""
): Array<string> => {
  // If it's a page, return the route
  // TODO: Figure out what's up with this TS error "type does not exist on
  // type Routable"
  // TODO: Probably should use react-router's generatePath()
  if (component.type === Page) return [basePath + component.props.path];

  // If it's a chapter, return the list of all routes (with basename)
  const childRoutes = React.Children.map(component.props.children, child =>
    getRoutes(child as Routable, component.props.path)
  );

  return flattenDeep(childRoutes);
};

export class Router extends React.Component implements RouterType {
  props: Props;

  // TODO: Construct a list of routes
  constructor(props) {
    super(props);
    const routes: Array<string> = flattenDeep(
      React.Children.map(props.children, child => getRoutes(child))
    );
    manager.setRoutes(routes);
  }

  render() {
    console.log(manager.getAllRoutes());
    const routedChildren = wrapChildrenInRoutes(this.props.children);
    return (
      <RouteManagerContext.Provider value={manager}>
        <BrowserRouter>
          {this.props.navigation}
          <Switch>{routedChildren}</Switch>
        </BrowserRouter>
      </RouteManagerContext.Provider>
    );
  }
}
