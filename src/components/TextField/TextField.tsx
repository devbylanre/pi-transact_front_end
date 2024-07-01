import React from 'react';
import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from '../../types/polymorphicTypes';
import useField from '../../hooks/useField';
import { VariantProps } from '../../types/variantTypes';
import textfieldVariants from './variants';

namespace TextField {
  export type Props = PolymorphicComponentPropWithRef<
    'input',
    VariantProps<typeof textfieldVariants>
  >;
  export type Ref = PolymorphicRef<'input'>;
}

const TextField = React.forwardRef(
  (props: TextField.Props, ref: TextField.Ref) => {
    const {
      className,
      border = 0,
      borderStyle,
      borderTop,
      borderBottom,
      borderLeft,
      borderRight,
      radius,
      width = 'full',
      height = 'full',
      size = 16,
      weight = 400,
      p,
      px = 'md',
      py,
      ps,
      pe,
      m,
      mx,
      my,
      ms,
      me,
      mt,
      mb,
      opacity,
      color = 'gray-10',
      backgroundColor = 'inherit',
      borderColor,
      pseudos = { placeholder: { color: 'gray-60' } },
      style,
      ...rest
    } = props;
    const { helper } = useField();

    const handleBlur = () => helper.setTouched(false);
    const handleFocus = () => helper.setTouched(true);
    const handleChange = (e: any) => {
      helper.setValue(e.target.value);
    };

    const defaultStyle: React.CSSProperties = {
      outline: 'none',
    };

    return (
      <input
        ref={ref}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onChange={handleChange}
        className={textfieldVariants({
          border,
          borderStyle,
          borderTop,
          borderBottom,
          borderLeft,
          borderRight,
          radius,
          width,
          height,
          size,
          weight,
          p,
          px,
          py,
          ps,
          pe,
          m,
          mx,
          my,
          ms,
          me,
          mt,
          mb,
          opacity,
          color,
          backgroundColor,
          borderColor,
          pseudos,
          className,
        })}
        style={{ ...defaultStyle, ...style }}
        {...rest}
      />
    );
  }
);

export default TextField;
