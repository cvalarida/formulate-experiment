import React from "react";

export interface RouterType {}

export interface PageType extends React.Component {
  props: {
    path: string; // Used by the Router directly
    exact?: boolean;
    children: React.Component;
    title: string;
  };
}

export interface ChapterType extends React.Component {
  props: {
    path: string; // Used by the Router directly
    exact?: boolean;
    children: Array<PageType>;
    title: string;
  };
}

// Not ideal, but it works
export type Routable = PageType | ChapterType;

export interface RouteManagerType {
  hasNext(): boolean;
  hasPrevious(): boolean;

  // May rename these
  nextPage(): void;
  previousPage(): void;
  jumpTo(path: string): void;

  addRoute(path: string): void;
  getAllRoutes(): Array<string>;
  setRoutes(allRoutes: Array<string>): void;
}
