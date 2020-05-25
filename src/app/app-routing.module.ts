import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LandingComponent } from './landing/landing.component';

export class Route {
  path: string;
  component: any;
  constructor(path, component) {
    this.path = path;
    this.component = component;
  }
}

const routes: Routes = [
  new Route('', LandingComponent),
  new Route('about', AboutComponent)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
