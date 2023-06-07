import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { from, mergeMap, Observable } from 'rxjs';

export function get<V>(
  request: AxiosInstance,
  config?: AxiosRequestConfig<unknown>,
) {
  return (source: Observable<string>) =>
    new Observable<AxiosResponse<V>>((destination) => {
      const controller = new AbortController();
      from(source)
        .pipe(
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
