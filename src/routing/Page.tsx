import React from "react";
import { Link } from "react-router-dom";

import { PageType } from "./types";
import RouteManagerContext from "./route-manager";

// Not sure how to type this...
export class Page extends React.Component implements PageType {
  // Sure would be nice to use a function component with this property...
  readonly routeGroup = false;
  props: PageType["props"];

  render() {
    const { title, children } = this.props;
    return (
      <RouteManagerContext.Consumer>
        {rm => {
          const previousPage = rm.previousPage();
          const nextPage = rm.nextPage();
          return (
            <>
              <h3>{title}</h3>
              {children}
              {previousPage && <Link to={previousPage}>Back</Link>}
              {nextPage && <Link to={nextPage}>Continue</Link>}
            </>
          );
        }}
      </RouteManagerContext.Consumer>
    );
  }
}
