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

export interface RouteManager {
  // May rename these
  nextPage(): string | null;
  previousPage(): string | null;
  // How?
  // jumpTo(path: string): void;

  addRoute(path: string): void;
  getAllRoutes(): Array<string>;
  setRoutes(allRoutes: Array<string>): void;
}
