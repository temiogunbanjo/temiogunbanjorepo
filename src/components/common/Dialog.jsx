import React from "react";
import Grow from "@mui/material/Grow";
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
      hideBackdrop={false}
      transitionDuration={500}
      TransitionProps={{
        appear: true,
        easing: "ease-out",
      }}
      TransitionComponent={Grow}
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
