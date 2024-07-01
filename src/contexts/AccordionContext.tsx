import { createContext, useState } from 'react';

namespace AccordionProvider {
  export type Props = {
    defaultItem?: string;
    children: React.ReactNode;
    type?: 'single' | 'multiple';
  };
}

type Context = {
  isActive: (value: string) => boolean;
  toggle: (value: string) => void;
};
export const AccordionContext = createContext<Context | null>(null);

const AccordionProvider = ({
  defaultItem = '',
  children,
  type = 'single',
}: AccordionProvider.Props) => {
  const [items, setItems] = useState([defaultItem]);

  const isActive = (value: string) => {
    return items.includes(value);
  };

  const toggle = (value: string) => {
    if (isActive(value)) {
      if (type === 'single') {
        setItems(['']);
      } else {
        setItems(items.filter((item) => item !== value));
      }
    } else {
      if (type === 'single') {
        setItems([value]);
      } else {
        setItems((prevItems) => [...prevItems, value]);
      }
    }
  };

  return (
    <AccordionContext.Provider value={{ isActive, toggle }}>
      {children}
    </AccordionContext.Provider>
  );
};

export default AccordionProvider;
