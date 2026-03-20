import { WorkerFlight } from './../interfaces/worker-flight'
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { Worker } from './../interfaces/worker'

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  private mockWorkers: Worker[] = [
    { id: 1, name: 'John Smith', company: { name: 'Tech Corp', icon: 'computer' } },
    { id: 2, name: 'Sarah Johnson', company: { name: 'Innovate Inc', icon: 'lightbulb' } },
    { id: 3, name: 'Michael Brown', company: { name: 'Global Solutions', icon: 'public' } },
    { id: 4, name: 'Emily Davis', company: { name: 'Creative Agency', icon: 'palette' } },
    { id: 5, name: 'David Wilson', company: { name: 'Future Systems', icon: 'memory' } },
    { id: 6, name: 'Lisa Anderson', company: { name: 'Finance Hub', icon: 'account_balance' } }
  ]

  private mockFlights: { [key: number]: WorkerFlight[] } = {
    1: [
      { num: 'AA123', from: 'New York (JFK)', to: 'Los Angeles (LAX)', from_date: '2026-04-15T08:00:00', to_date: '2026-04-15T11:30:00', plane: 'Boeing 737', duration: 330, from_gate: 12, to_gate: 24 },
      { num: 'UA456', from: 'Los Angeles (LAX)', to: 'San Francisco (SFO)', from_date: '2026-04-15T14:00:00', to_date: '2026-04-15T15:15:00', plane: 'Airbus A320', duration: 75, from_gate: 5, to_gate: 8 },
      { num: 'DL789', from: 'San Francisco (SFO)', to: 'New York (JFK)', from_date: '2026-04-18T10:00:00', to_date: '2026-04-18T18:30:00', plane: 'Boeing 777', duration: 330, from_gate: 15, to_gate: 31 }
    ],
    2: [
      { num: 'BA101', from: 'London (LHR)', to: 'Paris (CDG)', from_date: '2026-04-20T09:00:00', to_date: '2026-04-20T11:30:00', plane: 'Airbus A321', duration: 90, from_gate: 3, to_gate: 7 },
      { num: 'AF202', from: 'Paris (CDG)', to: 'Berlin (BER)', from_date: '2026-04-20T14:00:00', to_date: '2026-04-20T15:30:00', plane: 'Embraer E190', duration: 90, from_gate: 11, to_gate: 14 }
    ],
    3: [
      { num: 'JL301', from: 'Tokyo (NRT)', to: 'Seoul (ICN)', from_date: '2026-05-01T10:00:00', to_date: '2026-05-01T12:30:00', plane: 'Boeing 767', duration: 150, from_gate: 22, to_gate: 18 },
      { num: 'KE402', from: 'Seoul (ICN)', to: 'Singapore (SIN)', from_date: '2026-05-01T15:00:00', to_date: '2026-05-01T20:30:00', plane: 'Airbus A380', duration: 330, from_gate: 9, to_gate: 12 }
    ],
    4: [
      { num: 'QF501', from: 'Sydney (SYD)', to: 'Melbourne (MEL)', from_date: '2026-05-05T06:00:00', to_date: '2026-05-05T07:30:00', plane: 'Boeing 717', duration: 90, from_gate: 4, to_gate: 6 },
      { num: 'VA602', from: 'Melbourne (MEL)', to: 'Brisbane (BNE)', from_date: '2026-05-05T10:00:00', to_date: '2026-05-05T11:15:00', plane: 'Airbus A320', duration: 75, from_gate: 8, to_gate: 3 }
    ],
    5: [
      { num: 'UA801', from: 'Chicago (ORD)', to: 'Miami (MIA)', from_date: '2026-05-10T07:00:00', to_date: '2026-05-10T11:00:00', plane: 'Boeing 737', duration: 180, from_gate: 16, to_gate: 21 },
      { num: 'AA902', from: 'Miami (MIA)', to: 'Dallas (DFW)', from_date: '2026-05-10T13:00:00', to_date: '2026-05-10T15:00:00', plane: 'Airbus A321', duration: 120, from_gate: 11, to_gate: 7 },
      { num: 'SW703', from: 'Dallas (DFW)', to: 'Phoenix (PHX)', from_date: '2026-05-10T17:00:00', to_date: '2026-05-10T18:00:00', plane: 'Boeing 737', duration: 120, from_gate: 14, to_gate: 9 },
      { num: 'AS804', from: 'Phoenix (PHX)', to: 'Seattle (SEA)', from_date: '2026-05-12T08:00:00', to_date: '2026-05-12T10:30:00', plane: 'Airbus A320', duration: 150, from_gate: 5, to_gate: 12 }
    ],
    6: [
      { num: 'LH401', from: 'Frankfurt (FRA)', to: 'New York (JFK)', from_date: '2026-06-01T10:00:00', to_date: '2026-06-01T13:00:00', plane: 'Airbus A340', duration: 480, from_gate: 20, to_gate: 15 },
      { num: 'LH402', from: 'New York (JFK)', to: 'Frankfurt (FRA)', from_date: '2026-06-05T16:00:00', to_date: '2026-06-06T06:00:00', plane: 'Airbus A340', duration: 480, from_gate: 18, to_gate: 22 }
    ]
  }

  constructor(private http: HttpClient) {}

  getWorkers (): Observable<Worker[]> {
    return of(this.mockWorkers)
  }

  getWorkerFlights (id: number): Observable<WorkerFlight[]> {
    return of(this.mockFlights[id] || [])
  }
}
