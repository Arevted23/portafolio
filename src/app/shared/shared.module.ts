import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './pages/about/about.component';
import { RouterModule } from '@angular/router';
import { ProjectsComponent } from './pages/projects/projects.component';


@NgModule({
  declarations: [NavbarComponent, AboutComponent, ProjectsComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, AboutComponent, ProjectsComponent],
})
export class SharedModule {}
