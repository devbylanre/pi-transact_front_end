import React, { SetStateAction, createContext, useState } from 'react';

type AvatarContextType = {
  isError: boolean;
  setIsError: React.Dispatch<SetStateAction<boolean>>;
};

export const AvatarContext = createContext<AvatarContextType | null>(null);

type AvatarProviderProps = React.PropsWithChildren & { hasError?: boolean };

const AvatarProvider = ({
  children,
  hasError = false,
}: AvatarProviderProps) => {
  const [isError, setIsError] = useState<boolean>(hasError);

  return (
    <AvatarContext.Provider value={{ isError, setIsError }}>
      {children}
    </AvatarContext.Provider>
  );
};

export default AvatarProvider;
