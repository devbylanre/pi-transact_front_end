import { VariantMap } from '../types/variantTypes';

const SIZES = [
  10,
  12,
  13,
  14,
  16,
  17,
  19,
  21,
  25,
  32,
  40,
  48,
  56,
  64,
  72,
  80,
  96,
  'inherit',
] as const;
const WEIGHTS = [100, 200, 300, 400, 500, 600, 700] as const;
const ALIGNS = ['left', 'right', 'center', 'justify'] as const;
const TRANSFORMS = ['uppercase', 'lowercase', 'capitalize'] as const;
const DECORATION = [
  'overline',
  'underline',
  'through',
  'auto',
  'none',
  'current',
] as const;
const VERTICAL = [
  'sup',
  'sub',
  'super',
  'middle',
  'bottom',
  'text-top',
  'baseline',
  'text-bottom',
] as const;

const typography = {
  size: { prefix: 'text', values: SIZES, responsive: true },
  weight: { prefix: 'weight', values: WEIGHTS, responsive: true },
  align: { prefix: 'text', values: ALIGNS, responsive: true },
  transform: { prefix: 'text', values: TRANSFORMS, responsive: true },
  decoration: { prefix: 'text', values: DECORATION, responsive: true },
  verticalAlign: {
    prefix: 'vertical',
    values: VERTICAL,
    responsive: true,
  },
} satisfies VariantMap;

export default typography;
