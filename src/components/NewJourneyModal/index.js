import React from 'react';
import Modal from 'react-modal';
import { Button, Input } from '@material-ui/core';
import './index.css'


// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#new-journey-modal');

const NewJourneyModal = ({ isOpen, closeModal }) => {
  const customStyles = {
    content: {
      color: '#9196AB',
      top: '40%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      padding: '3% 6% 5% 6%',
      borderRadius: '10px',
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel='Anything for test'
      style={customStyles}>
      <div id='new-journey-modal-container'>
        <h3 id='new-journey-modal-title'>Nova Jornada</h3>
        <p id='new-journey-modal-description'>Dê um <b>nome</b> para essa jornada</p>
        <Input id='new-journey-modal-input' />
        <p id='new-journey-modal-extra-information'>
          Você poderá alterar essa informação depois.
      </p>
        <div>
          <Button onClick={closeModal} color='primary'>
            Confirmar
        </Button>
          <Button onClick={closeModal}>Cancelar</Button>
        </div>
      </div>
    </Modal>
  );
}

export default NewJourneyModal;