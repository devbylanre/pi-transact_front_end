import { VariantMap } from '../types/variantTypes';

const ASPECT_RATIO = [
  '1/1',
  '1/2',
  '2/1',
  '3/1',
  '3/2',
  '4/1',
  '4/3',
  '5/4',
  '9/16',
  '14/9',
  '16/7',
  '16/9',
  '16/10',
  'auto',
] as const;
const OPACITY = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const CONTAINERS = [
  'min',
  'xxs',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  'full',
] as const;
const DISPLAY = [
  'grid',
  'flex',
  'block',
  'table',
  'hidden',
  'inline',
  'inline-grid',
  'inline-flex',
  'inline-block',
] as const;
const OBJECT_FITS = ['fit', 'cover', 'contain', 'scale-down'] as const;
const POSITION = ['fixed', 'sticky', 'static', 'relative', 'absolute'] as const;
const MOVE = [
  0,
  '4xs',
  '3xs',
  '2xs',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  '3xl',
  '4xl',
  '5xl',
  '6xl',
  '7xl',
  '8xl',
  '9xl',
  '10xl',
] as const;

const layout = {
  container: { prefix: 'container', values: CONTAINERS, responsive: true },
  display: { prefix: 'display', values: DISPLAY, responsive: true },
  objectFit: { prefix: 'object-fit', values: OBJECT_FITS, responsive: true },
  position: { prefix: 'position', values: POSITION, responsive: true },
  top: { prefix: 'top', values: MOVE, responsive: true },
  right: { prefix: 'right', values: MOVE, responsive: true },
  left: { prefix: 'left', values: MOVE, responsive: true },
  bottom: { prefix: 'bottom', values: MOVE, responsive: true },
  opacity: { prefix: 'opacity', values: OPACITY, responsive: true },
  aspectRatio: {
    prefix: 'aspect-ratio',
    values: ASPECT_RATIO,
    responsive: true,
  },
} satisfies VariantMap;

export default layout;
