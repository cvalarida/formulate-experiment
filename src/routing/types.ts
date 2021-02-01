export interface RouterType {}

export interface PageType {
  props: {
    children: React.Component;
    path: string; // used by the Router directly, not by the Page
    title: string;
    exact: boolean;
  };
}

export interface ArrayPagesType {}

export interface ChapterType {
  props: {
    children: React.Component;
    path: string; // used by the Router directly, not by the Page
    title: string;
    exact: boolean;
  };
}
