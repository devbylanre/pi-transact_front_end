import React from 'react';
import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from '../../types/polymorphicTypes';
import { VariantProps } from '../../types/variantType';
import imageVariants from './variants';

export type ImageProps = PolymorphicComponentPropWithRef<
  'img',
  VariantProps<typeof imageVariants>
>;

const Image = React.forwardRef(
  (props: ImageProps, ref: PolymorphicRef<'img'>) => {
    const {
      as = 'img',
      className,
      p,
      px,
      py,
      pe,
      ps,
      pt,
      pb,
      m,
      mx,
      my,
      ms,
      me,
      mt,
      mb,
      objectFit,
      aspectRatio,
      radius,
      border,
      borderTop,
      borderBottom,
      borderLeft,
      borderRight,
      borderStyle,
      backgroundCOlor,
      borderColor,
      width,
      height,
      size,
      scale,
      scaleX,
      scaleY,
      rotate,
      origin,
      translateX,
      translateY,
      transition,
      transitionDelay,
      transitionDuration,
      transitionTimingFunction,
      pseudos,
      ...rest
    } = props;
    const Component = as;

    return (
      <Component
        ref={ref}
        className={imageVariants({
          p,
          px,
          py,
          pe,
          ps,
          pt,
          pb,
          m,
          mx,
          my,
          ms,
          me,
          mt,
          mb,
          objectFit,
          aspectRatio,
          radius,
          border,
          borderTop,
          borderBottom,
          borderLeft,
          borderRight,
          borderStyle,
          backgroundCOlor,
          borderColor,
          width,
          height,
          size,
          scale,
          scaleX,
          scaleY,
          rotate,
          origin,
          translateX,
          translateY,
          transition,
          transitionDelay,
          transitionDuration,
          transitionTimingFunction,
          pseudos,
          className,
        })}
        {...rest}
      />
    );
  }
);

export default Image;
