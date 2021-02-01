import React from "react";
import { Route } from "react-router-dom";

import { PageType } from "./types";

// Not sure how to type this...
export const Page = ({ title, children }: PageType["props"]) => (
  <>
    <h3>{title}</h3>
    {children}
  </>
);
