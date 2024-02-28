import * as React from "react";
import { ButtonGroup } from "@mui/material";

import { SnackbarContext } from "../../context/SnackbarContext";

type severityType = "error" | "warning" | "info" | "success";

function SimpleSnackbar() {
  const snackbarContext = React.useContext(SnackbarContext);

  const handleClick = (message: string, severity?: severityType) => {
    if (snackbarContext) {
      snackbarContext.openSnackbar(message, severity);
    }
  };

  // "error" | "warning" | "info" | "success"
  return (
    <ButtonGroup>
      <button onClick={() => handleClick("hello")}>Say hello</button>;
      <button onClick={() => handleClick("hello", "error")}>Error!</button>;
      <button onClick={() => handleClick("hello", "warning")}>Warning</button>;
      <button onClick={() => handleClick("hello", "success")}>Success</button>;
      <button onClick={() => handleClick("hello", "info")}>
        Info (default)
      </button>
      ;
    </ButtonGroup>
  );
}

export default SimpleSnackbar;
