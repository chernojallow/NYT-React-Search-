
import React from "react";
// This Row component lets us use a bootsrap row without having to think about class names
export const Row = ({ fluid, children }) =>
  <div className={`row${fluid ? "-fluid" : ""}`}>
    {children}
  </div>;