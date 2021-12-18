import { Component, OnInit } from '@angular/core'
import { ReportersService } from './../services/reporters.service'
import { Reporter } from './../interfaces/reporter'
import { MatDialog } from '@angular/material/dialog'
import { ReportersDialogComponent } from './reporters-dialog/reporters-dialog.component'

@Component({
  selector: 'app-reporters',
  templateUrl: './reporters.component.html',
  styleUrls: ['./reporters.component.scss']
})
export class ReportersComponent implements OnInit {

  reporters: Reporter[] = []
  loading = true
  displayedColumns = ['id', 'name', 'username', 'website']
  columnsToDisplay = this.displayedColumns.slice()
  headings = ['phone', 'email', 'city', 'streetAddress', 'suite', 'zipCode', 'streetAddressLatitude', 'streetAddressLongitude', 'company', 'companyBusinessServices', 'companyCatchphrase']
  isChecked = true
  reporter: Reporter

  constructor(
    private reportersService: ReportersService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getReportersFromService()
  }

  getReportersFromService() {
    this.reportersService.getReporters().subscribe(
      (reporters) => {
        this.loading = false
        this.reporters = reporters
      },
      (err) => {
        this.loading = false
        this.reporters = []
        console.log(err)
      }
    )
  }

  onClick(reporter: Reporter) {

    this.reporter = reporter

    if (this.isChecked) {
      this.dialog.open(ReportersDialogComponent, {
        width: '90%',
        data: {
          reporter: { ...reporter },
          headings: this.headings
        }
      })
    }
  }

}
