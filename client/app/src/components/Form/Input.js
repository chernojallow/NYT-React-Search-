import React from "react";

//This component lets us use a bootstrap input element without worrying about class names
// All of the props passed to this component are spread onto the input element
export const Input = props => (
  <div className="form-group">
    <input className="form-control" {...props} />
  </div>

);

export default Input;