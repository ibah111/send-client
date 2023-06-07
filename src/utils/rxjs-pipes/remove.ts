import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { from, mergeMap, Observable } from 'rxjs';

export function remove<V, T = {}>(
  request: AxiosInstance,
  url: string,
  config?: AxiosRequestConfig<T>,
) {
  const controller = new AbortController();
  return (source: Observable<T>) =>
    new Observable<AxiosResponse<V>>((destination) => {
      from(source)
        .pipe(
          mergeMap((data) =>
            request.delete<V>(url, {
              ...config,
              signal: controller.signal,
              data: data,
            }),
          ),
        )
        .subscribe(destination);
      return () => {
        controller.abort();
      };
    });
}
