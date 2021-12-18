import { WorkerFlight } from './../interfaces/worker-flight';
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Worker } from './../interfaces/worker'

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  workers = environment.flights

  constructor(private http: HttpClient) { }

  getWorkers(): Observable<Worker[]> {
    return this.http.get<Worker[]>(this.workers)
  }

  getWorkerFlights(id: number): Observable<WorkerFlight[]> {
    return this.http.get<WorkerFlight[]>(`${this.workers}${id}`)
  }
}
