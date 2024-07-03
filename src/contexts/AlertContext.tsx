import React, {
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react';

type Context = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
};
export const AlertContext = createContext<Context | null>(null);

namespace AlertProvider {
  export type Props = {
    open?: boolean;
    closeAfter?: number;
    children: ((args: Context) => React.ReactNode) | React.ReactNode;
  };
}

const AlertProvider = ({
  children,
  closeAfter,
  open = false,
}: AlertProvider.Props) => {
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    if (open) {
      setIsOpen(true);
      if (closeAfter) {
        const timer = setTimeout(() => setIsOpen(false), closeAfter);
        return () => clearTimeout(timer);
      }
    }
  }, [open, closeAfter]);

  return (
    <AlertContext.Provider value={{ isOpen, setIsOpen }}>
      {typeof children === 'function'
        ? children({ isOpen, setIsOpen })
        : children}
    </AlertContext.Provider>
  );
};

export default AlertProvider;
