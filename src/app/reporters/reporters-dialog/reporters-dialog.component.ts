import { Component, Inject } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { ReporterDetails } from 'src/app/interfaces/reporter-details'

@Component({
  selector: 'app-reporters-dialog',
  templateUrl: './reporters-dialog.component.html',
  styleUrls: ['./reporters-dialog.component.scss']
})
export class ReportersDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ReporterDetails) { }

}
