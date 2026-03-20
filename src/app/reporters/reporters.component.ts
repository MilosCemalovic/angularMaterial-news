import { Component, OnInit } from '@angular/core'
import { ReportersService } from './../services/reporters.service'
import { Reporter } from './../interfaces/reporter'
import { MatDialog } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { TranslocoService } from '@ngneat/transloco'
import { ReportersDialogComponent } from './reporters-dialog/reporters-dialog.component'

@Component({
  selector: 'app-reporters',
  templateUrl: './reporters.component.html',
  styleUrls: ['./reporters.component.scss']
})
export class ReportersComponent implements OnInit {

  reporters: Reporter[] = []
  loading = false
  displayedColumns = ['id', 'name', 'username', 'website']
  columnsToDisplay = this.displayedColumns.slice()
  headings = ['phone', 'email', 'city', 'streetAddress', 'suite', 'zipCode', 'streetAddressLatitude', 'streetAddressLongitude', 'company', 'companyBusinessServices', 'companyCatchphrase']
  isChecked = true
  reporter: Reporter
  showMobilePreview = false

  toggleMobilePreview () {
    this.showMobilePreview = !this.showMobilePreview
  }

  constructor(
    private reportersService: ReportersService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private transloco: TranslocoService
  ) {}

  ngOnInit (): void {
    this.getReportersFromService()
  }

  getReportersFromService () {
    this.loading = true
    this.reportersService.getReporters().subscribe(
      (reporters: Reporter[]) => {
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

  onClick (reporter: Reporter) {
    this.reporter = reporter

    if (this.isChecked) {
      this.dialog.open(ReportersDialogComponent, {
        width: '40%',
        data: {
          reporter: { ...reporter },
          headings: this.headings
        }
      })
    } else {
      const message = this.transloco.translate('detailsShown')
      const action = this.transloco.translate('close')
      this.snackBar.open(message, action, {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        panelClass: 'snackbar-success',
        politeness: 'assertive'
      })
    }
  }

}
