import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/pages/home/home.component';
import { AboutComponent } from './shared/pages/about/about.component';
import { ProjectsComponent } from './shared/pages/projects/projects.component';


const routes: Routes = [
  {
    //* Route Home Page
    path: 'home',
    component: HomeComponent
  },
  //* Route About me
  {
    path: 'about',
    component: AboutComponent
  },
  {
    //* Routes Projects
    path:'projects',
    component: ProjectsComponent
  },
  {
    //* Route Default
    path: '**',
    redirectTo: 'home'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
