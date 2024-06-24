import { VariantMap } from '../types/variantType';

const BASIS = [
  '1/12',
  '2/12',
  '3/12',
  '4/12',
  '5/12',
  '6/12',
  '7/12',
  '8/12',
  '9/12',
  '10/12',
  '11/12',
  'max',
] as const;

const WRAP = ['no', 'yes', 'alt'] as const;
const FLEX = ['initial', 'full', 'auto', 'none'] as const;
const DIRECTION = ['row', 'column', 'row-alt', 'column-alt'] as const;

const flex = {
  flex: { prefix: 'flex', values: FLEX, responsive: true },
  wrap: { prefix: 'wrap', values: WRAP, responsive: true },
  basis: { prefix: 'basis', values: BASIS, responsive: true },
  direction: { prefix: 'direction', values: DIRECTION, responsive: true },
} satisfies VariantMap;

export default flex;
