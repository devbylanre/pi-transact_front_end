import { VariantMap } from '../types/variantType';

const SCALE = [0, 25, 50, 75, 100, 125, 150] as const;
const ROTATE = [0, 1, 2, 3, 6, 12, 45, 90, 120, 180] as const;
const TRANSLATE = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  '3xl',
  '4xl',
  '5xl',
  'min',
  'max',
] as const;
const ORIGIN = [
  'top',
  'left',
  'right',
  'bottom',
  'center',
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right',
] as const;

const transform = {
  scale: { prefix: 'scale', values: SCALE, responsive: true },
  scaleX: { prefix: 'scale-x', values: SCALE, responsive: true },
  scaleY: { prefix: 'scale-y', values: SCALE, responsive: true },
  rotate: { prefix: 'rotate', values: ROTATE, responsive: true },
  origin: { prefix: 'origin', values: ORIGIN, responsive: true },
  translateX: { prefix: 'translate-x', values: TRANSLATE, responsive: true },
  translateY: { prefix: 'translate-y', values: TRANSLATE, responsive: true },
} satisfies VariantMap;

export default transform;
