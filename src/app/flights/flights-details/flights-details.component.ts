import { Component, EventEmitter, Input, Output } from '@angular/core'
import { WorkerFlight } from 'src/app/interfaces/worker-flight'

@Component({
  selector: 'app-flights-details',
  templateUrl: './flights-details.component.html',
  styleUrls: ['./flights-details.component.scss']
})
export class FlightsDetailsComponent {

  @Input() selectedWorkerFlights: WorkerFlight[]

  @Output() closeEmitter = new EventEmitter<any>()

  headings = ['num', 'from', 'to', 'from_date', 'to_date', 'plane', 'duration', 'from_gate', 'to_gate']

  close() {
    this.closeEmitter.emit()
  }

}
