import React from "react";
// The Col component lets us size bootstrap columns with less syntax

export const Col = ({ size, children }) =>
  <div className={size.split(" ").map(size => "col-" + size).join(" ")}>
    {children}
  </div>;