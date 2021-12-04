import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment'
import { Observable } from 'rxjs'
import { Reporter } from './../interfaces/reporter'

@Injectable({
  providedIn: 'root'
})
export class ReportersService {

  reporters = environment.reporters

  constructor(private http: HttpClient) { }

  getReporters(): Observable<Reporter[]> {
    return this.http.get<Reporter[]>(this.reporters)
  }
}
