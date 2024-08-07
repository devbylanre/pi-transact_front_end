import React from 'react';
import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from '../../types/polymorphicTypes';
import { VariantProps } from '../../types/variantTypes';
import buttonVariants from './variant';

namespace Button {
  export type Ref = PolymorphicRef<'button'>;
  export type Props = PolymorphicComponentPropWithRef<
    'button',
    VariantProps<typeof buttonVariants>
  >;
}

const Button = React.forwardRef((props: Button.Props, ref: Button.Ref) => {
  const {
    as: Component = 'button',
    className,
    p,
    pe,
    ps,
    pt,
    pb,
    px = 'lg',
    py,
    m,
    me,
    ms,
    mt,
    mb,
    mx,
    my,
    gap,
    gapX,
    gapY,
    border = 0,
    radius = '2xl',
    borderStyle,
    borderTop,
    borderBottom,
    borderLeft,
    borderRight,
    alignSelf,
    alignContent,
    alignItems = 'center',
    justifyContent = 'center',
    justifyItems,
    justifySelf,
    placeSelf,
    width,
    height = 48,
    scale,
    scaleX,
    scaleY,
    origin,
    rotate,
    translateX,
    translateY,
    transition = 'all',
    transitionDelay,
    transitionDuration = 300,
    transitionTimingFunction = 'ease-in-out',
    cursor = 'pointer',
    pointer,
    resize,
    color = 'black',
    borderColor,
    backgroundColor = 'primary-60',
    size = 16,
    align,
    weight = 500,
    transform,
    verticalAlign,
    pseudos = { hover: { backgroundColor: 'primary-70' } },
    ...rest
  } = props;

  return (
    <Component
      ref={ref}
      className={buttonVariants({
        p,
        pe,
        ps,
        pt,
        pb,
        px,
        py,
        m,
        me,
        ms,
        mt,
        mb,
        mx,
        my,
        gap,
        gapX,
        gapY,
        border,
        radius,
        borderStyle,
        borderTop,
        borderBottom,
        borderLeft,
        borderRight,
        alignSelf,
        alignContent,
        alignItems,
        justifyContent,
        justifyItems,
        justifySelf,
        placeSelf,
        width,
        height,
        scale,
        scaleX,
        scaleY,
        origin,
        rotate,
        translateX,
        translateY,
        transition,
        transitionDelay,
        transitionDuration,
        transitionTimingFunction,
        cursor,
        pointer,
        resize,
        color,
        borderColor,
        backgroundColor,
        size,
        align,
        weight,
        transform,
        verticalAlign,
        pseudos,
        className,
      })}
      {...rest}
    />
  );
});

export default Button;
