import React from "react";
import { flattenDeep, cloneDeep } from "lodash";
import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";

import { RouteManagerType, RouterType, Routable } from "./types";
import RouteManagerContext from "./route-manager";
import { wrapChildrenInRoutes } from "./utilities";
import { Page } from "./Page";

interface Props {
  children: Array<Routable>;
  navigation: React.Component; // Only for temporary use in our experiment here
  history: any; // TODO: It's the browser history...
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

export class InternalRouter extends React.Component implements RouterType {
  props: Props;
  private routes: Array<string> = [];

  // TODO: Prolly should rename this and clean up the next and previous logic
  get currentPageIndex() {
    return this.routes.indexOf(window.location.pathname);
  }

  routeManager: RouteManagerType = {
    addRoute: (path: string) => this.routes.push(path),
    getAllRoutes: () => cloneDeep(this.routes),
    setRoutes: (allRoutes: Array<string>) => (this.routes = allRoutes),

    jumpTo: (path: string) => {
      this.props.history.push(path);
    },

    hasNext: () => {
      // TODO: Error handling if currentPageIndex === -1
      return this.routes[this.currentPageIndex + 1] !== undefined;
    },
    hasPrevious: () => {
      // TODO: Error handling if currentPageIndex === -1
      return this.routes[this.currentPageIndex - 1] !== undefined;
    },

    nextPage: () => {
      // TODO: Error handling if currentPageIndex === -1
      const nextPath = this.routes[this.currentPageIndex + 1] || null;
      if (nextPath) this.routeManager.jumpTo(nextPath);
    },
    previousPage: () => {
      // TODO: Error handling if currentPageIndex === -1
      const previousPath = this.routes[this.currentPageIndex - 1] || null;
      if (previousPath) this.routeManager.jumpTo(previousPath);
    }
  };

  // TODO: Construct a list of routes
  constructor(props) {
    super(props);
    const routes: Array<string> = flattenDeep(
      React.Children.map(props.children, child => getRoutes(child))
    );
    this.routeManager.setRoutes(routes);
    console.log("InternalRouter props:", props);
  }

  render() {
    const routedChildren = wrapChildrenInRoutes(this.props.children);
    return (
      <RouteManagerContext.Provider value={this.routeManager}>
        <Switch>{routedChildren}</Switch>
      </RouteManagerContext.Provider>
    );
  }
}

const ConnectedRouter = withRouter(InternalRouter);

export const Router = ({ ...props }: Props) => (
  <BrowserRouter>
    <ConnectedRouter {...props} />
  </BrowserRouter>
);
