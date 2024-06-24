import { VariantMap } from '../types/variantType';

const VALUES = [
  'min',
  'max',
  'fit',
  'auto',
  'full',
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  12,
  14,
  16,
  18,
  20,
  24,
  32,
  36,
  40,
  48,
  56,
  64,
  72,
  80,
  88,
  96,
];

const sizing = {
  width: { prefix: 'w', values: VALUES, responsive: true },
  height: { prefix: 'h', values: VALUES, responsive: true },
} satisfies VariantMap;

export default sizing;
