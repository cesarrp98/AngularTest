import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path:'items', component:MainComponent},
  {path:'',redirectTo:'/items',pathMatch:'full'},
  {path:'items/:id',component:DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
