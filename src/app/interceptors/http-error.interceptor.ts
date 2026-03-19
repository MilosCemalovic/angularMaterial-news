import { Injectable } from '@angular/core'
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError, timer } from 'rxjs'
import { retry, catchError, switchMap } from 'rxjs/operators'
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  private mediastackBaseUrl = 'api.mediastack.com'

  constructor(private snackBar: MatSnackBar) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.includes(this.mediastackBaseUrl)) {
      return next.handle(request).pipe(
        retry({
          count: 3,
          delay: (error, retryCount) => {
            if (error.status === 429) {
              const delay = Math.pow(2, retryCount) * 1000
              return timer(delay)
            }
            return timer(1000)
          }
        }),
        catchError((error: HttpErrorResponse) => {
          let errorMessage = ''

          if (error.status === 429) {
            errorMessage = 'Too many requests. Please wait a moment and try again.'
          } else if (error.status === 0) {
            errorMessage = 'Network error. Please check your internet connection.'
          } else {
            errorMessage = `Error: ${error.message}`
          }

          this.snackBar.open(errorMessage, 'Close', {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          })

          return throwError(() => error)
        })
      )
    }

    return next.handle(request)
  }
}
