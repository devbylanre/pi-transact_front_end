import colors from '../../props/colors';
import typography from '../../props/typography';
import classVariance from '../../utils/classVariance';

const textVariants = classVariance('text-inherit', {
  variants: {
    size: typography.size,
    weight: typography.weight,
    align: typography.align,
    transform: typography.transform,
    verticalAlign: typography.verticalAlign,
    color: colors.text,
  },
});

export default textVariants;
