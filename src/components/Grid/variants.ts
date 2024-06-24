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

const gridVariants = classVariance('', {
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
    gap: spacing.gap,
    gapX: spacing.gapX,
    gapY: spacing.gapY,
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
    flex: flex.flex,
    flexBasis: flex.basis,
    alignSelf: distribution.alignSelf,
    placeSelf: distribution.placeSelf,
    justifySelf: distribution.justifySelf,
    alignItems: distribution.alignItems,
    placeItems: distribution.placeItems,
    justifyItems: distribution.justifyItems,
    alignContent: distribution.alignContent,
    placeContent: distribution.placeContent,
    justifyContent: distribution.justifyContent,
    gridRow: grid.gridRow,
    gridColumn: grid.gridColumn,
    gridRowStart: grid.gridRowStart,
    gridRowEnd: grid.gridRowEnd,
    gridColumnStart: grid.gridColumnStart,
    gridColumnEnd: grid.gridColumnEnd,
    gridRowSpan: grid.gridRowSpan,
    gridColumnSpan: grid.gridColumnSpan,
  },
});

export default gridVariants;
