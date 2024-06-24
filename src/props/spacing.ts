import { VariantMap } from '../types/variantType';

const VALUES = [
  'min',
  'max',
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

const spacing = {
  p: { prefix: 'p', values: VALUES, responsive: true },
  pt: { prefix: 'pt', values: VALUES, responsive: true },
  pb: { prefix: 'pb', values: VALUES, responsive: true },
  ps: { prefix: 'ps', values: VALUES, responsive: true },
  pe: { prefix: 'pe', values: VALUES, responsive: true },
  px: { prefix: 'px', values: VALUES, responsive: true },
  py: { prefix: 'py', values: VALUES, responsive: true },
  m: { prefix: 'm', values: VALUES, responsive: true },
  mt: { prefix: 'mt', values: VALUES, responsive: true },
  mb: { prefix: 'mb', values: VALUES, responsive: true },
  ms: { prefix: 'ms', values: VALUES, responsive: true },
  me: { prefix: 'me', values: VALUES, responsive: true },
  mx: { prefix: 'mx', values: VALUES, responsive: true },
  my: { prefix: 'my', values: VALUES, responsive: true },
  spaceX: { prefix: 'space-x', values: VALUES, responsive: true },
  spaceY: { prefix: 'space-y', values: VALUES, responsive: true },
  gap: { prefix: 'gap', values: VALUES, responsive: true },
  gapX: { prefix: 'gap-x', values: VALUES, responsive: true },
  gapY: { prefix: 'gap-y', values: VALUES, responsive: true },
} satisfies VariantMap;

export default spacing;