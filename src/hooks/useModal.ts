import { useContext } from 'react';
import { ModalContext } from '../contexts/ModalContext';

const useModal = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('ModalProvider is missing');
  }

  return context;
};

export default useModal;
