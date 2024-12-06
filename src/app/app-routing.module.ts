import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FunctionalitiesComponent} from "./pages/landing-page/functionalities/functionalities.component";

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
