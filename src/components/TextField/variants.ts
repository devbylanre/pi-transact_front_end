import border from '../../props/border';
import colors from '../../props/colors';
import layout from '../../props/layout';
import sizing from '../../props/sizing';
import spacing from '../../props/spacing';
import typography from '../../props/typography';
import classVariance from '../../utils/classVariance';

const textfieldVariants = classVariance('display-block', {
  variants: {
    border: border.border,
    borderStyle: border.style,
    borderTop: border.top,
    borderBottom: border.bottom,
    borderLeft: border.start,
    borderRight: border.end,
    radius: border.radius,
    width: sizing.width,
    height: sizing.height,
    size: typography.size,
    weight: typography.weight,
    p: spacing.p,
    px: spacing.px,
    py: spacing.py,
    ps: spacing.ps,
    pe: spacing.pe,
    m: spacing.m,
    mx: spacing.mx,
    my: spacing.my,
    ms: spacing.ms,
    me: spacing.me,
    mt: spacing.mt,
    mb: spacing.mb,
    color: colors.text,
    opacity: layout.opacity,
    backgroundColor: colors.background,
    borderColor: colors.border,
  },
});

export default textfieldVariants;
