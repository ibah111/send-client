import React from 'react';
import { isObservable, Observable } from 'rxjs';

export default function useAsyncMemo<T>(
  effect: () => T | Promise<T>,
  deps: React.DependencyList,
): T | undefined {
  const [data, setData] = React.useState<T>();
  React.useEffect(() => {
    Promise.resolve(effect()).then(setData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return data;
}
export function useObservableMemo<T>(
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return data;
}
