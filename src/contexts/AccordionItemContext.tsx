import { SetStateAction, createContext, useState } from 'react';

namespace AccordionItemProvider {
  export type Props = {
    children: React.ReactNode;
    defaultValue: string;
  };
}

type ItemContext = {
  value: string;
  setValue: React.Dispatch<SetStateAction<string>>;
};

export const AccordionItemContext = createContext<ItemContext | null>(null);

const AccordionItemProvider = ({
  defaultValue,
  children,
}: AccordionItemProvider.Props) => {
  const [value, setValue] = useState(defaultValue);

  return (
    <AccordionItemContext.Provider value={{ value, setValue }}>
      {children}
    </AccordionItemContext.Provider>
  );
};

export default AccordionItemProvider;
