import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/02-home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {RegisterComponent} from "./components/01-register/register.component";

const routes: Routes = [
  {
    path: '', component: RegisterComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'about', component: AboutComponent
  }
]

export const routing = RouterModule.forRoot(routes);
