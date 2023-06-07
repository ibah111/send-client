import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { from, mergeMap, Observable } from 'rxjs';

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
