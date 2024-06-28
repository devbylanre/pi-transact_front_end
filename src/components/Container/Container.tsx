import React from 'react';
import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from '../../types/polymorphicTypes';
import { VariantProps } from '../../types/variantTypes';
import containerVariants from './variants';

type ContainerElements = 'div' | 'span';
export type ContainerProps = PolymorphicComponentPropWithRef<
  ContainerElements,
  VariantProps<typeof containerVariants>
>;

const Container = React.forwardRef(
  (props: ContainerProps, ref: PolymorphicRef<ContainerElements>) => {
    const {
      as,
      className,
      m,
      mb,
      mt,
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
      container,
      border,
      radius,
      borderStyle,
      borderBottom,
      borderTop,
      borderLeft,
      borderRight,
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
      transitionDuration,
      transitionDelay,
      transitionTimingFunction,
      cursor,
      pointer,
      resize,
      borderColor,
      backgroundColor,
      pseudos,
      ...rest
    } = props;
    const Component = (as || 'div') as React.ElementType;

    return (
      <Component
        ref={ref}
        className={containerVariants({
          m,
          mb,
          mt,
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
          container,
          border,
          radius,
          borderStyle,
          borderBottom,
          borderTop,
          borderLeft,
          borderRight,
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
          transitionDuration,
          transitionDelay,
          transitionTimingFunction,
          cursor,
          pointer,
          resize,
          borderColor,
          backgroundColor,
          pseudos,
          className,
        })}
        {...rest}
      />
    );
  }
);

export default Container;
