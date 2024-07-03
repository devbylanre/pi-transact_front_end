import colors from '../../props/colors';
import typography from '../../props/typography';
import classVariance from '../../utils/classVariance';

const anchorVariants = classVariance('', {
  variants: {
    size: typography.size,
    weight: typography.weight,
    align: typography.align,
    transform: typography.align,
    decoration: typography.decoration,
    verticalAlign: typography.verticalAlign,
    color: colors.text,
    backgroundColor: colors.background,
  },
});

export default anchorVariants;
