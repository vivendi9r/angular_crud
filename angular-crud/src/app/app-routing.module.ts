import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CarListComponent } from './car/components/car-list/car-list.component';
import { CarDetailComponent } from './car/components/car-detail/car-detail.component';


const routes: Routes  = [
  {path: '', component: CarListComponent},
  {path: ':id', component: CarDetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
