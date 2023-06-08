import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { asyncScheduler, from, mergeMap, Observable, observeOn } from 'rxjs';

export function post<V, T = {} | undefined>(
  request: AxiosInstance,
  url: string,
  config?: AxiosRequestConfig<T>,
) {
  return (source: Observable<T>) =>
    new Observable<AxiosResponse<V>>((destination) => {
      const controller = new AbortController();
      from(source)
        .pipe(
          observeOn(asyncScheduler),
          mergeMap((value) =>
            request.post<V>(url, value, {
              ...config,
              signal: controller.signal,
            }),
          ),
        )
        .subscribe(destination);
      return () => {
        controller.abort();
      };
    });
}
