import React from "react";
//List item renders a bootstrap list item
export const ListItem = props =>
  <li className="list-group-item">
    {props.children}
  </li>;