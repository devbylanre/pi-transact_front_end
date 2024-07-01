import React from 'react';
import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from '../../types/polymorphicTypes';
import { VariantProps } from '../../types/variantTypes';
import sectionVariants from './variants';

namespace Section {
  export type Elements = 'section' | 'div' | 'header' | 'footer';
  export type Ref = PolymorphicRef<Elements>;
  export type Props = PolymorphicComponentPropWithRef<
    Elements,
    VariantProps<typeof sectionVariants>
  >;
}

const Section = React.forwardRef((props: Section.Props, ref: Section.Ref) => {
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
  const Component = (as || 'section') as React.ElementType;

  return (
    <Component
      className={sectionVariants({
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
});

export default Section;
