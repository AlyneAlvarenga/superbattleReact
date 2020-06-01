import React, {useState} from 'react';
import { Modal } from '@material-ui/core';
import './ModalComp.css';

const ModalComp = () => {  
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const modalBody = (
    <div className="ModalComp-modalBody">
      <h2>Instructions</h2>
      <ol>
        <li>Select one champion from each list;</li>
        <li>Select a condition of battle;</li>
        <li>See who the winner is!</li>
      </ol>
      <button onClick={handleClose}>Close Instructions</button>
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