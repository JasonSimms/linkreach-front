//path: src/Context/SnackbarContext.tsx
import React, { createContext, useState, ReactNode } from "react";
import Snackbar from "@mui/material/Snackbar";
import Slide, { SlideProps } from "@mui/material/Slide";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

type severityType = "error" | "warning" | "info" | "success" | undefined;

interface SnackbarContextProps {
  openSnackbar: (message: string | Error, severity: severityType) => void;
  // closeSnackbar: () => void;
}

interface SnackbarProviderProps {
  children: ReactNode;
}

export const SnackbarContext = createContext<SnackbarContextProps | undefined>(
  undefined
);

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="up" />;
}

export function SnackbarProvider({
  children,
}: SnackbarProviderProps): JSX.Element {
  const [state, setState] = useState<{
    open: boolean;
    message: string;
    severity: severityType;
  }>({
    open: false,
    message: "no snack message",
    severity: "info",
  });

  const openSnackbar = (message: string | Error, severity?: severityType) => {
    if (message instanceof Error) {
      message = message.message;
    }
    setState({
      open: true,
      message: message,
      severity: severity || "info",
    });
  };

  const closeSnackbar = () => {
    setState({
      ...state,
      open: false,
    });
  };

  const action = (
    <React.Fragment>
      {/* <Button color="secondary" size="small" onClick={closeSnackbar}>
        X
      </Button> */}
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={closeSnackbar}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <SnackbarContext.Provider value={{ openSnackbar }}>
      {children}
      <Snackbar
        open={state.open}
        autoHideDuration={6000}
        onClose={closeSnackbar}
        TransitionComponent={SlideTransition}
        action={action}
      >
        <Alert
          onClose={closeSnackbar}
          severity={state.severity}
          // variant="filled"
          sx={{ width: "100%" }}
        >
          {state.message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
}
