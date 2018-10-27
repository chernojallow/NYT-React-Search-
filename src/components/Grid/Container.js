import React from "react";
// This container component allows us to use a bootstrap without worrying about class names
export const Container = ({ fluid, children }) =>
  <div className={`container${fluid ? "-fluid" : ""}`}>
    {children}
  </div>;