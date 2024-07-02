import React from 'react';
import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from '../../types/polymorphicTypes';
import { VariantProps } from '../../types/variantTypes';
import imageVariants from './variants';

namespace Image {
  export type Props = PolymorphicComponentPropWithRef<
    'img',
    VariantProps<typeof imageVariants>
  >;
  export type Ref = PolymorphicRef<'img'>;
}

const Image = React.forwardRef((props: Image.Props, ref: Image.Ref) => {
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
    opacity,
    backgroundColor,
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
    transition = 'all',
    transitionDelay = 200,
    transitionDuration = 300,
    transitionTimingFunction = 'ease-in-out',
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
        opacity,
        backgroundColor,
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
});

export default Image;
