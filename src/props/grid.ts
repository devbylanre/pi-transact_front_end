import { VariantMap } from '../types/variantTypes';

const template = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'none'] as const;
const startOrEnd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'auto'] as const;
const span = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'full'] as const;

const grid = {
  gridRow: { prefix: 'grid-row', values: template, responsive: true },
  gridColumn: { prefix: 'grid-column', values: template, responsive: true },
  gridRowStart: {
    prefix: 'grid-row-start',
    values: startOrEnd,
    responsive: true,
  },
  gridRowEnd: { prefix: 'grid-row-end', values: startOrEnd, responsive: true },
  gridColumnStart: {
    prefix: 'grid-column-start',
    values: startOrEnd,
    responsive: true,
  },
  gridColumnEnd: {
    prefix: 'grid-column-end',
    values: startOrEnd,
    responsive: true,
  },
  gridRowSpan: { prefix: 'grid-row-span', values: span, responsive: true },
  gridColumnSpan: {
    prefix: 'grid-column-span',
    values: span,
    responsive: true,
  },
} satisfies VariantMap;

export default grid;
