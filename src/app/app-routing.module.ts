import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewlogComponent } from './viewlog/viewlog.component';

const routes: Routes = [
  {
  path: "index",
    component:IndexComponent
  },
  {
    path:'viewlog',
    component:ViewlogComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
