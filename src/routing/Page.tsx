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
          const hasPrevious = rm.hasPrevious();
          const hasNext = rm.hasNext();
          return (
            <>
              <h3>{title}</h3>
              {children}
              {hasPrevious && <button onClick={rm.previousPage}>Back</button>}
              {hasNext && <button onClick={rm.nextPage}>Continue</button>}
            </>
          );
        }}
      </RouteManagerContext.Consumer>
    );
  }
}
