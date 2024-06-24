import { VariantMap } from '../types/variantType';

const CONTAINERS = ['xs', 'sm', 'lg', 'xl'] as const;
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
  objectFit: { prefix: 'objectFit', values: OBJECT_FITS, responsive: true },
  position: { prefix: 'position', values: POSITION, responsive: true },
  top: { prefix: 'top', values: MOVE, responsive: true },
  right: { prefix: 'right', values: MOVE, responsive: true },
  left: { prefix: 'left', values: MOVE, responsive: true },
  bottom: { prefix: 'bottom', values: MOVE, responsive: true },
} satisfies VariantMap;

export default layout;
