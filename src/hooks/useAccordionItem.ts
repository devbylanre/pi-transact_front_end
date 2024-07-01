import { useContext } from 'react';
import { AccordionItemContext } from '../contexts/AccordionItemContext';

const useAccordionItem = () => {
  const context = useContext(AccordionItemContext);

  if (!context) {
    throw new Error('AccordionItemProvider is not available');
  }

  return context;
};

export default useAccordionItem;
