import { useContext } from 'react';
import { AvatarContext } from '../contexts/AvatarContext';

const useAvatar = () => {
  const context = useContext(AvatarContext);

  if (!context) {
    throw new Error('AvatarProvider is not available');
  }

  return context;
};

export default useAvatar;
