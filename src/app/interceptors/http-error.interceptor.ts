import { Injectable } from '@angular/core'
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError, timer } from 'rxjs'
import { catchError, retryWhen, mergeMap, take } from 'rxjs/operators'
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  private mediastackBaseUrl = 'api.mediastack.com'
  private maxRetries = 5

  constructor(private snackBar: MatSnackBar) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.includes(this.mediastackBaseUrl)) {
      return next.handle(request).pipe(
        retryWhen(errors =>
          errors.pipe(
            mergeMap((error, index) => {
              const retryCount = index + 1

              if (error.status === 429 && retryCount <= this.maxRetries) {
                if (retryCount === 1) {
                  this.snackBar.open('Rate limited. Retrying...', 'Close', { duration: 2000 })
                }

                const delayTime = retryCount * 2000
                console.log(`Retrying after 429. Attempt ${retryCount}/${this.maxRetries}. Waiting ${delayTime}ms`)
                return timer(delayTime)
              }

              return throwError(() => error)
            }),
            take(this.maxRetries)
          )
        ),
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
