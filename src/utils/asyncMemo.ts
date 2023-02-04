import React from 'react';

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
