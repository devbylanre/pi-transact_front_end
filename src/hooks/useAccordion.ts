import { useContext } from 'react';
import { AccordionContext } from '../contexts/AccordionContext';

const useAccordion = () => {
  let context = useContext(AccordionContext);

  if (context === null) {
    throw new Error('AccordionProvider is missing');
  }

  return context;
};

export default useAccordion;
