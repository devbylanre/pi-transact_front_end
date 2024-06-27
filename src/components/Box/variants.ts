import border from '../../props/border';
import colors from '../../props/colors';
import distribution from '../../props/distribution';
import flex from '../../props/flex';
import grid from '../../props/grid';
import interaction from '../../props/interaction';
import layout from '../../props/layout';
import sizing from '../../props/sizing';
import spacing from '../../props/spacing';
import transform from '../../props/transform';
import transition from '../../props/transition';
import classVariance from '../../utils/classVariance';

const boxVariants = classVariance('', {
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
    spaceX: spacing.spaceX,
    spaceY: spacing.spaceY,
    top: layout.top,
    left: layout.left,
    right: layout.right,
    bottom: layout.bottom,
    display: layout.display,
    position: layout.position,
    opacity: layout.opacity,
    aspectRatio: layout.aspectRatio,
    border: border.border,
    radius: border.radius,
    borderStyle: border.style,
    borderTop: border.top,
    borderBottom: border.bottom,
    borderLeft: border.start,
    borderRight: border.end,
    alignSelf: distribution.alignSelf,
    justifySelf: distribution.justifySelf,
    placeSelf: distribution.placeSelf,
    width: sizing.width,
    height: sizing.height,
    size: sizing.size,
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
    borderColor: colors.border,
    backgroundColor: colors.background,
    flex: flex.flex,
    flexBasis: flex.basis,
    gridRowSpan: grid.gridRowSpan,
    gridColumnSpan: grid.gridColumnSpan,
    gridRowStart: grid.gridRowStart,
    gridRowEnd: grid.gridRowEnd,
    gridColumnStart: grid.gridColumnStart,
    gridColumnEnd: grid.gridColumnEnd,
  },
});

export default boxVariants;
