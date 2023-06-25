import React from "react";
import { Dialog as MuiDialog, DialogContent } from "@mui/material";
// import DialogContent from "@mui/material/DialogContent";

const Dialog = (props) => {
  const {
    closeHandler,
    open,
    children,
    DialogContentProps = {},
    ...rest
  } = props;
  return (
    <MuiDialog
      open={open}
      onClose={closeHandler}
      PaperProps={{
        sx: { backgroundColor: "var(--page-dialog-bg-color)" },
      }}
      {...rest}
    >
      <DialogContent {...DialogContentProps}>{children}</DialogContent>
    </MuiDialog>
  );
};

export default Dialog;
