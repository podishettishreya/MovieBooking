import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './components/films/films.component';
import { DetailsComponent } from './details/details.component';
import { CardComponent } from './card/card.component';


const routes: Routes = [
  {path:'', component:FilmsComponent},
  {path:'card/:id', component:CardComponent},
  {path:'details',component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[]
