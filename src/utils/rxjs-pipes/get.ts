import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { asyncScheduler, from, mergeMap, Observable, subscribeOn } from 'rxjs';

export function get<V>(
  request: AxiosInstance,
  config?: AxiosRequestConfig<unknown>,
) {
  return (source: Observable<string>) =>
    new Observable<AxiosResponse<V>>((destination) => {
      const controller = new AbortController();
      from(source)
        .pipe(
          subscribeOn(asyncScheduler),
          mergeMap((url) =>
            request.get(url, {
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
