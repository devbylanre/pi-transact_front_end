export type Breakpoints = 'initial' | 'sm' | 'md' | 'lg' | 'xl';
export type Pseudos = 'active' | 'hover' | 'focus';

type VariantConfig = {
  prefix: string;
  values: readonly (string | number)[];
  responsive?: boolean;
};

export type VariantMap = { [key: string]: VariantConfig };

export type BreakpointsVariantMap<T extends VariantMap> = {
  [key in Breakpoints]?: T[key]['values'][number];
};

export type Variants<T extends VariantMap> = {
  [K in keyof T]?: T[K]['responsive'] extends true
    ? T[K]['values'][number] | { [key in Breakpoints]?: T[K]['values'][number] }
    : T[K]['values'][number];
};

export type PseudosVariantMap<T extends VariantMap> = {
  [key in Pseudos]?: Variants<T>;
};

export type VariantProps<T extends (...args: any) => any> = Parameters<T>[0] & {
  pseudos?: PseudosVariantMap<Parameters<T>[0]>;
};
