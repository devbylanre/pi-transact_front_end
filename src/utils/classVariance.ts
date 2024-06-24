import {
  BreakpointsVariantMap,
  PseudosVariantMap,
  VariantMap,
  Variants,
} from '../types/variantType';

const addResponsiveClasses = <T extends VariantMap>(
  classes: string[],
  prefix: string,
  breakpoints: BreakpointsVariantMap<T>
) => {
  Object.entries(breakpoints).forEach(([breakpoint, value]) => {
    if (value !== undefined) {
      classes.push(
        breakpoint === 'initial'
          ? `${prefix}-${value}`
          : `${breakpoint}:${prefix}-${value}`
      );
    }
  });
};

const classVariance =
  <T extends VariantMap>(base: string, config: { variants: T }) =>
  (
    props: Variants<T> & { className?: string; pseudos?: PseudosVariantMap<T> }
  ) => {
    const classes = [base];

    // generate classes for responsive classes
    Object.entries(props).map(([key, value]) => {
      const variant = config.variants[key];

      if (variant && value !== undefined) {
        if (typeof value === 'object') {
          addResponsiveClasses(
            classes,
            variant.prefix,
            value as BreakpointsVariantMap<T>
          );
        } else {
          classes.push(`${variant.prefix}-${value}`);
        }
      }
      return classes;
    });

    if (props.pseudos) {
      Object.entries(props.pseudos).map(([pseudo, object]) => {
        Object.entries(object).map(([key, value]) => {
          const variant = config.variants[key];

          if (variant && value !== undefined) {
            if (typeof value === 'object') {
              addResponsiveClasses(
                classes,
                `${pseudo}:${variant.prefix}`,
                value
              );
            } else {
              classes.push(`${pseudo}:${variant.prefix}-${value}`);
            }
          }
          return null;
        });
        return null;
      });
    }

    if (props.className !== undefined) {
      classes.push(props.className);
    }

    return classes.join(' ').trim();
  };

export default classVariance;
