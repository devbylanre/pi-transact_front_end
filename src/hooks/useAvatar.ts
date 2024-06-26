import React, { useContext } from 'react';
import { avatarContext } from '../contexts/AvatarContext';

const useAvatar = () => {
  const context = useContext(avatarContext);

  if (!context) {
    throw new Error('AvatarProvider is not available');
  }

  return context;
};

export default useAvatar;
