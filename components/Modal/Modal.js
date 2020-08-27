import React from "react";
import { Toast, ToastHeader, ToastBody, Button } from "reactstrap";
import classes from "./Modal.module.css";

const Modal = ({ open, clicked }) => {
  return (
    <div className={`${classes.Modal} ${open ? classes.open : classes.closed}`}>
      <h4>A Fan of Thrones</h4>
      <p>Form Sent Successfuly!</p>
      <Button onClick={clicked}>Close</Button>
    </div>
  );
};

export default Modal;
