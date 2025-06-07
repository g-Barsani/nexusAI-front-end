import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const excludedUrls = ['/login', '/register'];

  const isExcluded = excludedUrls.some(url => req.url.includes(url));

  if (isExcluded) {
      return next(req); // não adiciona o token
    }

  const token = localStorage.getItem('authToken');
  if (token) {
    const cloned = req.clone({
      setHeaders: {
        Authorization: "Bearer "+ token,
      },
    });
    return next(cloned);
  }
  return next(req);
};
