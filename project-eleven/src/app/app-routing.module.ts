import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntryComponent } from './entry/entry.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // {path:'',component:HomeComponent},
  {path:'entry',component:EntryComponent},
  {path:'entry/:id/:name',component:EntryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[HomeComponent,EntryComponent]
