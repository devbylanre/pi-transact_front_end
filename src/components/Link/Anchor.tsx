import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from '../../types/polymorphicTypes';
import { VariantProps } from '../../types/variantTypes';
import anchorVariants from './variants';

namespace Anchor {
  export type Ref = PolymorphicRef<'a'>;
  export type Props = PolymorphicComponentPropWithRef<
    'a',
    NavLinkProps & VariantProps<typeof anchorVariants>
  >;
}

const Anchor = React.forwardRef((props: Anchor.Props, ref: Anchor.Ref) => {
  const {
    style,
    size = 16,
    weight = 500,
    align,
    color = 'blue-50',
    decoration = 'none',
    backgroundColor,
    verticalAlign,
    pseudos = { hover: { color: 'blue-40', decoration: 'underline' } },
    className,
    ...rest
  } = props;

  const defaultStyle: React.CSSProperties = {
    textUnderlineOffset: '0.3em',
    transition: 'all 0.3s ease-in-out',
  };

  return (
    <NavLink
      ref={ref}
      className={anchorVariants({
        size,
        weight,
        align,
        decoration,
        verticalAlign,
        color,
        backgroundColor,
        pseudos,
        className,
      })}
      style={{ ...defaultStyle, ...style }}
      {...rest}
    />
  );
});

export default Anchor;
