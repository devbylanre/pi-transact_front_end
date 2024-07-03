import { useContext } from 'react';
import { AlertContext } from '../contexts/AlertContext';

const useAlert = () => {
  const context = useContext(AlertContext);

  if (context === null) {
    throw new Error('AlertProvider is not available or missing');
  }

  return context;
};

export default useAlert;
