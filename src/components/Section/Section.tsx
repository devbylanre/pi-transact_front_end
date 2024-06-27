import React from 'react';
import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from '../../types/polymorphicTypes';
import { VariantProps } from '../../types/variantTypes';
import sectionVariants from './variants';

type SectionElements = 'section' | 'div' | 'header' | 'footer';
type SectionProps = PolymorphicComponentPropWithRef<
  SectionElements,
  VariantProps<typeof sectionVariants>
>;

const Section = React.forwardRef(
  (props: SectionProps, ref: PolymorphicRef<SectionElements>) => {
    const {
      as,
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
        })}
        {...rest}
      />
    );
  }
);

export default Section;
