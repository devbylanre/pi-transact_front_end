import React from 'react';
import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from '../../types/polymorphicTypes';
import { VariantProps } from '../../types/variantType';
import boxVariants from './variants';

type BoxElements = 'div' | 'span';
type BoxProps = PolymorphicComponentPropWithRef<
  BoxElements,
  VariantProps<typeof boxVariants>
>;

const Box = React.forwardRef(
  (props: BoxProps, ref: PolymorphicRef<BoxElements>) => {
    const {
      as = 'div',
      className,
      m,
      mt,
      mb,
      ms,
      me,
      mx,
      my,
      p,
      pt,
      pb,
      ps,
      pe,
      px,
      py,
      spaceX,
      spaceY,
      top,
      left,
      bottom,
      right,
      display,
      position,
      border,
      borderStyle,
      borderBottom,
      borderTop,
      borderLeft,
      borderRight,
      alignSelf,
      justifySelf,
      placeSelf,
      width,
      height,
      scale,
      scaleX,
      scaleY,
      origin,
      translateX,
      translateY,
      transition,
      transitionDelay,
      transitionDuration,
      transitionTimingFunction,
      cursor,
      pointer,
      resize,
      borderColor,
      backgroundColor,
      ...rest
    } = props;
    const Component = (as || 'div') as React.ElementType;

    return (
      <Component
        ref={ref}
        className={boxVariants({
          m,
          mt,
          mb,
          ms,
          me,
          mx,
          my,
          p,
          pt,
          pb,
          ps,
          pe,
          px,
          py,
          spaceX,
          spaceY,
          top,
          left,
          bottom,
          right,
          display,
          position,
          border,
          borderStyle,
          borderBottom,
          borderTop,
          borderLeft,
          borderRight,
          alignSelf,
          justifySelf,
          placeSelf,
          width,
          height,
          scale,
          scaleX,
          scaleY,
          origin,
          translateX,
          translateY,
          transition,
          transitionDelay,
          transitionDuration,
          transitionTimingFunction,
          cursor,
          pointer,
          resize,
          borderColor,
          backgroundColor,
          className,
        })}
        {...rest}
      />
    );
  }
);

export default Box;
