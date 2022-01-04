import { Component, OnInit, ViewChild } from '@angular/core'
import { Worker } from './../interfaces/worker'
import { FlightsService } from './../services/flights.service'
import { MatSidenav } from '@angular/material/sidenav'
import { WorkerFlight } from './../interfaces/worker-flight'

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {

  workers: Worker[] = []
  loading = false
  selectedWorker: Worker[]
  selectedWorkerFlights: WorkerFlight[]

  @ViewChild('sidenav') sidenav: MatSidenav

  constructor(
    private flightsService: FlightsService
  ) { }

  ngOnInit(): void {
    this.getWorkersFromServer()
  }

  getWorkersFromServer() {
    this.loading = true
    this.flightsService.getWorkers().subscribe(
      (workers: Worker[]) => {
        this.loading = false
        this.workers = workers
      },
      (err) => {
        this.loading = false
        this.workers = []
        console.log(err)
      }
    )
  }

  onListSelect(selectedWorker: Worker[]) {
    this.flightsService.getWorkerFlights(selectedWorker[0].id).subscribe(
      (workerFlights: WorkerFlight[]) => {
        this.loading = false
        this.selectedWorkerFlights = workerFlights
      },
      (err) => {
        this.loading = false
        this.selectedWorkerFlights = []
        console.log(err)
      }
    )
  }

  onWorkerClick() {
    this.sidenav.open()
  }

  closeSidenav() {
    this.sidenav.close()
  }

}
