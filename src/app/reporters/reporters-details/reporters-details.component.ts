import { Component, Input } from '@angular/core'
import { Reporter } from './../../interfaces/reporter'

@Component({
  selector: 'app-reporters-details',
  templateUrl: './reporters-details.component.html',
  styleUrls: ['./reporters-details.component.scss']
})
export class ReportersDetailsComponent {

  @Input() headings: string[]
  @Input() reporter: Reporter
  @Input() loading

}
