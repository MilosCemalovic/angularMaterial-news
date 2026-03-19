import { Injectable } from '@angular/core'
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError, timer, Subject } from 'rxjs'
import { catchError, retryWhen, mergeMap, take, delayWhen } from 'rxjs/operators'
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  private mediastackBaseUrl = 'api.mediastack.com'
  private maxRetries = 3

  constructor(private snackBar: MatSnackBar) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.includes(this.mediastackBaseUrl)) {
      return next.handle(request).pipe(
        retryWhen(errors =>
          errors.pipe(
            mergeMap((error, index) => {
              const retryIndex = index + 1
              if (retryIndex > this.maxRetries) {
                return throwError(() => error)
              }
              if (error.status === 429) {
                const delayTime = Math.pow(2, retryIndex) * 1000
                console.log(`Retrying after 429 error. Attempt ${retryIndex}/${this.maxRetries}. Waiting ${delayTime}ms`)
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
