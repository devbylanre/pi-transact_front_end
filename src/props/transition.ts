import { VariantMap } from '../types/variantTypes';

const PROPERTY = [
  'none',
  'all',
  'normal',
  'colors',
  'opacity',
  'shadow',
  'transform',
] as const;
const DURATION = ['min', 'max', 100, 200, 300, 500, 750] as const;
const TIMING = ['linear', 'ease-in', 'ease-out', 'ease-in-out'] as const;

const transition = {
  delay: { prefix: 'delay', values: DURATION },
  duration: { prefix: 'duration', values: DURATION },
  transition: { prefix: 'transition', values: PROPERTY, responsive: true },
  timing: { prefix: 'timing', values: TIMING, responsive: true },
} satisfies VariantMap;

export default transition;
