import React, { Component } from 'react'
import { Dialog, DialogOverlay, DialogContent, VisuallyHidden } from "@reach/dialog";
import "@reach/dialog/styles.css";

export default function DeleteConfirmation(props) {
  const [showDialog, setShowDialog] = React.useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);
  return (
    <div>
      <button onClick={open}>Open Dialog</button>
      <Dialog isOpen={showDialog} onDismiss={close}>
        <button className="close-button" onClick={close}>
          {/* <VisuallyHidden>Close</VisuallyHidden> */}
          <span aria-hidden>×</span>
        </button>
        <p>Hello there. I am a dialog</p>
      </Dialog>
    </div>
  );
}