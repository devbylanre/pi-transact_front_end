import React from 'react';
import {
  Formik,
  FormikConfig,
  FormikFormProps,
  FormikValues,
  Form as FormWrapper,
} from 'formik';
import Flex from '../Flex/Flex';
import FieldProvider from '../../contexts/FieldContext';
import Text from '../Text/Text';
import useField from '../../hooks/useField';
import Box from '../Box/Box';

namespace Form {
  export type Props<T> = FormikConfig<T>;
}

const Form = <Values extends FormikValues>(props: Form.Props<Values>) => {
  return <Formik {...props} />;
};

const Wrapper = (props: FormikFormProps) => {
  return <FormWrapper {...props} />;
};

const Field = React.forwardRef(
  (props: Omit<Box.Props, 'children'> & FieldProvider.Props, ref: Box.Ref) => {
    const { name, children, spaceY = 'xs', ...rest } = props;

    return (
      <FieldProvider name={name}>
        <Box
          ref={ref}
          spaceY={spaceY}
          {...rest}
        >
          {children as React.ReactNode}
        </Box>
      </FieldProvider>
    );
  }
);

const Bag = React.forwardRef((props: Flex.Props, ref: Flex.Ref) => {
  const { meta } = useField();
  const {
    border = 1,
    height = 40,
    width = 'full',
    radius = 'xl',
    position = 'relative',
    borderStyle = 'solid',
    borderColor = 'gray-90',
    backgroundColor = 'white',
    style,
    ...rest
  } = props;

  const defaultStyle: React.CSSProperties = {
    overflow: 'hidden',
  };

  return (
    <Flex
      ref={ref}
      width={width}
      radius={radius}
      height={height}
      border={border}
      position={position}
      borderStyle={borderStyle}
      borderColor={
        meta.error ? 'red-50' : meta.touched ? 'primary-50' : borderColor
      }
      backgroundColor={backgroundColor}
      style={{ ...defaultStyle, ...style }}
      {...rest}
    />
  );
});

const Label = React.forwardRef((props: Text.Props, ref: Text.Ref) => {
  const { as = 'label', style, size = 16, weight = 400, ...rest } = props;

  const defaultStyle: React.CSSProperties = {
    display: 'block',
  };

  return (
    <Text
      as={as}
      ref={ref}
      size={size}
      weight={weight}
      style={{ ...defaultStyle, ...style }}
      {...rest}
    />
  );
});

const Helper = React.forwardRef((props: Text.Props, ref: Text.Ref) => {
  const { size = 14, weight = 400, color, children, ...rest } = props;
  const { meta } = useField();

  return (
    <Text
      as={'p'}
      size={size}
      weight={weight}
      color={meta.touched && meta.error ? 'red-50' : 'gray-40'}
      {...rest}
    >
      {meta.error ? meta.error : children}
    </Text>
  );
});

Form.Wrapper = Wrapper;
Form.Field = Field;
Form.Bag = Bag;
Form.Label = Label;
Form.Helper = Helper;
export default Form;
