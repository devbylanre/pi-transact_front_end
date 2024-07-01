import React from 'react';
import useModal from '../../hooks/useModal';
import Portal from '../../lib/Portal';
import ModalProvider from '../../contexts/ModalContext';
import Flex from '../Flex/Flex';
import Box from '../Box/Box';
import Section from '../Section/Section';

const Modal = ({ children, open }: ModalProvider.Props) => {
  return <ModalProvider open={open}>{children}</ModalProvider>;
};

const Action = React.forwardRef((props: Box.Props, ref: Box.Ref) => {
  const { ...rest } = props;

  return (
    <Box
      ref={ref}
      {...rest}
    />
  );
});

const Body = React.forwardRef((props: Flex.Props, ref: Flex.Ref) => {
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
});

const Overlay = React.forwardRef((props: Box.Props, ref: Box.Ref) => {
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
});

const Content = React.forwardRef((props: Section.Props, ref: Section.Ref) => {
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
});

Modal.Trigger = Action;
Modal.Dismiss = Action;
Modal.Body = Body;
Modal.Overlay = Overlay;
Modal.Content = Content;
export default Modal;
