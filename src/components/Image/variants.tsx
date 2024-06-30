import border from '../../props/border';
import colors from '../../props/colors';
import layout from '../../props/layout';
import sizing from '../../props/sizing';
import spacing from '../../props/spacing';
import transform from '../../props/transform';
import transition from '../../props/transition';
import classVariance from '../../utils/classVariance';

const imageVariants = classVariance('', {
  variants: {
    p: spacing.p,
    px: spacing.px,
    py: spacing.py,
    pe: spacing.pe,
    ps: spacing.ps,
    pt: spacing.pt,
    pb: spacing.pb,
    m: spacing.m,
    mx: spacing.mx,
    my: spacing.my,
    ms: spacing.ms,
    me: spacing.me,
    mt: spacing.mt,
    mb: spacing.mb,
    opacity: layout.opacity,
    objectFit: layout.objectFit,
    aspectRatio: layout.aspectRatio,
    radius: border.radius,
    border: border.border,
    borderTop: border.top,
    borderBottom: border.bottom,
    borderLeft: border.start,
    borderRight: border.end,
    borderStyle: border.style,
    backgroundColor: colors.background,
    borderColor: colors.border,
    width: sizing.width,
    height: sizing.height,
    size: sizing.size,
    scale: transform.scale,
    scaleX: transform.scaleX,
    scaleY: transform.scaleY,
    rotate: transform.rotate,
    origin: transform.origin,
    translateX: transform.translateX,
    translateY: transform.translateY,
    transition: transition.transition,
    transitionDelay: transition.delay,
    transitionDuration: transition.duration,
    transitionTimingFunction: transition.timing,
  },
});

export default imageVariants;
