import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ReportersComponent } from './reporters.component'

const routes: Routes = [
  {
    path: '',
    component: ReportersComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportersRoutingModule { }
