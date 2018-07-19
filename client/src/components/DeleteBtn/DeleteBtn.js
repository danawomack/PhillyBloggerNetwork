import React from "react";
import "./DeleteBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const DeleteBtn = props => (
  // <span className="delete-btn" {...props}>
  //   ✗
  // </span>
   <span className="delete-btn" {...props}>
   <a class="waves-effect waves-light btn-small"><i class="material-icons left">delete</i></a>
 </span>
);

export default DeleteBtn;
