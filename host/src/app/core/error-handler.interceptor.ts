import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, of } from 'rxjs';
import { ErrorNotifierService } from '../utils/error-notifier.service';
import { inject } from '@angular/core';
import { Location } from '@angular/common';

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  const notifier = inject(ErrorNotifierService);
  return next(req).pipe(
    catchError((err) => {
      notifier.notifyError(err);
      return of();
    })
  );
};
