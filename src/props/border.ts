import { VariantMap } from '../types/variantType';

const WIDTH = [0, 1, 2, 4, 8] as const;
const STYLE = [
  'solid',
  'dashed',
  'dotted',
  'double',
  'none',
  'hidden',
] as const;
const RADIUS = [
  'min',
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
  'max',
] as const;

const border = {
  border: { prefix: 'border', values: WIDTH, responsive: true },
  end: { prefix: 'border-right', values: WIDTH, responsive: true },
  top: { prefix: 'border-top', values: WIDTH, responsive: true },
  start: { prefix: 'border-left', values: WIDTH, responsive: true },
  bottom: { prefix: 'border-bottom', values: WIDTH, responsive: true },
  style: { prefix: 'border', values: STYLE, responsive: true },
  radius: { prefix: 'radius', values: RADIUS, responsive: true },
} satisfies VariantMap;

export default border;
