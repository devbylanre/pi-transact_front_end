import { VariantMap } from '../types/variantTypes';

const items = ['start', 'end', 'center', 'baseline', 'stretch'] as const;
const self = ['auto', 'start', 'end', 'center', 'stretch', 'baseline'] as const;
const content = [
  'normal',
  'center',
  'start',
  'end',
  'stretch',
  'baseline',
  'between',
  'around',
  'evenly',
] as const;

const distribution = {
  alignSelf: { prefix: 'self', values: self, responsive: true },
  placeSelf: { prefix: 'place-self', values: self, responsive: true },
  justifySelf: { prefix: 'justify-self', values: self, responsive: true },
  alignContent: { prefix: 'content', values: content, responsive: true },
  placeContent: { prefix: 'place-content', values: content, responsive: true },
  justifyContent: {
    prefix: 'justify-content',
    values: content,
    responsive: true,
  },
  alignItems: { prefix: 'items', values: items, responsive: true },
  placeItems: { prefix: 'place-items', values: items, responsive: true },
  justifyItems: { prefix: 'justify-items', values: items, responsive: true },
} satisfies VariantMap;

export default distribution;
