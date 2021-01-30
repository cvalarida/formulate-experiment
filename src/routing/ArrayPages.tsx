import React from "react";

import { ArrayPagesType } from "./types";

interface Props {
  children: React.Component;
  count: string | number;
}

export class ArrayPages extends React.Component implements ArrayPagesType {
  props: Props;

  render() {
    return this.props.children;
  }
}
