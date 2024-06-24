import border from '../../props/border';
import colors from '../../props/colors';
import interaction from '../../props/interaction';
import layout from '../../props/layout';
import sizing from '../../props/sizing';
import spacing from '../../props/spacing';
import transform from '../../props/transform';
import transition from '../../props/transition';
import classVariance from '../../utils/classVariance';

const sectionVariants = classVariance('w-full', {
  variants: {
    m: spacing.m,
    mb: spacing.mb,
    mt: spacing.mt,
    ms: spacing.ms,
    me: spacing.me,
    mx: spacing.mx,
    my: spacing.my,
    p: spacing.p,
    pt: spacing.pt,
    pb: spacing.pb,
    ps: spacing.ps,
    pe: spacing.pe,
    px: spacing.px,
    py: spacing.py,
    spaceX: spacing.spaceX,
    spaceY: spacing.spaceY,
    top: layout.top,
    left: layout.left,
    bottom: layout.bottom,
    right: layout.right,
    display: layout.display,
    position: layout.position,
    border: border.border,
    radius: border.radius,
    borderStyle: border.style,
    borderBottom: border.bottom,
    borderTop: border.top,
    borderLeft: border.start,
    borderRight: border.end,
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
    transitionDuration: transition.duration,
    transitionDelay: transition.delay,
    transitionTimingFunction: transition.timing,
    cursor: interaction.cursor,
    pointer: interaction.pointer,
    resize: interaction.resize,
    borderColor: colors.border,
    backgroundColor: colors.background,
  },
});

export default sectionVariants;
