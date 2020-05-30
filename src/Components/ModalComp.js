import React, {useState} from 'react';
import { Modal } from '@material-ui/core';

const ModalComp = () => {
  console.log('mounted');
  
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const modalBody = (
    <div>
      <h2>Text in a modal</h2>
      <p>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
      <button onClick={handleClose}>Close</button>
    </div>
  );
  
  return (
    <>
    <button onClick={handleOpen}>See Instructions</button>
    <Modal
      open={open}
      onClose={handleClose}
    >
      {modalBody}
    </Modal>
    </>
  )
}

export default ModalComp;