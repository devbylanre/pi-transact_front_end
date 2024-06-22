import React from 'react';

type AsProps<C extends React.ElementType> = { as?: C };

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProps<C> & P);

export type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>['ref'];

export type PolymorphicComponentProp<
  C extends React.ElementType,
  P = {}
> = React.PropsWithChildren<P & AsProps<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, P>>;

export type PolymorphicComponentPropWithRef<
  C extends React.ElementType,
  P = {}
> = PolymorphicComponentProp<C, P> & { ref?: PolymorphicRef<C> };
