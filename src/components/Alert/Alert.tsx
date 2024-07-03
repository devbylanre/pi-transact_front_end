import React from 'react';
import AlertProvider from '../../contexts/AlertContext';
import useAlert from '../../hooks/useAlert';
import Flex from '../Flex/Flex';
import Button from '../Button/Button';

const Alert = ({ open, children }: AlertProvider.Props) => {
  return <AlertProvider open={open}>{children}</AlertProvider>;
};

const Body = React.forwardRef((props: Flex.Props, ref: Flex.Ref) => {
  const {
    style,
    p = 'md',
    radius = '2xl',
    flexDirection = 'column',
    backgroundColor = 'orange-100',
    ...rest
  } = props;
  const { isOpen } = useAlert();

  const defaultStyle: React.CSSProperties = {
    opacity: isOpen ? 1 : 0,
    height: isOpen ? 'auto' : '0px',
    visibility: isOpen ? 'visible' : 'hidden',
  };

  return (
    <Flex
      ref={ref}
      radius={radius}
      p={p}
      flexDirection={flexDirection}
      backgroundColor={backgroundColor}
      style={{ ...defaultStyle, ...style }}
      {...rest}
    />
  );
});

const Dismiss = React.forwardRef((props: Button.Props, ref: Button.Ref) => {
  const {
    onClick,
    px = 'min',
    height = 'fit',
    color = 'current',
    backgroundColor = 'inherit',
    pseudos = { hover: { backgroundColor: 'inherit' } },
    ...rest
  } = props;
  const { isOpen, setIsOpen } = useAlert();

  if (!isOpen) {
    return null;
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsOpen(false);
    onClick && onClick(e);
  };

  return (
    <Button
      ref={ref}
      px={px}
      height={height}
      onClick={handleClick}
      backgroundColor={backgroundColor}
      pseudos={pseudos}
      {...rest}
    />
  );
});

const Action = React.forwardRef((props: Button.Props, ref: Button.Ref) => {
  const {
    px = 'min',
    height = 'fit',
    color = 'current',
    backgroundColor = 'inherit',
    pseudos = { hover: { backgroundColor: 'inherit' } },
    ...rest
  } = props;
  const { isOpen, setIsOpen } = useAlert();

  if (!isOpen) {
    return null;
  }

  return (
    <Button
      ref={ref}
      px={px}
      height={height}
      backgroundColor={backgroundColor}
      pseudos={pseudos}
      {...rest}
    />
  );
});

Alert.Body = Body;
Alert.Dismiss = Dismiss;
Alert.Action = Action;
export default Alert;
