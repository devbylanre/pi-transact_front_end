import React, { SetStateAction, createContext, useState } from 'react';

namespace ModalProvider {
  export type Props = {
    open?: boolean;
    children?:
      | ((props: {
          isOpen: boolean;
          setIsOpen: React.Dispatch<SetStateAction<boolean>>;
        }) => React.ReactNode)
      | React.ReactNode;
  };
}

type Context = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
};

export const ModalContext = createContext<Context | null>(null);

const ModalProvider = ({ open = false, children }: ModalProvider.Props) => {
  const [isOpen, setIsOpen] = useState(open);

  if (isOpen) {
    document.querySelector('body')?.classList.add('portal');
  } else {
    document.querySelector('body')?.classList.remove('portal');
  }

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      {typeof children === 'function'
        ? children({ isOpen, setIsOpen })
        : children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
