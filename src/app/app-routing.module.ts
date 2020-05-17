import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgivenessComponent } from 'src/component/forgiveness/forgiveness.component';


const routes: Routes = [
  {
    path: 'forgiveness',
    component: ForgivenessComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
