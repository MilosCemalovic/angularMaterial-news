import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { FlightsComponent } from './flights.component'
import { FlightsDetailsComponent } from './flights-details/flights-details.component'

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: FlightsComponent
      },
      {
        path: ':id',
        component: FlightsDetailsComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightsRoutingModule { }
