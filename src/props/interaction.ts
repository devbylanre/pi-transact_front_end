import { VariantMap } from '../types/variantType';

const CURSOR = [
  'wait',
  'auto',
  'default',
  'pointer',
  'progress',
  'not-allowed',
] as const;

const POINTER = ['none', 'auto'] as const;
const RESIZE = ['x', 'y', 'none', 'both'] as const;

const interaction = {
  cursor: { prefix: 'cursor', values: CURSOR, responsive: true },
  pointer: { prefix: 'pointer', values: POINTER, responsive: true },
  resize: { prefix: 'resize', values: RESIZE, responsive: true },
} satisfies VariantMap;

export default interaction;
