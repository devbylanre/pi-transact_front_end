import React from 'react';
import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from '../../types/polymorphicTypes';
import { VariantProps } from '../../types/variantTypes';
import textVariants from './variants';

namespace Text {
  export type Elements =
    | 'span'
    | 'p'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'label';
  export type Ref = PolymorphicRef<Elements>;
  export type Props = PolymorphicComponentPropWithRef<
    Elements,
    VariantProps<typeof textVariants>
  >;
}

const Text = React.forwardRef((props: Text.Props, ref: Text.Ref) => {
  const {
    as,
    className,
    size = 17,
    align,
    weight = 400,
    color = 'gray-10',
    pseudos,
    transform,
    verticalAlign,
    decoration,
    ...rest
  } = props;

  const Component = (as || 'span') as React.ElementType;

  return (
    <Component
      ref={ref}
      className={textVariants({
        size,
        weight,
        align,
        color,
        transform,
        verticalAlign,
        decoration,
        pseudos,
        className,
      })}
      {...rest}
    />
  );
});

export default Text;
