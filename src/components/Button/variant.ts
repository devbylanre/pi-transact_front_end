import border from '../../props/border';
import colors from '../../props/colors';
import distribution from '../../props/distribution';
import interaction from '../../props/interaction';
import sizing from '../../props/sizing';
import spacing from '../../props/spacing';
import transform from '../../props/transform';
import transition from '../../props/transition';
import typography from '../../props/typography';
import classVariance from '../../utils/classVariance';

const buttonVariants = classVariance('display-inline-flex', {
  variants: {
    p: spacing.p,
    pe: spacing.pe,
    ps: spacing.ps,
    pt: spacing.pt,
    pb: spacing.pb,
    px: spacing.px,
    py: spacing.py,
    m: spacing.m,
    me: spacing.me,
    ms: spacing.ms,
    mt: spacing.mt,
    mb: spacing.mb,
    mx: spacing.mx,
    my: spacing.my,
    gap: spacing.gap,
    gapX: spacing.gapX,
    gapY: spacing.gapY,
    border: border.border,
    radius: border.radius,
    borderStyle: border.style,
    borderTop: border.top,
    borderBottom: border.bottom,
    borderLeft: border.start,
    borderRight: border.end,
    alignItems: distribution.alignItems,
    alignContent: distribution.alignContent,
    alignSelf: distribution.alignSelf,
    justifySelf: distribution.justifySelf,
    justifyItems: distribution.justifyItems,
    justifyContent: distribution.justifyContent,
    placeSelf: distribution.placeSelf,
    width: sizing.width,
    height: sizing.height,
    scale: transform.scale,
    scaleX: transform.scaleX,
    scaleY: transform.scaleY,
    origin: transform.origin,
    rotate: transform.rotate,
    translateX: transform.translateX,
    translateY: transform.translateY,
    transition: transition.transition,
    transitionDelay: transition.delay,
    transitionDuration: transition.duration,
    transitionTimingFunction: transition.timing,
    cursor: interaction.cursor,
    pointer: interaction.pointer,
    resize: interaction.resize,
    color: colors.text,
    borderColor: colors.border,
    backgroundColor: colors.background,
    size: typography.size,
    align: typography.align,
    weight: typography.weight,
    transform: typography.transform,
    verticalAlign: typography.verticalAlign,
  },
});

export default buttonVariants;
