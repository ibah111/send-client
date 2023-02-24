import React from 'react';
import { isObservable, Observable } from 'rxjs';

export default function asyncMemo<T>(
  effect: () => T | Promise<T>,
  deps: React.DependencyList,
): T | undefined {
  const [data, setData] = React.useState<T>();
  React.useEffect(() => {
    Promise.resolve(effect()).then(setData);
  }, deps);
  return data;
}
export function observableMemo<T>(
  effect: () => T | Observable<T>,
  deps: React.DependencyList,
): T | undefined {
  const [data, setData] = React.useState<T>();
  React.useEffect(() => {
    const observable = effect();
    if (isObservable(observable)) {
      observable.subscribe(setData);
    } else {
      setData(observable);
    }
  }, deps);
  return data;
}
