import { NgModule } from '@angular/core'
import { TranslocoModule } from '@ngneat/transloco'
import { TranslocoRootModule } from './transloco-root.module'
import { FlexLayoutModule } from '@angular/flex-layout'
import { Ng2SearchPipeModule } from 'ng2-search-filter'
import { FormsModule } from '@angular/forms'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatTabsModule } from '@angular/material/tabs'
import { MatInputModule } from '@angular/material/input'
import { MatTableModule } from '@angular/material/table'
import { MatDialogModule } from '@angular/material/dialog'
import { MatMenuModule } from '@angular/material/menu'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatListModule } from '@angular/material/list'
import { MatSidenavModule } from '@angular/material/sidenav'
import { ClipboardModule } from '@angular/cdk/clipboard'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
// import { MatBottomSheetModule } from '@angular/material/bottom-sheet'
// import { MatDividerModule } from '@angular/material/divider'

@NgModule({
  exports: [
    FlexLayoutModule,
    TranslocoModule,
    TranslocoRootModule,
    FormsModule,
    Ng2SearchPipeModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    MatMenuModule,
    MatExpansionModule,
    MatListModule,
    MatSidenavModule,
    ClipboardModule,
    MatSlideToggleModule
    // MatBottomSheetModule,
    // MatDividerModule
  ]
})
export class AngularMaterialModule { }
