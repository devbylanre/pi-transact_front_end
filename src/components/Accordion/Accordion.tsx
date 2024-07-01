import React, { Children, SetStateAction, createContext } from 'react';
import Box from '../Box/Box';
import AccordionProvider from '../../contexts/AccordionContext';
import Flex from '../Flex/Flex';
import useAccordion from '../../hooks/useAccordion';
import AccordionItemProvider from '../../contexts/AccordionItemContext';
import useAccordionItem from '../../hooks/useAccordionItem';

type AccordionComponent = React.ForwardRefExoticComponent<
  Omit<Box.Props, 'ref'> & React.RefAttributes<HTMLElement>
> & {
  Item: React.ForwardRefExoticComponent<
    Omit<Box.Props & { value: string }, 'ref'> &
      React.RefAttributes<HTMLElement>
  >;
  Trigger: React.ForwardRefExoticComponent<
    Omit<Flex.Props, 'ref'> & React.RefAttributes<HTMLElement>
  >;
  Content: React.ForwardRefExoticComponent<
    Omit<Box.Props, 'ref'> & React.RefAttributes<HTMLElement>
  >;
};

const Accordion = React.forwardRef(
  (props: Box.Props & AccordionProvider.Props, ref: Box.Ref) => {
    const { defaultItem, children, type, ...rest } = props;

    return (
      <Box
        ref={ref}
        {...rest}
      >
        <AccordionProvider
          type={type}
          defaultItem={defaultItem}
        >
          {children}
        </AccordionProvider>
      </Box>
    );
  }
) as AccordionComponent;

const Item = React.forwardRef(
  (props: Box.Props & { value: string }, ref: Box.Ref) => {
    const { value, children, ...rest } = props;

    return (
      <Box
        ref={ref}
        {...rest}
      >
        <AccordionItemProvider defaultValue={value}>
          {children}
        </AccordionItemProvider>
      </Box>
    );
  }
);

const Trigger = React.forwardRef((props: Flex.Props, ref: Flex.Ref) => {
  const { ...rest } = props;
  const { toggle } = useAccordion();
  const { value } = useAccordionItem();

  const handleToggle = () => toggle(value);

  return (
    <Flex
      ref={ref}
      onClick={handleToggle}
      {...rest}
    />
  );
});

const Content = React.forwardRef((props: Box.Props, ref: Box.Ref) => {
  const { ...rest } = props;
  const { isActive } = useAccordion();
  const { value } = useAccordionItem();

  if (!isActive(value)) {
    return null;
  }

  return (
    <Box
      ref={ref}
      {...rest}
    />
  );
});

Accordion.Item = Item;
Accordion.Trigger = Trigger;
Accordion.Content = Content;
export default Accordion;
