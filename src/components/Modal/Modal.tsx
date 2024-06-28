import React, { SetStateAction, useState } from 'react';
import { PolymorphicRef } from '../../types/polymorphicTypes';
import useModal from '../../hooks/useModal';
import Flex, { FlexProps } from '../Flex/Flex';
import Box, { BoxProps } from '../Box/Box';
import Portal from '../../lib/Portal';
import Section, { SectionProps } from '../Section/Section';
import { ModalContext } from '../../contexts/ModalContext';

type ModalProps = {
  open?: boolean;
  children:
    | ((props: {
        isOpen: boolean;
        setIsOpen: React.Dispatch<SetStateAction<boolean>>;
      }) => React.ReactNode)
    | React.ReactNode;
};

const Modal = ({ children, open = false }: ModalProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(open);

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

const Action = React.forwardRef(
  (props: BoxProps, ref: PolymorphicRef<'div'>) => {
    const { ...rest } = props;

    return (
      <Box
        ref={ref}
        {...rest}
      />
    );
  }
);

const Body = React.forwardRef(
  (props: FlexProps, ref: PolymorphicRef<'div'>) => {
    const {
      top = 0,
      left = 0,
      width = 'max',
      position = 'fixed',
      flexDirection = 'column',
      transition = 'all',
      transitionDuration = 300,
      transitionTimingFunction = 'ease-in-out',
      style,
      ...rest
    } = props;
    const { isOpen } = useModal();

    const defaultStyle: React.CSSProperties = {
      opacity: isOpen ? 1 : 0,
      visibility: isOpen ? 'visible' : 'hidden',
    };

    return Portal({
      children: (
        <Flex
          ref={ref}
          top={top}
          left={left}
          width={width}
          position={position}
          transition={transition}
          flexDirection={flexDirection}
          aria-hidden={isOpen ? true : false}
          style={{ ...defaultStyle, ...style }}
          transitionDuration={transitionDuration}
          transitionTimingFunction={transitionTimingFunction}
          {...rest}
        />
      ),
      container: document.querySelector('#portal') as HTMLElement,
    });
  }
);

const Overlay = React.forwardRef(
  (props: BoxProps, ref: PolymorphicRef<'div'>) => {
    const {
      top = 0,
      left = 0,
      children,
      width = 'max',
      height = 'max',
      position = 'fixed',
      style,
      onClick,
      ...rest
    } = props;
    const { setIsOpen } = useModal();

    const defaultStyle: React.CSSProperties = {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    };

    const handleClick = (e: any) => {
      setIsOpen(false);
      onClick && onClick(e);
    };

    return (
      <Box
        ref={ref}
        top={top}
        left={left}
        width={width}
        height={height}
        position={position}
        style={{ ...defaultStyle, ...style }}
        onClick={handleClick}
        {...rest}
      />
    );
  }
);

const Content = React.forwardRef(
  (props: SectionProps, ref: PolymorphicRef<'div'>) => {
    const { style, children, ...rest } = props;

    const defaultStyle: React.CSSProperties = {
      zIndex: 1,
    };

    return (
      <Section
        ref={ref}
        style={{ ...defaultStyle, ...style }}
        {...rest}
      >
        {children}
      </Section>
    );
  }
);

Modal.Trigger = Action;
Modal.Dismiss = Action;
Modal.Body = Body;
Modal.Overlay = Overlay;
Modal.Content = Content;
export default Modal;
