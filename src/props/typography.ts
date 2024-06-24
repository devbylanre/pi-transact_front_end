import { VariantMap } from '../types/variantType';

const SIZES = [10, 12, 13, 14, 17, 19, 21, 25, 32, 40, 48, 56, 64, 80] as const;
const WEIGHTS = [100, 200, 300, 400, 500, 600, 700] as const;
const ALIGNS = ['left', 'right', 'center', 'justify'] as const;
const TRANSFORMS = ['uppercase', 'lowercase', 'capitalize'] as const;
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
  transform: { prefix: 'transform', values: TRANSFORMS, responsive: true },
  verticalAlign: {
    prefix: 'vertical',
    values: VERTICAL,
    responsive: true,
  },
} satisfies VariantMap;

export default typography;
