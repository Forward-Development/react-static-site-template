import { FC, memo } from 'react';
import isEqual from 'lodash.isequal';

export function makePure<PropsType>(Component: FC<PropsType>) {
  if (import.meta.env.DEV) {
    return Component;
  }
  return memo(Component, isEqual);
}
