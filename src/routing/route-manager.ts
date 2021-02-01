import React from "react";
import { cloneDeep } from "lodash";
import { RouteManager as RouteManagerType } from "./types";

class RouteManager implements RouteManagerType {
  private routes: Array<string> = [];

  addRoute = (path: string) => this.routes.push(path);
  getAllRoutes = () => cloneDeep(this.routes);
  setRoutes = (allRoutes: Array<string>) => (this.routes = allRoutes);

  nextPage = () => {
    const currentPageIndex = this.routes.indexOf(window.location.pathname);
    // TODO: Error handling
    const nextPath = this.routes[currentPageIndex + 1] || null;
    console.log("Next page:", nextPath);
    return nextPath;
  };
  previousPage = () => {
    const currentPageIndex = this.routes.indexOf(window.location.pathname);
    // TODO: Error handling
    const nextPath = this.routes[currentPageIndex - 1] || null;
    console.log("Previous page:", nextPath);
    return nextPath;
  };
}

export const manager = new RouteManager();

export default React.createContext<RouteManagerType>(manager);
