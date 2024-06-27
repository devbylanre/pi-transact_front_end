import colors from '../../props/colors';
import typography from '../../props/typography';
import classVariance from '../../utils/classVariance';

const textVariants = classVariance('', {
  variants: {
    size: typography.size,
    weight: typography.weight,
    align: typography.align,
    transform: typography.transform,
    verticalAlign: typography.verticalAlign,
    color: colors.text,
    decoration: typography.decoration,
  },
});

export default textVariants;
